import MiniCssExtractPlugin from "mini-css-extract-plugin";
export function buildLoaders(options) {
    var isDev = options.mode === "development";
    var isProd = options.mode === "production";
    var svgrLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: "@svgr/webpack",
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: "convertColors",
                                params: {
                                    currentColor: true,
                                },
                            },
                        ],
                    },
                },
            },
        ],
    };
    var cssLoaderWithModules = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
            },
        },
    };
    var assetsLoader = {
        test: /\.(png|jpg|gif)$/i,
        type: "asset/resource",
    };
    var styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? MiniCssExtractPlugin.loader : "style-loader",
            cssLoaderWithModules,
            "sass-loader",
        ],
    };
    var tsLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    };
    return [svgrLoader, assetsLoader, styleLoader, tsLoader];
}
