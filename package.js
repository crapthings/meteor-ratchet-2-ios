Package.describe({
  name: "crapthings:ratchet-2-ios",
  summary: "Build mobile apps with simple HTML‚ CSS‚ and JS components.",
  version: "2.0.2",
  git: "https://github.com/crapthings/meteor-ratchet-2-ios.git"
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.3.1");

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('ratchet-2');
  api.addFiles(path.join(asset_path, 'css', 'ratchet.css'), 'client');
  api.addFiles(path.join(asset_path, 'css', 'ratchet-theme-ios.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'ratchet.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard ratchet css so
  // that its styles take precedence.
  api.addFiles(path.join('ratchet-override.css'), 'client');
});
