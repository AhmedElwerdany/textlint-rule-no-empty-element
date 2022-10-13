export default function (context, options = {}) {
  const { Syntax, RuleError, report, getSource, locator } = context;
  return {
    [Syntax.Code](node) {
      const match = node.value.trim() === "" ? true : false;
      // const text = context.getSource(node);
      // const match = text.match(/\[\s+\]\s/i);
      if (match) {
        const {
          loc: { start, end },
        } = node;

        report(
          node,
          new context.RuleError(`Empty code block`, {
            padding: locator.loc({
              start: { line: start.line, column: start.column },
              end: { line: end.line, column: end.column },
            }),
          })
        );
      }
    },
  };
}
