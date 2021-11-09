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
exports.Input = void 0;
var material_1 = require("@mui/material");
var Input_styles_1 = require("./styles/Input.styles");
var Input = function (_a) {
    var error = _a.error, errors = _a.errors, label = _a.label, type = _a.type, register = _a.register, className = _a.className, identifier = _a.identifier, startIcon = _a.startIcon, endIcon = _a.endIcon, rest = __rest(_a, ["error", "errors", "label", "type", "register", "className", "identifier", "startIcon", "endIcon"]);
    var styles = Input_styles_1.useStyles();
    return (React.createElement(material_1.TextField, __assign({}, rest, { error: error, helperText: errors[identifier], FormHelperTextProps: { sx: { color: "red" } }, label: label, type: type }, register(identifier, { required: true }), { className: styles.textField + " " + className, InputProps: {
            sx: { margin: "0px 10px" },
            className: styles.input,
            startAdornment: startIcon,
            endAdornment: endIcon
        } })));
};
exports.Input = Input;
Input.defaultProps = {
    type: "text"
};
