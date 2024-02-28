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
  id: number
  ProductName: string
  description: string
  Price: number
  quantity: number
  imageURL: string
}
