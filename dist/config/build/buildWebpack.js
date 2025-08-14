import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";
import { buildResolvers } from "./buildResolvers";
export function buildWebpack(options) {
    var mode = options.mode, port = options.port, path = options.path;
    var isDev = mode === "development";
    return {
        mode: mode !== null && mode !== void 0 ? mode : "development",
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
