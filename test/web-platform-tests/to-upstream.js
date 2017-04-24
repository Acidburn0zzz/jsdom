"use strict";
const path = require("path");
const { describe } = require("mocha-sugar-free");

const testsPath = path.resolve(__dirname, "to-upstream");
const runWebPlatformTest = require("./run-to-upstream-web-platform-test.js")(testsPath);

describe("Local tests in Web Platform Test format (to-upstream)", () => {
  [
    "console/methods.html",
    "cssom-view/Element-clientHeight.html",
    "cssom-view/Element-clientLeft.html",
    "cssom-view/Element-clientTop.html",
    "cssom-view/Element-clientWidth.html",
    "cssom-view/Element-getBoundingClientRect.html",
    "cssom-view/Element-getClientRects.html",
    "cssom-view/Element-scrollHeight.html",
    "cssom-view/Element-scrollLeft.html",
    "cssom-view/Element-scrollTop.html",
    "cssom-view/Element-scrollWidth.html",
    "cssom-view/HTMLElement-offsetParent.html",
    "cssom-view/HTMLElement-offsetTop.html",
    "cssom-view/HTMLElement-offsetLeft.html",
    "cssom-view/HTMLElement-offsetWidth.html",
    "cssom-view/HTMLElement-offsetHeight.html",
    "dom/attributes-are-not-nodes.html",
    "dom/collections/HTMLCollection-iterator.html",
    "dom/events/AddEventListenerOptions-once.html",
    "dom/events/Event-stopImmediatePropagation.html",
    "dom/events/EventTarget-add-remove-listener.html",
    "dom/events/EventTarget-prototype-constructor.html",
    "dom/events/EventTarget-this-of-listener.html",
    "dom/nodes/Document-createCDATASection.html",
    "dom/nodes/Document-createCDATASection.xhtml",
    "dom/nodes/Element-hasAttribute.html",
    "dom/nodes/Element-removeAttribute.html",
    "dom/nodes/Element-setAttribute.html",
    "dom/nodes/Element-tagName.html",
    "dom/nodes/attributes-namednodemap.html",
    "dom/nodes/getElementsByClassName-32.html",
    "dom/nodes/getElementsByClassName-empty-set.html",
    "dom/nodes/getElementsByClassName-whitespace-class-names.html",
    "dom/nodes/Node-cloneNode-input.html",
    "dom/nodes/Node-cloneNode-svg.html",
    "dom/nodes/Node-isEqualNode.html",
    "dom/nodes/Node-mutation-adoptNode.html",
    "dom/nodes/ParentNode-querySelector-escapes.html",
    "dom/nodes/Text-wholeText.html",
    "domparsing/DOMParser-dont-upstream.html",
    "domparsing/insert-adjacent.html",
    "domparsing/outerhtml-03.html",
    "FileAPI/blob/Blob-isClosed.html",
    "FileAPI/blob/Blob-size.html",
    "FileAPI/file/File-lastModified.html",
    "encoding/meta/meta-charset-no-quotes.html",
    "encoding/meta/meta-charset-simple-quotes.html",
    "encoding/meta/meta-charset.html",
    "encoding/meta/meta-http-equiv-no-quotes.html",
    "encoding/meta/meta-http-equiv-reverse.html",
    "encoding/meta/meta-http-equiv-simple-quotes.html",
    "encoding/meta/meta-http-equiv.html",
    "encoding/meta/no-meta.html",
    "html/browsers/windows/nested-browsing-contexts/iframe-referrer.html",
    "html/dom/elements/elements-in-the-dom/click-in-progress-flag.html",
    "html/editing/activation/click-bail-on-disabled.html",
    "html/editing/focus/focus-management/active-element.html",
    "html/editing/focus/focus-management/focus-on-all-elements.html",
    "html/named-access-on-window/basics.html",
    "html/named-access-on-window/changing.html",
    "html/named-access-on-window/doc-no-window.html",
    "html/named-access-on-window/existing-prop.html",
    "html/named-access-on-window/multi-match.html",
    "html/named-access-on-window/nested-context.html",
    "html/named-access-on-window/only-name.html",
    "html/named-access-on-window/removing.html",
    "html/obsolete/requirements-for-implementations/other-elements-attributes-and-apis/applets.html",
    "html/semantics/document-metadata/the-link-element/stylesheet-appropriate-time-to-obtain.html",
    "html/semantics/forms/resetting-a-form/reset-form-2.html",
    "html/semantics/forms/the-button-element/button-click-submits.html",
    "html/semantics/forms/the-button-element/button-type.html",
    "html/semantics/forms/the-form-element/form-action.html",
    "html/semantics/forms/the-input-element/checkbox-click-events.html",
    "html/semantics/forms/the-input-element/disabled-checkbox.html",
    "html/semantics/forms/the-input-element/radio-input-cancel.html",
    "html/semantics/forms/the-label-element/proxy-click-to-associated-element.html",
    "html/semantics/forms/the-option-element/option-ask-for-a-reset.html",
    "html/semantics/forms/the-option-element/option-index.html",
    "html/semantics/forms/the-option-element/option-element-constructor.html",
    "html/semantics/forms/the-select-element/select-multiple.html",
    "html/semantics/forms/the-textarea-element/select.html",
    "html/semantics/forms/the-textarea-element/set-value-reset-selection.html",
    "html/semantics/forms/the-textarea-element/setRangeText.html",
    "html/semantics/forms/the-textarea-element/setSelectionRange.html",
    "html/semantics/forms/the-textarea-element/value-defaultValue-textContent.html",
    "html/semantics/links/links-created-by-a-and-area-elements/html-hyperlink-element-utils-href.html",
    "html/semantics/scripting-1/the-script-element/script-languages-dont-upstream.html",
    "html/semantics/scripting-1/the-script-element/changing-src.html",
    "html/semantics/tabular-data/the-table-element/insertRow-method-03.html",
    "html/semantics/tabular-data/the-table-element/parentless-props.html",
    "html/syntax/parsing/foreign_content_dom_properties.html",
    "html/webappapis/events/event-handler-processing-algorithm-non-booleans.html",
    "html/webappapis/timers/arguments.html",
    "html/webappapis/timers/errors.html",
    "html/webappapis/timers/settimeout-setinterval-handles.html",
    "XMLHttpRequest/formdata-constructor.html",
    "XMLHttpRequest/formdata-set-blob.html",
    "XMLHttpRequest/thrown-error-in-events.html",
    "XMLHttpRequest/send-authentication-cors-post.htm"
  ]
  .forEach(runWebPlatformTest);
});
