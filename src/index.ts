import { Note, Notebook } from "./SOLID/SingleResponsibility";
import { AdultsTablet, Tablet } from "./SOLID/LiskovSubstitution";
import { Laptop, PC } from "./SOLID/InterfaceSegregation";
import { Man, Child } from "./SOLID/Open-Closed";
import Store from "./Design-Patterns/creational/Singleton";
import { Product } from "./Design-Patterns/creational/Prototype";
import { Whatever } from "./decorators";
import {
  Computer,
  ComputerWithPrinterDecorator,
} from "./Design-Patterns/structural/Decorator";

// const whatever = new Whatever();

// whatever.foo();
// whatever.bar();

// const samsungTablet = new Tablet();
// const samsungAdultsTablet = new AdultsTablet();

// samsungTablet.readBook();
// samsungAdultsTablet.openBrowser();

// const dellPC = new PC();
// const dellLaptop = new Laptop();

// dellPC.useNFC();
// dellLaptop.useLAN();

// const father = new Man("Ali", "Kamel", 34);
// console.log(father.age);

// const son = new Child("Karla", "Ali", "Omar", 3);
// console.log(son.age);

// const storeOne = Store.getInstance();
// const storeTwo = Store.getInstance();

// console.log(storeOne === storeTwo);

// storeOne.setState({ name: [1, 2, 3, 4, 5] });
// storeTwo.setState({ person: { name: "ali", age: 44 } });

// console.log(storeOne.state({ name: [1, 2, 3, 4, 5] }));
// storeTwo.state = { name: [1, 2, 3, 4, 5] };
// console.log(storeOne.state);

// const productOne = new Product("Nokia", 330);
// const productTwo = productOne.clone();

// console.log(productTwo === productOne);

// console.log(productOne.values);
// console.log(productTwo.values);

// class State {
//   private _state: { [key: string]: any };

//   constructor() {
//     this._state = {} as const;
//   }

//   public get state() {
//     return this._state;
//   }

//   public set state(newState: any) {
//     this._state = newState;
//   }
// }

// const appOneState = new State();
// const appTwoState = new State();

// appOneState.state = { ni: 222 };
// console.log(appOneState.state);
// appOneState.state = { ...appOneState.state, we: 444 };
// appTwoState.state = { hehe: "dddddd" };

// console.log(appOneState.state);
// console.log(appTwoState.state);

const pc = new Computer();
pc.print();

const pcWithPrinter = new ComputerWithPrinterDecorator(pc);
pcWithPrinter.print();
