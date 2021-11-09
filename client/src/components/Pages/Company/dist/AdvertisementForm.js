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
exports.AdvertisementForm = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var AdvertisementForm_styles_1 = require("./styles/AdvertisementForm.styles");
var react_hook_form_1 = require("react-hook-form");
var api_1 = require("api/api");
var Input_1 = require("components/Elements/Input");
var CustomSelect_1 = require("components/Elements/CustomSelect");
var AdvertisementForm = function () {
    var styles = AdvertisementForm_styles_1.useStyles();
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    // States
    var _b = react_1.useState({}), errors = _b[0], setErrors = _b[1];
    var _c = react_1.useState([]), selectedPositionIds = _c[0], setSelectedPositionIds = _c[1];
    var _d = react_1.useState([]), selectedLanguageIds = _d[0], setSelectedLanguageIds = _d[1];
    var _e = react_1.useState([]), positions = _e[0], setPositions = _e[1];
    var _f = react_1.useState([]), languages = _f[0], setLanguages = _f[1];
    var _g = react_1.useState(false), loading = _g[0], setLoading = _g[1];
    // Custom methods
    var onSubmit = function (data) {
        setLoading(true);
        data.positions = selectedPositionIds;
        data.languages = selectedLanguageIds;
        api_1.api.company
            .add(data)
            .then(function (res) {
            if (res.status === 201) {
                document.location.href = "/admin/dashboard";
            }
        })["catch"](function (err) {
            var _a, _b;
            console.error(err);
            if ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data.errors) {
                setErrors((_b = err.response) === null || _b === void 0 ? void 0 : _b.data.errors);
            }
        })["finally"](function () { return setLoading(false); });
    };
    react_1.useEffect(function () {
        api_1.api.shared.positions().then(function (res) {
            setPositions(res.data.items);
        });
        api_1.api.shared.languages().then(function (res) {
            setLanguages(res.data.items);
        });
    }, []);
    return (React.createElement(material_1.Box, null,
        React.createElement("form", { className: styles.form, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit(onSubmit) },
            React.createElement(Input_1.Input, { error: typeof errors.title !== "undefined", errors: errors, label: 'Title', register: register, identifier: 'title', className: styles.input + " " + styles.inputFull }),
            React.createElement(Input_1.Input, { error: typeof errors.text !== "undefined", errors: errors, label: 'Description', register: register, identifier: 'text', multiline: true, className: styles.input + " " + styles.inputFull }),
            React.createElement(Input_1.Input, { error: typeof errors.city !== "undefined", errors: errors, label: 'City', register: register, identifier: 'city', multiline: true, className: styles.input + " " + styles.inputHalf }),
            React.createElement(material_1.Box, { className: styles.input + " " + styles.inputHalf },
                React.createElement(material_1.FormControl, { error: typeof errors.positions !== "undefined" },
                    React.createElement(material_1.FormControlLabel, { control: React.createElement(material_1.Checkbox, __assign({}, register("remote"), { defaultChecked: true })), label: 'Remote available' }),
                    React.createElement(material_1.FormHelperText, null, errors.positions))),
            React.createElement(CustomSelect_1.CustomSelect, { className: styles.input, label: 'Position', id: 'position', items: positions, callback: setSelectedPositionIds }),
            React.createElement("span", null, errors.positions),
            React.createElement(CustomSelect_1.CustomSelect, { className: styles.input, label: 'Language', id: 'language', items: languages, callback: setSelectedLanguageIds }),
            React.createElement("span", null, errors.languages),
            React.createElement(material_1.Box, { className: styles.submitContainer },
                React.createElement(material_1.Button, { className: styles.submitButton, type: 'submit', color: 'success', variant: 'contained' }, "Submit")))));
};
exports.AdvertisementForm = AdvertisementForm;
