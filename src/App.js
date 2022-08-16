import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";
import Nav from "./Components/Nav";

function App() {
  // array containing the list of items available
  const menu = [
    {
      id: 1,
      name: "Plain Dosa",
      category: "veg",
      price: 20.0,
      image: "./1.jpg",
    },
    { id: 2, name: "Poori", category: "veg", price: 30.0, image: "./2.jpg" },
    {
      id: 3,
      name: "Masala Dosa",
      category: "veg",
      price: 30.0,
      image: "./3.jpg",
    },
    {
      id: 4,
      name: "Managalore Bhaji",
      category: "veg",
      price: 30.0,
      image: "./4.jpg",
    },
    {
      id: 5,
      name: "Andhra Veg Meals",
      category: "veg",
      price: 300.0,
      image: "./5.jpg",
    },
    {
      id: 6,
      name: "Andhra Non-veg Meals",
      category: "non-veg",
      price: 350.0,
      image: "./6.jpg",
    },
  ];
  const [cartArr, setcartArr] = useState([]);

  return (
    <div className="App">
      {/* displaying the necessary components */}
      <Nav />
      <Main menu={menu} cartArr={cartArr} setcartArr={setcartArr} />
    </div>
  );
}

export default App;
