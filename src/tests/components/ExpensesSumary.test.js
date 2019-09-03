import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { ExpensesSumary } from "../../components/ExpensesSumary";

test("should render correctly with one expense", () => {
  const wrapper = shallow(
    <ExpensesSumary expenseCount={1} expensesTotal={2010} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render correctly with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSumary expenseCount={4} expensesTotal={19902000} />
  );
  expect(wrapper).toMatchSnapshot();
});
