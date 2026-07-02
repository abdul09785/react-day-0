// const heading = React.createElement("h1", {}, "Hello React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increase() {
//     setCount(count + 1);
//   }

//   function decrease() {
//     setCount(count - 1);
//   }

//   function reset() {
//     setCount(0);
//   }

//   return (
//     <div>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>

//       <button onClick={increase}>+</button>
//       <button onClick={decrease}>-</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }

// export default Counter;

import React from "react";

import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
