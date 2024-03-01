export interface Product {
  Description: string
  ImageURL: string
  Price: number
  ProductID: number
  ProductName: string
  created_at: Date
  units: number
}


export interface CartItemInterface{
  CartID: number
  ProductID: number
  Quantity: number
  ProductName: string
  Description: string
  Price: number
  imageURL:string
}

export interface cartAdd{
  ProductID:number
  Quantity:number
}

export interface CartItemProps extends CartItemInterface {
  updateCart: (CartID:number,Quantity:number) => void
  deleteCart: (CartID:number) => void
}


export  interface LoginResponse {
  status: number
  accessToken: string
}

export interface LoginForm{
  username:string
  password:string
}
