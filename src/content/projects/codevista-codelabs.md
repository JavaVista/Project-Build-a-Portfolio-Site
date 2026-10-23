---
title: "CodeVista Labs & Codelabs"
description: "A customized Google Codelabs interactive portal deployed on Google Cloud Run, featuring hands-on cloud tutorials including deploying full-stack Angular with Cloud Run and Cloud SQL."
featured: true
order: 3
coverImage: "/assets/images/codevista-codelabs.png"
tags: ["Google Cloud", "Cloud Run", "Cloud SQL", "Angular", "Docker"]
demoUrl: "https://codevista-codelabs-387250926785.us-east1.run.app/"
demoLabel: "Live Codelabs"
repoUrl: "https://github.com/JavaVista/codevista-codelabs"
repoLabel: "View Code"
---

## About CodeVista Labs

**CodeVista Labs** is a personalized, self-hosted developer learning platform built on top of the open-source Google Codelabs tooling ecosystem (<a href="https://github.com/googlecodelabs" target="_blank" rel="noopener noreferrer">googlecodelabs</a>). Deployed as a serverless container on **Google Cloud Run**, it provides interactive, step-by-step technical guides with progress tracking, syntax-highlighted code snippets, and structured milestones.

### Featured Codelab: Code to Cloud

Created specifically for my technical workshop at <a href="https://sqlsaturday.com/2025-10-04-sqlsaturday1122/" target="_blank" rel="noopener noreferrer">SQL Saturday Orlando 2025</a>:

* **Title:** <a href="https://codevista-codelabs-387250926785.us-east1.run.app/codelabs/cloud-sql-cloud-run-angular-deployment/index.html?index=%2F#0" target="_blank" rel="noopener noreferrer"><strong>Code to Cloud: Deploying a Full-Stack Angular App with Cloud Run & Cloud SQL</strong></a>
* **Duration:** 65-minute guided interactive tutorial.
* **Topics Covered:** Provisioning Cloud SQL instances, authenticating securely with Google Cloud IAM (passwordless connections via Cloud SQL Node.js Connector), containerizing Angular SSR with Docker, deploying to Cloud Run, and executing full CRUD operations.

### Tech Stack & Architecture

* **Hosting & Compute:** Google Cloud Run (Fully managed serverless container runtime)
* **Containerization:** Docker multi-stage builds optimizing static assets and HTTP routing
* **Codelab Engine:** Google Codelabs tools (`claat` generator & custom web components)
* **Customization:** Branded CodeVista theme, customized index views, community links, and responsive layouts
* **Database & Full-Stack Stack:** Cloud SQL (PostgreSQL / MySQL) and Angular SSR

### Key Accomplishments

* Custom-engineered Google's codelab platform repository (<a href="https://github.com/JavaVista/codevista-codelabs" target="_blank" rel="noopener noreferrer">github.com/JavaVista/codevista-codelabs</a>) to support custom branding, custom landing views, and automated Cloud Run deployments.
* Successfully guided 29+ conference attendees through live hands-on deployments during SQL Saturday Orlando 2025.
* Provided self-paced continuity for community developers learning Google Cloud fundamentals.
