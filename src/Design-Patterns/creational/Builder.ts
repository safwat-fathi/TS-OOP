interface WebsiteBuilder {
  setName(name: string): WebsiteBuilder;
  setHost(host: string): WebsiteBuilder;
  setPort(port: number): WebsiteBuilder;
  setIsPremium(isPremium: boolean): WebsiteBuilder;
  build(): Website;
}

class Website {
  constructor(
    public name?: string,
    public host?: string,
    public port?: number,
    public isPremium?: boolean
  ) {}
}

export class PremiumWebSiteBuilder implements WebsiteBuilder {
  private _website!: Website;

  constructor() {
    this.clear();
  }

  setName(name: string): WebsiteBuilder {
    this._website.name = name;
    return this;
  }

  setHost(host: string): WebsiteBuilder {
    this._website.host = host;
    return this;
  }

  setPort(port: number): WebsiteBuilder {
    this._website.port = port;
    return this;
  }

  setIsPremium(): WebsiteBuilder {
    this._website.isPremium = true;
    return this;
  }

  build(): Website {
    const website = this._website;
    this.clear();
    return website;
  }

  clear(): void {
    this._website = new Website();
    this._website.isPremium = true;
  }
}
