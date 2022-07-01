import AuthPage from "./pages/AuthPage";
import CreatePage from "./pages/CreatePage";
import PostPage from "./pages/PostPage";
import AllPage from "./pages/AllPage";
import {
  REGISTER_ROUTE,
  LOGIN_ROUTE,
  CREATE_ROUTE,
  POSTS_ROUTE,
  ALL_ROUTE,
} from "./utils/constants";

export const authRoutes = [
  {
    path: CREATE_ROUTE,
    element: <CreatePage />,
  },
  {
    path: POSTS_ROUTE,
    element: <PostPage />,
  },
  {
    path: ALL_ROUTE,
    element: <AllPage />,
  },
];

export const publicRoutes = [
  {
    path: REGISTER_ROUTE,
    element: <AuthPage />,
  },
  {
    path: LOGIN_ROUTE,
    element: <AuthPage />,
  },
  {
    path: "*",
    element: <AuthPage />,
  },
];
