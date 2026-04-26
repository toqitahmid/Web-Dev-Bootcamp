import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css";
import App from "./App.jsx";
import Root from "./Components/Root/Root.jsx";
import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Mobiles from "./Components/Body/Mobiles.jsx";
import Tablets from "./Components/Body/Tablets.jsx";
import Desktop from "./Components/Body/Desktops.jsx";
import User from "./Components/User/User.jsx";
import User2 from "./Components/User/User2.jsx";
import UserDetails from "./Components/User/UserDetails.jsx";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json(),
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "tablets", Component: Tablets },
      { path: "desktops", Component: Desktop },
      {
        path: "user",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: User,
      },
      {
        path: "user2",
        element: (
          <Suspense fallback={<span>loading...</span>}>
            <User2 fetchUser={fetchUser}></User2>
          </Suspense>
        ),
      },
      {
        path: "user/:userId",
        loader: ({ params }) => {
          console.log(params.userId);
          return fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`,
          );
        },
        Component: UserDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
