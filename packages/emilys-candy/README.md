# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EmilysCandy from "@electron-fonts/emilys-candy"

window.addEventListener("DOMContentLoaded", () => {
    EmilysCandy.inject()
})
```