## eslint-config-gyk

> ESLint Shareable Config for gyk Javascript Style Guide!

## Installation

```shell
npm install --save-dev eslint eslint-config-gyk
```

## Usage
specifying gyk in the extends section of your ESLint configuration.

```javascript
{
  "extends": "gyk",
  "rules": {
    // Additional, per-project rules...
  }
}
```

or

```javascript

{
  "eslintConfig": {
    "extends": "eslint-config-gyk"
  }
}

```

## eslint-config-gyk/legacy
Maybe some legacy projects use ES5 and below.
```javascript

{
  "extends": "gyk/legacy",
  "rules": {
    // Additional, per-project rules...
  }
}
```






