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
exports.HeaderTable = void 0;
var system_1 = require("@mui/system");
var material_1 = require("@mui/material");
var HeaderTable_styles_1 = require("./styles/HeaderTable.styles");
var hi_1 = require("react-icons/hi");
var HeaderTable = function (_a) {
    var search = _a.search, setSearch = _a.setSearch;
    var styles = HeaderTable_styles_1.useStyles();
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(system_1.Box, { className: styles.searchBarOptions },
            React.createElement(material_1.FormControl, { className: styles.search },
                React.createElement(material_1.InputLabel, { htmlFor: 'standard-adornment-password' }, "Search"),
                React.createElement(material_1.Input, { id: 'standard-adornment-password', type: 'text', value: search.search, onChange: function (e) {
                        setSearch(function (prevState) { return (__assign(__assign({}, prevState), { search: e.target.value })); });
                    }, startAdornment: React.createElement(material_1.InputAdornment, { position: 'start' },
                        React.createElement(hi_1.HiSearch, null)) })),
            React.createElement(material_1.FormControl, null,
                React.createElement(material_1.InputLabel, { id: 'demo-simple-select-helper-label' }, "Limit"),
                React.createElement(material_1.Select, { labelId: 'demo-simple-select-helper-label', id: 'demo-simple-select-helper', value: search.limit, label: 'Limit', onChange: function (e) {
                        setSearch(function (prevState) { return (__assign(__assign({}, prevState), { limit: e.target.value })); });
                    } },
                    React.createElement(material_1.MenuItem, { value: 10 }, "10"),
                    React.createElement(material_1.MenuItem, { value: 25 }, "25"),
                    React.createElement(material_1.MenuItem, { value: 50 }, "50"),
                    React.createElement(material_1.MenuItem, { value: 100 }, "100"))))));
};
exports.HeaderTable = HeaderTable;
