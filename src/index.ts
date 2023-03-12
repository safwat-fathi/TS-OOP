// * Note:
// As a rule of thumb, you should be declaring interfaces first. However, when you want to combine or create new types on the fly, then you should use types.

import { Note, Notebook } from "src/SOLID/SingleResponsibility";
import { AdultsTablet, Tablet } from "src/SOLID/LiskovSubstitution";
import { Laptop, PC } from "src/SOLID/InterfaceSegregation";
import { Man, Child } from "src/SOLID/Open-Closed";
import Store from "src/Design-Patterns/creational/Singleton";
// import { Product } from "src/Design-Patterns/creational/Prototype";
import { Whatever } from "src/decorators";
import {
  Computer,
  ComputerWithPrinterDecorator,
} from "src/Design-Patterns/structural/Decorator";
import { Car } from "src/Design-Patterns/behavioral/Observer";
import { BasicPlanProfileConfig } from "src/Design-Patterns/behavioral/Template-method";

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

// const pc = new Computer();
// pc.print();

// const pcWithPrinter = new ComputerWithPrinterDecorator(pc);
// pcWithPrinter.print();

// async function testObservers(): Promise<any> {
//   const car = new Car(200);
//   car.registerCurrentSpeedObserver(checkSpeedLimit);
// }

// function reportCurrentSpeed(newValue: number, oldValue: number) {
//   console.log("Car running at " + newValue + " km/h");
// }

// function checkSpeedLimit(newValue: number, oldValue: number) {
//   const speedLimit = 100;

//   if (newValue < speedLimit && newValue > speedLimit - 30) {
//     console.log("Approaching speed limit");
//   } else if (newValue === speedLimit) {
//     console.log("Running at speed limit");
//   } else if (newValue > speedLimit) {
//     console.log("You have exceeded speed limit");
//   }
// }

// const basicPlanConfig = new BasicPlanProfileConfig();

// basicPlanConfig.start();

// tuple ex.
const tuple: [number, string, string] = [1, "w", "d"];

// abstract class ex.
abstract class BaseApiClient {
  abstract fetch(req: any): Promise<any>;
}

class UsersClient extends BaseApiClient {
  fetch(): Promise<any> {
    return Promise.resolve();
  }
}

const usersClient = new UsersClient();

type A = 2 | 4 | 5;
type B = 3 | 10 | 20;

type C = `${A} & ${B}`;

const num: C = "4 & 10";

type Point2dLabeled = [x: number, y: number];
type Point3dLabeled = [x: number, y: number, z: number];

const labeledTuple: Point2dLabeled = [2, 3];

labeledTuple[0];

type Suit = "Spade" | "Heart" | "Diamond" | "Club";
type Rank =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King"
  | "Ace";

type Deck = `${Rank} of ${Suit}`;

const deck: Deck = "2 of Spade";

// interface Id<T extends string | number> {
//   id: T;
// }

// class Product implements Id<string> {
//   private _id: string;

//   constructor(id: string) {
//     this._id = id;
//   }

//   public get id(): string {
//     return this._id;
//   }

//   public set id(newValue: string) {
//     this._id = newValue;
//   }
// }

// const prod = new Product("ieie3");
// prod.id = "awdawdawd";
// console.log(prod.id);
// import { PremiumWebSiteBuilder } from "./Design-Patterns/creational/Builder";

// const wb = new PremiumWebSiteBuilder();
// wb.setName("looooool").setHost("hahaha").setPort(3344);

// const website = wb.build();

// console.log(website.name);
