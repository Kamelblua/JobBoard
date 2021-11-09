"use strict";
exports.__esModule = true;
exports.DataTable = void 0;
var react_1 = require("react");
var material_1 = require("@mui/material");
var DataTable_styles_1 = require("./styles/DataTable.styles");
var lodash_1 = require("lodash");
var DataTable = function (_a) {
    var headers = _a.headers, items = _a.items, itemProperties = _a.itemProperties, actions = _a.actions;
    var styles = DataTable_styles_1.useStyles();
    return (React.createElement(React.Fragment, null,
        React.createElement(material_1.TableContainer, { component: material_1.Paper },
            React.createElement(material_1.Table, null,
                React.createElement(material_1.TableHead, { className: styles.bgHeader },
                    React.createElement(material_1.TableRow, null, headers.map(function (h, k) { return (React.createElement(material_1.TableCell, { key: k, align: 'center' }, h)); }))),
                React.createElement(material_1.TableBody, null, items.map(function (i, k) { return (React.createElement(material_1.TableRow, { key: k },
                    itemProperties.map(function (p, k) { return (React.createElement(material_1.TableCell, { key: k, align: 'center' }, typeof p === "object" && typeof lodash_1.get(i, p.propertyName) === "object"
                        ? lodash_1.get(i, p.propertyName).map(function (i, k) { return p.render(i); })
                        : typeof p === "object"
                            ? p.render(i)
                            : lodash_1.get(i, p))); }),
                    React.createElement(material_1.TableCell, { className: styles.actionCell, align: 'center' }, actions &&
                        actions.map(function (a, k) {
                            return react_1.cloneElement(a.icon, {
                                color: a.color,
                                className: styles.action,
                                onClick: function () {
                                    a.action(i);
                                }
                            });
                        })))); }))))));
};
exports.DataTable = DataTable;
