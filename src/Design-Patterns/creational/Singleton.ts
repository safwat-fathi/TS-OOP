export default class Store {
  private static _instance: Store | null = null;

  private _appState: Record<string, any>;

  private constructor() {
    this._appState = {} as const;
  }

  public static get instance() {
    if (this._instance === null) this._instance = new Store();

    return this._instance;
  }

  public set state(newState: any) {
    this._appState = newState;
  }

  public get state() {
    return this._appState;
  }
}
