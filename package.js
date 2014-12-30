Package.describe({
  summary: "Reactive Base class for building objects backed by Collection data",
  version: '1.2.3',
  name: "oaf:reactive-class",
  git: 'https://github.com/oafmedium/meteor-reactive-class',
});

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.2');
  api.use(["underscore", "deps"], ["client", "server"]);
  api.add_files("ReactiveClass.js", ["client", "server"]);
  api.export("ReactiveClass", ["client", "server"]);
});

Package.on_test(function(api) {
  api.add_files("ReactiveClass.js", ["client", "server"]);
  api.use('tinytest', ['client', 'server']);
  api.use('coffeescript', ['client', 'server']);
  api.use("mongo-livedata");
  api.add_files("tests/reactiveClassCoffeeTests.coffee");
  api.add_files("tests/reactiveClassTests.js");
});
