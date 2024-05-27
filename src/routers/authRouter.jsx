import { AddEvent, HomePage } from "./page";

const authCommonRoutes = [
  {
    textDisplayed: "Home",
    path: "/home",
    showInSideBar: false,
    children: [
      {
        index: true,
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
  {
    textDisplayed: "Home",
    path: "/add-event",
    showInSideBar: false,
    children: [
      {
        index: true,
        path: "/add-event",
        element: <AddEvent />,
      },
    ],
  },
];

export { authCommonRoutes };
