export interface SubscriptionState {
  pay(amount: number): void;
  checkExpiration(): void;
  report(): string;
}

export class Subscription {
  state: SubscriptionState = new TrialState(this);
}

export class TrialState implements SubscriptionState {
  daysRemaining: number = 14;

  constructor(private _subscription: Subscription) {}

  pay() {}
  checkExpiration(): void {}
  report(): string {
    return "";
  }
}
