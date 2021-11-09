"use strict";
exports.__esModule = true;
exports.Login = void 0;
var react_1 = require("react");
var system_1 = require("@mui/system");
var Input_1 = require("components/Elements/Input");
var Login_styles_1 = require("./styles/Login.styles");
var material_1 = require("@mui/material");
var hi_1 = require("react-icons/hi");
var react_hook_form_1 = require("react-hook-form");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("api/api");
var react_helmet_1 = require("react-helmet");
var Login = function () {
    var styles = Login_styles_1.useStyles();
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    // States
    var _b = react_1.useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = react_1.useState({}), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    // Custom methods
    var onSubmit = function (data) {
        setLoading(true);
        api_1.api.admin
            .login(data)
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
    var changePasswordVisibility = function () {
        setShowPassword(!showPassword);
    };
    var PasswordIcon = function () {
        return React.createElement(material_1.IconButton, { onClick: changePasswordVisibility }, showPassword ? React.createElement(hi_1.HiEyeOff, null) : React.createElement(hi_1.HiEye, null));
    };
    return (React.createElement(system_1.Box, { className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Login as administrator")),
        React.createElement(react_router_dom_1.Link, { to: '/' },
            React.createElement("img", { className: styles.logo, src: '/assets/images/admin-logo.svg', alt: 'logo' })),
        React.createElement(system_1.Box, { className: styles.flexContainer },
            React.createElement(system_1.Box, { className: styles.formContainer },
                React.createElement(material_1.Typography, { className: styles.title, variant: 'h4' }, "Login to your account"),
                React.createElement("form", { className: styles.form, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit(onSubmit) },
                    React.createElement(Input_1.Input, { error: typeof errors.email !== "undefined", errors: errors, label: 'Email', register: register, identifier: 'email', startIcon: React.createElement(material_1.InputAdornment, { position: 'start' },
                            React.createElement(hi_1.HiAtSymbol, null)) }),
                    React.createElement(Input_1.Input, { error: typeof errors.password !== "undefined", errors: errors, label: 'Password', type: showPassword ? "text" : "password", register: register, identifier: 'password', endIcon: React.createElement(material_1.InputAdornment, { position: 'end' },
                            React.createElement(PasswordIcon, null)) }),
                    React.createElement(system_1.Box, { className: styles.submitContainer },
                        React.createElement(material_1.Button, { type: 'submit', className: styles.submitButton, disabled: loading, variant: 'outlined' }, "Login")))),
            React.createElement("img", { className: styles.image, src: '/assets/images/login-admin.svg', alt: 'logo' }))));
};
exports.Login = Login;
