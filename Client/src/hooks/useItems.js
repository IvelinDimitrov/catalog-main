import { useEffect, useState } from "react";
import catalogApi from "../api/catalog-api";
import itemApi from "../api/catalog-api";
export function useGetAllItems() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    catalogApi.getAll().then((result) => setItems(result));
  }, []);
  return [items, setItems];
}

export function useGetOneItem(itemId) {
  const [items, setItem] = useState({});
  useEffect(() => {
    (async () => {
      const result = await itemApi.getOne(itemId);
      setItem(result);
    })();
  }, [itemId]);
  return [items, setItem];
}
export function useCreateItem() {
  const itemCreateHandler = (itemData) => itemApi.createItem(itemData);

  return itemCreateHandler;
}

