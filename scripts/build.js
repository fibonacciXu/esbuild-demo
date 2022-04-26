// require("esbuild")
  // 异步
  // .build({
  //   entryPoints: ["main.ts"],
  //   outfile: "main.js",
  //   bundle: true,
  //   loader: { ".ts": "ts" },
  //   watch: true,
  // })
  // .then(() => console.log("⚡ Done"))
  // .catch(() => process.exit(1));

  // 启动一个静态资源服务器
  // .serve(
  //   {
  //     servedir: "www",
  //     port: 8000,
  //     host: "localhost",
  //   },
  //   {
  //     entryPoints: ["index.ts"],
  //     outdir: "www",
  //     bundle: true,
  //     loader: {
  //       ".png": "dataurl",
  //       ".jpg": "file",
  //     },
  //   }
  // )
  // .then((server) => {
  //   console.log("Server is running at: http://localhost:8000/");
  //   // server.stop();
  // });


import { build } from "esbuild";
import { lessLoader } from "esbuild-plugin-less";

build({
  entryPoints: [path.resolve(__dirname, "index.ts")],
  bundle: true,
  outdir: path.resolve(__dirname, "output"),
  plugins: [lessLoader()],
  loader: {
    ".ts": "ts",
  },
});
