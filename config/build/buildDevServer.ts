import type { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer({
  port,
}: BuildOptions): WebpackDevServerConfiguration {
  return {
    port: port ?? 5000,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
}
