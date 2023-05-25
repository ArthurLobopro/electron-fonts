# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MonomaniacOne from "@electron-fonts/monomaniac-one"

window.addEventListener("DOMContentLoaded", () => {
    MonomaniacOne.inject()
})
```