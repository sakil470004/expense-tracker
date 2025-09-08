"use client"
import { useEffect, useState } from "react";

export default function ExpensePage() {
  const [expense, setExpense] = useState(true);
  const [currentClassName, setCurrentClassName] = useState("red");

  useEffect(() => {
    if (expense) setCurrentClassName("red");
    else setCurrentClassName("green");
  }, [expense]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-white shadow-lg rounded-lg w-96">
        <div className="card-body p-6">
          <div className="flex justify-between items-center mb-4">

          <div className="flex gap-4 items-center ">
            <h2 className="text-lg font-bold text-gray-800">Cookies!</h2>
            <h2 className={`text-lg font-bold text-${currentClassName}-500`}>$20</h2>
          </div>
            <div
              className={`badge badge-sm px-3 py-1 rounded-full ${
                expense ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
              }`}
            >
              {expense ? "Expense" : "Income"}
            </div>
          </div>
          <p className="text-gray-600 mb-4">We are using cookies for no reason.</p>
          <div className="flex justify-between">
            <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Edit
            </button>
            <button className="btn bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
