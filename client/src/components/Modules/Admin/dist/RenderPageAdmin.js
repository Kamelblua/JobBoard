"use strict";
exports.__esModule = true;
exports.RenderPageAdmin = void 0;
var react_1 = require("react");
var system_1 = require("@mui/system");
var AppBar_1 = require("@mui/material/AppBar");
var CssBaseline_1 = require("@mui/material/CssBaseline");
var IconButton_1 = require("@mui/material/IconButton");
var Menu_1 = require("@mui/icons-material/Menu");
var Toolbar_1 = require("@mui/material/Toolbar");
var Typography_1 = require("@mui/material/Typography");
var RenderPageAdmin_styles_1 = require("./styles/RenderPageAdmin.styles");
var Drawer_1 = require("components/Modules/Admin/Drawer");
var react_router_1 = require("react-router");
var lodash_1 = require("lodash");
var drawerWidth = 240;
var RenderPageAdmin = function (_a) {
    var page = _a.page, window = _a.window;
    var styles = RenderPageAdmin_styles_1.useStyles();
    var location = react_router_1.useLocation();
    var _b = react_1.useState(false), mobileOpen = _b[0], setMobileOpen = _b[1];
    var handleDrawerToggle = function () {
        setMobileOpen(!mobileOpen);
    };
    var displayHeader = function () {
        var splittedPathname = location.pathname.split("/");
        return lodash_1.upperFirst(splittedPathname[splittedPathname.length - 1]);
    };
    return (React.createElement(system_1.Box, { sx: { display: "flex" } },
        React.createElement(CssBaseline_1["default"], null),
        React.createElement(AppBar_1["default"], { position: 'fixed', sx: {
                width: {
                    sm: "calc(100% - " + drawerWidth + "px)",
                    boxShadow: "none!important",
                    borderBottom: "1px solid var(--main-gray)"
                },
                ml: { sm: drawerWidth + "px", boxShadow: "none!important" }
            } },
            React.createElement(Toolbar_1["default"], { className: styles.headerContent },
                React.createElement(IconButton_1["default"], { "aria-label": 'open drawer', edge: 'start', onClick: handleDrawerToggle, sx: {
                        mr: 2,
                        display: {
                            sm: "none"
                        }
                    } },
                    React.createElement(Menu_1["default"], null)),
                React.createElement(Typography_1["default"], { variant: 'h6', sx: { color: "red" }, noWrap: true, component: 'div' }, displayHeader()))),
        React.createElement(Drawer_1.Drawer, { handleDrawerToggle: handleDrawerToggle, mobileOpen: mobileOpen }),
        React.createElement(system_1.Box, { component: 'main', sx: { flexGrow: 1, p: 3 } },
            React.createElement(Toolbar_1["default"], { sx: { height: "80px", boxShadow: "none!important" } }),
            page)));
};
exports.RenderPageAdmin = RenderPageAdmin;
