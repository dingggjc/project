export interface BeverageItem {
  id: string;
  name: string;
  price: number;
  cases: number;
  total: number;
}

export interface OrderHeader {
  title: string;
  quantity: string;
}