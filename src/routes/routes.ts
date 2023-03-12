import React from "react";
import SignInPage from "../pages/auth/sign-in";
import {routes} from './all-routes'

interface unProtectedRoute {
  path: string;
  element: React.ReactElement;
}

let unProtectedRoutes: unProtectedRoute[] = [
  { path: routes.signup.index, element: SignInPage() },
];

export { unProtectedRoutes };
