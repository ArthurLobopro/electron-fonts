# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import ArchitectsDaughter from "@electron-fonts/architects-daughter"

window.addEventListener("DOMContentLoaded", () => {
    ArchitectsDaughter.inject()
})
```