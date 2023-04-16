# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansKhudawadi from "@electron-fonts/noto-sans-khudawadi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansKhudawadi.inject()
})
```