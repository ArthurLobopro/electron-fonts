# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import FlowBlock from "@electron-fonts/flow-block"

window.addEventListener("DOMContentLoaded", () => {
    FlowBlock.inject()
})
```