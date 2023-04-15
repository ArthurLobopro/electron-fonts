# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import Inconsolata from "@electron-fonts/inconsolata"

window.addEventListener("DOMContentLoaded", () => {
    Inconsolata.inject()
})
```