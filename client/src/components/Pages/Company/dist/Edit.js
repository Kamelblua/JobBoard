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
exports.Edit = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
// Hooks
var Edit_styles_1 = require("./styles/Edit.styles");
var react_hook_form_1 = require("react-hook-form");
var react_toastify_1 = require("react-toastify");
var api_1 = require("api/api");
var lodash_1 = require("lodash");
var employeesCountRange = ["1-10", "11-100", "101-1000", "1000+"];
var Edit = function () {
    var _a, _b, _c, _d;
    var styles = Edit_styles_1.useStyles();
    var _e = react_hook_form_1.useForm(), register = _e.register, handleSubmit = _e.handleSubmit;
    var imgRef = react_1.useRef(null);
    var inputRef = react_1.useRef(null);
    var _f = react_1.useState([]), types = _f[0], setTypes = _f[1];
    var _g = react_1.useState([]), industries = _g[0], setIndustries = _g[1];
    var _h = react_1.useState({}), company = _h[0], setCompany = _h[1];
    var _j = react_1.useState(true), loading = _j[0], setLoading = _j[1];
    var _k = react_1.useState({}), errors = _k[0], setErrors = _k[1];
    var _l = react_1.useState(null), file = _l[0], setFile = _l[1];
    var onSubmit = function (data) {
        var id = react_toastify_1.toast.loading("Updating...");
        var formData = new FormData();
        if (file) {
            formData.append("logo", file);
        }
        Object.keys(data).forEach(function (i) {
            formData.append(i, data[i]);
        });
        api_1.api.company
            .update(formData)
            .then(function (res) {
            react_toastify_1.toast.update(id, {
                type: "success",
                render: "Your details have been updated!",
                isLoading: false,
                theme: "colored",
                autoClose: 5000
            });
        })["catch"](function (err) {
            var _a, _b, _c;
            if (((_a = err.response) === null || _a === void 0 ? void 0 : _a.status) === 500) {
                react_toastify_1.toast.update(id, {
                    type: "error",
                    render: "500: Server error. Please try again later.",
                    isLoading: false,
                    theme: "colored",
                    autoClose: 5000
                });
                return;
            }
            if ((_b = err.response) === null || _b === void 0 ? void 0 : _b.data.errors) {
                react_toastify_1.toast.update(id, {
                    type: "warning",
                    render: "There are some errors.",
                    isLoading: false,
                    theme: "colored",
                    autoClose: 1000
                });
                setErrors((_c = err.response) === null || _c === void 0 ? void 0 : _c.data.errors);
            }
        });
    };
    var handleChange = function (e) {
        setFile(e.target.files[0]);
        if (imgRef.current.querySelector("img")) {
            imgRef.current.querySelector("img").src = window.URL.createObjectURL(e.target.files[0]);
        }
        else {
            imgRef.current.innerHTML = "";
            var img = document.createElement("img");
            img.src = window.URL.createObjectURL(e.target.files[0]);
            img.classList.add("MuiAvatar-img");
            img.classList.add("css-1pqm26d-MuiAvatar-img");
            imgRef.current.append(img);
        }
    };
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.shared.industries().then(function (res) {
            setIndustries(res.data.items);
        });
        api_1.api.shared.types().then(function (res) {
            setTypes(res.data.items);
        });
        api_1.api.company
            .profile()
            .then(function (res) {
            setCompany(res.data);
        })["catch"](function (err) {
            react_toastify_1.toast.error("500: Server error. Please try again later.", {
                type: "error",
                isLoading: false,
                theme: "colored",
                autoClose: 5000
            });
        })["finally"](function () { return setLoading(false); });
    }, []);
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement(material_1.Box, { className: styles.leftContainer },
            React.createElement(material_1.Avatar, { src: (_a = company === null || company === void 0 ? void 0 : company.logo) === null || _a === void 0 ? void 0 : _a.location, ref: imgRef, className: styles.logo, alt: company === null || company === void 0 ? void 0 : company.name }),
            React.createElement("label", { htmlFor: 'file-upload' },
                React.createElement("input", { onChange: handleChange, style: { display: "none" }, ref: inputRef, accept: 'application/png, application/jpg, application/jpeg', id: 'file-upload', type: 'file' }),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Button, { onClick: function () {
                            var _a;
                            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
                        }, variant: 'outlined' }, "Update your logo"))),
            !loading && (React.createElement(react_1.Fragment, null,
                React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputFull, id: 'name', label: 'Name', defaultValue: company.name, variant: 'standard' }, register("name"), { helperText: errors.name, FormHelperTextProps: { sx: { color: "red" } } })),
                React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputFull, id: 'email', label: 'Email address', defaultValue: (_b = company.credentials) === null || _b === void 0 ? void 0 : _b.email, variant: 'standard' }, register("email"), { helperText: errors.email, FormHelperTextProps: { sx: { color: "red" } } }))))),
        React.createElement(material_1.Box, { className: styles.rightContainer }, !loading && (React.createElement("form", { className: styles.form, onSubmit: handleSubmit(onSubmit) },
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputFull, id: 'address', label: 'Address', defaultValue: company.address, variant: 'standard' }, register("address"), { helperText: errors.address, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputThird, id: 'city', label: 'City', defaultValue: company.city, variant: 'standard' }, register("city"), { helperText: errors.city, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputThird, id: 'country', label: 'Country', defaultValue: company.country, variant: 'standard' }, register("country"), { helperText: errors.country, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputThird, id: 'postal_code', label: 'Postal code', defaultValue: company.postal_code, variant: 'standard' }, register("postal_code"), { helperText: errors.postal_code, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.Box, { className: styles.selectContainer },
                React.createElement(material_1.FormControl, null,
                    React.createElement(material_1.InputLabel, { sx: {
                            margin: "15px"
                        }, id: 'demo-simple-select-label' }, "Employees range"),
                    React.createElement(material_1.Select, __assign({ className: styles.select, labelId: 'demo-simple-select-label', id: 'demo-simple-select', value: company.employees_range, label: 'Employees range' }, register("employees_range"), { onChange: function (event) {
                            setCompany(function (prevState) { return (__assign(__assign({}, prevState), { employees_range: event.target.value })); });
                        } }), employeesCountRange.map(function (v, k) { return (React.createElement(material_1.MenuItem, { value: v, key: k }, v)); }))),
                React.createElement(material_1.FormControl, null,
                    React.createElement(material_1.InputLabel, { sx: {
                            margin: "15px"
                        }, id: 'demo-simple-select-label' }, "Type"),
                    React.createElement(material_1.Select, __assign({ className: styles.select, labelId: 'demo-simple-select-label', id: 'demo-simple-select', value: (_c = company.type) === null || _c === void 0 ? void 0 : _c.id.toString(), label: 'Type' }, register("type"), { onChange: function (event) {
                            setCompany(function (prevState) { return (__assign(__assign({}, prevState), { type: lodash_1["default"].find(types, { id: event.target.value }) })); });
                        } }), types.map(function (v, k) { return (React.createElement(material_1.MenuItem, { value: v.id, key: k }, v.name)); }))),
                React.createElement(material_1.FormControl, null,
                    React.createElement(material_1.InputLabel, { sx: {
                            margin: "15px"
                        }, id: 'demo-simple-select-label' }, "Industry"),
                    React.createElement(material_1.Select, __assign({ className: styles.select, labelId: 'demo-simple-select-label', id: 'demo-simple-select', value: (_d = company.industry) === null || _d === void 0 ? void 0 : _d.id.toString(), label: 'Industry' }, register("industry"), { onChange: function (event) {
                            setCompany(function (prevState) { return (__assign(__assign({}, prevState), { industry: lodash_1["default"].find(industries, { id: event.target.value }) })); });
                        } }), industries.map(function (v) { return (React.createElement(material_1.MenuItem, { value: v.id, key: v.id }, v.name)); })))),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'website_link', label: 'Website link', defaultValue: company.website_link, variant: 'standard' }, register("website_link"), { helperText: errors.website_link, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'facebook_link', label: 'Facebook link', defaultValue: company.facebook_link, variant: 'standard' }, register("facebook_link"), { helperText: errors.facebook_link, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'linkedin_link', label: 'Linkedin link', defaultValue: company.linkedin_link, variant: 'standard' }, register("linkedin_link"), { helperText: errors.linkedin_link, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'twitter_link', label: 'Twitter link', defaultValue: company.twitter_link, variant: 'standard' }, register("twitter_link"), { helperText: errors.twitter_link, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'youtube_link', label: 'Youtube link', defaultValue: company.youtube_link, variant: 'standard' }, register("youtube_link"), { helperText: errors.youtube_link, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'instagram_link', label: 'Instagram link', defaultValue: company.instagram_link, variant: 'standard' }, register("instagram_link"), { helperText: errors.instagram_link, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.Button, { type: 'submit', className: styles.submitButton }, "Update"))))));
};
exports.Edit = Edit;
