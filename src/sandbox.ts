type A = 2 | 4 | 5;
type B = 3 | 10 | 20;

type C = `${A} & ${B}`;

const num: C = "4 & 10";

type Point2dLabeled = [x: number, y: number];
type Point3dLabeled = [x: number, y: number, z: number];

const labeledTuple: Point2dLabeled = [2, 3];

labeledTuple[0];

// * Template Literal Types
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

interface Id<T extends string | number> {
  id: T;
}
class Product implements Id<string> {
  private _id: string;

  constructor(id: string) {
    this._id = id;
  }

  public get id(): string {
    return this._id;
  }

  public set id(newValue: string) {
    this._id = newValue;
  }
}

const prod = new Product("ieie3");
prod.id = "test";

console.log(prod.id);

// * Custom ENUMS
export const weights = {
  heavy: 900,
  light: 200,
} as const;

export type Weights = typeof weights;

export type WeightKey = keyof Weights;

export type WeightValue = Weights[WeightKey];
