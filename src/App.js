import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Product from "./components/Product";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

const App = () => {
  //   const router = createBrowserRouter(
  //     createRoutesFromElements(
  //       <Route>
  //         <Route path="/" elements={<RootLayout />}></Route>
  //         {/* <Route index elements={<Dashboard />}></Route> */}
  //         <Route path="/cart" elements={<Cart />}></Route>
  //       </Route>
  //     )
  //   );

  return (
    <>
      {/* <Product /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/Cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
