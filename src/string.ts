type RemoveX<Str> = Str extends `x${infer Rest}`
  ? RemoveX<Rest>
  : Str extends `${infer Rest}x`
  ? RemoveX<Rest>
  : Str;

type Removed = RemoveX<"xxtestxx">;
export {};
