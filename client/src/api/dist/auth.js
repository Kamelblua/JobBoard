"use strict";
exports.__esModule = true;
exports.auth = void 0;
var js_cookie_1 = require("js-cookie");
var jwt_decode_1 = require("jwt-decode");
var Auth = /** @class */ (function () {
    function Auth() {
        this.base_url = process.env.REACT_APP_SERVER_URL + "/api";
        this.token = js_cookie_1["default"].get("token");
    }
    Auth.prototype.isTokenValid = function () {
        if (this.isUnauthenticated()) {
            return true;
        }
        var token = this.decodedToken();
        var nowInMilliseconds = Date.now();
        if (nowInMilliseconds > token.exp * 1000) {
            return false;
        }
        return true;
    };
    Auth.prototype.isAuthenticated = function () {
        return typeof this.token !== "undefined";
    };
    Auth.prototype.isUnauthenticated = function () {
        return typeof this.token === "undefined";
    };
    Auth.prototype.decodedToken = function () {
        if (typeof this.token === "undefined") {
            js_cookie_1["default"].remove("token");
            return false;
        }
        var decoded = jwt_decode_1["default"](this.token);
        return decoded;
    };
    Auth.prototype.getAuthenticatedId = function () {
        return this.decodedToken()["uid"];
    };
    Auth.prototype.getEmail = function () {
        return this.decodedToken()["email"];
    };
    Auth.prototype.isLoggedInAs = function (logged_as) {
        if (!logged_as) {
            return this.decodedToken().logged_in_as;
        }
        if (this.isUnauthenticated()) {
            return false;
        }
        if (this.decodedToken().logged_in_as !== logged_as)
            return false;
        return true;
    };
    return Auth;
}());
var auth = new Auth();
exports.auth = auth;
