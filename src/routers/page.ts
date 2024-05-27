import { lazy } from "react";

const SignInPage = lazy(() => import("../pages/sign-in/SignIn"));
const SigUpPage = lazy(() => import("../pages/sign-up/SignUp"));
const HomePage = lazy(() => import("../pages/home/Home"));
const AddEvent = lazy(() => import("../pages/event/AddEvent"));

export { SignInPage, SigUpPage, HomePage, AddEvent };
