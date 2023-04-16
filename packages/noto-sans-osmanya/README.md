# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansOsmanya from "@electron-fonts/noto-sans-osmanya"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansOsmanya.inject()
})
```