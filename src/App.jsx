import { Provider } from "react-redux";
import { Body, Home, MainContainer } from "./components";
import appStore from "./store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { WatchPage , LoginPage , DemoPage} from "./pages";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
          {
            path: "demo",
            element: <DemoPage />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
const App = () => {
  return (
    <Provider store={appStore}>
      <>
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  );
};

export default App;
