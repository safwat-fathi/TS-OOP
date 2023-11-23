export interface Prototype {
  clone: () => Prototype;
}

export class Product implements Prototype {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  public clone() {
    return new Product(this._name, this._price);
  }

  public get values() {
    return {
      name: this._name,
      price: this._price,
    };
  }
}

/* override method */
// class One {
//   index() {
//     console.log("None");
//   }
// }

// class Two extends One {
//   override index() {
//     console.log("Two none");
//   }
// }

// new One().index();
// new Two().index();
