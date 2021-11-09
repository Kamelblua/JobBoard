"use strict";
exports.__esModule = true;
exports.Candidate = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var Candidate_styles_1 = require("./styles/Candidate.styles");
var react_router_1 = require("react-router");
var api_1 = require("api/dist/api");
var react_hook_form_1 = require("react-hook-form");
var Input_1 = require("components/Elements/Input");
var Candidate = function () {
    var styles = Candidate_styles_1.useStyles();
    var id = react_router_1.useParams().id;
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit;
    // States
    var _b = react_1.useState(false), showPassword = _b[0], setShowPassword = _b[1];
    var _c = react_1.useState({}), errors = _c[0], setErrors = _c[1];
    var _d = react_1.useState(false), loading = _d[0], setLoading = _d[1];
    var onSubmit = function (data) {
        setLoading(true);
        api_1.api.admin
            .updateCandidate(id, data)
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
        api_1.api.candidate
            .get(id)
            .then(function (res) {
            console.log(res);
        })["catch"](function (err) {
            console.error(err);
        });
    }, [id]);
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement("form", { className: styles.form, noValidate: true, autoComplete: 'off', onSubmit: handleSubmit(onSubmit) },
            React.createElement(Input_1.Input, { error: typeof errors.email !== "undefined", errors: errors, label: 'Email', register: register, identifier: 'email' }),
            React.createElement(Input_1.Input, { error: typeof errors.graduation_year !== "undefined", errors: errors, label: 'Graduation year', register: register, identifier: 'graduation_year' }),
            React.createElement(Input_1.Input, { error: typeof errors.education_name !== "undefined", errors: errors, label: 'Education name', register: register, identifier: 'education_name' }),
            React.createElement(material_1.Button, { type: 'submit', color: 'primary', variant: 'outlined' }, "Update"))));
};
exports.Candidate = Candidate;
