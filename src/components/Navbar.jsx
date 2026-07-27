import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, LogOut, Zap } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-[#0d0d0d] border-b border-gray-800">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center">
            <Zap
              size={18}
              className="text-black fill-black"
            />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Our<span className="text-lime-400">Mart</span>
          </h1>
        </Link>

        {/* Menu */}

        <div className="flex gap-10 text-gray-400 font-medium">
            {/* className={({isActive })=> isActive  ? "text-lime-400"  : "text-blue-500"} */}

          <NavLink
            to="/"
            className={({isActive })=> isActive  ? "text-lime-400"  : "text-white "}
          >
            Home
          </NavLink>

          <NavLink
            to="/product"
            className={({isActive })=> isActive  ? "text-lime-400"  : "text-white "}
          >
            Shop
          </NavLink>

          <NavLink
            to="/about"
            className={({isActive })=> isActive  ? "text-lime-400"  : "text-white "}


          >
            About
          </NavLink>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-3">



          {/* Cart */}

          <NavLink
          to={"/cart"}
            className="w-12 h-12 rounded-xl border border-gray-700 flex items-center justify-center hover:bg-gray-900 transition">
            <ShoppingCart className="text-white" />
          </NavLink>


        </div>

      </div>
    </nav>
  );
}

export default Navbar;