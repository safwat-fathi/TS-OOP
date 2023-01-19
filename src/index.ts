import { Note, Notebook } from "./SOLID/SingleResponsibility";
import { AdultsTablet, Tablet } from "./SOLID/LiskovSubstitution";
import { Laptop, PC } from "./SOLID/InterfaceSegregation";
import { Man, Child } from "./SOLID/Open-Closed";
import Store from "./Design-Patterns/creational/Singleton";

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

const storeOne = Store.getInstance();
const storeTwo = Store.getInstance();

console.log(storeOne === storeTwo);

// storeOne.setState({ name: [1, 2, 3, 4, 5] });
// storeTwo.setState({ person: { name: "ali", age: 44 } });

// console.log(storeOne.state({ name: [1, 2, 3, 4, 5] }));
storeTwo.state = { name: [1, 2, 3, 4, 5] };
console.log(storeOne.state);
