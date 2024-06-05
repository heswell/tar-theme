import fs from "fs";
import { build } from "./esbuild.mjs";

const distPath = "./dist";

function clearFolder(path) {
  try {
    if (fs.existsSync(distPath)) {
      fs.rmSync(distPath, { recursive: true, force: true });
    }
    fs.mkdirSync(distPath);
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

clearFolder(distPath);

const entryPoints = ["index.css"];

const results = await build({
  assetNames: "fonts/[name]",
  //   entryNames: "tar-theme",
  entryPoints,
  outdir: distPath,
});

console.log({ results });
