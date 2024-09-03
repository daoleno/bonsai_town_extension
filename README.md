# Bonsai Town Extension

This Chrome extension replaces the new tab page with bonsai.town.

## Features

- Opens bonsai.town in a new tab while keeping the "New Tab" title
- Clicking the extension icon also opens bonsai.town in a new tab

## Development

This extension is built using [Plasmo](https://docs.plasmo.com/).

1. Install dependencies:
   ```bash
   bun install
   ```

2. Run the development server:
   ```bash
   bun dev
   ```

3. Load the extension in Chrome:
   - Go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `build/chrome-mv3-dev` directory

## Building for Production
