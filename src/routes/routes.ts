import React from "react";
import SignInPage from "../pages/auth/sign-in";
import { routes } from "./all-routes";
import SignUpPage from "~/pages/auth/sign-up";

interface unProtectedRoute {
  path: string;
  element: React.ReactElement;
}

let unProtectedRoutes: unProtectedRoute[] = [
  { path: routes.signup.index, element: SignUpPage() },
  { path: routes.signin.index, element: SignInPage() },
];

export { unProtectedRoutes };
