interface PaymentService {
  payMoney: (amount: number) => void;
}

abstract class PaymentServiceFactory {
  public abstract createPaymentService(): PaymentService;

  public pay(amount: number): void {
    const paymentService = this.createPaymentService();

    paymentService.payMoney(amount);
  }
}
