import { Note, Notebook } from "./SOLID/SingleResponsibility";
import { AdultsTablet, Tablet } from "./SOLID/LiskovSubstitution";
import { Laptop, PC } from "./SOLID/InterfaceSegregation";

const samsungTablet = new Tablet();
const samsungAdultsTablet = new AdultsTablet();

samsungTablet.readBook();
samsungAdultsTablet.openBrowser();

const dell = new PC();

dell.useNFC();
