"use client"
import ExpenseCard from "../_components/ExpenseCard";

export default function ExpensePage() {


  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
     <ExpenseCard />
     <ExpenseCard />
    </div>
  );
}
