# Shalini's Corner — Static Site

Simple, elegant, responsive one‑page site for a home‑style Mauritian × Indian kitchen. Ready for GitHub Pages.

## Quick Start
1. Edit text in `index.html` (About, Hours, contact numbers).
2. Update payment handles in `assets/js/app.js` (see comments at bottom).
3. Replace images under `assets/img/` with your real photos (keep same names or update paths).
4. (Optional) Adjust rotating menu and open days in `assets/js/app.js`.

## Deploy to GitHub Pages (Web UI — no terminal)
1. Create a new repo on GitHub named `shalinis-corner` (any name works).
2. Click **Add file → Upload files**.
3. Drag‑and‑drop the entire contents of this folder (or the provided zip) into GitHub and **Commit**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
6. Choose **Branch: main** and **/ (root)**, then **Save**.
7. Wait a minute and your site will appear at `https://<your-username>.github.io/<repo>/`.

## Customize
- **Rotating Menu:** Edit the `menu` array in `assets/js/app.js`.
- **Typical Open Days:** Update `typicalOpenDays` in `assets/js/app.js`.
- **Brand Colors/Fonts:** Tweak CSS in `assets/css/styles.css`.
- **Payment Options:** Set your PayPal/Venmo links and Zelle handle in `assets/js/app.js`.
- **Cash Policy:** The Order section includes “Exact change only.”

## Notes
- This is a static site (no database, no checkout). Payments happen off‑site through PayPal/Zelle/Venmo after you confirm orders.
- Keep things small and simple to match the small‑batch kitchen vibe.
