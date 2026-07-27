import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

function CheckoutPage() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-5">

      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center">

        <CheckCircle
          size={90}
          className="mx-auto text-green-500"
        />

        <h1 className="text-4xl font-bold mt-6">
          Order Successful 🎉
        </h1>

        <p className="text-gray-600 mt-4 leading-7">
          Thank you for shopping with us.
          <br />
          Your order has been placed successfully.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-8">

          <p className="text-gray-700">
            <span className="font-semibold">
              Order ID:
            </span>{" "}
            #ORD-{Math.floor(Math.random() * 1000000)}
          </p>

          <p className="mt-2 text-gray-700">
            Estimated Delivery:
            <span className="font-semibold">
              {" "}3 - 5 Business Days
            </span>
          </p>

        </div>

        <div className="flex gap-4 mt-10">

          <Link
            to="/"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/product"
            className="flex-1 border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition"
          >
            View Products
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CheckoutPage;