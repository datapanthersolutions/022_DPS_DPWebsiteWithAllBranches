import { createContext, useContext } from "react";
// Tiny in-memory router for the single-file preview build.
export const RouterCtx = createContext<{ path: string; push: (href: string) => void }>({ path: "/", push: () => {} });
export const useRouter = () => useContext(RouterCtx);
