import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
export function buildPlugins(_a) {
    var mode = _a.mode, path = _a.path, analyzeActive = _a.analyzeActive, platform = _a.platform;
    var isDev = mode === "development";
    var isProd = mode === "production";
    var plugins = [
        new HtmlWebpackPlugin({
            template: path.html,
        }),
        new webpack.DefinePlugin({
            __PLATFORM__: JSON.stringify(platform),
        }),
    ];
    if (isDev && analyzeActive) {
        plugins.push(new BundleAnalyzerPlugin());
    }
    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }
    if (isProd) {
        plugins.push(new MiniCssExtractPlugin());
    }
    return plugins;
}
