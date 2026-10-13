# Access for All

Access for All is a lightweight browser accessibility extension built for Google Chrome and Chromium-based browsers. It helps users improve readability and accessibility on websites by allowing them to:

- Increase or decrease text size
- Toggle high-contrast mode for better visibility
- Read selected text aloud using the browser's built-in speech synthesis

This project is designed as a simple extension that runs directly in the browser without needing a backend server or database.

## How it works

The extension uses a Chrome extension popup and a content script:

- `manifest.json` defines the extension metadata and permissions.
- `popup.html` provides the floating popup UI with action buttons.
- `popup.js` sends user actions to the active browser tab.
- `content.js` runs on web pages and applies the requested accessibility changes.

When a user clicks a button in the extension popup, the popup script sends a message to the active tab. The content script receives that message and modifies the page, such as changing the font size, adjusting contrast, or reading selected text aloud.

### Feature behavior

1. Increase Font
   - Increases the page's base font size by 2px each time.

2. Decrease Font
   - Decreases the page's base font size by 2px each time.

3. High Contrast
   - Toggles a stronger contrast filter on the webpage for better readability.

4. Read Selected Text
   - Reads the user's selected text using `SpeechSynthesisUtterance`.
   - If no text is selected, it shows a browser alert asking the user to select text first.

## Project structure

```text
accessibility/
├── manifest.json      # Extension manifest and configuration
├── popup.html         # Extension popup interface
├── popup.css          # Popup styling
├── popup.js           # Sends actions from popup buttons to the active tab
├── content.js         # Applies accessibility changes on the page
├── LICENSE            # Project license
└── README.md          # Project documentation
```

## Setup for users

### 1. Download the project

Clone or download this repository to your local machine.

```bash
git clone https://github.com/Faidaaa/accessibility.git
cd accessibility
```

### 2. Open Chrome extension settings

- Open Google Chrome.
- Go to `chrome://extensions`.
- Turn on `Developer mode` in the top-right corner.

### 3. Load the extension

- Click `Load unpacked`.
- Select the project folder (`accessibility`).
- The extension will appear in the Chrome toolbar.

### 4. Use the extension

- Open any website.
- Click the extension icon from the browser toolbar.
- Use the available buttons:
  - Increase Font
  - Decrease Font
  - High Contrast
  - Read Selected Text

### 5. Optional: use in Microsoft Edge

The extension also works in Chromium-based browsers such as Microsoft Edge because they support the same extension APIs.

- Open `edge://extensions`
- Enable `Developer mode`
- Click `Load unpacked`
- Select the same project folder

## Permissions used

This extension requests the following browser permissions:

- `activeTab`: Allows the extension to interact with the currently active tab.
- `scripting`: Allows injecting scripts into the page when actions are triggered.

These permissions are enough for the extension to adjust page styling and read selected text without requiring external services.

## Development notes

This project is intentionally simple and beginner-friendly. It is a good starting point for building more advanced accessibility tools such as:

- Dyslexia-friendly fonts
- Keyboard navigation improvements
- Text-to-speech for page headings and links
- Better contrast and focus styles
- Custom accessibility presets

## License

This project is licensed under the MIT license. See the LICENSE file for details.
