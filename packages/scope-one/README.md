# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ScopeOne from "@electron-fonts/scope-one"

window.addEventListener("DOMContentLoaded", () => {
    ScopeOne.inject()
})
```