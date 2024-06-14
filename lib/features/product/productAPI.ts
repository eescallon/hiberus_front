import { SaveProductResponse } from '@/src/model/types/SaveProductResponse';
import { SaveProductRequest } from '@/src/model/types/SaveProductRequest';
export const saveProduct = async (request: SaveProductRequest) => {
  const response = await fetch("http://localhost:8000/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  const result: { data: SaveProductResponse } = await response.json();

  return result;
};

export const getAllProducts = async () => {
  const response = await fetch("http://localhost:8000/product", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const result = await response.json();

  return result;
};