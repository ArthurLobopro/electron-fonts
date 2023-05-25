# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TsukimiRounded from "@electron-fonts/tsukimi-rounded"

window.addEventListener("DOMContentLoaded", () => {
    TsukimiRounded.inject()
})
```