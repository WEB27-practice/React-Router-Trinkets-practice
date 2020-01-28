import React from "react";
import { useHistory } from "react-router-dom";

function Home() {
  // console.log(props);
  const history = useHistory();
  console.log('this is the history', history);

  const routeToShop = () => {
      console.log("Submitting...");
      setTimeout(() => {
        history.push("/item-list")
      }, 500)
  }
  
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://source.unsplash.com/F6-U5fGAOik"
        alt=""
      />
      <button className="md-button shop-button" onClick={routeToShop}>Shop now!</button>
    </div>
  );
}

export default Home;
