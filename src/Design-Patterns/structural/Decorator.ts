export class Computer {
  boot(): void {
    console.log("Computer is booting");
  }

  shutDown(): void {
    console.log("Computer is shutting down");
  }

  display(): void {
    console.log("Display content in one screen");
  }

  print(): void {
    console.log("No printer found");
  }

  renderVideo(): void {
    console.log("Cannot render a video without a dedicated GPU");
  }
}

export class ComputerComponentDecorator extends Computer {
  constructor(private _computer: Computer) {
    super();
  }

  override boot(): void {
    return this._computer.boot();
  }

  override shutDown(): void {
    return this._computer.shutDown();
  }

  override display(): void {
    return this._computer.display();
  }

  override print(): void {
    return this._computer.print();
  }

  override renderVideo(): void {
    return this._computer.renderVideo();
  }
}

export class ServerComputer extends Computer {
  override boot() {
    console.log("Booting server...");
  }

  override shutDown(): void {
    console.log("server is shutting down");
  }
}

export class ComputerWithPrinterDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  override print(): void {
    console.log("Printing...");
  }
}

export class ComputerWithDedicatedGpuDecorator extends ComputerComponentDecorator {
  constructor(computer: Computer) {
    super(computer);
  }

  override renderVideo(): void {
    console.log("Rendering...");
  }
}
