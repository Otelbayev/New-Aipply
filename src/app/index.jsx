import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uni from "../components/uni";
import { page, routes } from "../utils/router";
import Loading from "../pages/Lid/loading";

const App = () => {
  return (
    <BrowserRouter>
      {/* Suspense wrapping Routes */}
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Grouped Routes with a shared component (e.g., Uni layout) */}
          <Route element={<Uni />}>
            {routes.map((e) => (
              <Route key={e.id} path={e.path} element={e.element} />
            ))}
          </Route>

          {/* Additional Routes */}
          {page.map((e) => (
            <Route key={e.id} path={e.path} element={e.element} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
