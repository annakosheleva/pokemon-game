// import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bgImage1 from './images/bg1.jpg';
import bgImage3 from './images/bg3.jpg';



const App = () => {
  return (
    <>
    <Header
      title="Hello"
      descr="descr"
    />
    <Layout
      id={1}
      title="Второй блок"
      descr="описание первого"
      bgImage1={bgImage1}
    />
    <Layout
      id={2}
      title="Второй блок"
      descr="описание второго"
      colorBg="#ffffffaa"
    />
    <Layout
      id={3}
      title="Третий блок"
      descr="описание третьего"
      bgImage3={bgImage3}
    />
    <Footer/>
    </>
  )
}

export default App;

// ReactDOM.render(<App/>, document.getElementById('root'));