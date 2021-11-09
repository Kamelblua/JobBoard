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
exports.Candidates = void 0;
// React
var react_1 = require("react");
// Components
var system_1 = require("@mui/system");
var material_1 = require("@mui/material");
var DataTable_1 = require("components/Modules/Admin/DataTable/DataTable");
var HeaderTable_1 = require("components/Modules/Admin/DataTable/HeaderTable");
var Paginate_1 = require("components/Elements/Paginate");
var hi_1 = require("react-icons/hi");
// Hooks
var Advertisements_styles_1 = require("./styles/Advertisements.styles");
var react_router_1 = require("react-router");
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
var Candidates = function () {
    var styles = Advertisements_styles_1.useStyles();
    var history = react_router_1.useHistory();
    var _a = react_1.useState([]), candidates = _a[0], setCandidates = _a[1];
    var _b = react_1.useState({
        page: 1,
        limit: 10,
        search: ""
    }), search = _b[0], setSearch = _b[1];
    var headers = ["#", "Email", "Creation date", "Actions"];
    var _c = react_1.useState(null), result = _c[0], setResult = _c[1];
    var _d = react_1.useState(true), loading = _d[0], setLoading = _d[1];
    var _e = react_1.useState(false), open = _e[0], setOpen = _e[1];
    var _f = react_1.useState(null), selectedItemId = _f[0], setSelectedItemId = _f[1];
    var handleClose = function () {
        setOpen(false);
    };
    var deleteCandidate = function () {
        if (selectedItemId) {
            setLoading(true);
            api_1.api.candidate["delete"](selectedItemId)
                .then(function (res) {
                console.log(res);
                setOpen(false);
                setSearch(function (prevState) { return (__assign(__assign({}, prevState), { page: 1 })); });
            })["catch"](function (err) {
                console.error(err);
            })["finally"](function () {
                setLoading(false);
            });
        }
    };
    var actions = [
        {
            name: "View",
            label: "view",
            icon: React.createElement(hi_1.HiEye, null),
            color: "var(--success)",
            action: function (item) {
                return React.createElement(react_router_1.Redirect, { to: "/admin/candidate/" + item.id });
            }
        },
        {
            name: "Edit",
            label: "edit",
            icon: React.createElement(hi_1.HiPencilAlt, null),
            color: "var(--warning)",
            action: function (item) {
                return history.push("/admin/candidate/" + item.id + "/edit");
            }
        },
        {
            name: "Delete",
            label: "delete",
            icon: React.createElement(hi_1.HiOutlineTrash, null),
            color: "var(--error)",
            action: function (item) {
                setSelectedItemId(item.id);
                setOpen(true);
            }
        },
    ];
    react_1.useEffect(function () {
        setLoading(true);
        api_1.api.admin
            .getAllCandidates(search)
            .then(function (res) {
            console.log(res.data);
            setCandidates(res.data.items);
            setResult(res.data);
        })["catch"](function (err) {
            console.error(err);
        })["finally"](function () { return setLoading(false); });
    }, [search]);
    return (React.createElement(system_1.Box, { sx: { width: "100%", overflow: "hidden" } },
        React.createElement(react_helmet_1.Helmet, null,
            React.createElement("title", null, "Job Board | Admin Dashboard | Candidates")),
        React.createElement(material_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title', "aria-describedby": 'alert-dialog-description' },
            React.createElement(material_1.DialogTitle, { id: 'alert-dialog-title' }, "Delete this candidate ?"),
            React.createElement(material_1.DialogActions, null,
                React.createElement(material_1.Button, { color: 'primary', variant: 'outlined', onClick: handleClose }, "Close"),
                React.createElement(material_1.Button, { disabled: loading, color: 'error', variant: 'outlined', onClick: deleteCandidate, autoFocus: true }, "Delete"))),
        React.createElement(material_1.Typography, { className: styles.title, variant: 'h6' }, "Advertisement"),
        loading && (React.createElement(system_1.Box, { className: styles.loadingResultContainer },
            React.createElement(material_1.CircularProgress, { size: 50 }))),
        React.createElement(HeaderTable_1.HeaderTable, { search: search, setSearch: setSearch }),
        React.createElement(DataTable_1.DataTable, { headers: headers, items: candidates, itemProperties: itemProperties, actions: actions }),
        result && React.createElement(Paginate_1.Paginate, { search: search, setSearch: setSearch, total: result.total })));
};
exports.Candidates = Candidates;
