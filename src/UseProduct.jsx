import { useQuery } from "@tanstack/react-query";

function UseProduct() {
  const fetchproduct = async () => {
    const products = await fetch("https://fakestoreapi.com/products");
    const data = await products.json();
    return data;
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchproduct,
  });
  return {
    data,
    isPending,
    isError,
    error,
  };
}
export default UseProduct;
