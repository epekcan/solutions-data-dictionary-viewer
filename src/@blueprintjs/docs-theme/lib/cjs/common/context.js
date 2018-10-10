"use strict";
/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@blueprintjs/core");
function hasTypescriptData(docs) {
    return docs != null && docs.typescript != null;
}
exports.hasTypescriptData = hasTypescriptData;
function hasNpmData(docs) {
    return docs != null && docs.npm != null;
}
exports.hasNpmData = hasNpmData;
function hasKssData(docs) {
    return docs != null && docs.css != null;
}
exports.hasKssData = hasKssData;
/**
 * To enable context access in a React component, assign `static contextTypes` and declare `context` type:
 *
 * ```tsx
 * export class ContextComponent extends React.PureComponent<IApiLinkProps> {
 *     public static contextTypes = DocumentationContextTypes;
 *     public context: IDocumentationContext;
 *
 *     public render() {
 *         return this.context.renderBlock(this.props.block);
 *     }
 * }
 * ```
 */
exports.DocumentationContextTypes = {
    getDocsData: assertFunctionProp,
    renderBlock: assertFunctionProp,
    renderType: assertFunctionProp,
    renderViewSourceLinkText: assertFunctionProp,
    showApiDocs: assertFunctionProp,
};
// simple alternative to prop-types dependency
function assertFunctionProp(obj, key) {
    if (obj[key] != null && core_1.Utils.isFunction(obj[key])) {
        return undefined;
    }
    return new Error("[Blueprint] Documentation context " + key + " must be function.");
}
//# sourceMappingURL=context.js.map