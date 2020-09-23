import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './component/ProductTable'


function App() {

  const products= [{
    category:"electronics",
    name:"Washing Machine",
    mark:"LG",
    model:"F14V71WHST",
    price: 800,
    image:"https://s2.qwant.com/thumbr/0x0/e/d/3d19b2784de99dd6f22b582d11adb3a8913f4db09cf157b663a2f40e4bfcec/.jpg?u=https%3A%2F%2Fboulanger.scene7.com%2Fis%2Fimage%2FBoulanger%2Fbfr_overlay%3Flayer%3Dcomp%26%24t1%3D%26%24product_id%3DBoulanger%2F8808992374343_h_f_l_0%26wid%3D350%26hei%3D350&q=0&b=1&p=0&a=1"
  },{
    category:"electronics",
    name:"Coffee Machine",
    mark:"Bosch",
    model:"TAS1403",
    price: 34.98,
    image:"https://www.cw-mobile.de/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/_/4_58_16.jpg"
  },{
    category:"electronics",
    name:"SmartPhone",
    mark:"Realme",
    model:"5 pro",
    price: 540,
    image:"https://s2.qwant.com/thumbr/0x380/4/a/9b07b2f0b5a8ea7a99f3fa20fb52b7b5a882185de84f1e1a2f418456ac46d7/realme-5-pro-01-600x600.jpg?u=https%3A%2F%2Fwww.muthophone.com.bd%2Fimage%2Fcache%2Fcatalog%2Fmobiles%2Frealme%2Frealme-5-pro%2Frealme-5-pro-01-600x600.jpg&q=0&b=1&p=0&a=1"
  },{
    category:"electronics",
    name:"Smart TV",
    mark:"Hisense 4k",
    model:"40H5500F Class H55",
    price: 199.99,
    image:"https://th.bing.com/th/id/OIP.o6egUNs0r0UWpinV7jZ8iQAAAA?pid=Api&rs=1"
  },{
    category:"clothes",
    name:"Top",
    mark:"Nike",
    model:"Pro Combat",
    price: 35,
    image:"https://s1.qwant.com/thumbr/0x380/b/7/48863c1e05d2f15610efaaad1077b882ccadb0194ec379703dce3cc43ecf56/nike-core-compression-long-sleeve-449794-406-ind.jpg?u=http%3A%2F%2Fwww.wigglestatic.com%2Fproduct-media%2F5360078255%2Fnike-core-compression-long-sleeve-449794-406-ind.jpg%3Fw%3D2000%26h%3D2000%26a%3D7&q=0&b=1&p=0&a=1"
  },{
    category:"clothes",
    name:"Pants",
    mark:"Nike",
    model:"Phenom Elite",
    price: 90,
    image:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3295184-a1e9-475b-99d8-7faeaeef9392/phenom-elite-mens-knit-running-pants-g4xpW4.jpg"
  },{
    category:"clothes",
    name:"Hoodie",
    mark:"Adidas",
    model:"Trefoil",
    price: 65,
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/f9ead56071764da0a853a873013c6149_9366/Trefoil_Hoodie_Black_DT7964_01_laydown.jpg"
  },{
    category:"clothes",
    name:"Jacket",
    mark:"Adidas",
    model:"ESSENTIALS",
    price: 90,
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/091a5195afb542439edea98400d87ebe_9366/Essentials_3_Stripes_Tricot_Track_Jacket_Black_DQ3070_21_model.jpg"
  },]

  return (
    <div className="container">
      {products.map((elem,index)=><Card key={index} category={elem.category} name={elem.name} mark={`Mark: ${elem.mark}`} model={`Model: ${elem.model}`} price={elem.price} image={elem.image}/>)}
    </div>
  );


}

export default App;
