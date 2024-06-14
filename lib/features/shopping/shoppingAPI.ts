import { AddShoppingProductToCartRequest } from "@/src/model/types/AddShoppingProductToCartRequest";
import { AddShoppingProductToCartResponse } from "@/src/model/types/AddShoppingProductToCartResponse";
import { CreateShoppingRequest } from "@/src/model/types/CreateShoppingRequest";
import { CreateShoppingResponse } from "@/src/model/types/CreateShoppingResponse";
import { GetCartProductsResponse } from "@/src/model/types/GetCartProductsResponse";

export const addShoppingProductToCartAsync = async (request: AddShoppingProductToCartRequest) => {
  const response = await fetch("http://localhost:8000/shopping/add/product/"+request.idShopping, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  const result: AddShoppingProductToCartResponse = await response.json();

  return result;
};

export const createShoppingAsync = async () => {
  const response = await fetch("http://localhost:8000/shopping", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(request),
  });
  const result: CreateShoppingResponse = await response.json();

  return result;
};

export const getCartProductsAsync = async (id: number) => {
  const response = await fetch("http://localhost:8000/shopping/"+id, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(request),
  });
  const result: GetCartProductsResponse = await response.json();

  return result;
};