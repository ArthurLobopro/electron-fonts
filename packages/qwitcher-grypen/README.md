# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import QwitcherGrypen from "@electron-fonts/qwitcher-grypen"

window.addEventListener("DOMContentLoaded", () => {
    QwitcherGrypen.inject()
})
```