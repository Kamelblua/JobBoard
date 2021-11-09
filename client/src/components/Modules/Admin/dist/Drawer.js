"use strict";
exports.__esModule = true;
exports.Drawer = void 0;
var material_1 = require("@mui/material");
var react_router_1 = require("react-router");
var hi_1 = require("react-icons/hi");
var ri_1 = require("react-icons/ri");
var react_router_dom_1 = require("react-router-dom");
var Drawer_styles_1 = require("./styles/Drawer.styles");
var drawerWidth = 240;
var Drawer = function (_a) {
    var handleDrawerToggle = _a.handleDrawerToggle, mobileOpen = _a.mobileOpen, window = _a.window;
    var styles = Drawer_styles_1.useStyles();
    var location = react_router_1.useLocation();
    var items = [
        {
            label: "Dashboard",
            link: "/admin/dashboard",
            icon: React.createElement(hi_1.HiOutlineHome, { className: styles.icon })
        },
        {
            label: "Candidates",
            link: "/admin/candidates",
            icon: React.createElement(hi_1.HiUserCircle, { className: styles.icon })
        },
        {
            label: "Companies",
            link: "/admin/companies",
            icon: React.createElement(hi_1.HiOfficeBuilding, { className: styles.icon })
        },
        {
            label: "Admins",
            link: "/admin/admins",
            icon: React.createElement(hi_1.HiShieldCheck, { className: styles.icon })
        },
        {
            label: "Advertisements",
            link: "/admin/advertisements",
            icon: React.createElement(ri_1.RiAdvertisementFill, { className: styles.icon })
        },
    ];
    var isActive = function (path) {
        return location.pathname === path;
    };
    var container = window !== undefined ? function () { return window().document.body; } : undefined;
    var drawer = (React.createElement("div", null,
        React.createElement(material_1.Toolbar, { className: styles.headerSidebar },
            React.createElement(react_router_dom_1.Link, { to: '/' },
                React.createElement("img", { src: '/assets/images/logo-backoffice.svg', alt: 'backoffice', className: styles.img }))),
        React.createElement(material_1.Divider, null),
        React.createElement(material_1.List, null,
            React.createElement(material_1.Box, null, items.map(function (i, k) { return (React.createElement(material_1.ListItem, { key: k, className: styles.listItem },
                React.createElement(material_1.ListItemText, { primaryTypographyProps: { sx: { width: "100%" } }, className: styles.itemText },
                    React.createElement(react_router_dom_1.Link, { to: i.link, className: styles.itemLink },
                        React.createElement(material_1.Button, { variant: 'text', className: styles.button + " " + (isActive(i.link) ? styles.activeButton : ""), fullWidth: true },
                            React.createElement(material_1.ListItemIcon, { className: styles.listItemIcon }, i.icon),
                            React.createElement(material_1.Box, { className: styles.text }, i.label)))))); })))));
    return (React.createElement(material_1.Box, { component: 'nav', sx: { width: { sm: drawerWidth }, flexShrink: { sm: 0 } }, "aria-label": 'mailbox folders' },
        React.createElement(material_1.Drawer, { container: container, variant: 'temporary', open: mobileOpen, onClose: handleDrawerToggle, ModalProps: {
                keepMounted: true
            }, sx: {
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    backgroundColor: "var(--main-red)!important",
                    borderRight: "3px solid var(--main-separator-gray)!important",
                    border: "none!important"
                }
            } }, drawer),
        React.createElement(material_1.Drawer, { variant: 'permanent', sx: {
                display: { xs: "none", sm: "block" },
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                    backgroundColor: "var(--main-red)!important",
                    borderRight: "10px solid var(--main-separator-gray)!important"
                }
            }, open: true }, drawer)));
};
exports.Drawer = Drawer;
