import React from "react";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { store } from "../store";

const Navbar = () => {
  //   console.log(
  //     useSelector((store) => {
  //       console.log(store);
  //     })
  //   ); this is to log the cart in the console

  const amount = useSelector((store) => store.cart.amount);
//   const {amount} = useSelector((store) => store.cart.); this method is called destructoring i.e instead of passing the amount as an obk=ject value,  you can unpack/ use it by making it a distinct variable >> {amount}  
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux ToolKit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
