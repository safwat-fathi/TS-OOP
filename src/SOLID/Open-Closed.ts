export class ErrorHandler {
  private messageBox: any;

  constructor(messageBox: any, httpClient: any) {
    this.messageBox = messageBox;
  }

  wrapError(err: any, publicResponse: any, severity: any) {
    let error = {
      originalError: err,
      publicResponse,
      severity,
    };
    if (severity < 5) {
      this.handleWarning("Warning", publicResponse);
    } else {
      this.handleError("Critical Error", publicResponse);
    }
  }

  private handleWarning(header: any, content: any) {
    this.messageBox.show(header, content);
  }

  private handleError(header: any, content: any) {
    this.messageBox.show(header, content);
  }
}

export class ErrorLogger {
  private _endpoint: string = "api/log";

  constructor(private _httpClient: any) {}

  logError(errorObject: any): Promise<any> {
    return this._httpClient.post(this._endpoint, errorObject);
  }
}

export class ErrorHandlerWithLogging extends ErrorHandler {
  private _logger: ErrorLogger;

  constructor(messageBox: any, httpClient: any, logger: ErrorLogger) {
    super(messageBox, httpClient);
    this._logger = logger;
  }

  override wrapError(err: any, publicResponse: any, severity: any) {
    return this._logger.logError(err).then(() => {
      super.wrapError(err, publicResponse, severity);
    });
  }
}

// * what is super method?
// it calls parent's class constructor
export class Man {
  private _firstName: string;
  public lastName: string;
  public age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this._firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

export class Child extends Man {
  private _motherName: string;

  constructor(
    motherName: string,
    fatherName: string,
    name: string,
    age: number
  ) {
    super(fatherName, name, age);
    this._motherName = motherName;
  }
}
