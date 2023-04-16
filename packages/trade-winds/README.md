# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TradeWinds from "@electron-fonts/trade-winds"

window.addEventListener("DOMContentLoaded", () => {
    TradeWinds.inject()
})
```