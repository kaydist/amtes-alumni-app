import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { unProtectedRoutes } from "./routes/routes";
import SignInPage from "./pages/auth/sign-in";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            {unProtectedRoutes.map((route, idx) => {
              const { path, element } = route;
              return <Route key={idx} path={path} element={element} />;
            })}
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
