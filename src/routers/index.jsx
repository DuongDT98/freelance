import { authCommonRoutes } from "./authRouter";
import { nonAuthCommonRoutes } from "./nonAuth";

const authRoutes = [...authCommonRoutes];

const publicRoutes = [...nonAuthCommonRoutes];

export { authRoutes, publicRoutes };
