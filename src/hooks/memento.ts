export abstract class Command<State> {
  abstract execute(state: State): State;
}

export default class CommandStack<State> {
  private stack: string[] = [];
  constructor(private _state: State) {
    this.stack.push(JSON.stringify(this._state));
  }

  get state(): State {
    return JSON.parse(this.stack[this.stack.length - 1]) as State;
  }

  public execute(command: Command<State>): State {
    const stringState = JSON.stringify(command.execute(this.state));
    this.stack.push(stringState);
    return this.state;
  }

  public undo(): State {
    if (this.stack.length > 1) {
      this.stack.pop();
    }
    return this.state;
  }
}
