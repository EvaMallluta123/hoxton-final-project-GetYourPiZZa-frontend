export type Pizza = {
  id: number,
  title: string,
  prices: number,
  description: string,
  image: string,
  type: string,
  varients: Varients[],
};
export type Varients = {
  id: number,
  varients: string,
  pizza: string,
};
