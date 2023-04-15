# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import EduNSWACTFoundation from "@electron-fonts/edu-nsw-act-foundation"

window.addEventListener("DOMContentLoaded", () => {
    EduNSWACTFoundation.inject()
})
```