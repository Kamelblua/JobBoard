"use strict";
exports.__esModule = true;
exports.Register = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
var hi_1 = require("react-icons/hi");
// Hooks
var Register_styles_1 = require("./styles/Register.styles");
var react_hook_form_1 = require("react-hook-form");
// Others
var api_1 = require("api/api");
var react_router_dom_1 = require("react-router-dom");
var Input_1 = require("components/Elements/Input");
var react_helmet_1 = require("react-helmet");
var Register = function () {
    // Load styles
    var styles = Register_styles_1.useStyles();
    // Hooks
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    // States
    var _b = react_1.useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = react_1.useState({}), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState(null), selectedTypeId = _d[0], setSelectedTypeId = _d[1];
    var _e = react_1.useState(null), selectedIndustryId = _e[0], setSelectedIndustryId = _e[1];
    var _f = react_1.useState("1-10"), employeeRange = _f[0], setEmployeeRange = _f[1];
    var _g = react_1.useState([]), industries = _g[0], setIndustries = _g[1];
    var _h = react_1.useState([]), types = _h[0], setTypes = _h[1];
    // Custom methods
    var onSubmit = function (data) {
        data.employees_range = employeeRange;
        if (selectedIndustryId && selectedTypeId) {
            data.industry = selectedIndustryId;
            data.type = selectedTypeId;
        }
        api_1.api.company
            .register(data)
            .then(function (res) {
            if (res.status === 201) {
                document.location.href = "/login/company";
            }
            return false;
        })["catch"](function (err) {
            var _a, _b;
            if ((_a = err.response) === null || _a === void 0 ? void 0 : _a.data.errors) {
                setErrors((_b = err.response) === null || _b === void 0 ? void 0 : _b.data.errors);
            }
            return false;
        });
    };
    var changePasswordVisibility = function () {
        setShowPassword(!showPassword);
    };
    var PasswordIcon = function () {
        return React.createElement(material_1.IconButton, { onClick: changePasswordVisibility }, showPassword ? React.createElement(hi_1.HiEyeOff, null) : React.createElement(hi_1.HiEye, null));
    };
    react_1.useEffect(function () {
        api_1.api.shared.industries().then(function (res) {
            setIndustries(res.data.items);
        });
        api_1.api.shared.types().then(function (res) {
            setTypes(res.data.items);
        });
    }, []);
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Register as company")),
        React.createElement(react_router_dom_1.Link, { to: '/' },
            React.createElement("img", { className: styles.logo, src: '/assets/images/company-logo.svg', alt: 'logo' })),
        React.createElement(material_1.Box, { className: styles.formContainer },
            React.createElement("form", { noValidate: true, autoComplete: 'off', onSubmit: handleSubmit(onSubmit) },
                React.createElement(material_1.Typography, { variant: 'h4' }, "Create your credentials"),
                React.createElement(Input_1.Input, { error: typeof errors.email !== "undefined", errors: errors, label: 'Email', register: register, identifier: 'email', startIcon: React.createElement(material_1.InputAdornment, { position: 'start' },
                        React.createElement(hi_1.HiAtSymbol, null)), className: styles.inputFull }),
                React.createElement(Input_1.Input, { error: typeof errors.password !== "undefined", errors: errors, label: 'Password', type: showPassword ? "text" : "password", register: register, identifier: 'password', endIcon: React.createElement(material_1.InputAdornment, { position: 'end' },
                        React.createElement(PasswordIcon, null)), className: styles.inputHalf }),
                React.createElement(Input_1.Input, { error: typeof errors.password_confirmation !== "undefined", errors: errors, label: 'Password confirmation', type: showPassword ? "text" : "password", register: register, identifier: 'password_confirmation', className: styles.inputHalf }),
                React.createElement(material_1.Typography, { variant: 'h4' }, "Your company's details"),
                React.createElement(Input_1.Input, { error: typeof errors.name !== "undefined", errors: errors, label: 'Name', register: register, identifier: 'name', className: styles.inputFull }),
                React.createElement(Input_1.Input, { error: typeof errors.contact_email !== "undefined", errors: errors, label: 'Contact email', register: register, identifier: 'contact_email', className: styles.inputHalf }),
                React.createElement(Input_1.Input, { error: typeof errors.contact_phone !== "undefined", errors: errors, label: 'Contact phone', register: register, identifier: 'contact_phone', className: styles.inputHalf }),
                React.createElement(Input_1.Input, { error: typeof errors.address !== "undefined", errors: errors, label: 'Address', register: register, identifier: 'address', className: styles.inputFull }),
                React.createElement(Input_1.Input, { error: typeof errors.city !== "undefined", errors: errors, label: 'City', register: register, identifier: 'city', className: styles.inputThird }),
                React.createElement(Input_1.Input, { error: typeof errors.country !== "undefined", errors: errors, label: 'Country', register: register, identifier: 'country', className: styles.inputThird }),
                React.createElement(Input_1.Input, { error: typeof errors.postal_code !== "undefined", errors: errors, label: 'Postal code', register: register, identifier: 'postal_code', className: styles.inputThird }),
                React.createElement(material_1.FormControl, null,
                    React.createElement(material_1.InputLabel, { id: 'demo-simple-select-helper-label' }, "Industry"),
                    React.createElement(material_1.Select, { labelId: 'demo-simple-select-helper-label', id: 'demo-simple-select-helper', label: 'Industry', onChange: function (e) {
                            setSelectedIndustryId(e.target.value);
                        } }, industries.map(function (i, k) { return (React.createElement(material_1.MenuItem, { key: k, value: i.id }, i.name)); }))),
                React.createElement(material_1.FormControl, null,
                    React.createElement(material_1.InputLabel, { id: 'demo-simple-select-helper-label' }, "Type"),
                    React.createElement(material_1.Select, { labelId: 'demo-simple-select-helper-label', id: 'demo-simple-select-helper', label: 'Type', onChange: function (e) {
                            setSelectedTypeId(e.target.value);
                        } }, types.map(function (t, k) { return (React.createElement(material_1.MenuItem, { key: k, value: t.id }, t.name)); }))),
                React.createElement(material_1.FormControl, null,
                    React.createElement(material_1.InputLabel, { id: 'demo-simple-select-helper-label' }, "Employee range"),
                    React.createElement(material_1.Select, { labelId: 'demo-simple-select-helper-label', id: 'demo-simple-select-helper', label: 'Employee range', value: employeeRange, onChange: function (e) {
                            setEmployeeRange(e.target.value);
                        } },
                        React.createElement(material_1.MenuItem, { value: '1-10' }, "1-10"),
                        React.createElement(material_1.MenuItem, { value: '11-100' }, "11-100"),
                        React.createElement(material_1.MenuItem, { value: '101-1000' }, "101-1000"),
                        React.createElement(material_1.MenuItem, { value: '1000+' }, "1000+"))),
                React.createElement(material_1.Button, { type: 'submit' }, "Submit")))));
};
exports.Register = Register;
