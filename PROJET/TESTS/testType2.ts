interface IFooBar {
  foo: string;
  bar: string;
}

class FooBar implements IFooBar {
  foo: string;
  bar: string;
  constructor(arg1, arg2) {
    this.foo = arg1;
    this.bar = arg2;
  }
}
