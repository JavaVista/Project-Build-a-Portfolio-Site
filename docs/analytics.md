# Umami Analytics Architecture & Integration Guide

**Website:** [https://techno-logic.us/](https://techno-logic.us/)  
**Provider:** [Umami Cloud](https://umami.is/) (Hobby Plan)  
**Implementation Pattern:** Cookieless, privacy-preserving, zero-dependency declarative tracking with Astro 5 SSG.

---

## 1. Executive Summary & Design Principles

Techno-Logic uses **Umami Analytics**, an open-source, privacy-first analytics solution. This integration provides actionable insights into visitor engagement with technical projects, engineering articles, speaking engagements, and professional credentials without compromising visitor privacy or site performance.

### Core Principles
* **Zero Cookies & Zero Local Storage Tracking:** Complies out-of-the-box with GDPR, CCPA, and PECR without intrusive cookie consent banners.
* **No PII (Personally Identifiable Information):** No IP addresses are stored; visitors cannot be personally identified or tracked across third-party websites.
* **Minimal Performance Footprint:** Loaded asynchronously with `defer` (~2KB gzipped), ensuring Core Web Vitals (LCP, FID/INP, CLS) remain unaffected.
* **Strict Environment Isolation:** Analytics tracking is completely disabled on local development servers (`localhost`) and automatically ignores Netlify deploy previews.
* **Zero Runtime Dependencies:** Built using native declarative HTML attributes (`data-umami-event-*`) rather than client-side JavaScript bundle dependencies.

---

## 2. Configuration & Setup

### Umami Cloud Settings
* **Script URL:** `https://cloud.umami.is/script.js`
* **Production Website ID:** `f06db70a-aad1-4a4c-824d-110fb3a13cf3`
* **Allowed Domains:** `techno-logic.us,www.techno-logic.us`

### Environment Variables
The tracker script is configured in `src/layouts/BaseLayout.astro` with support for an optional environment variable:

| Variable Name | Required | Default Value | Description |
| :--- | :---: | :--- | :--- |
| `PUBLIC_UMAMI_WEBSITE_ID` | Optional | `f06db70a-aad1-4a4c-824d-110fb3a13cf3` | Overrides the default Umami Website ID if deploying to a secondary environment. |

To override locally or in Netlify Build Settings:
```bash
# .env or Netlify Environment Variable
PUBLIC_UMAMI_WEBSITE_ID="your-custom-website-id-here"
```

---

## 3. Architecture & Isolation Mechanisms

The analytics script is injected into `<head>` inside `src/layouts/BaseLayout.astro`:

```astro
{
  import.meta.env.PROD && (
    <script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id={umamiWebsiteId}
      data-domains="techno-logic.us,www.techno-logic.us"
    />
  )
}
```

### Dual-Layer Environment Isolation
1. **Build-Time Gate (`import.meta.env.PROD`):**
   * During local development (`npm run dev`), `import.meta.env.PROD` evaluates to `false`. Astro completely omits the `<script>` tag from the rendered HTML. Zero network calls to Umami are made during local work.
2. **Runtime Domain Restriction (`data-domains`):**
   * The `data-domains="techno-logic.us,www.techno-logic.us"` attribute tells the Umami client script to evaluate `window.location.hostname`.
   * When deployed on Netlify PR previews (e.g. `deploy-preview-12--techno-logic.netlify.app`), the script self-disables and drops all tracking events, keeping production metrics clean.

---

## 4. Custom Event Taxonomy

Key visitor interactions are tracked declaratively using Umami's native `data-umami-event` and `data-umami-event-*` custom attributes. No custom JavaScript event listeners or framework wrappers are needed.

| Event Name | Location / Component | Trigger | Custom Properties | Purpose & Insight |
| :--- | :--- | :--- | :--- | :--- |
| `resume_download` | `src/pages/resume.astro` | Click "Download PDF" button | `data-umami-event-format="pdf"` | Measures recruitment & hiring manager interest in offline resume review. |
| `project_demo_click` | `src/components/ProjectCard.astro` | Click project title or "Live Demo" link | `data-umami-event-project="{projectTitle}"` | Measures engagement with live deployed applications. |
| `project_source_click` | `src/components/ProjectCard.astro` | Click "Source Code" link | `data-umami-event-project="{projectTitle}"` | Measures visitor interest in engineering source code and architecture. |
| `github_profile_click` | `Hero.astro`, `Footer.astro`, `about.astro` | Click external GitHub profile links | `data-umami-event-location="hero \| footer \| about"` | Measures conversion from portfolio to GitHub open-source contributions. |
| `linkedin_profile_click` | `Hero.astro`, `Footer.astro`, `about.astro`, `resume.astro` | Click LinkedIn profile links | `data-umami-event-location="hero \| footer \| about \| resume"` | Measures professional networking intent and outbound recruiter traffic. |
| `contact_click` | `Hero.astro`, `ConnectBanner.astro`, `resume.astro` | Click email/contact mailto links or buttons | `data-umami-event-location="hero \| connect_banner \| resume"` | Tracks direct inbound consulting and employment contact inquiries. |
| `speaking_link_click` | `src/pages/speaking.astro`, `about.astro`, `VideoFacade.astro` | Click Sessionize profile or YouTube conference video | `data-umami-event-type="sessionize_profile \| youtube_talk"`, `data-umami-event-title="{title}"` | Tracks conference organizer evaluation and tech talk viewership. |

---

## 5. Verification & Testing Workflow

### Step-by-Step Verification Guide

#### A. Verifying Isolation in Local Development
1. Start the local server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:4321/` in Chrome or Firefox.
3. Open Developer Tools (`Cmd + Option + I` or `F12`) -> **Elements** tab.
4. Inspect the `<head>` tag.
5. **Expected Result:** The `cloud.umami.is` script tag is **absent**.

#### B. Testing Tracking Locally (Production Build Preview)
If you want to manually test tracking on your local machine:
1. Temporarily add `localhost` to the allowed domains in `BaseLayout.astro`:
   ```astro
   data-domains="techno-logic.us,www.techno-logic.us,localhost"
   ```
2. Build and run the production preview:
   ```bash
   npm run build
   npm run preview
   ```
3. Open `http://localhost:4321/` with Developer Tools -> **Network** tab.
4. Filter by `umami` or `script.js`. You should see `script.js` load with status `200` or `304`.
5. Click on an interactive element (e.g. "Download PDF" on `/resume/` or a project demo link).
6. Filter the Network tab by `collect` or `api/send`.
7. **Expected Result:** A `POST` request to `https://cloud.umami.is/api/send` with payload containing `type: "event"` and `data: { eventName: "resume_download", ... }`.
8. *Remember to revert any temporary `localhost` test domain before committing.*

#### C. Verifying in Umami Cloud Dashboard
1. Log in to [Umami Cloud](https://cloud.umami.is/).
2. Select the **techno-logic.us** dashboard.
3. Check the **Realtime** tab: Active visits, current pages, and custom event fires appear within seconds.
4. Check the **Events** tab: Review aggregated counts for `resume_download`, `project_demo_click`, etc.

---

## 6. Privacy Compliance & Transparency

To ensure complete transparency with visitors:
* A dedicated **Privacy Notice** is published at [`/privacy/`](https://techno-logic.us/privacy/).
* The site footer features a persistent link to `/privacy/`.
* The notice explicitly details:
  - What data is collected (aggregate page views, referrers, device/browser types).
  - What is never collected (IP addresses, personal identities, form inputs).
  - The absence of cookies and persistent cross-site tracking identifiers.
  - Umami Cloud's GDPR compliance standards.

---

## 7. Maintenance & Extending Analytics

When adding new interactive features or outbound links to the portfolio, follow these conventions:

### Adding a New Tracked Element
Use native Umami data attributes directly in your `.astro` component:

```astro
<a
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  data-umami-event="resource_click"
  data-umami-event-resource="documentation_link"
>
  View Documentation
</a>
```

### Guidelines for New Events
1. **Use `snake_case` for event names:** (e.g., `feature_toggle`, `newsletter_signup`).
2. **Never include user input or sensitive data:** Do not pass email addresses, form values, or personalized queries into `data-umami-event-*` attributes.
3. **Keep property names descriptive and brief:** (e.g., `data-umami-event-project`, `data-umami-event-location`).
4. **Update this document:** Add any new events to Section 4 (Custom Event Taxonomy).
