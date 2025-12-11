import Application from '@ember/application';
import compatModules from '@embroider/virtual/compat-modules';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'planner-ember/config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import setupInspector from '@embroider/legacy-inspector-support/ember-source-4.12';
import { setBuildURLConfig } from '@ember-data/request-utils';
import { startMockServer } from './mocks/server';

setBuildURLConfig({
  namespace: 'api',
});

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

if (config.environment !== 'production') {
  startMockServer();
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver.withModules(compatModules);
  inspector = setupInspector(this);
}

loadInitializers(App, config.modulePrefix, compatModules);
