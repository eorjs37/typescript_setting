function startAndEnd(originalMethod: any, context: any) {
  function replacementMethod(this: any, ...args: any[]) {
    console.log("start");
    const result = originalMethod.call(this, ...args);
    console.log("end");
    return result;
  }

  return replacementMethod;
}

function startAndEnd2<This, Args extends any[], Return>(
  originalMethod: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >
) {
  function replacementMethod(this: This, ...args: Args): Return {
    console.log("start");
    const result = originalMethod.call(this, ...args);
    console.log("end");
    return result;
  }

  return replacementMethod;
}

function startAndEnd3(start = "start", end = "end") {
  return function RealDecorator<This, Args extends any[], Return>(
    originalMethod: (this: This, ...args: Args) => Return,
    context: ClassAccessorDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >
  ) {
    function replacementMethod(this: This, ...args: Args): Return {
      console.log(context.name, start);
      const result = originalMethod.call(this, ...args);
      console.log(context.name, end);
      return result;
    }

    return replacementMethod;
  };
}

function log<Input extends new (...args: any[]) => any>(
  value: Input,
  context: ClassDecoratorContext
) {
  if (context.kind === "class") {
    return class extends value {
      constructor(...args: any[]) {
        super(args);
      }

      log(msg: string): void {
        console.log(msg);
      }
    };
  }

  return value;
}

function bound(
  originalMethod: unknown,
  context: ClassMethodDecoratorContext<any>
) {
  const methodName = context.name;
  if (context.kind === "method") {
    context.addInitializer(function () {
      this[methodName] = this[methodName].bind(this);
    });
  }
}

class A {
  @startAndEnd
  eat() {
    console.log("Eat");
  }

  @startAndEnd
  work() {
    console.log("start");
    console.log("Work");
    console.log("end");
  }

  @startAndEnd
  sleep() {
    console.log("start");
    console.log("Sleep");
    console.log("end");
  }
}
export {};
