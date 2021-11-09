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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.CustomSelect = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var CustomSelect_styles_1 = require("./styles/CustomSelect.styles");
var CustomSelect = function (_a) {
    var label = _a.label, id = _a.id, items = _a.items, callback = _a.callback, rest = __rest(_a, ["label", "id", "items", "callback"]);
    var styles = CustomSelect_styles_1.useStyles();
    var _b = react_1.useState([]), string = _b[0], setString = _b[1];
    var handleChange = function (event) {
        var value = event.target.value;
        setString(typeof value === "string" ? value.split(",") : value);
        if (callback) {
            var ids_1 = [];
            if (Array.isArray(value))
                value.forEach(function (val) {
                    ids_1.push(val.id);
                });
            callback(ids_1);
        }
    };
    var displayValues = function (values) {
        var names = "";
        values.forEach(function (val) {
            names += val.name + ", ";
        });
        return names.replace(/,\s$/, "");
    };
    return (React.createElement(material_1.FormControl, __assign({}, rest, { sx: { m: 1, width: 300 } }),
        React.createElement(material_1.InputLabel, { id: 'demo-multiple-checkbox-label' }, label),
        React.createElement(material_1.Select, { labelId: 'demo-multiple-checkbox-label', id: 'demo-multiple-checkbox', multiple: true, value: string, onChange: handleChange, input: React.createElement(material_1.OutlinedInput, { label: label }), renderValue: function (selected) {
                return displayValues(selected);
            }, MenuProps: {
                PaperProps: {
                    className: styles.menu
                }
            } }, items.map(function (item, k) { return (React.createElement(material_1.MenuItem, { key: k, value: item },
            React.createElement(material_1.Checkbox, { checked: string.indexOf(item) > -1 }),
            React.createElement(material_1.ListItemText, { primary: item.name }))); }))));
};
exports.CustomSelect = CustomSelect;
