# css-block

[![npm version](https://badge.fury.io/js/css-block.svg)](https://badge.fury.io/js/css-block)

A simple block css module for styling a responsive block component

![](https://raw.githubusercontent.com/StevenIseki/css-block/master/screenshot.png)

## Compatible

- [css modules](https://github.com/css-modules/css-modules)
- [react-css-modules](https://github.com/gajus/react-css-modules)

## Install

`npm install css-block --save-dev`

## Usage

Simply import the block css module and use it to style your block element.

`import block from 'css-block'`

Then use it for styling your elements.

```jsx
	return (
        <div className={styles.block}>
            <div className={styles.content}>{this.props.children}</div>
        </div>
    );
```

## Example

Check out the full working example [here](https://github.com/StevenIseki/css-block/tree/master/example)

**Run it**

`cd example; npm install; npm start`

## License

[MIT](http://isekivacenz.mit-license.org/)
