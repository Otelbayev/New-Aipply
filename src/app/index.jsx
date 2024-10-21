import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uni from "../components/uni";
import { page, routes } from "../utils/router";

const App = () => {
  return (
    <BrowserRouter>
      {/* Suspense wrapping Routes */}
      <Suspense fallback={<div>Loading...</div>}>
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
