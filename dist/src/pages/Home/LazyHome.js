import { lazy } from "react";
export var LazyHome = lazy(function () {
    return import("./Home").then(function (_a) {
        var Home = _a.Home;
        return ({
            default: Home,
        });
    });
});
