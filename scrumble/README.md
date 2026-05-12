# SCRUMBLE Landing Page

This directory contains the official, high-converting marketing landing page for the **SCRUMBLE** mobile application. 

Currently, it is hosted as a sub-directory on the developer's portfolio site (`techno-logic.us/scrumble`), but it has been intentionally built to be completely standalone. This entire folder can be easily lifted and deployed to its own dedicated domain (e.g., `scrumble.app`) with zero code refactoring.

## Architecture & Tech Stack

This landing page was built to prioritize speed, SEO, and aesthetics ("Bureaucratic Noir"), without the overhead of a heavy JavaScript framework.

*   **HTML5 Semantic Structure:** Optimized for accessibility and search engine indexing.
*   **Tailwind CSS (via CDN):** Used for rapid UI prototyping and layout management.
*   **Custom CSS Variables:** Handles the core design tokens (`--color-primary`, `--color-surface`, etc.) to ensure exact parity with the mobile app's styling.
*   **Native Dark Mode:** Automatically respects the user's OS `prefers-color-scheme` via a pure CSS `@media` query, swapping the custom variables instantly without JavaScript flashes.
*   **Vanilla JavaScript:** A minimal script (less than 20 lines) handles the scroll-spy sticky navigation and the slide-out mobile drawer.

## Integrations

To support audience growth and product feedback, this page integrates with several free, industry-standard tools:

1.  **Email Capture (Kit / ConvertKit):** 
    *   Embedded at the bottom of the page.
    *   Captures user emails for the "Development Feed".
    *   The form HTML was heavily sanitized and restyled using Tailwind to match the site's design system, while keeping Kit's hidden logic (spinners, error handling) intact.
2.  **Feedback Portal (Canny.io):**
    *   Linked in the Navigation Menu and Footer.
    *   Directs users to a public board (`techno-logic.canny.io/feature-requests-bugs`) where they can request puzzle mechanics and report bugs.
3.  **Legal Policies (PrivacyPolicies.com):**
    *   `privacy.html` and `terms.html` were explicitly drafted to cover both the website (email capture) and the mobile app (zero data collection, Google Play compliant).

## Future Portability

If you decide to move this to its own domain:
1. Copy the `scrumble/` folder.
2. Copy the associated assets from `../assets/images/scrumble/` to a local `assets/` folder, and update the image `src` paths in the HTML files.
3. Deploy directly to Netlify, Vercel, or Firebase Hosting.

## Modifying the Design

*   **Colors:** All brand colors are defined in the `<style>` block at the top of `index.html`. Modifying them there will update both Light and Dark modes.
*   **Typography:** The site uses `Courier Prime` (for UI elements and data) and `Georgia` (for display headings) fetched asynchronously via Google Fonts.
