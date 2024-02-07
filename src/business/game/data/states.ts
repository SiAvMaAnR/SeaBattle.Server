class States {
  private _isStart = false;
  private _isEnd = false;
  private _isAccess = false;

  constructor() {}

  public get isAccess(): boolean {
    return this._isAccess;
  }

  public setIsAccess(isAccess: boolean) {
    this._isAccess = isAccess;
  }

  public get isStart(): boolean {
    return this._isStart;
  }

  public setIsStart(isStart: boolean) {
    this._isStart = isStart;
  }

  public get isEnd(): boolean {
    return this._isEnd;
  }

  public setIsEnd(isEnd: boolean) {
    this._isEnd = isEnd;
  }
}

export default States;
