# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import RocknRollOne from "@electron-fonts/rocknroll-one"

window.addEventListener("DOMContentLoaded", () => {
    RocknRollOne.inject()
})
```