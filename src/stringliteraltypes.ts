type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    //
  }
}
const btn = new UIElement();
btn.animate(0, 0, "ease-in");
// btn.animate(0, 0, "uneasy")

export {};
