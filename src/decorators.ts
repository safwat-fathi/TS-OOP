// * DECORATORS IN TYPESCRIPT
function disable(
  target: {},
  methodName: string,
  descriptor: PropertyDescriptor
) {
  descriptor.value = () => {
    throw new Error("Method is disabled");
  };
}

export class Whatever {
  foo() {
    console.log("foo");
  }

  @disable
  bar() {
    console.log("bar");
  }
}
