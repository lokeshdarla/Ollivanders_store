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
