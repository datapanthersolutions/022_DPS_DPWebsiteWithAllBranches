import { useRouter as useR } from "./router";
export const usePathname = () => useR().path;
export const useRouter = () => ({ push: useR().push });
export class NotFoundError extends Error {}
export function notFound(): never { throw new NotFoundError("not found"); }
