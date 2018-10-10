/*
 * Copyright 2018 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the terms of the LICENSE file distributed with this project.
 */
import { Classes } from "@blueprintjs/core";
/**
 * Inject some CSS style rules into a new `<style>` element to add padding equal to the
 * width of the scrollbar when an `Overlay` is open, such that page content will not
 * shift due to the disappearing vertical scrollbar.
 */
export function addScrollbarStyle() {
    var width = getScrollbarWidth();
    var stylesheet = createStyleSheet();
    var NS = Classes.getClassNamespace();
    stylesheet.insertRule("." + NS + "-overlay-open .docs-banner { padding-right: " + (20 + width) + "px; }", 0);
    stylesheet.insertRule("." + NS + "-overlay-open .docs-root { padding-right: " + width + "px }", 0);
}
function createStyleSheet() {
    var style = document.createElement("style");
    style.type = "text/css";
    document.head.appendChild(style);
    return style.sheet;
}
function getScrollbarWidth() {
    var scrollDiv = document.createElement("div");
    scrollDiv.style.overflow = "scroll";
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
}
//# sourceMappingURL=scrollbar.js.map