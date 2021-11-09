"use strict";
exports.__esModule = true;
exports.Footer = void 0;
var system_1 = require("@mui/system");
var fa_1 = require("react-icons/fa");
var ai_1 = require("react-icons/ai");
var Footer_styles_1 = require("./styles/Footer.styles");
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var Footer = function () {
    var styles = Footer_styles_1.useStyles();
    return (React.createElement(system_1.Box, { component: 'footer', className: styles.container },
        React.createElement(system_1.Box, { className: styles.header },
            React.createElement(react_router_dom_1.Link, { to: '/' },
                React.createElement("img", { src: '/assets/images/logo-light.svg', alt: 'logo' })),
            React.createElement(system_1.Box, null,
                React.createElement("a", { href: 'https://www.facebook.com', rel: 'noreferrer noopener', target: '_blank' },
                    React.createElement(fa_1.FaFacebook, { className: styles.social })),
                React.createElement("a", { href: 'https://www.twitter.com', rel: 'noreferrer noopener', target: '_blank' },
                    React.createElement(ai_1.AiOutlineTwitter, { className: styles.social })),
                React.createElement("a", { href: 'https://www.instagram.com', rel: 'noreferrer noopener', target: '_blank' },
                    React.createElement(fa_1.FaInstagram, { className: styles.social })),
                React.createElement("a", { href: 'https://www.linkedin.com', rel: 'noreferrer noopener', target: '_blank' },
                    React.createElement(ai_1.AiFillLinkedin, { className: styles.social })))),
        React.createElement(material_1.Divider, { className: styles.divider }),
        React.createElement(material_1.Stack, { className: styles.stack, direction: 'row', divider: React.createElement(material_1.Divider, { orientation: 'vertical', flexItem: true }), spacing: 2 },
            React.createElement(system_1.Box, { className: styles.stackSection },
                React.createElement(material_1.Typography, { variant: 'subtitle1' }, "Candidates"),
                React.createElement(material_1.Divider, { className: styles.stackDivider }),
                React.createElement(react_router_dom_1.Link, { to: '/register', style: { color: "var(--light)" } },
                    React.createElement(material_1.Typography, { variant: 'subtitle2' }, "Sign up")),
                React.createElement(react_router_dom_1.Link, { to: '/jobs', style: { color: "var(--light)" } },
                    React.createElement(material_1.Typography, { variant: 'subtitle2' }, "Search jobs")),
                React.createElement(react_router_dom_1.Link, { to: '/companies', style: { color: "var(--light)" } },
                    React.createElement(material_1.Typography, { variant: 'subtitle2' }, "Discover companies"))),
            React.createElement(system_1.Box, { className: styles.stackSection },
                React.createElement(material_1.Typography, { variant: 'subtitle1' }, "Companies"),
                React.createElement(material_1.Divider, { className: styles.stackDivider }),
                React.createElement(react_router_dom_1.Link, { to: '/company/post', style: { color: "var(--light)" } },
                    React.createElement(material_1.Typography, { variant: 'subtitle2' }, "Start hiring"))),
            React.createElement(system_1.Box, { className: styles.stackSection },
                React.createElement(material_1.Typography, { variant: 'subtitle1' }, "Job Board"),
                React.createElement(material_1.Divider, { className: styles.stackDivider }),
                React.createElement(react_router_dom_1.Link, { to: '/about', style: { color: "var(--light)" } },
                    React.createElement(material_1.Typography, { variant: 'subtitle2' }, "About")),
                React.createElement(react_router_dom_1.Link, { to: '/contact', style: { color: "var(--light)" } },
                    React.createElement(material_1.Typography, { variant: 'subtitle2' }, "Contact us")))),
        React.createElement(system_1.Box, { className: styles.footer },
            React.createElement(system_1.Box, { className: styles.footerAbout },
                React.createElement(react_router_dom_1.Link, { to: '#', className: styles.footerLink },
                    React.createElement(material_1.Typography, { variant: 'h6' }, "Legal")),
                React.createElement(react_router_dom_1.Link, { to: '#', className: styles.footerLink },
                    React.createElement(material_1.Typography, { variant: 'h6' }, "Cookies")),
                React.createElement(react_router_dom_1.Link, { to: '#', className: styles.footerLink },
                    React.createElement(material_1.Typography, { variant: 'h6' }, "Privacy Policy")),
                React.createElement(react_router_dom_1.Link, { to: '#', className: styles.footerLink },
                    React.createElement(material_1.Typography, { variant: 'h6' }, "Security"))),
            React.createElement(material_1.Typography, { variant: 'caption' }, "Copyright \u00A9 JobBoard 2008-2021 - Vocational guidance website"))));
};
exports.Footer = Footer;
