# wait-for-dom-load

A handy module that help you pu some logic just after the page load.

## install

```
npm i wait-for-dom-load
```

## Usage

```
import waitForDomLoad from 'wait-for-dom-load'
 
waitForDomLoad(() => {
  // SOMETHING AFTER PAGE LOAD
})
```

> You don't need to care about whether the page is loaded or not. It just works whenever you call it as you desire.
