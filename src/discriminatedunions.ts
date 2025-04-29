interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}

type TypeSquare = {
  kind: string;
  size: number;
};
type TypeRectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};
type TypeCircle = {
  kind: "circle";
  radius: number;
};

// 유니온
type Shape = Square | Rectangle | Circle;
type TypeShape = TypeSquare | TypeRectangle | TypeCircle;

function area(s: Shape) {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
  }
}
export {};
