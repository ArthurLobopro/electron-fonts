# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansTagalog from "@electron-fonts/noto-sans-tagalog"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansTagalog.inject()
})
```