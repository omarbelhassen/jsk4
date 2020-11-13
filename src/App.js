import logo from './logo.svg';
import './App.css';
import React from "react";
import "bottstrap/dist/css/bootstrap.css";
import imageInSrc From '/imageInSrc/téléchargement.jpg'

function App() {
  return (
    <div className="Frist">
      <div>
      <div style={{border: "solid 1px black",maxWidth : "100vw"}}>
      <br/>
      <h1> className="title red">omar belhassen</h1>
      <img src={imageInsrc} alt='imageInSrc' />
      <br/>
      <img src="/imageInPublic/téléchargement.jpg" alt='imageInPublic' />
      
      
      <video controls width={673} height={440}>
      <source src ="https://www.youtube.com/watch?v=9_F8HzTr07s" type="video/mp4" />
</video>
</div>
</div>
  );
}
export default App;
