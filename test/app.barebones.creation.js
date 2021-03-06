'use strict';

var assert  = require('assert'),
    path    = require('path'),
    helpers = require('yeoman-generator').test;

describe('barebones generator', function () {

  before(function (done) {

    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {

      this.app = helpers.createGenerator('chaplin:app', [
        '../../app'
      ]);
      done();
    }.bind(this));

  });

  it('creates expected files', function (done) {

    var expected = [
      'bower.json',
      'config.json',
      'package.json',
      'Gruntfile.coffee',
      'app/application.coffee',
      'app/initialize.coffee',
      'app/mediator.coffee',
      'app/routes.coffee',
      'app/lib/utils.coffee',
      'app/lib/view-helper.coffee',
      'app/styles/application.styl',
      'app/templates/home.hbs',
      'app/templates/site.hbs',
      'app/templates/header.hbs',
      //'app/controllers/home.coffee', Need to figure this one out
      'app/controllers/base/controller.coffee',
      'app/assets/index.hbs',
      'app/models/base/collection.coffee',
      'app/models/base/model.coffee',
      'app/views/site-view.coffee',
      'app/views/base/collection-view.coffee',
      'app/views/base/view.coffee',
      'app/views/home/header-view.coffee',
      'app/views/home/home-page-view.coffee',
      '.jshintrc',
      '.editorconfig'
    ];

    helpers.mockPrompt(this.app, {
      'appName': 'footestbaz',
      'controllerSuffix': '',
      'skeleton': '0'
    });

    this.app.options['skip-install'] = true;

    this.app.run({}, function () {
      helpers.assertFiles(expected);

      done();
    });

  });

  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });

});
