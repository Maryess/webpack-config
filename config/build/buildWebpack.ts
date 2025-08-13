import webpack from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";
import { BuildOptions } from "./types/types";
import { buildResolvers } from "./buildResolvers";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, port, path } = options;

  const isDev = mode === "development";
  return {
    mode: mode ?? "development",
    entry: path.entry,
    output: {
      path: path.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : false,
    devServer: buildDevServer(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
  };
}
