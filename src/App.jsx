import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Enterprise from "./components/Enterprise";
import Home from "./components/Home";
import Support from "./components/Support";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={
            <div className="flex flex-col h-full">
              <Header />
              <div className="flex-1 flex items-center justify-center font-semibold text-4xl">
                <Outlet />
              </div>
              <Footer />
            </div>
          }
        >
          <Route index path="home" element={<Home />} />
          <Route path="enterprise" element={<Enterprise />} />
          <Route path="features" element={<Features />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Route>
    )
  );
  return (
    <div className="h-screen max-w-6xl mx-auto p-4 text-slate-900">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
