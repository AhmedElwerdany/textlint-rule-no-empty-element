"use strict";
import TextLintTester from 'textlint-tester';

import rule from '../src';

const tester = new TextLintTester();
// rule
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
    valid: [
        // no problem
        "```hello```"
    ],
    invalid: [
        // single match
        {
            text: "``` ```",
            errors: [
                {
                    message: "Empty code block",
                    line: 1,
                    column: 7
                }
            ]
        },
//         // multiple match
//         {
//             text: `It has many bugs.

// One more bugs`,
//             errors: [
//                 {
//                     message: "Found bugs.",
//                     line: 1,
//                     column: 13
//                 },
//                 {
//                     message: "Found bugs.",
//                     line: 3,
//                     column: 10
//                 }
//             ]
//         },

    ]
});