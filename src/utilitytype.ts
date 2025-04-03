interface Address {
  email: string;
  address: string;
}

// 특정 타입의 부분집합
type MyEmail = Partial<Address>;

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function updateProductItem(productitem: Partial<Product>) {
  //
}

updateProductItem({ id: 1 });
type P = {
  key: keyof Product;
};
const pp: P = {
  key: "brand",
};

// keyof란?

// typeof란
export {};
