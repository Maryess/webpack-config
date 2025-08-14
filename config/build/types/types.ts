export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildPath {
  entry: string;
  output: string;
  html: string;
  src: string;
  public: string;
}

export interface BuildOptions {
  port: number;
  paths: BuildPath;
  mode: BuildMode;
  analyzeActive?: boolean;
  platform: BuildPlatform;
}
