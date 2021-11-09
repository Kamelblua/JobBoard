"use strict";
exports.__esModule = true;
exports.Dashboard = void 0;
// React
var react_1 = require("react");
var system_1 = require("@mui/system");
var material_1 = require("@mui/material");
var auth_1 = require("api/auth");
var react_router_dom_1 = require("react-router-dom");
var api_1 = require("api/api");
var DashboardCard_1 = require("components/Modules/Admin/DashboardCard");
var Dashboard_styles_1 = require("./styles/Dashboard.styles");
var react_helmet_1 = require("react-helmet");
var Dashboard = function () {
    var _a, _b, _c, _d;
    var styles = Dashboard_styles_1.useStyles();
    var _e = react_1.useState(true), loading = _e[0], setLoading = _e[1];
    var _f = react_1.useState(null), data = _f[0], setData = _f[1];
    var logout = function () {
        api_1.api.candidate.logout()["finally"](function () {
            setTimeout(function () {
                document.location.href = "/";
            }, 750);
        });
    };
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.admin
            .dashboard()
            .then(function (res) {
            setData(res.data);
        })["catch"](function (err) { })["finally"](function () {
            setLoading(false);
        });
    }, []);
    return (React.createElement(system_1.Box, null,
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Admin Dashboard")),
        React.createElement(material_1.Typography, { variant: 'h4' }, "Dashboard"),
        React.createElement(material_1.Typography, { variant: 'subtitle1' },
            "Welcome. You're logged in as ",
            auth_1.auth.getEmail(),
            ". Click",
            " ",
            React.createElement(react_router_dom_1.Link, { to: '#', onClick: logout }, "here"),
            " ",
            "to log out."),
        React.createElement(system_1.Box, { className: styles.container },
            React.createElement(DashboardCard_1.DashboardCard, { loading: loading, count: (_a = data) === null || _a === void 0 ? void 0 : _a.candidate_count, title: 'Registered candidates' }),
            React.createElement(DashboardCard_1.DashboardCard, { loading: loading, count: (_b = data) === null || _b === void 0 ? void 0 : _b.company_count, title: 'Registered companies' }),
            React.createElement(DashboardCard_1.DashboardCard, { loading: loading, count: (_c = data) === null || _c === void 0 ? void 0 : _c.application_count, title: 'Submitted applications to advertisements' }),
            React.createElement(DashboardCard_1.DashboardCard, { loading: loading, count: (_d = data) === null || _d === void 0 ? void 0 : _d.advertisement_count, title: 'Advertisements created' }))));
};
exports.Dashboard = Dashboard;
