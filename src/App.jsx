import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NonAuthLayout from "./containers/nonLayout/NonAuthLayout";
import Authmiddleware from "./containers/authLayout/AuthLayout";
import { authRoutes, publicRoutes } from "./routers";

function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route, idx) => (
          <Route
            path={route.path}
            element={
              <NonAuthLayout>
                <Suspense fallback={<></>}>{route.component}</Suspense>
              </NonAuthLayout>
            }
            key={idx}
          />
        ))}
        {authRoutes.map((route) => {
          return (
            <Route path={route.path} key={route.textDisplayed + route.path}>
              {route.children?.map((c) => {
                return (
                  <Route
                    {...c}
                    element={
                      <Authmiddleware>
                        {/* <Layout> */}
                        <Suspense fallback={<></>}>{c.element}</Suspense>
                        {/* </Layout> */}
                      </Authmiddleware>
                    }
                    key={c.path}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
