# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansLaoLooped from "@electron-fonts/noto-sans-lao-looped"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansLaoLooped.inject()
})
```