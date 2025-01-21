function destructuring({ prop: { nested } }: { prop: { nested: string } }) {}
destructuring({
  prop: {
    nested: "hi",
  },
});
export {};
