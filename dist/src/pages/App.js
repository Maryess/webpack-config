import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import manPng from "@/assets/man.png";
import ManSvg from "@/assets/man.svg";
//TREE SHAKING
function TODO() {
    console.log("TODOFUNCTION");
}
export var App = function () {
    var _a = useState(0), state = _a[0], setState = _a[1];
    TODO();
    if (__PLATFORM__ === "desktop") {
        return _jsx("div", { children: "DESKTOP" });
    }
    else if (__PLATFORM__ === "mobile") {
        return _jsx("div", { children: "MOBILE" });
    }
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PlATFORM=", __PLATFORM__, " "] }), _jsx("h3", { children: state }), _jsx("div", { children: manPng }), _jsx(ManSvg, { style: {
                    color: "green",
                }, width: 200, height: 200 }), _jsx(Outlet, {})] }));
};
