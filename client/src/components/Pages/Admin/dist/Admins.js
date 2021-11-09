"use strict";
exports.__esModule = true;
exports.Admins = void 0;
// React
var react_1 = require("react");
// Components
var system_1 = require("@mui/system");
var material_1 = require("@mui/material");
var DataTable_1 = require("components/Modules/Admin/DataTable/DataTable");
var HeaderTable_1 = require("components/Modules/Admin/DataTable/HeaderTable");
var Paginate_1 = require("components/Elements/Paginate");
// Hooks
var Advertisements_styles_1 = require("./styles/Advertisements.styles");
var api_1 = require("api/api");
var moment_1 = require("moment");
var react_helmet_1 = require("react-helmet");
var itemProperties = [
    "id",
    "email",
    {
        propertyName: "created_at",
        render: function (item) {
            return moment_1["default"](item).format("DD-MM-YYYY");
        }
    },
];
var Admins = function () {
    var styles = Advertisements_styles_1.useStyles();
    var _a = react_1.useState([]), admins = _a[0], setAdmins = _a[1];
    var _b = react_1.useState({
        page: 1,
        limit: 10,
        search: ""
    }), search = _b[0], setSearch = _b[1];
    var headers = ["#", "Email", "Creation date"];
    var _c = react_1.useState(null), result = _c[0], setResult = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1];
    var _e = react_1.useState(false), open = _e[0], setOpen = _e[1];
    var handleClose = function () {
        setOpen(false);
    };
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.admin
            .getAllAdmins(search)
            .then(function (res) {
            console.log(res.data);
            setAdmins(res.data.items);
            setResult(res.data);
        })["catch"](function (err) {
            console.error(err);
        })["finally"](function () { return setLoading(false); });
    }, [search]);
    return (React.createElement(system_1.Box, { sx: { width: "100%", overflow: "hidden" } },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Admin Dashboard | Admins")),
        React.createElement(material_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title', "aria-describedby": 'alert-dialog-description' },
            React.createElement(material_1.DialogTitle, { id: 'alert-dialog-title' }, "Delete this advertisement ?"),
            React.createElement(material_1.DialogActions, null,
                React.createElement(material_1.Button, { color: 'error', variant: 'outlined', onClick: handleClose }, "Close"),
                React.createElement(material_1.Button, { color: 'success', variant: 'outlined', onClick: handleClose, autoFocus: true }, "Agree"))),
        React.createElement(material_1.Typography, { className: styles.title, variant: 'h6' }, "Advertisement"),
        loading && (React.createElement(system_1.Box, { className: styles.loadingResultContainer },
            React.createElement(material_1.CircularProgress, { size: 50 }))),
        React.createElement(HeaderTable_1.HeaderTable, { search: search, setSearch: setSearch }),
        React.createElement(DataTable_1.DataTable, { headers: headers, items: admins, itemProperties: itemProperties }),
        result && React.createElement(Paginate_1.Paginate, { search: search, setSearch: setSearch, total: result.total })));
};
exports.Admins = Admins;
