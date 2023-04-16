# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RussoOne from "@electron-fonts/russo-one"

window.addEventListener("DOMContentLoaded", () => {
    RussoOne.inject()
})
```