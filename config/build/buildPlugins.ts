import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildPlugins({
  mode,
  path,
}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: path.html,
    }),
    new MiniCssExtractPlugin(),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }
  return plugins;
}
