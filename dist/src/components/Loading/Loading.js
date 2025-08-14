import { jsx as _jsx } from "react/jsx-runtime";
import Skeleton from "react-loading-skeleton";
export var Loading = function () {
    return (_jsx("div", { children: _jsx(Skeleton, { count: 1 }) }));
};
