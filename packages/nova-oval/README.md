# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NovaOval from "@electron-fonts/nova-oval"

window.addEventListener("DOMContentLoaded", () => {
    NovaOval.inject()
})
```