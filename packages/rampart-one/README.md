# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RampartOne from "@electron-fonts/rampart-one"

window.addEventListener("DOMContentLoaded", () => {
    RampartOne.inject()
})
```