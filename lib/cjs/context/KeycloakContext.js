"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetKeycloakContext = exports.getKeycloakContext = void 0;
var React = __importStar(require("react"));
// To make sure KEYCLOAK Client doesn't create more than one React context
// (which can lead to problems like having an KEYCLOAK Client instance added
// in one context, then attempting to retrieve it from another different
// context), a single KEYCLOAK context is created and tracked in global state.
// const contextKey = canUseSymbol
//   ? Symbol.for('__KEYCLOAK_CONTEXT__')
//   : '__KEYCLOAK_CONTEXT__';
function getKeycloakContext() {
    var context = React.createContext['__KEYCLOAK_CONTEXT__'];
    if (!context) {
        Object.defineProperty(React.createContext, '__KEYCLOAK_CONTEXT__', {
            value: context = React.createContext({}),
            enumerable: false,
            writable: false,
            configurable: true,
        });
        context.displayName = 'KeycloakContext';
    }
    return context;
}
exports.getKeycloakContext = getKeycloakContext;
exports.resetKeycloakContext = getKeycloakContext;
