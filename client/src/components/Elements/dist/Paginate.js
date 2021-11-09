"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Paginate = void 0;
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var Paginate_styles_1 = require("./styles/Paginate.styles");
var Paginate = function (_a) {
    var search = _a.search, setSearch = _a.setSearch, total = _a.total;
    var styles = Paginate_styles_1.useStyles();
    var handleChange = function (event, value) {
        setSearch(function (prevState) { return (__assign(__assign({}, prevState), { page: value })); });
    };
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(material_1.Pagination, { shape: 'rounded', page: search.page, showFirstButton: search.page > 10, showLastButton: search.page < Math.floor(total / search.limit) - 9, size: 'medium', className: styles.root, onChange: handleChange, count: Math.ceil(total / search.limit) })));
};
exports.Paginate = Paginate;
