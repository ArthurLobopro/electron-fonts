# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import DarumadropOne from "@electron-fonts/darumadrop-one"

window.addEventListener("DOMContentLoaded", () => {
    DarumadropOne.inject()
})
```