export class Car {
  private _currentSpeed: number = 0;
  private readonly _maxSpeed: number;
  private _currentSpeedObservers: Function[] = [];

  constructor(maxSpeed: number) {
    this._maxSpeed = maxSpeed;
  }

  get maxSpeed(): number {
    return this._maxSpeed;
  }

  get getCurrentSpeed() {
    return this._currentSpeed;
  }

  set setCurrentSpeed(value: number) {
    if (this._currentSpeed < 0) {
      throw new Error("Invalid current speed");
    }

    if (value > this._maxSpeed) {
      throw new Error("Car totaled");
    }

    if (this._currentSpeed !== value) {
      let oldValue = this._currentSpeed;
      this._currentSpeed = value;
      this.triggerCurrentSpeedObserver(value, oldValue);
    }
  }

  registerCurrentSpeedObserver(observer: Function) {
    // check if observer already registered
    if (!this._currentSpeedObservers.find(o => o == observer)) {
      this._currentSpeedObservers.push(observer);
    }
  }

  triggerCurrentSpeedObserver(newValue: number, oldValue: number) {
    this._currentSpeedObservers.forEach(o => o(newValue, oldValue));
  }
}
