import { Link, useNavigate } from "react-router-dom";
import { Trash2, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../features/CartSlice";
// import { CartContext } from "../context/CartContext";

function Cart() {

const cart = useSelector((state)=>state.cart.cart)
const dispatch = useDispatch()

const navugate= useNavigate()

const totalPrice = cart.reduce((total,item)=> total + item.price *item.quantity ,0)

  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] gap-5">
        <ShoppingBag size={80} className="text-zinc-500" />

        <h1 className="text-4xl font-bold">Your Cart is Empty</h1>

        <p className="text-zinc-400">
          Looks like you haven't added anything yet.
        </p>

        <Link
          to="/product"
          className="bg-lime-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart Products */}

        <div className="lg:col-span-2 space-y-5">

          {cart.map((product) => (
            <div
              key={product.id}
              className="flex gap-5 bg-zinc-900 border border-zinc-800 rounded-xl p-5"
            >

              <img
                src={product.image}
                alt={product.title}
                className="w-32 h-32 object-contain bg-white rounded-lg p-2"
              />

              <div className="flex-1">

                <p className="text-sm text-zinc-400 uppercase">
                  {product.category}
                </p>

                <h2 className="text-xl text-zinc-200 font-semibold mt-2">
                  {product.title}
                </h2>

                <h3 className="text-2xl font-bold text-lime-400 mt-4">
                  ${product.price}
                </h3>

                <div className="flex items-center gap-4 mt-5">

                  <button
                    onClick={() => dispatch(decreaseQuantity(product.id))}
                    className="w-10 cursor-pointer text-zinc-200 border-white h-10 rounded-lg bg-zinc-800"
                  >
                    -
                  </button>

                  <span className="text-xl text-zinc-200 border-white">
                    {product.quantity}
                  </span>

                  <button
                     onClick={() => dispatch(increaseQuantity(product.id))}
                    className="w-10 h-10 rounded-lg cursor-pointer text-zinc-200 border-white bg-zinc-800"
                  >
                    +
                  </button>

                </div>

              </div>

              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="text-red-500 self-start cursor-pointer "
              >
                <Trash2 />
              </button>

            </div>
          ))}

        </div>

        {/* Summary */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-fit sticky top-24">

          <h2 className="text-2xl text-zinc-200  font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex text-zinc-200 justify-between mb-4">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex text-zinc-200 border-white justify-between mb-6">
            <span>Total Price</span>
            <span className="font-bold text-lime-400">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
           onClick={()=> navugate("/checkout")}
          className="w-full cursor-pointer font-bold hover:bg-lime-300 bg-lime-400 text-black py-3 rounded-lg font-semibold">
            Proceed to Checkout
          </button>

        </div>

      </div>

    </section>
  );
}

export default Cart;