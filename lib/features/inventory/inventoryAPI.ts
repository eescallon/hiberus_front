import { SaveProductToInventoryRequest } from "@/src/model/types/SaveProductToInventoryRequest";
import { saveProductToInventoryResponse } from "@/src/model/types/SaveProductToInventoryResponse";

export const saveProductToInventory = async (request: SaveProductToInventoryRequest) => {
  const response = await fetch("http://localhost:8000/inventory/add/product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });
  const result: { data: saveProductToInventoryResponse } = await response.json();

  return result;
};

export const getInventory = async () => {
  const response = await fetch("http://localhost:8000/inventory", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  const result = await response.json();

  return result;
};