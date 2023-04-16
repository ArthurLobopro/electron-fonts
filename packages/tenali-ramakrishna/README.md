# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import TenaliRamakrishna from "@electron-fonts/tenali-ramakrishna"

window.addEventListener("DOMContentLoaded", () => {
    TenaliRamakrishna.inject()
})
```