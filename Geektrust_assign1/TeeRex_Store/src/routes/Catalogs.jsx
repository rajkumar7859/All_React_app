import React, { useEffect, useState } from "react";

const Catalogs = () => {
  const [items, setItems] = useState([]);
  const [genderFilter, setGenderFilter] = useState('');
  const [colorFilter, setColorFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [filteredItems , setFilteredItems]=useState([])
  const [typeFilter, setTypeFilter] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true)
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        // console.log(data.data);
        setFilteredItems(data);
        setGenderFilter(data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(true)
        console.log(err.message);
        alert(`Api error ${err.message}`);
      });
  }, []);

  const handleGenderFilter = (event) => {
    setGenderFilter(event.target.value);
  };

  // const handleColorFilter = (event) => {
  //   setColorFilter(event.target.value);
  //   console.log(colorFilter);
  // };

  // const handlePriceFilter = (event) => {
  //   setPriceFilter(event.target.value);
  // };


  function handleGenderFilterChange(event) {
    setGenderFilter(event.target.value);
  }

  function handleColorFilterChange(event) {
    setColorFilter(event.target.value);
  }

  function handlePriceFilterChange(event) {
    setPriceFilter(event.target.value);
  }

  function handleTypeFilterChange(event) {
    setTypeFilter(event.target.value);
  }

  useEffect(()=>{
   let filtered = [...filteredItems];
  //  console.log("all pri",filtered);

    // if (genderFilter !== '') {
    //   filtered.filter(product => product.gender === genderFilter);
    //   console.log("gender",filtered.filter(product => product.gender === genderFilter));
      
    // }
    
     if (colorFilter !== '') {
      filtered.filter(product => product.color === colorFilter);
    }

     if (priceFilter !== '') {
      if (priceFilter === 'under-50') {
        filtered = filtered.filter(product => product.price < 50);
      } else if (priceFilter === '50-to-100') {
        filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
      } else if (priceFilter === 'over-100') {
        filtered.filter(product => product.price > 100);
      }
    }
    
    else if (typeFilter !== '') {
      filtered = filtered.filter(product => product.type === typeFilter);
    }
    
    console.log("set" ,setFilteredProducts(filtered)); 


  }, [filteredItems, genderFilter, colorFilter, priceFilter, typeFilter])





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

  // const removeCartItem = (itemId) => {
  //   const newCartItems = cartItems.filter((item) => item.id !== itemId);
  //   setCartItems(newCartItems);
  // };

  // const incrementCartItem = (itemId) => {
  //   const index = cartItems.findIndex((cartItem) => cartItem.id === itemId);
  //   const newCartItems = [...cartItems];
  //   newCartItems[index].quantity += 1;
  //   setCartItems(newCartItems);
  // };

  // const decrementCartItem = (itemId) => {
  //   const index = cartItems.findIndex((cartItem) => cartItem.id === itemId);
  //   const newCartItems = [...cartItems];
  //   if (newCartItems[index].quantity > 1) {
  //     newCartItems[index].quantity -= 1;
  //     setCartItems(newCartItems);
  //   }
  // };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "1rem" }}>
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="catalogContainer">
        <div className="filter-container">
        <div className="filter-items">
            <h3>Colour</h3>
            <div className="input_P">
              <input type="radio" name=""  value="Red" />
              <p>Red</p>
            </div>
            <div className="input_P">
              <input type="radio" name=""  value="Blue" />
              <p>Blue</p>
            </div>
            <div className="input_P">
              <input type="radio" name=""  value="Green" />
              <span>Green</span>
            </div>
          </div>
          <div className="filter-items">
            <h3>Gender</h3>
            <div className="input_P">
            <input type="radio" name="gender" value="Men" checked={genderFilter === 'Men'} onChange={handleGenderFilterChange} />
              <p>Men</p>
            </div>
            <div className="input_P">
            <input type="radio" name="gender" value="Women" checked={genderFilter === 'Women'} onChange={handleGenderFilterChange} />         
                 <p>Women</p>
            </div>
          </div>
          <div className="filter-items">
            <h3>Price</h3>
            <div className="input_P">
              <input type="radio" name="" value="0-250" />
              <p>0-250</p>
            </div>
            <div className="input_P">
              <input type="radio" name="" value="251-450" />
              <p>251-450</p>
            </div>
            <div className="input_P">
              <input type="radio" name="" value="450" />
              <span>450</span>
            </div>
          </div>
          <div className="filter-items">
            <h3>Type</h3>
            <div className="input_P">
              <input type="radio" name="" value="Polo" />
              <p>Polo</p>
            </div>
            <div className="input_P">
              <input type="radio" name="" value="Hoodie" />
              <p>Hoodie</p>
            </div>
            <div className="input_P">
              <input type="radio" name="" value="Basic" />
              <span>Basic</span>
            </div>
          </div>
          <button className="addToCartBtn" >Clear All filter</button>
        </div>

{
  isLoading?(
    <img
      src={
        "https://i.pinimg.com/originals/c1/bc/d8/c1bcd8a8c945b53da6b29f10a2a553c0.gif"
      }
      alt="loading image"
    />
  ) :
        (<div className="catalog-items-container">
          {filteredItems.map((item) => (
            <div className="catalog-item" key={item.id}>
              <img
                style={{ width: "70%"}}
                src={item.imageURL}
                alt={item.name}
              />
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <p>{item.gender}</p>
              <button className="addToCartBtn" onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>)
}

      </div>
    </div>
  );
};

export default Catalogs;
