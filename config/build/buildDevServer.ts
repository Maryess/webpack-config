import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer({ port }: BuildOptions) {
  return {
    port: port ?? 3000,
    open: true,
  };
}
