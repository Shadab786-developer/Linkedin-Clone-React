import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [showProduct, setShowProduct] = useState(true);
  const [discription, setDiscription] = useState("");
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const totalAmount = products.reduce(
      (sum, product) => sum + Number(product.amount),
      0
    );
    setTotalAmount(totalAmount);
    setDiscription("");
    setAmount("");
  }, [products]);

  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("products"));
    if (product && product.length > 0) {
      setProducts(product);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleDeleteProduct = (index) => {
    const newProduct = products.filter((_, i) => i !== index);
    setProducts(newProduct);
    setDiscription("");
    setAmount("");
  };

  const handleCartProduct = (e) => {
    e.preventDefault();
    if (discription && amount) {
      const newProduct = {
        id: Date.now(),
        name: discription,
        amount: amount,
      };

      setProducts([...products, newProduct]);
      setDiscription("");
      setAmount("");
      console.log(products);
    }
  };

  return (
    <div
      id="container"
      className="bg-slate-700 rounded-md  w-full h-full text-center flex-nowrap"
    >
      <h1 className="text-[35px] font-bold mt-3 text-left ml-5">Products</h1>

      <form
        className="flex  justify-between items-center"
        onSubmit={handleCartProduct}
      >
        <input
          type="text"
          required
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
          placeholder="Enter product name"
          className="bg-gray-800 text-white p-3  ml-6 rounded-md text-[20px]"
        />
        <input
          type="number"
          required
          value={amount}
          className="bg-gray-800 text-white p-3 mr-2 ml-1 rounded-md text-[20px]"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter your range "
        />

        <button
          type="submit"
          className="bg-purple-600 text-whitepx-12 py-4 rounded-md px-10 mr-5"
        >
          Add to Cart
        </button>
      </form>

      <h2
        id="cart-heading"
        className="text-[35px] font-bold text-left ml-5 mr-12"
      >
        Shopping Cart
      </h2>
      <ul className="w-full h-full flex justify-center items-center flex-col">
        {showProduct
          ? products.map((product, index) => (
              <li
                key={index}
                className="bg-gray-900 px-5 py-3 rounded-md mt-3 w-[95%] text-[20px]"
              >
                {product.name} - ${Number(product.amount).toFixed(2)}
                <button
                  data-id={product.id}
                  id="remove-btn"
                  className="border-[5px] border-red-600 px-8 py-2 rounded-md mr-[0%] ml-[50%] mb-2"
                  onClick={() => {
                    handleDeleteProduct(index);
                  }}
                >
                  ❌
                </button>
              </li>
            ))
          : // <p id="update-text" className="text-left ml-5">
            //   Your cart is empty
            // </p>
            setShowProduct(false)}
      </ul>

      <div id="cart-total" className="text-right m-5 ">
        <p>
          Total: <span id="total-price">${Number(totalAmount).toFixed(2)}</span>
        </p>
        <button
          id="checkout-btn"
          className="bg-purple-600 text-white p-2 mb-4 rounded-sm mt-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default App;
