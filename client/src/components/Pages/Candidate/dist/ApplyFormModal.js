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
exports.ApplyFormModal = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
var hi_1 = require("react-icons/hi");
// Hooks
var GlobalContext_1 = require("providers/GlobalContext");
var ApplyFormModal_styles_1 = require("./styles/ApplyFormModal.styles");
var react_hook_form_1 = require("react-hook-form");
// Others
var api_1 = require("api/api");
var auth_1 = require("api/auth");
var ApplyFormModal = function () {
    var _a;
    var styles = ApplyFormModal_styles_1.useStyles();
    var embedRef = react_1.useRef(null);
    var inputRef = react_1.useRef(null);
    var _b = react_1.useContext(GlobalContext_1.GlobalContext), state = _b.state, setState = _b.setState;
    var _c = react_hook_form_1.useForm(), register = _c.register, handleSubmit = _c.handleSubmit;
    var _d = react_1.useState(null), file = _d[0], setFile = _d[1];
    var _e = react_1.useState({}), errors = _e[0], setErrors = _e[1];
    react_1.useEffect(function () {
        if (state === null || state === void 0 ? void 0 : state.openModal) {
            document.body.style.overflowY = "hidden";
        }
    }, [state]);
    var onSubmit = function (data) {
        var _a, _b;
        console.log(data, file);
        var formData = new FormData();
        if (file) {
            formData.append("resume", file);
        }
        Object.keys(data).forEach(function (i) {
            formData.append(i, data[i]);
        });
        api_1.api.candidate
            .apply((_b = (_a = state) === null || _a === void 0 ? void 0 : _a.selectedAdvertisement) === null || _b === void 0 ? void 0 : _b.id, formData)
            .then(function (res) {
            if (setState) {
                setState(__assign(__assign({}, state), { openModal: false, selectedAdvertisement: null }));
            }
        })["catch"](function (err) {
            var _a, _b;
            console.error(err);
            if ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data.errors) {
                setErrors((_b = err.response) === null || _b === void 0 ? void 0 : _b.data.errors);
            }
        });
    };
    var close = function (e) {
        if (setState && e.target.dataset.utility === "close") {
            document.body.style.overflowY = "auto";
            setState(__assign(__assign({}, state), { openModal: false, selectedAdvertisement: null }));
        }
    };
    var handleChange = function (e) {
        setFile(e.target.files[0]);
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            embedRef.current.src = reader.result;
        }, false);
        reader.readAsDataURL(e.target.files[0]);
    };
    return (React.createElement(material_1.Box, { onClick: function (e) {
            close(e);
        }, className: styles.overlay + " " + (!(state === null || state === void 0 ? void 0 : state.openModal) && styles.closed), "data-utility": 'close' },
        React.createElement(material_1.Box, { className: styles.container },
            React.createElement(material_1.IconButton, { onClick: function (e) {
                    close(e);
                }, "data-utility": 'close', className: styles.closeButton, color: 'error', component: 'span' },
                React.createElement(hi_1.HiOutlineX, null)),
            React.createElement(material_1.Typography, { variant: 'h3' },
                "Apply to ", (_a = state === null || state === void 0 ? void 0 : state.selectedAdvertisement) === null || _a === void 0 ? void 0 :
                _a.title),
            React.createElement("form", { className: styles.form, onSubmit: handleSubmit(onSubmit) },
                React.createElement(react_1.Fragment, null,
                    auth_1.auth.isUnauthenticated() && (React.createElement(react_1.Fragment, null,
                        React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputFull, id: 'email', label: 'Email address', variant: 'standard' }, register("email"), { helperText: errors.email, FormHelperTextProps: { sx: { color: "red" } } })),
                        React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'password', label: 'Password', variant: 'standard' }, register("password"), { helperText: errors.password, FormHelperTextProps: { sx: { color: "red" } } })),
                        React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'graduation_year', label: 'Graduation year', variant: 'standard' }, register("graduation_year"), { helperText: errors.graduation_year, FormHelperTextProps: { sx: { color: "red" } } })),
                        React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'education_name', label: 'Education name', variant: 'standard' }, register("education_name"), { helperText: errors.education_name, FormHelperTextProps: { sx: { color: "red" } } })))),
                    React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputFull, id: 'more', label: 'More', placeholder: 'More ...', multiline: true, variant: 'standard' }, register("more"), { helperText: errors.more, FormHelperTextProps: { sx: { color: "red" } } })),
                    React.createElement("label", { htmlFor: 'file-upload' },
                        React.createElement("input", { onChange: handleChange, style: { display: "none" }, ref: inputRef, accept: 'application/pdf', id: 'file-upload', type: 'file' }),
                        React.createElement(material_1.Box, null,
                            React.createElement(material_1.Button, { onClick: function () {
                                    var _a;
                                    (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
                                }, variant: 'outlined', className: styles.uploadButton, endIcon: React.createElement(hi_1.HiOutlineUpload, null) }, "Choose resume"))),
                    React.createElement("span", { className: styles.error }, errors.resume),
                    file && React.createElement("embed", { className: styles.filePreview, ref: embedRef, type: 'application/pdf' }),
                    React.createElement(material_1.Button, { className: styles.submitButton, type: 'submit', variant: 'outlined', color: 'success' }, "Submit"))))));
};
exports.ApplyFormModal = ApplyFormModal;
