// Ex. 1
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

// Ex. 2
interface Weapon {
  getName(): string;
  getDamage(): number;
  getRange(): number;
}

class LongSword implements Weapon {
  getName(): string {
    return "LongSword";
  }

  getDamage(): number {
    return 10;
  }

  getRange(): number {
    return 2;
  }
}

class LongBow implements Weapon {
  getName(): string {
    return "LongBow";
  }
  getDamage(): number {
    return 8;
  }
  getRange(): number {
    return 16;
  }
}

interface WeaponFactory {
  create(): Weapon;
}

class LongSwordFactory implements WeaponFactory {
  create(): Weapon {
    return new LongSword();
  }
}

class LongBowFactory implements WeaponFactory {
  create(): Weapon {
    return new LongBow();
  }
}
