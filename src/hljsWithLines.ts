/**
 * Этот код был скопирован из этого репозитория https://github.com/wcoder/highlightjs-line-numbers.js
 * Упрощен и адаптирован для использования в моем проекте.
 *
 * Yauheni Pakala, большое спасибо за то, что ты сделал.
 */

import hljs from "highlight.js";

const CONTAINER_NAME = "blob-wrapper",
  CODE_BLOCK_NAME = "blob-code",
  NUMBERS_BLOCK_NAME = "blob-num",
  DATA_ATTR_NAME = "data-line-number",
  BREAK_LINE_REGEXP = /\r\n|\r|\n/g;

function lineNumbersValue(code: string, lang: string) {
  const language = hljs.getLanguage(lang)?.name ?? "plaintext";
  const html = hljs.highlight(code, { language }).value;

  var element = document.createElement("code");
  element.innerHTML = html;

  return lineNumbersInternal(element);
}

function lineNumbersInternal(element: HTMLElement) {
  duplicateMultilineNodes(element);

  return addLineNumbersBlockFor(element.innerHTML);
}

function addLineNumbersBlockFor(inputHtml: string) {
  var lines = getLines(inputHtml);

  // if last line contains only carriage return remove it
  if (lines[lines.length - 1].trim() === "") {
    lines.pop();
  }

  if (lines.length > 1) {
    var html = "";

    for (var i = 0, l = lines.length; i < l; i++) {
      html += format(
        "<tr>" +
          '<td id="L{3}" class="{0}" {1}="{3}"/>' +
          '<td id="LC{3}" class="{2}" {1}="{3}">' +
          "{4}" +
          "</td>" +
          "</tr>",
        [
          NUMBERS_BLOCK_NAME,
          DATA_ATTR_NAME,
          CODE_BLOCK_NAME,
          i + 1,
          lines[i].length > 0 ? lines[i] : " ",
        ]
      );
    }

    return format('<div class="{0}"><table>{1}</table></div>', [
      CONTAINER_NAME,
      html,
    ]);
  }

  return inputHtml;
}

function duplicateMultilineNodes(element: HTMLElement) {
  var nodes = element.childNodes;
  for (var node in nodes) {
    if (nodes.hasOwnProperty(node)) {
      var child = nodes[node];
      if (getLinesCount(child.textContent ?? "") > 0) {
        if (child.childNodes.length > 0) {
          duplicateMultilineNodes(child as HTMLElement);
        } else {
          duplicateMultilineNode(child.parentNode as HTMLElement);
        }
      }
    }
  }
}

function duplicateMultilineNode(element: HTMLElement) {
  var className = element.className;

  if (!/hljs-/.test(className)) return;

  var lines = getLines(element.innerHTML);

  for (var i = 0, result = ""; i < lines.length; i++) {
    var lineText = lines[i].length > 0 ? lines[i] : " ";
    result += format('<span class="{0}">{1}</span>\n', [className, lineText]);
  }

  element.innerHTML = result.trim();
}

function getLines(text: string) {
  if (text.length === 0) return [];
  return text.split(BREAK_LINE_REGEXP);
}

function getLinesCount(text: string) {
  return (text.trim().match(BREAK_LINE_REGEXP) || []).length;
}

function format(format: string, args: any[]) {
  return format.replace(/\{(\d+)\}/g, function(m, n) {
    return args[n] !== undefined ? args[n] : m;
  });
}

export default lineNumbersValue;
