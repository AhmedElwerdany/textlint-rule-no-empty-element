/** 
 * Code -> value
 * CodeBlock -> value
 * BlockQuote -> children
 * Strong -> children
 * Emphasis -> children
 * Header -> children
 * ListItem -> children
 * Link -> url, children
 * Image -> alt, url, title
*/
export default function (context, options = {}) {
  const { Syntax, RuleError, report, getSource, locator } = context;
  return {
    [Syntax.ListItem](node) {
      const match = node.children.length === 0 ? true : false
      if (match) {
        report(
          node,
          new context.RuleError("Found empty `List Item`")
        );
      }
    },
    [Syntax.Header](node) {
      const match = node.children.length === 0 ? true : false
      if (match) {

        report(
          node,
          new context.RuleError("Found empty `Header`")
        );
      }
    },
    [Syntax.Code](node) {
      const match = node.value.trim() === "" ? true : false;
      if (match) {

        report(
          node,
          new context.RuleError("Found empty `Code`")
        );
      }
    },
    [Syntax.CodeBlock](node) {
      const match = node.value.trim() === "" ? true : false;

      if (match) {
        report(
          node,
          new context.RuleError("Found empty `Code`")
        );
      }
    },
    [Syntax.BlockQuote](node) {
      const match = node.children.length === 0 ? true : false
      if (match) {
        report(
          node,
          new context.RuleError("Found empty `Quote`")
        );
      }
    },
  };
}
