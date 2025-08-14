export function buildResolvers(options) {
    return {
        extensions: [".tsx", ".ts", ".js", ".css", ".scss"],
        alias: {
            "@": options.path.src,
        },
    };
}
