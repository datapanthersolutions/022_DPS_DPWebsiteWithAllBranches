const base = process.env.BASEPATH || "";

export default {
  output: "export",
  
  images: { 
    unoptimized: true
  },
  
  basePath: base,
  
  assetPrefix: base,
  
  trailingSlash: true,
};
 