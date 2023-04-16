# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PassionOne from "@electron-fonts/passion-one"

window.addEventListener("DOMContentLoaded", () => {
    PassionOne.inject()
})
```