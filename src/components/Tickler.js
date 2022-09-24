import React from "react";

function Tickler() {
  function tickle(e){
    console.log(e)
  }
  return <button onClick={tickle}>Tickle me!</button>;
}

export default Tickler;


//// referencing func
  // function tickle() {
  //   console.log("Teehee!");
  // }

  // return <button onClick={tickle}>Tickle me!</button>;

//// arrow func
  // function Tickler() {

  //   return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>;