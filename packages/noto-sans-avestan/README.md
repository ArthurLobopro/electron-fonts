# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansAvestan from "@electron-fonts/noto-sans-avestan"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansAvestan.inject()
})
```