import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import {
  BuildMode,
  BuildPath,
  BuildPlatform,
} from "./config/build/types/types";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  platform: BuildPlatform;
  analyzeActive: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    public: path.resolve(__dirname, "public"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths: paths,
    analyzeActive: env.analyzeActive,
    platform: env.platform ?? "desktop",
  });

  return config;
};
