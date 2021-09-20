// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">

      <ShowImages></ShowImages>
      
    </div>
  );
  
/*   const productsArr = [
    { name: "Iphone", price: 50000 },
    { name: "Ipad", price: 150000 },
    { name: "Fridge", price: 20000 },
    { name: "Laptop", price: 80000 },
    { name: "Bike", price: 250000 }
  ];
  return (
    <div className="App">
      {
        productsArr.map(product => 
          
          <Products name={product.name} price={product.price} ></Products>
        )
      }
    </div>
  ); */
}



function ShowImages() {

  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
    .then(data=>setImages(data))
  },[])

  return (
    <div>
      <h1>Images</h1>
      {
        images.slice(0,20).map(image => 
          <Display url={image.url} title={image.title}></Display>
        )
      }
</div>

  )
  
}

function Display(props) {
  const design = {
    backgroundColor: "pink",
    color: "blue",
    margin: "10px",
    padding: "10px",
    border: "2px solid red",
    
  }
  return (
    <div style={design}>
      <img src={props.url} alt="" />
      <h3>Title: {props.title}</h3>
    </div>
  )
}









/* function Products(props) {
  const design = {
    backgroundColor: "pink",
    color: "blue",
    margin: "10px",
    padding: "10px",
    border: "2px solid red",
    
  }
  return (
    <div style={design}>
      <h2>Product Name: {props.name}</h2>
      <h3>Product Name: {props.price}</h3>
    </div>
  )
} */



export default App;
