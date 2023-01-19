export default class Store {
  private static _instance: Store | null = null;

  private _state: Record<string, any>;

  private constructor() {
    this._state = {} as const;
  }

  public static getInstance() {
    if (this._instance === null) this._instance = new Store();

    return this._instance;
  }

  public set state(newState: any) {
    this._state = newState;
  }

  public get state() {
    return this._state;
  }
}
