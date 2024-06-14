import { ShoppingInterface } from "../interfaces/shopping/ShoppingInterface"

export type CreateShoppingResponse = {
    shopping: ShoppingInterface
    sucess: boolean
    message: string
}