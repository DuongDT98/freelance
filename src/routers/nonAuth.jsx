import { SigUpPage, SignInPage } from "./page";

const nonAuthCommonRoutes = [
  {
    textDisplayed: "MyAccount",
    path: "/sign-in",
    showInSideBar: false,
    component: <SignInPage />,
  },
  {
    textDisplayed: "MyAccount",
    path: "/sign-up",
    showInSideBar: false,
    component: <SigUpPage />,
  },
];

export { nonAuthCommonRoutes };
