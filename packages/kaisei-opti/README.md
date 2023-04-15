# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KaiseiOpti from "@electron-fonts/kaisei-opti"

window.addEventListener("DOMContentLoaded", () => {
    KaiseiOpti.inject()
})
```