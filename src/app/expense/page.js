"use client"
import { useEffect, useState } from "react";

export default function ExpensePage() {
  const [expense,setExpense]=useState(true);
  const [currentClassName,setCurrentClassName]=useState("red")
  useEffect(()=>{
    if(expense) setCurrentClassName("red") 
      else setCurrentClassName("green");
  },[expense])
  return (
    <div>
      <div className={`card bg-neutral text-neutral-content w-96 `}>
        
        <div className="card-body items-center text-center">
          <div className="flex gap-5 ">
            <h2 className="card-title text-red">Cookies!</h2>
            <h2 className={`card-title text-${currentClassName}-500`}>$20</h2>
            <div className={`badge badge-soft badge-sm  ${expense ? "badge-error" : "badge-success"}`}>{expense? "Expense" : "Income"}</div>
          </div>
          <p>We are using cookies for no reason.</p>
          
          <div className="card-actions w-full justify-between">
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-error">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
