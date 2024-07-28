import UseProduct from "./UseProduct";

import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { isPending, data, error, isError } = UseProduct();
  if (isPending) {
    return <h1>loding...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <div className="grid grid-cols-3 gap-4 bg-yellow-400">
      {data.map((product) => {
        return (
          <>
            <div className="bg-yellow-500 h-[250px]">
              <div key={product.id}>
                <img className="h-[100px]" src={product.image}></img>
                <h3 className="pr-20">{product.title}</h3>
                <p className="pr-90">{product.price}</p>
              </div>
            </div>
            ;
          </>
        );
      })}
    </div>
  );
}

export default App;
