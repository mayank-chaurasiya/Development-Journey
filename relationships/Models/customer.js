const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

// ------------------ CUSTOMER SCHEMA ------------------------

const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

findCustomer();

// const addCustomers = async () => {
//   //   let cust1 = new Customer({
//   //     name: "Rahul",
//   //   });

//   //   let order1 = await Order.findOne({ item: "Samosa" });
//   //   let order2 = await Order.findOne({ item: "Chocolate" });
//   //   let order3 = await Order.findOne({ item: "Chips" });

//   //   cust1.orders.push(order1);
//   //   cust1.orders.push(order2);
//   cust1.orders.push(order3);

//   let result = await cust1.save();
//   console.log(result);
// };

// addCustomers();

//----------- ORDER SCHEMA ---------------------------------

// const addOrders = async () => {
//   let result = await Order.insertMany([
//     { item: "Samosa", price: 15 },
//     { item: "Chocolate", price: 20 },
//     { item: "Chips", price: 15 },
//   ]);
//   console.log(result);
// };

// addOrders();
