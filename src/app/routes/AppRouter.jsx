import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Login } from "../../pages/auth/login/Login";
import GuestRoutes from "./GuestRoutes";
import { useState } from "react";
import App from "../../App";
import PrivateRoutes from "./PrivateRoutes";
import { Home } from "../../pages/home/Home";

export const AppRouter = () => {
  const [loggedIn] = useState(true);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App loggedIn={loggedIn} />}>
        <Route element={<GuestRoutes loggedIn={loggedIn} />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<PrivateRoutes loggedIn={loggedIn} />}>
          <Route index={true} path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
