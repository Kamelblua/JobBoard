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
exports.Profile = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
var ai_1 = require("react-icons/ai");
var fi_1 = require("react-icons/fi");
// Hookes
var Profile_styles_1 = require("./styles/Profile.styles");
var react_hook_form_1 = require("react-hook-form");
var react_toastify_1 = require("react-toastify");
// Other
var api_1 = require("api/api");
var ProfileSkeleton_1 = require("../Skeletons/ProfileSkeleton");
var react_helmet_1 = require("react-helmet");
var Profile = function () {
    var _a;
    var styles = Profile_styles_1.useStyles();
    var _b = react_hook_form_1.useForm(), register = _b.register, handleSubmit = _b.handleSubmit;
    var embedRef = react_1.useRef(null);
    var inputRef = react_1.useRef(null);
    var _c = react_1.useState(true), loading = _c[0], setLoading = _c[1];
    var _d = react_1.useState(false), hover = _d[0], setHover = _d[1];
    var _e = react_1.useState({}), errors = _e[0], setErrors = _e[1];
    var _f = react_1.useState(null), file = _f[0], setFile = _f[1];
    var _g = react_1.useState(null), profile = _g[0], setProfile = _g[1];
    var onSubmit = function (data) {
        var id = react_toastify_1.toast.loading("Updating...");
        var formData = new FormData();
        if (file) {
            formData.append("resume", file);
        }
        Object.keys(data).forEach(function (i) {
            formData.append(i, data[i]);
        });
        api_1.api.candidate
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
        var reader = new FileReader();
        reader.addEventListener("load", function () {
            embedRef.current.src = reader.result;
        }, false);
        reader.readAsDataURL(e.target.files[0]);
    };
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.candidate
            .profile()
            .then(function (res) {
            setProfile(res.data);
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
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | My profile")),
        (file || (profile === null || profile === void 0 ? void 0 : profile.resume)) && !loading ? (React.createElement(material_1.Box, { className: styles.filePreviewContainer },
            React.createElement("embed", { className: styles.filePreview, ref: embedRef, src: (_a = profile === null || profile === void 0 ? void 0 : profile.resume) === null || _a === void 0 ? void 0 : _a.location, type: 'application/pdf' }),
            React.createElement("label", { htmlFor: 'file-upload' },
                React.createElement("input", { onChange: handleChange, style: { display: "none" }, ref: inputRef, accept: 'application/pdf', id: 'file-upload', type: 'file' }),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.Button, { onClick: function () {
                            var _a;
                            (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.click();
                        }, variant: 'outlined', className: styles.uploadButton }, "Choose another file"))))) : !file && !(profile === null || profile === void 0 ? void 0 : profile.resume) && loading ? (React.createElement(material_1.Skeleton, { className: styles.previewBoxSkeleton, variant: 'rectangular', width: '50%', height: 750 })) : (React.createElement(material_1.Box, { className: styles.uploadBox, onMouseEnter: function () {
                setHover(true);
            } },
            React.createElement("label", { htmlFor: 'contained-button-file' },
                React.createElement("input", { onChange: handleChange, style: { display: "none" }, accept: 'application/pdf', id: 'contained-button-file', type: 'file' }),
                React.createElement(material_1.Box, { className: styles.uploadOverlay + " " + (hover && styles.active), onMouseLeave: function () {
                        setHover(false);
                    } },
                    React.createElement(fi_1.FiUpload, { fontSize: 50 }),
                    React.createElement(material_1.Typography, { className: styles.uploadText, variant: 'caption' }, "Choose file"))),
            React.createElement(ai_1.AiOutlineFilePdf, { fontSize: 50 }),
            React.createElement(material_1.Typography, { className: styles.uploadText, variant: 'caption' }, "Upload your resume"))),
        React.createElement("form", { onSubmit: handleSubmit(onSubmit), className: styles.form }, profile && !loading ? (React.createElement(react_1.Fragment, null,
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputFull, id: 'email', label: 'Email address', variant: 'standard' }, register("email"), { defaultValue: profile === null || profile === void 0 ? void 0 : profile.email, helperText: errors.email, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'graduation_year', label: 'Graduation year', variant: 'standard' }, register("graduation_year"), { defaultValue: profile === null || profile === void 0 ? void 0 : profile.graduation_year, helperText: errors.graduation_year, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.TextField, __assign({ className: styles.input + " " + styles.inputHalf, id: 'education_name', label: 'Education name', variant: 'standard' }, register("education_name"), { defaultValue: profile === null || profile === void 0 ? void 0 : profile.education_name, helperText: errors.education_name, FormHelperTextProps: { sx: { color: "red" } } })),
            React.createElement(material_1.Button, { className: styles.updateButton, type: 'submit', variant: 'outlined', color: 'success' }, "Update"))) : (React.createElement(ProfileSkeleton_1.ProfileSkeleton, null)))));
};
exports.Profile = Profile;
