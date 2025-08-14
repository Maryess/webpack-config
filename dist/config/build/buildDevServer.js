export function buildDevServer(_a) {
    var port = _a.port;
    return {
        port: port !== null && port !== void 0 ? port : 5000,
        open: true,
        historyApiFallback: true,
    };
}
