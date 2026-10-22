import { lazy, Suspense, type ComponentType } from "react";
// next/dynamic stand-in for the single-file preview build.
export default function dynamic<P extends object>(loader: () => Promise<{ default: ComponentType<P> }>) {
  const C = lazy(loader) as unknown as ComponentType<P>;
  return function Dynamic(props: P) { return <Suspense fallback={null}><C {...props} /></Suspense>; };
}
