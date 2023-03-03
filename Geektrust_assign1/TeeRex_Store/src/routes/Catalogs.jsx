import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Catalogs = () => {
  const [items, setItems] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
   const { addToCart } = useContext(CartContext)

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setFilteredItems(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        alert(`Api error ${err.message}`);
      });
  }, []);

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

  useEffect(() => {
    let filteredData = items.filter((item) => {
      let isMatching = true;
      if (genderFilter && item.gender !== genderFilter) {
        isMatching = false;
      }
      if (colorFilter && item.color !== colorFilter) {
        isMatching = false;
      }
      if (typeFilter && item.type !== typeFilter) {
        isMatching = false;
      }
      if (priceFilter) {
        const [minPrice, maxPrice] = priceFilter.split("-");
        if (maxPrice === undefined) {
          if (item.price < Number(minPrice)) {
            isMatching = false;
          }
        } else {
          if (item.price < Number(minPrice) || item.price > Number(maxPrice)) {
            isMatching = false;
          }
        }
      }
      return isMatching;
    });
     setFilteredItems(filteredData);
  }, [genderFilter, colorFilter, typeFilter, priceFilter]);

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
    setTypeFilter("")
    alert("All filters as been removed")
  };

  return (
    <div style={{ padding: "1rem" , paddingTop:"4rem" }}>
      <div className="search-container">
        <input type="text" placeholder="Search" onChange={handleSearch} />
      </div>
      <div className="catalogContainer">
        <div className="filter-container">
          <div className="filter-items">
            <h3>Colour</h3>
            <div className="input_P">
              <input
                type="radio"
                name="color"
                value="Red"
                checked={colorFilter === "Red"}
                onChange={handleColorFilterChange}
              />
              <p>Red</p>
            </div>
            <div className="input_P">
              <input
                type="radio"
                name="color"
                value="Blue"
                checked={colorFilter === "Blue"}
                onChange={handleColorFilterChange}
              />
              <p>Blue</p>
            </div>
            <div className="input_P">
              <input
                type="radio"
                name="color"
                value="Green"
                checked={colorFilter === "Green"}
                onChange={handleColorFilterChange}
              />
              <span>Green</span>
            </div>
          </div>
          <hr />
          <div className="filter-items">
            <h3>Gender</h3>
            <div className="input_P">
              <input
                type="radio"
                name="gender"
                value="Men"
                checked={genderFilter === "Men"}
                onChange={handleGenderFilterChange}
              />
              <p>Men</p>
            </div>
            <div className="input_P">
              <input
                type="radio"
                name="gender"
                value="Women"
                checked={genderFilter === "Women"}
                onChange={handleGenderFilterChange}
              />
              <p>Women</p>
            </div>
          </div>
          <hr/>
          <div className="filter-items">
            <h3>Price</h3>
            <div className="input_P">
              <input
                type="radio"
                name="price"
                value="0-250"
                checked={priceFilter === "0-250"}
                onChange={handlePriceFilterChange}
              />
              <p>under-250</p>
            </div>
            <div className="input_P">
              <input
                type="radio"
                name="price"
                value="250-450"
                checked={priceFilter === "250-450"}
                onChange={handlePriceFilterChange}
              />
              <p>250-450</p>
            </div>
            <div className="input_P">
              <input
                type="radio"
                name="price"
                value="450"
                checked={priceFilter === "450"}
                onChange={handlePriceFilterChange}
              />
              <span>over-450</span>
            </div>
          </div>
          <hr/>
          <div className="filter-items">
            <h3>Type</h3>
            <div className="input_P">
              <input type="radio" name="type" value="Polo" checked={typeFilter === "Polo"} onChange={handleTypeFilterChange} />
              <p>Polo</p>
            </div>
            <div className="input_P">
              <input type="radio" name="type" value="Hoodie" checked={typeFilter === "Hoodie"} onChange={handleTypeFilterChange} />
              <p>Hoodie</p>
            </div>
            <div className="input_P">
              <input type="radio" name="type" value="Basic" checked={typeFilter === "Basic"} onChange={handleTypeFilterChange} />
              <span>Basic</span>
            </div>
          </div>
          <hr/>
          <button className="addToCartBtn" onClick={handleClearFilter}>
            Clear All filter
          </button>
        </div>

        {isLoading ? (
          <img
            src={
              "https://i.pinimg.com/originals/c1/bc/d8/c1bcd8a8c945b53da6b29f10a2a553c0.gif"
            }
            alt="loading image"
          />
        ) : (
          <div className="catalog-items-container">
            {filteredItems.map((item) => (
              <div className="catalog-item" key={item.id}>
                <img
                  style={{ width: "70%" }}
                  src={item.imageURL}
                  alt={item.name}
                />
                <hr/>
                <h3>{item.name}</h3>
                <p>Rs {item.price}</p>
                <p>{item.gender}</p>
                <button
                  className="addToCartBtn"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalogs;
