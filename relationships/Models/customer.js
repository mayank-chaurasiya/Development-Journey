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

customerSchema.pre("findOneAndDelete", async () => {
  console.log("PRE MIDDLEWARE");
});

customerSchema.post("findOneAndDelete", async () => {
  console.log("POST MIDDLEWARE");
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const findCustomer = async () => {
  let result = await Customer.find({}).populate("orders");
  console.log(result[0]);
};

// findCustomer();

const addCustomers = async () => {
  let newCust = new Customer({
    name: "Khushi",
  });

  let newOrder = new Order({
    item: "Pizza",
    price: 250,
  });

  newCust.orders.push(newOrder);

  let customerData = await newCust.save();
  console.log(customerData);

  let orderData = await newOrder.save();
  console.log(orderData);
};

// addCustomers();

const delCustomer = async () => {
  let data = await Customer.findByIdAndDelete("68ca80cf820d26d58819f701");
  console.log(data);
};

delCustomer();

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
