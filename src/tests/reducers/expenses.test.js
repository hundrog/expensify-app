import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "cellphone",
    amount: 300000,
    note: "",
    createdAt: moment(0)
      .add(10, "days")
      .valueOf()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const amount = 1010;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toBe(amount);
});

test("should not edit an expense if not found", () => {
  const amount = 1010;
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
