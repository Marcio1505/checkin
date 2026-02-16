import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { CheckInPage } from "./pages/CheckInPage/CheckInPage";
import { ListPage } from "./pages/ListPage/ListPage";
import { WelcomeWrapper } from "./pages/WelcomePage/WelcomeWrapper";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/welcome", element: <WelcomeWrapper /> },
      { path: "/", element: <CheckInPage /> },
      { path: "/list", element: <ListPage /> },
    ],
  },
]);
