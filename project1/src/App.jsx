import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  // const inputOne = useRef(null);
  // const inputTwo = useRef(null);
  const liElement = useRef(null);
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [showExpenses, setShowExpenses] = useState(true);

  useEffect(() => {
    const totalAmount = expenses.reduce(
      (sum, expense) => sum + Number(expense.amount),
      0
    );
    setTotalAmount(totalAmount);
    setDescription("");
    setAmount("");
  }, [expenses]);
  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));
    if (expenses && expenses.length > 0) {
      setExpenses(expenses);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleDelete = (index) => {
    const newExpense = expenses.filter((_, i) => i !== index);
    setExpenses(newExpense);
    setDescription("");
    setAmount("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const name = inputOne.value.trim();
    // const amount = parseFloat(inputTwo.value.trim());

    if (description && amount) {
      const newExpense = {
        id: Date.now(),
        name: description,
        amount: amount,
      };

      setExpenses([...expenses, newExpense]);
      setDescription(" ");
      setAmount(" ");
      console.log("Current expenses:", expenses);
    }
  };

  return (
    <>
      <div
        id="container"
        className="bg-slate-700 rounded-md  w-fit h-fit text-center flex-nowrap"
      >
        <h1 className="text-[50px] font-bold mt-3 text-center ml-5">
          Expense Tracker
        </h1>

        <form className="flex mt-6 mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            value={description}
            // ref={inputOne}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Expense name"
            required
            className="bg-gray-800 text-white p-5  ml-6 rounded-md text-[30px]"
          />

          <input
            type="number"
            // ref={inputTwo}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
            className="bg-gray-800 text-white p-5 mr-8 ml-1 rounded-md text-[30px]"
          />

          <button
            type="submit"
            className="bg-purple-600 text-white p-5 rounded-sm mr-6 text-[30px]"
          >
            Add Expense
          </button>
        </form>

        <h2 className="text-[40px] font-bold text-center ml-5 mr-12">
          Expenses
        </h2>
        <ul className="w-full h-full flex justify-between items-center flex-col">
          {showExpenses
            ? expenses.map((expense, index) => (
                <li
                  ref={liElement}
                  key={index}
                  className="p-5 my-2 rounded-lg cursor-pointer bg-slate-950 w-[95%] text-[40px] font-serif "
                >
                  {expense.name} - ${expense.amount}
                  <button
                    data-id={expense.id}
                    className="border-[5px] border-red-600 py-2 px-12 rounded-lg mr-[0%] ml-[50%] "
                    onClick={() => handleDelete(index)}
                  >
                    ❌
                  </button>
                </li>
              ))
            : setShowExpenses(false)}
        </ul>

        <div id="total" className="mb-5 text-[35px]">
          <h3>
            Total: $ <span>{Number(totalAmount).toFixed(2)}</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
