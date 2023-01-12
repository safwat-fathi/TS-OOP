// * Before following Liskov Substitution (LSP)
// export class Tablet {
//   public readBook(): void {
//     console.log("Enjoy reading!");
//   }

//   public openBrowser(): void {
//     console.log("Start searching ...");
//   }
// }

// export class KidsTablet extends Tablet {
//   public override openBrowser(): void {
//     console.log("Kids haven't access to the browser!");
//   }
// }

// * After following Liskov Substitution (LSP)
export class Tablet {
  public readBook(): void {
    console.log("Enjoy reading!");
  }
}

export class AdultsTablet extends Tablet {
  public openBrowser(): void {
    console.log("Start searching ...");
  }
}
