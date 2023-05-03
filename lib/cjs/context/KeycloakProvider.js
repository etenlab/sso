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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeycloakProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var KeycloakContext_1 = require("./KeycloakContext");
var KeycloakProvider = function (_a) {
    var client = _a.client, children = _a.children;
    var KeycloakContext = (0, KeycloakContext_1.getKeycloakContext)();
    return ((0, jsx_runtime_1.jsx)(KeycloakContext.Consumer, { children: function (context) {
            if (context === void 0) { context = {}; }
            if (client && context.client !== client) {
                context = Object.assign({}, context, { client: client });
            }
            // invariant(
            //   context.client,
            //   'KeycloakProvider was not passed a client instance. Make ' +
            //     'sure you pass in your client via the "client" prop.'
            // );
            return ((0, jsx_runtime_1.jsx)(KeycloakContext.Provider, __assign({ value: context }, { children: children })));
        } }));
};
exports.KeycloakProvider = KeycloakProvider;
