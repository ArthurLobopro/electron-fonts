# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FlowCircular from "@electron-fonts/flow-circular"

window.addEventListener("DOMContentLoaded", () => {
    FlowCircular.inject()
})
```