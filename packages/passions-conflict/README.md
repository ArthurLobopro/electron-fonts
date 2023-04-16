# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import PassionsConflict from "@electron-fonts/passions-conflict"

window.addEventListener("DOMContentLoaded", () => {
    PassionsConflict.inject()
})
```