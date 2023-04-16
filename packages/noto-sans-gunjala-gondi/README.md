# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import NotoSansGunjalaGondi from "@electron-fonts/noto-sans-gunjala-gondi"

window.addEventListener("DOMContentLoaded", () => {
    NotoSansGunjalaGondi.inject()
})
```