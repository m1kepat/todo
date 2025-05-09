import Todos from "../pages/Todos";
import Login from "../pages/Login";

export const privateRoutes = [
  { path: "/todos", component: Todos, exact: true },
  { path: "/login", component: Login, exact: true },
];

export const publicRoutes = [{ path: "/login", component: Login, exact: true }];
