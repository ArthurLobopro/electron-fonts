# Electron Fonts

Electron fonts packages provide font archives em electron desktop apps.

## How to use

* Install the package

* On your `preload.js`, add:

```ts
import BioRhymeExpanded from "@electron-fonts/biorhyme-expanded"

window.addEventListener("DOMContentLoaded", () => {
    BioRhymeExpanded.inject()
})
```