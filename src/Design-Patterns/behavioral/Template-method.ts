export class ProfileConfig {
  async start() {
    await this.accountSecurity();
    await this.emailIntegration();
    await this.paymentMethod();
    await this.supportMethod();
  }

  async accountSecurity(): Promise<any> {
    throw new Error("Method not implemented");
  }

  async emailIntegration(): Promise<any> {
    throw new Error("Method not implemented");
  }

  async supportMethod(): Promise<any> {
    throw new Error("Method not implemented");
  }

  async paymentMethod(): Promise<any> {
    throw new Error("Method not implemented	");
  }
}

export class BasicPlanProfileConfig extends ProfileConfig {
  override async accountSecurity(): Promise<any> {
    console.log("Enter security options");
  }

  override async emailIntegration(): Promise<any> {
    console.log("Enter email setup");
  }

  override async paymentMethod(): Promise<any> {
    console.log("Enter payment method options");
  }

  override async supportMethod(): Promise<any> {
    console.log("Enter custom contact us page");
  }
}
