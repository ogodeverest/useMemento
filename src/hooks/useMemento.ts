import { useCallback, useRef, useState } from "react";
import CommandStack, { Command } from "./memento";

class SetCommand<DataType> extends Command<DataType> {
  constructor(private value: DataType) {
    super();
  }
  execute(state: DataType): DataType {
    return this.value;
  }
}

export default function useMemento<DataType>(
  initialState: DataType
): [DataType, (data: DataType) => void, () => void] {
  const commandStack = useRef(new CommandStack(initialState));

  const [state, setState] = useState(commandStack.current.state);

  const set = useCallback(
    (data: DataType) =>
      setState(commandStack.current.execute(new SetCommand(data))),
    []
  );

  const undo = useCallback(() => setState(commandStack.current.undo()), []);

  return [state, set, undo];
}
