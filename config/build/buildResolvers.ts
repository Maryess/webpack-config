import { Configuration } from "webpack";
import { BuildOptions, BuildPath } from "./types/types";
import { lazy } from "react";
import path from "path";

export function buildResolvers(
  options: BuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
    alias: {
      "@": options.path.src,
    },
  };
}
