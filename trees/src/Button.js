import React, { useState } from "react";
import "./App.css";
import { AiFillLike } from "react-icons/ai";

export default function Button() {
  const [buttonLike, setButtonLike] = useState("rgb(128,128,128)");
  const [likeCounter, setLikeCounter] = useState(0);

  const changeLike = () => {
    if (buttonLike === "rgb(128,128,128)") {
      setButtonLike("rgb(0,0,0)");
    }
    setLikeCounter(likeCounter + 1);
  };

  return (
    <div className="buttons">
      <div className="likeButton">
        {likeCounter}
        <AiFillLike onClick={() => changeLike()} fill={buttonLike} />
      </div>
    </div>
  );
}
