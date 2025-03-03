type ElementType<T> = T extends (infer ArrayElement)[] ? ArrayElement : T;

type R1 = ElementType<string[]>;
type R2 = ElementType<number[]>;
type R3 = ElementType<boolean>;
export {};
