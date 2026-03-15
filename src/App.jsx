
// import './App.css'

// function App() {

//   return (
//     <>
//       <h1>Readux toolkit</h1>
      
//     </>
//   )
// }

// export default App

// src/App.jsx
import React from "react";
import UserForm from "./hook/UserFrom";
// import UserForm from "./hook/UserFrom";

function App() {
  return (
    <div className="p-4">
      <UserForm onCancel={() => alert("Cancelled")} />
    </div>
  );
}

export default App;
