# Ember CLI echarts
[![Join the chat at https://gitter.im/cmackenz/ember-cli-echarts](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cmackenz/ember-cli-echarts?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/cmackenz/ember-cli-echarts.svg)](https://travis-ci.org/cmackenz/ember-cli-echarts) 
[![npm version](https://badge.fury.io/js/ember-cli-echarts.svg)](http://badge.fury.io/js/ember-cli-echarts)
[![Code Climate](https://codeclimate.com/github/cmackenz/ember-cli-echarts/badges/gpa.svg)](https://codeclimate.com/github/cmackenz/ember-cli-echarts)
[![Dependency Status](https://david-dm.org/cmackenz/ember-cli-echarts.svg)](https://david-dm.org/cmackenz/ember-cli-echarts)
[![devDependency Status](https://david-dm.org/cmackenz/ember-cli-echarts/dev-status.svg)](https://david-dm.org/cmackenz/ember-cli-echarts#info=devDependencies)

An EmberJS [echarts](http://echarts.baidu.com/) wrapper

### Shout-out to @offirgolan as a lot of this was stolen from: [ember-cli-nvd3](https://github.com/offirgolan/ember-cli-nvd3) :pizza:

## Installation ##
```shell
ember install ember-cli-echarts
```

## Looking for help? ##
If it is a bug [please open an issue on GitHub](http://github.com/cmackenz/ember-cli-echarts/issues).

## echarts Documentation
Before using this addon, you might want to checkout the [echarts Docs](https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts)

## Basic Usage ##
All you need to get started is to specify which type of chart you want and the data it should display

```handlebars
{{echarts-chart options=options}}
```

## Options

### Chart Options
All chart specific options can be specified via the `options` property.

```javascript
// Basic area chart
option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};
```

```handlebars
{{echarts-chart options=options}}
```

### Helper Actions
Currently there are two helper actions provided:

#### 1. beforeSetup
This is called before echarts has been initialized. 

```javascript
beforeSetup(context, chart) {}
```

```handlebars
{{echarts-chart options=options beforeSetup=beforeSetup}}
```

#### 2. afterSetup
This is called after all chart options and data have been set, as well as after the chart has been created. 

```javascript
afterSetup(context, chart) {}
```

# Want to help?

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
