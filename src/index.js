/** 
 * Code -> value
 * CodeBlock -> value
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
          new context.RuleError(`Empty ListItem`, {
            padding: locator.range(node.range),
          })
        );
      }
    },
    [Syntax.Header](node) {
      const match = node.children.length === 0 ? true : false
      if (match) {

        report(
          node,
          new context.RuleError(`Empty Header`, {
            padding: locator.range(node.range),
          })
        );
      }
    },
    [Syntax.Code](node) {
      const match = node.value.trim() === "" ? true : false;
      if (match) {

        report(
          node,
          new context.RuleError(`Empty code block`, {
            padding: locator.range(node.range),
          })
        );
      }
    },
    [Syntax.CodeBlock](node) {
      const match = node.value.trim() === "" ? true : false;

      if (match) {
        report(
          node,
          new context.RuleError(`Empty code block`, {
            padding: locator.range(node.range),
          })
        );
      }
    },

  };
}
