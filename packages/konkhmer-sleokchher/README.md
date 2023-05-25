# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import KonkhmerSleokchher from "@electron-fonts/konkhmer-sleokchher"

window.addEventListener("DOMContentLoaded", () => {
    KonkhmerSleokchher.inject()
})
```