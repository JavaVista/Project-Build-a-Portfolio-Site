---
title: "Code to Cloud: My SQL Saturday Orlando 2025 Experience"
seoTitle: "Code to Cloud: Deploying Full-Stack Angular Apps with Cloud Run & Cloud SQL"
subtitle: "Hands-on takeaways from SQL Saturday Orlando: IAM security, serverless containers, and community learning"
description: "How 29 developers deployed full-stack Angular SSR apps to Google Cloud Run with IAM-authenticated Cloud SQL at SQL Saturday Orlando 2025."
publishDate: 2025-10-06
author: "Javier Carrion"
coverImage: "/assets/images/code-to-cloud-cover.png"
coverAlt: "Code to Cloud: Angular + Cloud Run + Cloud SQL"
coverCaption: "Hands-on workshop session at SQL Saturday Orlando 2025 exploring modern full-stack cloud deployment."
tags: ["Google Cloud", "Angular", "Cloud Run", "Cloud SQL", "Public Speaking"]
draft: false
readingTime: "5 min read"
canonicalUrl: "https://googledevsflorida.blogspot.com/2025/10/code-to-cloud-my-sql-saturday-orlando.html"
---

> **TL;DR:** Had an amazing time sharing my **"Code to Cloud: Deploying a Full-Stack Angular App with Cloud Run & Cloud SQL (Hands-On)"** session at <a href="https://sqlsaturday.com/2025-10-04-sqlsaturday1122/" target="_blank" rel="noopener noreferrer">SQL Saturday Orlando 2025</a>!  
> * **The Turnout:** Around 29 attendees dove into a live hands-on codelab deploying full-stack Angular SSR to Google Cloud.  
> * **The Stack:** Angular SSR, Google Cloud Run, Cloud SQL for PostgreSQL, and IAM passwordless authentication using the Cloud SQL Node.js Connector.  
> * **Keep Learning:** Everyone received access to <a href="https://www.cloudskillsboost.google/" target="_blank" rel="noopener noreferrer">Google Cloud Skills Boost</a> and my self-paced interactive tutorial on <a href="https://codevista-codelabs-387250926785.us-east1.run.app/codelabs/cloud-sql-cloud-run-angular-deployment/index.html?index=%2F#0" target="_blank" rel="noopener noreferrer">CodeVista Labs</a>.

*By <a href="https://gdg.community.dev/u/javier4/#/about" target="_blank" rel="noopener noreferrer">Javi</a>, Software Engineer & Community Organizer at <a href="https://gdg.community.dev/gdg-central-florida/" target="_blank" rel="noopener noreferrer">GDG Central Florida</a>*

---

This weekend was something truly special. I had the privilege of representing **GDG Central Florida** and presenting my session, **"Code to Cloud: Deploying a Full-Stack Angular App with Cloud Run & Cloud SQL (Hands-On)"**, at <a href="https://sqlsaturday.com/2025-10-04-sqlsaturday1122/" target="_blank" rel="noopener noreferrer">SQL Saturday Orlando 2025</a>.

I walked into the session room not knowing what to expect, and wow—what an incredible turnout! We had around **29 attendees** who jumped right in, laptops open and ready to build. The room was buzzing with insightful questions, real-time collaboration, and those classic "aha!" moments that make teaching in public so deeply rewarding.

---

### The Session in a Nutshell

The session was designed as an interactive **hybrid talk + workshop**:

* A **15-minute architectural overview** covering Cloud Run, Cloud SQL, containerization, and the Cloud SQL Node.js Connector.
* Followed by a **45-minute hands-on codelab** where participants followed along step-by-step to deploy a full-stack Angular SSR application directly to Google Cloud.

<figure class="media-card">
  <img 
    src="/assets/images/code-to-cloud-architecture.png" 
    alt="Google Cloud Architecture: Cloud Run connecting to Cloud SQL via IAM" 
    loading="lazy"
    decoding="async"
  />
  <figcaption class="media-caption">
    Architecture overview: Serverless container running on Cloud Run, securely communicating with managed Cloud SQL using IAM database authentication.
  </figcaption>
</figure>

During the workshop, attendees learned how to:

* Provision a managed **Cloud SQL** database instance in the cloud.
* Securely authenticate database connections using **Google Cloud IAM** (no hardcoded passwords or secrets stored in plain text!).
* Containerize and deploy modern **Angular Server-Side Rendering (SSR)** apps to **Google Cloud Run**.
* Perform end-to-end **CRUD operations** between the Angular UI and Cloud SQL backend.

By the end of the session, several attendees had their live apps deployed and running smoothly on Google Cloud!

---

### Hands-On Learning with CodeVista Labs & Cloud Skills Boost

To help everyone continue building after the session without feeling rushed, I provided free access to <a href="https://www.cloudskillsboost.google/" target="_blank" rel="noopener noreferrer"><strong>Google Cloud Skills Boost</strong></a>—a premier platform where developers can keep practicing real Google Cloud labs at their own pace.

I also directed attendees to my custom-built interactive codelabs platform:

<figure class="media-card">
  <a href="https://codevista-codelabs-387250926785.us-east1.run.app/" target="_blank" rel="noopener noreferrer">
    <img 
      src="/assets/images/codevista-codelabs.png" 
      alt="CodeVista Labs interactive tutorial portal" 
      loading="lazy"
      decoding="async"
    />
  </a>
  <figcaption class="media-caption">
    CodeVista Labs: My custom Google Cloud Run deployment of the Google Codelabs platform (<a href="https://github.com/JavaVista/codevista-codelabs" target="_blank" rel="noopener noreferrer">GitHub</a>).
  </figcaption>
</figure>

I told everyone not to worry if they couldn't finish every single step in 45 minutes. They could take the complete tutorial link home and finish at their own speed:

👉 <a href="https://codevista-codelabs-387250926785.us-east1.run.app/codelabs/cloud-sql-cloud-run-angular-deployment/index.html?index=%2F#0" target="_blank" rel="noopener noreferrer"><strong>Code to Cloud Codelab: Deploying a Full-Stack Angular App with Cloud Run & Cloud SQL</strong></a>

Keeping the session flexible and self-paced made the atmosphere relaxed, supportive, and engaging for developers at all experience levels.

---

### A Preview of 🌴 DevFest GemJam

This presentation also served as an exciting sneak peek into what's coming at <a href="https://devfestflorida.com/" target="_blank" rel="noopener noreferrer"><strong>DevFest GemJam</strong></a> (October 25 - November 1, 2025).

The skills we practiced—deploying containerized full-stack apps, authenticating securely with cloud IAM, and architecting serverless solutions—are exactly the capabilities developers will use at DevFest GemJam, our week-long hackathon celebrating collaboration, creativity, and community.

Participants will go beyond individual tutorials to ideate, prototype, and build solutions using Gemini, GenAI, and Google Cloud services alongside fantastic mentors and tech speakers. You can explore the lineup at <a href="https://devfestflorida.com/speakers" target="_blank" rel="noopener noreferrer">devfestflorida.com/speakers</a>.

---

### Community at the Heart of It All

What made this event truly memorable wasn't just the code or the cloud architecture—it was the people. The curiosity in every question, the spontaneous collaboration between desk neighbors, and the excitement when an app went live reminded me why community events are so vital.

At the end of the session, we celebrated with:

* **DevFest Florida stickers & swag** (because no developer event is complete without stickers! 😄).
* **Google Cloud Skills Boost access** for ongoing hands-on practice.
* Invitations to connect with our regional tech network at **DevFest Florida**.

A special shoutout to <a href="https://gdg.community.dev/u/m5pk22/#/about" target="_blank" rel="noopener noreferrer">Michael</a> and <a href="https://gdg.community.dev/u/m9q5gy/#/about" target="_blank" rel="noopener noreferrer">Kendra</a> from GDG Central Florida, who joined the room and supported the workshop throughout.

---

### 🙏 Thank You

A huge thank-you to the **SQL Saturday Orlando organizers**, the volunteers, and every attendee who spent their morning building with us. Events like this demonstrate how strong our Central Florida tech ecosystem is when we learn and build together.

If you couldn't make it to Orlando or want to run through the deployment yourself, all resources are available online:

* **Interactive Codelab:** <a href="https://codevista-codelabs-387250926785.us-east1.run.app/codelabs/cloud-sql-cloud-run-angular-deployment/index.html?index=%2F#0" target="_blank" rel="noopener noreferrer">Code to Cloud Tutorial</a> 
* **CodeVista Labs Platform:** <a href="https://codevista-codelabs-387250926785.us-east1.run.app/" target="_blank" rel="noopener noreferrer">codevista-codelabs.run.app</a> | <a href="https://github.com/JavaVista/codevista-codelabs" target="_blank" rel="noopener noreferrer">Platform GitHub Repo</a>
* **Session Slides:** <a href="https://docs.google.com/presentation/d/1rJ0eadJ474tzFfKfbp-kfPG1t9LtYT7GoHrZ9nNVGLM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Presentation Slide Deck</a>
* **Core Technologies:**
  * <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">Angular</a>
  * <a href="https://cloud.google.com/run?hl=en" target="_blank" rel="noopener noreferrer">Google Cloud Run</a>
  * <a href="https://cloud.google.com/sql" target="_blank" rel="noopener noreferrer">Google Cloud SQL</a>
  * <a href="https://github.com/GoogleCloudPlatform/cloud-sql-nodejs-connector" target="_blank" rel="noopener noreferrer">Cloud SQL Node.js Connector</a>
  * <a href="https://www.cloudskillsboost.google/" target="_blank" rel="noopener noreferrer">Google Cloud Skills Boost</a>

---

### 🤝 Let's Connect

I love teaching, speaking, and building alongside fellow engineers. Let's stay in touch:

* **LinkedIn:** <a href="https://linkedin.com/in/technologic" target="_blank" rel="noopener noreferrer">linkedin.com/in/technologic</a>
* **Bluesky:** <a href="https://bsky.app/profile/code-vista.bsky.social" target="_blank" rel="noopener noreferrer">@code-vista.bsky.social</a>
* **GDG CF Discord:** <a href="https://discord.gg/XRY5Qf4QjK" target="_blank" rel="noopener noreferrer">Join our Community Discord</a>
* **GDG Central Florida:** <a href="https://gdg.community.dev/gdg-central-florida/" target="_blank" rel="noopener noreferrer">Join our Chapter for upcoming workshops & meetups</a>

> *"Learning never exhausts the mind."*  
> — <a href="https://w.wiki/3Tg9" target="_blank" rel="noopener noreferrer">Leonardo da Vinci</a>

**¡Hasta la próxima!** 👋  
— <a href="https://gdg.community.dev/u/javier4/#/about" target="_blank" rel="noopener noreferrer"><strong>Javi</strong></a>  
Software Engineer & GDG Community Organizer  
[techno-logic.us](https://techno-logic.us/)
