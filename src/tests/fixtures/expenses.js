import moment from "moment";

export default [
  {
    id: "1",
    description: "gum",
    amount: 100,
    note: "",
    createdAt: 0
  },
  {
    id: "2",
    description: "soda",
    amount: 800,
    note: "",
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "doritos",
    amount: 500,
    note: "",
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
