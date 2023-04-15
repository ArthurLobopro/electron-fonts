# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import MountainsofChristmas from "@electron-fonts/mountains-of-christmas"

window.addEventListener("DOMContentLoaded", () => {
    MountainsofChristmas.inject()
})
```