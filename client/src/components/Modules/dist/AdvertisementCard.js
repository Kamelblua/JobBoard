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
exports.AdvertisementCard = void 0;
// React
var react_1 = require("react");
// Components
var material_1 = require("@mui/material");
var hi_1 = require("react-icons/hi");
// Hooks
var react_router_1 = require("react-router");
var AdvertisementCard_styles_1 = require("./styles/AdvertisementCard.styles");
var GlobalContext_1 = require("providers/GlobalContext");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("api/auth");
var AdvertisementCard = function (_a) {
    var _b;
    var advertisement = _a.advertisement;
    var styles = AdvertisementCard_styles_1.useStyles();
    var _c = react_1.useContext(GlobalContext_1.GlobalContext), state = _c.state, setState = _c.setState;
    var id = react_router_1.useParams().id;
    var _d = react_1.useState(false), expanded = _d[0], setExpanded = _d[1];
    var handleChange = function (event) {
        setExpanded(!expanded);
    };
    var displayShortContent = function (content) {
        return content.substring(0, 150) + "...";
    };
    var apply = function () {
        if (setState) {
            setState(__assign(__assign({}, state), { openModal: true, selectedAdvertisement: advertisement }));
        }
    };
    return (React.createElement(material_1.Box, { className: styles.container },
        React.createElement(material_1.Box, { className: styles.header },
            React.createElement(material_1.Avatar, { className: styles.logo, alt: advertisement.company.name, src: (_b = advertisement.company.logo) === null || _b === void 0 ? void 0 : _b.location }),
            React.createElement(material_1.Typography, { variant: 'h6', className: styles.title }, advertisement.title)),
        React.createElement(material_1.Box, { className: styles.actions },
            !auth_1.auth.isLoggedInAs("company") && (React.createElement(material_1.Button, { onClick: apply, className: styles.applyButton, variant: 'contained' }, "Apply")),
            !id && auth_1.auth.getAuthenticatedId() !== advertisement.company.id && (React.createElement(react_router_dom_1.Link, { to: "/company/" + advertisement.company.id },
                React.createElement(material_1.Button, { className: styles.companyButton, variant: 'contained' }, "See company")))),
        React.createElement(material_1.Box, { className: styles.infos },
            advertisement.positions.map(function (position, k) { return (React.createElement(material_1.Chip, { key: k, className: styles.chip, label: position.name, variant: 'outlined', color: 'primary' })); }),
            advertisement.languages.map(function (language, k) { return (React.createElement(material_1.Chip, { key: k, className: styles.chip, label: language.name, variant: 'outlined', color: 'success' })); })),
        React.createElement(material_1.Accordion, { className: styles.readMore, expanded: expanded, onChange: handleChange },
            React.createElement(material_1.AccordionSummary, { expandIcon: React.createElement(hi_1.HiChevronDown, null), "aria-controls": "readmore" + advertisement.id + "-content", id: "readmore" + advertisement.id + "-header" },
                React.createElement(material_1.Typography, null, "Read more")),
            React.createElement(material_1.AccordionDetails, null,
                React.createElement(material_1.Typography, null, displayShortContent(advertisement.content))))));
};
exports.AdvertisementCard = AdvertisementCard;
