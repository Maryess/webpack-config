export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildPath {
  entry: string;
  output: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  port: number;
  path: BuildPath;
  mode: BuildMode;
  analyzeActive?: boolean;
  platform: BuildPlatform;
}
