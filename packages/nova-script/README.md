# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaScript from "@electron-fonts/nova-script"

window.addEventListener("DOMContentLoaded", () => {
    NovaScript.inject()
})
```