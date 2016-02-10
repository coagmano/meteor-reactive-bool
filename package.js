Package.describe({
    name: 'ephemer:reactive-bool',
    version: '1.0.0',
    summary: 'Create a ReactiveBool type to show your intentions, includes a `toggle` method',
    git: 'https://github.com/ephemer/meteor-reactive-bool'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.addFiles('reactive-bool.js');
});
