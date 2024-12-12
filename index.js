import {
  parsers as htmlParsers,
  printers as htmlPrinters,
} from "prettier/plugins/html";

const htmlPrinter = htmlPrinters.html;

const customHtmlPrinter = {
  ...htmlPrinter,

  print(path, options, print) {
    const node = path.getValue();

    // Check if the current node is a HTML5 doctype and transform it to uppercase
    if (node && node.type === "docType" && node.value === "html") {
      return "<!DOCTYPE html>";
    }

    // Keep the default behavior for other nodes
    return htmlPrinter.print(path, options, print);
  },
};

export const parsers = {
  ...htmlParsers,
};

export const printers = {
  html: customHtmlPrinter,
};
