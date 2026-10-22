"use client";
import dynamic from "next/dynamic";

// WebGL is loaded client-side only, after first paint.
const DataSphere = dynamic(() => import("./DataSphere"), { ssr: false });
export default DataSphere;
