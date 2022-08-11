import CartContainer from "./component/CartContainer";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { calculateTotal } from "./features/cart/cartSlice";
import Modal from "./component/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <main>
      {isOpen && <Modal />}
      {/* if isOpen is true only then should you dispaly the modal */}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
