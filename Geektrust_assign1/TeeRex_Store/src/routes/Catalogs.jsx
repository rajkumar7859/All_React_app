import React, { useEffect, useState } from "react";

const Catalogs = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        console.log(data);
        setFilteredItems(data);
      });
  }, []);

  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  };

  const handleColorFilter = (event) => {
    setColorFilter(event.target.value);
  };

  const handlePriceFilter = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.color.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query)
    );
    setFilteredItems(filtered);
  };

  const handleClearFilter = () => {
    setGenderFilter("");
    setColorFilter("");
    setPriceFilter("");
    setFilteredItems(items);
  };

  const addToCart = (item) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (index >= 0) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeCartItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const incrementCartItem = (itemId) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === itemId);
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const decrementCartItem = (itemId) => {
    const index = cartItems.findIndex((cartItem) => cartItem.id === itemId);
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="catalogContainer">
      <div className="filter-container">
      
</div>

<div className="search-container">
  <input type="text" placeholder="Search" onChange={handleSearch} />
</div>

<div className="catalog-items-container">
  {filteredItems.map((item) => (
    <div className="catalog-item" key={item.id}>
      <img style={{width:"50%"}} src={item.imageURL} alt={item.name} />
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>${item.gender}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  ))}
</div>

{/* <Cart decrementCartItem={decrementCartItem} cartItems={cartItems} incrementCartItem={incrementCartItem} totalAmount={totalAmount} removeCartItem={removeCartItem} /> */}

</div>
  );
};

export default Catalogs;
