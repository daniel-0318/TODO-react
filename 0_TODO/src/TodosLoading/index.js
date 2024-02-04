import React from "react";
import './todoLoading.css'

function TodosLoading() {
  return(
    <div className="container">
    <div className="spinner">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

    </div>
  );
}

export {TodosLoading};