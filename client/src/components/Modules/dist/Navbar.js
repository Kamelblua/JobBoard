"use strict";
exports.__esModule = true;
exports.Navbar = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var system_1 = require("@mui/system");
var hi_1 = require("react-icons/hi");
var Navbar_styles_1 = require("./styles/Navbar.styles");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("api/auth");
var api_1 = require("api/api");
var lodash_1 = require("lodash");
var Navbar = function () {
    var styles = Navbar_styles_1.useStyles();
    var location = react_router_dom_1.useLocation();
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var logout = function () {
        setLoading(true);
        api_1.api.candidate.logout()["finally"](function () {
            setTimeout(function () {
                document.location.href = "/login/candidate";
                setLoading(false);
            }, 750);
        });
    };
    var isActive = function (path) {
        return location.pathname === path;
    };
    return (React.createElement(system_1.Box, { component: 'header', className: styles.container },
        React.createElement(react_router_dom_1.Link, { to: '/' },
            React.createElement("img", { src: '/assets/images/logo.svg', alt: 'logo' })),
        React.createElement(system_1.Box, { component: 'nav', className: styles.menu },
            React.createElement(react_router_dom_1.Link, { to: '/', className: styles.menuItemLink },
                React.createElement(material_1.Button, { variant: 'text', className: styles.menuItem + " " + (isActive("/") ? styles.activeMenuItem : "") }, "Home")),
            React.createElement(react_router_dom_1.Link, { to: '/jobs', className: styles.menuItemLink },
                React.createElement(material_1.Button, { variant: 'text', className: styles.menuItem + " " + (isActive("/jobs") ? styles.activeMenuItem : "") }, "Jobs")),
            auth_1.auth.isAuthenticated() && (React.createElement(material_1.Button, { variant: 'outlined', disabled: true, className: styles.menuItem + " " + styles[auth_1.auth.isLoggedInAs() + "Chip"] }, lodash_1.upperFirst(auth_1.auth.isLoggedInAs()))),
            React.createElement(material_1.Button, { "aria-controls": 'basic-menu', "aria-haspopup": 'true', "aria-expanded": open ? "true" : undefined, onClick: handleClick, startIcon: React.createElement(hi_1.HiOutlineUserCircle, null), className: styles.menuItem + " " + styles.dropdown }, auth_1.auth.isAuthenticated() ? auth_1.auth.getEmail() : "Account"),
            React.createElement(material_1.Menu, { anchorEl: anchorEl, open: open, onClose: handleClose, MenuListProps: {
                    "aria-labelledby": "basic-button",
                    className: styles.menuDropDown
                }, PaperProps: {
                    style: {
                        minWidth: "150px"
                    }
                } }, auth_1.auth.isAuthenticated() ? (React.createElement(react_1.Fragment, null,
                auth_1.auth.isLoggedInAs("candidate") && (React.createElement(react_1.Fragment, null,
                    React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/profile' },
                        React.createElement(material_1.MenuItem, { onClick: handleClose }, "Profile")),
                    React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/applications' },
                        React.createElement(material_1.MenuItem, { onClick: handleClose }, "My applications")))),
                auth_1.auth.isLoggedInAs("company") && (React.createElement(react_1.Fragment, null,
                    React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/my/company' },
                        React.createElement(material_1.MenuItem, { onClick: handleClose }, "My company")),
                    React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/company/offers' },
                        React.createElement(material_1.MenuItem, { onClick: handleClose }, "My applications")))),
                auth_1.auth.isLoggedInAs("admin") && (React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/admin/dashboard' },
                    React.createElement(material_1.MenuItem, { onClick: handleClose }, "Dashboard"))),
                React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink + " " + styles.logoutLink, to: '#' },
                    React.createElement(material_1.MenuItem, { disabled: loading, onClick: logout }, loading ? "Logging out..." : "Log out")))) : (React.createElement(react_1.Fragment, null,
                React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/login/candidate' },
                    React.createElement(material_1.MenuItem, { onClick: handleClose }, "Log in")),
                React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/register/candidate' },
                    React.createElement(material_1.MenuItem, { onClick: handleClose }, "Register")),
                React.createElement(react_router_dom_1.Link, { className: styles.dropDownLink, to: '/login/company' },
                    React.createElement(material_1.MenuItem, { onClick: handleClose }, "I have a company"))))))));
};
exports.Navbar = Navbar;
