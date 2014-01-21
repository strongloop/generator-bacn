'use strict';

/*!
 * A generator for BACN projects.
 */
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

/**
 * Creates a new instance of BacnGenerator with the provided `args`, `options`,
 * and `config`.
 */
function BacnGenerator(args, options, config) {
  if (!(this instanceof BacnGenerator)) {
    return new BacnGenerator(args, options, config);
  }

  // Important but undocumented property of `Base`: `this.options` is set to
  // the `options` argument.
  yeoman.generators.Base.call(this, args, options, config);

  // TODO(schoon)
  this.version = '0.4.0';
}
util.inherits(BacnGenerator, yeoman.generators.Base);
BacnGenerator.createGenerator = BacnGenerator;

/**
 * TODO: Description.
 */
BacnGenerator.prototype.header = function header() {
  var self = this;

  console.log(self.yeoman);

  return self;
};

/**
 * TODO: Description.
 */
BacnGenerator.prototype.ask = function ask() {
  var self = this;
  var callback = self.async();

  self.prompt([{
    type: 'list',
    name: 'template',
    message: 'Which template would you like to start with?',
    default: self.options.template || 'ionic',
    choices: [{
      name: 'IonicAngular',
      value: 'ionic'
    }, {
      name: 'Bootstrap & Marionette',
      value: 'marionette'
    }, {
      name: 'Bootstrap & Angular',
      value: 'angular'
    }]
  }], function (answers) {
    util._extend(self.options, answers);
    callback();
  });

  return self;
};

/**
 * TODO: Description.
 */
BacnGenerator.prototype.renderSharedFiles = function renderSharedFiles() {
  var self = this;

  self.sourceRoot(path.join(__dirname, '..'));
  self.copy('.editorconfig', '.editorconfig');
  self.copy('.jshintrc', '.jshintrc');

  return self;
};

/**
 * TODO: Description.
 */
BacnGenerator.prototype.renderTemplateFiles = function renderTemplateFiles() {
  var self = this;

  self.sourceRoot(path.join(__dirname, 'templates', self.options.template));
  self.template('package.json', 'package.json');
  self.template('bower.json', 'bower.json');
  self.template('index.html', 'index.html');
  self.template('main.css', 'css/main.css');
  self.template('main.js', 'js/main.js');

  return self;
};

/**
 * TODO: Description.
 */
BacnGenerator.prototype.finish = function finish() {
  var self = this;

  self.installDependencies({
    skipInstall: self.options.skipInstall || self.options['skip-install'],
    callback: self.async()
  });

  return self;
};

/**
 * TODO: Description.
 */
BacnGenerator.prototype.footer = function footer() {
  var self = this;

  console.log('');
  console.log('BACN generator finished.');
  console.log('Template: %s', self.options.template);
  console.log('Output root: %s', self.destinationRoot());

  return self;
};

/*!
 * Export `BacnGenerator`.
 */
module.exports = BacnGenerator;