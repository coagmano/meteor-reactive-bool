Forked from ephemer:reactive-bool with changes to support import syntax

ReactiveBool
------------

This package extends Meteor's inbuilt ReactiveVar with guarantees of always containing a Boolean type (`true` or `false`), allowing you to express your intentions more clearly in code. It also provides a reactive 'toggle' method.

## Installation
To install run
```
meteor add coagmano:reactive-bool
```

## Usage

```js
import { ReactiveBool } from 'meteor/coagmano:reactive-bool';

let bool = new ReactiveBool(true);
bool.get(); // -> true

bool = new ReactiveBool(); // pass an undefined value into the constructor
bool.get(); // -> false, because undefined is falsey, as is 0, '', null etc.

let autorun = Tracker.autorun(function() {
    console.log(bool.get()); // see below
});

bool.toggle(); // -> logs true
bool.set(false); // -> logs false
bool.set(`there's a value in here`); // -> logs true
bool.toggle(); // -> logs false


// Note that bool.toggle() doesn't create a reactive dependency
autorun.stop(); // halt the logger from above
Tracker.autorun(function() {
    console.log(bool.toggle()); // logs true once
});

bool.toggle(); // logs nothing, but bool.get() === false, as expected
```

I find it particularly useful in Template helpers:

```js
Template.myTemplate.onCreated(function() {
    this.preProcessingFinished = new ReactiveBool(false);
    this.showDetails = new ReactiveBool(false);
});

Template.myTemplate.helpers({
    preProcessingFinished: () => Template.instance().preProcessingFinished.get(),
    showDetails: () => Template.instance().showDetails.get()
});

Template.myTemplate.onRendered(function() {
    doPreprocessing(this.data).then(() => {
        this.preProcessingFinished.set(true);
    });
});

Template.myTemplate.events({
    'click .toggle-details'(e, tmpl) {
        tmpl.showDetails.toggle();
    }
});
```


In your template:

```html
<Template name="myTemplate">
{{#unless preProcessingFinished}}
    {{> LoadingScreen }}
{{else}}
    {{> InterestingStuff }}
    {{#if showDetails}}
        {{> InterestingDetails }}
    {{/if}}
{{/unless}}
</Template>
```
