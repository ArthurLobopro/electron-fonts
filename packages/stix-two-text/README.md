# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import STIXTwoText from "@electron-fonts/stix-two-text"

window.addEventListener("DOMContentLoaded", () => {
    STIXTwoText.inject()
})
```