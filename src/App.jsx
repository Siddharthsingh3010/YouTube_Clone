// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";

// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Body from "./components/Body";
// import Watch from "./components/Watch";
// import Feed from "./components/Feed";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <Feed />
//       },
//       {
//         path: "/watch",
//         element: <Watch />
//       }
//     ]

//   }
// ])
// function App() {
//   return (
//     <div className=" font-roboto">
//       <Navbar />
//       <RouterProvider router={appRouter} />

//     </div>
//   );
// }

// export default App;

// ******************

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and other necessary components
import Body from "./components/Body";
import Watch from "./components/Watch";
import Feed from "./components/Feed";

function App() {
  return (
    <div className=" font-roboto">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Feed />} />
            <Route path="watch" element={<Watch />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
