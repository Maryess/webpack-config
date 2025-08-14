import { lazy } from "react";
export var LazyAbout = lazy(function () {
    return import("./About").then(function (_a) {
        var About = _a.About;
        return ({
            default: About,
        });
    });
});
