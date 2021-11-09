"use strict";
exports.__esModule = true;
exports.Applications = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
var Application_1 = require("components/Modules/Application");
var ApplicationSkeleton_1 = require("components/Pages/Skeletons/ApplicationSkeleton");
// Hooks
var Applications_styles_1 = require("./styles/Applications.styles");
var api_1 = require("api/api");
var react_helmet_1 = require("react-helmet");
var Applications = function () {
    var styles = Applications_styles_1.useStyles();
    var _a = react_1.useState(true), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(null), applications = _b[0], setApplications = _b[1];
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.candidate
            .applications()
            .then(function (res) {
            console.log(res);
            setApplications(res.data.items);
        })["catch"](function (err) {
            console.error(err);
        })["finally"](function () {
            setLoading(false);
        });
    }, []);
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Your applications")),
        React.createElement(material_1.Typography, { variant: 'h3' }, "My applications"),
        React.createElement(material_1.Box, { className: styles.applicationContainer }, loading || !applications ? (React.createElement(react_1.Fragment, null,
            React.createElement(ApplicationSkeleton_1.ApplicationSkeleton, null),
            React.createElement(ApplicationSkeleton_1.ApplicationSkeleton, null),
            React.createElement(ApplicationSkeleton_1.ApplicationSkeleton, null))) : (applications.map(function (a, k) { return React.createElement(Application_1.Application, { application: a, key: k }); })))));
};
exports.Applications = Applications;
