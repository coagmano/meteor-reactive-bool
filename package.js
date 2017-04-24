Package.describe({
    name: 'coagmano:reactive-bool',
    version: '1.0.0',
    summary: 'Create a ReactiveBool type to show your intentions, includes a `toggle` method.',
    git: 'https://github.com/coagmano/meteor-reactive-bool'
});

Package.onUse(function (api) {
    api.versionsFrom('1.4');
    api.use(['ecmascript', 'reactive-var'], 'client');
    api.mainModule('reactive-bool.js', 'client');
});
