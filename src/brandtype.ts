type Brand<T, B> = T & { __brand: B };
type KM = Brand<number, "km">;
type Mile = Brand<number, "mile">;

function kmToMile(km: KM) {
  return (km * 0.62) as Mile;
}

const km = 3 as KM;
const mile = kmToMile(km);
const mile2 = 5 as Mile;
export {};
