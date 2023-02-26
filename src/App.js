import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home-component";
import Navigation from "./routes/navigation/navigation-component";
import Authentication from "./routes/authentication/authentication-component";
import CheckOut from "./routes/checkout/checkout-component";
import Shop from "./routes/shop/shop-component";
import ScrollButton from "./components/scroll-button/scroll-button-component";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<CheckOut />} />
        </Route>
      </Routes>
      <ScrollButton />
    </>
  );
};

export default App;
