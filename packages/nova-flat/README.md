# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaFlat from "@electron-fonts/nova-flat"

window.addEventListener("DOMContentLoaded", () => {
    NovaFlat.inject()
})
```