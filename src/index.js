export default function(context, options = {}) {
    const {Syntax, RuleError, report, getSource, locator} = context;
    return {
        [Syntax.Code](node) {
            const match = node.value.trim() === ''  ? true : false
            // const text = context.getSource(node);
            // const match = text.match(/\[\s+\]\s/i);
            if (match) {
                report(
                    node,
                    new context.RuleError(`Empty code block`, {
                        padding: locator.range([node.range[0], node.range[1]])
                    })
                );
            }
        }
    }
};
