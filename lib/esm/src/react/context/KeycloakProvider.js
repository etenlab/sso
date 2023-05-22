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
import { jsx as _jsx } from "react/jsx-runtime";
import { getKeycloakContext } from './KeycloakContext';
import { name as pname } from "../../../package.json";
import { Roarr } from 'roarr';
var logger = Roarr.child({ package: pname });
export var KeycloakProvider = function (_a) {
    var client = _a.client, children = _a.children;
    logger.info('Keycloakclient');
    logger.info(JSON.stringify(client));
    var KeycloakContext = getKeycloakContext();
    logger.info('KeycloakContext');
    logger.info(JSON.stringify(KeycloakContext));
    return (_jsx(KeycloakContext.Consumer, { children: function (context) {
            if (context === void 0) { context = {}; }
            if (client && context.client !== client) {
                context = Object.assign({}, context, { client: client });
            }
            // invariant(
            //   context.client,
            //   'KeycloakProvider was not passed a client instance. Make ' +
            //     'sure you pass in your client via the "client" prop.'
            // );
            return (_jsx(KeycloakContext.Provider, __assign({ value: context }, { children: children })));
        } }));
};
