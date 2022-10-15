# textlint-rule-no-empty-element

textlint rule that checks if any element in the markdown file is empty.
## Features

**OK** :green_heart:

```
# Header 1
## Header 2
### Header 3

- list item

```npm i textline-rule-no-empty-element```
```


**NG** :negative_squared_cross_mark:

> Found Empty Header: `#`

> Found Empty Header: `##`

> Found Empty Header: `###` 

> Found Empty ListItem: `-`

> Found Empty Code: ` ``` ``` `

```
#
##
###
-

``` ```
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-no-empty-element

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "textlint-rule-no-empty-element": true
    }
}
```

Via CLI

```
textlint --rule textline-rule-no-empty-element README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## License

ISC © 
