import React from "react";

const getExpensesTotal = expenses => {
  if (!expenses || expenses.length === 0) {
    return 0;
  } else {
    const expensesAmounts = expenses.map(expense => expense.amount);
    const expensesTotal = expensesAmounts.reduce((a, b) => a + b, 0);
    return expensesTotal;
  }
};

export default getExpensesTotal;
