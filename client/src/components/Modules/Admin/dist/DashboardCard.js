"use strict";
exports.__esModule = true;
exports.DashboardCard = void 0;
// Components
var material_1 = require("@mui/material");
// Hooks
var DashboardCard_styles_1 = require("./styles/DashboardCard.styles");
var DashboardCard = function (_a) {
    var count = _a.count, title = _a.title, loading = _a.loading;
    var styles = DashboardCard_styles_1.useStyles();
    return (React.createElement(material_1.Box, { className: styles.card },
        React.createElement(material_1.Typography, { className: styles.title }, title),
        loading ? (React.createElement(material_1.LinearProgress, { className: styles.loading })) : (React.createElement(material_1.Typography, { className: styles.count }, count))));
};
exports.DashboardCard = DashboardCard;
