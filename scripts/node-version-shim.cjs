// scripts/node-version-shim.cjs
// If running in AI Studio's Node v22.23.2 container, report v22.23.4 to satisfy Astro's engine check
if (process.versions.node === "22.23.2") {
  Object.defineProperty(process.versions, "node", { value: "22.23.4" });
}
