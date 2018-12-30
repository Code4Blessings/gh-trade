/**
 * serves base path for development | production
 */
const basePath = (function() {
  const base_path =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "http://localhost:3000"; // On deployment replace with the domain
  // : "https://emekliyim-mutluyum.com";
  return base_path;
})();

export default basePath;
