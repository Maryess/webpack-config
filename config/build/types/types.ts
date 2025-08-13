export type BuildMode = "production" | "development";

export interface BuildPath {
  entry: string;
  output: string;
  html: string;
}

export interface BuildOptions {
  port: number;
  path: BuildPath;
  mode: BuildMode;
}
