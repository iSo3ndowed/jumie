import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

//Database
import Products from '../src/data/data'
import ProductCard from "./components/ProductCard";





function App() {
 

  const [selectedCategory, setSelectedCategory] = useState(null)

  //Input Filter
  const [search, setSearch] = useState('')

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }
  const filteredItems = Products.filter((Product) =>
    Product.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
  )


  //Radio filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  //Button filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  function filteredData (Products, selected, search) {
    let filteredProducts = Products

    //filtering input item
    if(search){
      filteredProducts = filteredItems
    }

    //selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({category, color, company, newPrice, gender, title}) =>
        category === selected || color === selected || company === selected || newPrice === selected || title === selected || gender === selected
    )

    
    }

    return filteredProducts.map(
      ({img,title,prevPrice,price,star,reviews,company, id}) => (
      <ProductCard
      key={Math.random()}
      img={img}
      title={title}
      prevPrice={prevPrice}
      star={star}
      reviews={reviews}
      price={price}
      company={company}
      id={id}
      />
    ))
    

    
  }
  const result = filteredData(Products, selectedCategory, search)



  return (
    <div className="flex items-start justify-center w-full gap-8">
      <Sidebar
      handleChange={handleChange}
      />
      <Navbar search={search} handleInputChange={handleInputChange} handleClick={handleClick} result={result}/>
    </div>
  ); 
}

export default App;
