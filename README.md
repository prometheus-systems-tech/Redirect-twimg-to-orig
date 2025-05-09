# Redirect twimg to :orig

A simple UserScript that automatically redirects Twitter image URLs to their full-resolution versions, ensuring you always get the highest quality images.

## 📜 Description

Twitter serves images with various quality parameters. This script intercepts such URLs and forces a redirect to the original, full-resolution version by appending or replacing the `?name` with the value `orig`.

## 🚀 Features

- Automatically redirects to full-resolution images
- Works silently in the background
- Lightweight and fast
- Auto-updating with Tampermonkey or Violentmonkey support

## 📦 Installation

To use this script, you must have a UserScript manager like:

- [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
- [Violentmonkey](https://violentmonkey.github.io/)

Click here to install directly:  

👉 [Install Redirect twimg to :orig](https://raw.githubusercontent.com/prometheus-systems-tech/Redirect-twimg-to-orig/refs/heads/main/redirector.js)

Or add it manually in your UserScript manager using this URL:

👉 https://raw.githubusercontent.com/prometheus-systems-tech/Redirect-twimg-to-orig/refs/heads/main/redirector.js


## 🔄 Auto-Update Support

This script includes `@updateURL` and `@downloadURL` metadata so it will automatically update when new versions are released.

## 🛠 How It Works

If the current image URL does not already have the value `orig` in the `?name=` variable, the script will modify the URL accordingly.
This will redirect the browser to the full-resolution version.

## 🧑‍💻 Author

Ross WD Cameron
Solutions Architect

📬  [rwd.cameron@prometheus-systems.co.za](mailto://rwd.cameron@prometheus-systems.co.za?Subject=twimg-resizer)

🔗  [Prometheus Systems](https://www.prometheus-systems.co.za/)

## 📜  License

This project is licensed under the [GNU General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html).
