import NavBar from "./components/Nav/NavBar";
import "./App.css";

import ItemListContainter from "./components/ItemList/ItemListContainter";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import CartWidget from "./components/Cart/CartWidget";
import CartContainer from "./components/Cart/CartContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  const storeInfo = {
    storeName: "Lenceria",
    categories: [
      { id: 1, title: "Pijama", link: "/pijamas" },
      { id: 2, title: "Brasier", link: "/Brasier" },
      { id: 3, title: "Panties", link: "/panties" },
     
    ],
  };

  return (
    <BrowserRouter>
      <NavBar storeInfo={storeInfo} />
      <div className="cart-widget">
        <CartWidget></CartWidget>
      </div>
      <Switch>
        <Route exact path="/">
          <HomeContent />
        </Route>
        <Route exact path="/cart">
          <CartContainer />
        </Route>

        {storeInfo.categories.map((elem, idx) => (
          <Route exact path={elem.link} key={idx}>
            <ItemListContainter data={elem.title}  />
          </Route>
        ))}

        {storeInfo.categories.map((elem, idx) => (
          <Route path={`${elem.link}/:itemID`} key={idx}>
            <ItemDetailContainer />
          </Route>
        ))}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
