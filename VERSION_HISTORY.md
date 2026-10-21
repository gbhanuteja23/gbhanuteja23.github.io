# 📜 Portfolio Website — Version History & Changelog

This document tracks all version updates, architectural modernizations, and professional career milestones for the portfolio website of **G Bhanuteja** ([gbhanuteja23.github.io](https://gbhanuteja23.github.io/)).

---

## 🚀 Version 3.0.0 — Major Modernization (October 2026)

### 1. Professional Career & Experience Updates (Post-2022 Milestones)
- **Ernst & Young (EY / EY-GDS)**:
  - Added current role as **Senior Software Engineer** (`June 2026 – Present | India`).
  - Leading enterprise Agentic AI workflows, Digital Twins, and Spatial Computing solutions.
- **MapmyIndia (CE Info Systems)**:
  - Added **Senior Software Engineer** (`January 2025 – June 2026 | New Delhi, India`): Led core engineering for 3D digital mapping, navigation SDKs, dynamic routing engines, and spatial computing platforms.
  - Added **Software Engineer** (`October 2022 – January 2025 | New Delhi, India`): Engineered geospatial web and mobile solutions, GIS APIs, and high-throughput vector map rendering engines.
- **Jio Tesseract (Tesseract Imaging Ltd)**:
  - Updated timeline to **Software Development Engineer (Unity / AR / VR)** (`January 2022 – October 2022 | Navi Mumbai, India`): Jio Glass MR headset ecosystem and Enterprise Remote Assistance application.
- **Internships & Education**:
  - Verified and preserved foundational internships: AjnaLens (Sep–Nov 2021), Jio Tesseract (Jul–Aug 2021), Learning Pad (Oct 2020–Apr 2021), Robotech Labs IIT Delhi (Jun 2019), and B.Tech ECE at JIIT Noida (2018–2022).

---

### 2. NVIDIA - GSI Hackathon Showcase: Opti-Flow AI Agent
- **Top 20 Finalist Achievement**:
  - Showcased **Opti-Flow AI Agent**, developed in 3 weeks by **Team AutoRoute Agents (EY-GDS)** and selected as one of the **Top 20 Finalists out of 350+ registered teams**.
  - Highlighted live stage presentation at **NVIDIA India Headquarters, Bangalore** in September 2026.
- **Two-Tier Architecture Breakdown**:
  - **Tier 1 (React + Three.js UI)**: Real-time 3D operator visualization, dynamic aisle obstruction simulation, and human-in-the-loop route verification.
  - **Tier 2 (NVIDIA Omniverse & Isaac Sim)**: Custom Omniverse Extension driving Isaac Sim for physics validation of Autonomous Mobile Robots (Clearpath Ridgeback Franka AMR).
  - **NVIDIA cuOpt Microservice**: Sub-second GPU-accelerated warehouse route solver on cluster port 8000.
  - **NVIDIA NIM & Nemotron 3 Nano Omni**: Natural language supervisory command parsing with bounded tool calling (`get_warehouse_state`, `propose_picking_plan`).
  - **B300 GPU Cluster Deployment**: 100% local deployment on an NVIDIA B300 high-performance cluster.
- **Interactive Lightbox Photo Gallery**:
  - Added 6 high-resolution photos and architectural blueprints (`assets/img/ey-things/`):
    1. G Bhanuteja at NVIDIA Bangalore HQ Lobby.
    2. Live stage presentation of Opti-Flow AI Agent to judges and audience.
    3. Opti-Flow 3D warehouse layout & routing evolution slide.
    4. G Bhanuteja at EY office.
    5. NVIDIA Isaac Sim digital twin warehouse simulation with AMR Franka robot.
    6. Complete end-to-end system architecture blueprint.
- **Mentorship, Leadership & Acknowledgements**:
  - Added direct clickable LinkedIn links for mentor **Amlan Panigrahi**, judges **Sundar R Nagalingam** & **Saurav Agarwal**, organizers **Apoorva Laharia**, **Ganesh Sai Apuroop Koppaka**, & **Bharatkumar Sharma**, teammates **Gnana Prakash S**, **Shashank Goud J**, & **Alagappan**, and EY leadership **Srinivasagopalan Venkataraman**, **Shyama Hariharan**, **Indraneel Ghosh**, & **Pranav Buradkar**.
- **Dedicated Standalone Case Study**:
  - Created [`portfolio-optiflow-details.html`](portfolio-optiflow-details.html) containing full case study documentation.

---

### 3. Website Design & Technical Modernization
- **Cyber-Industrial UI / UX**:
  - Dark mode first theme (`#080c15` canvas) with frosted glass cards (`backdrop-filter: blur(16px)`).
  - Brand accents: **NVIDIA Green (`#76b900`)**, **EY Gold (`#FFE600`)**, and **Spatial Cyan (`#38bdf8`)**.
  - Modern typography: Google Fonts (`Outfit`, `Inter`, `JetBrains Mono`).
- **Navigation & Usability**:
  - Floating pill-style navbar with scrollspy, active section tracking, mobile drawer, and direct Resume download button.
  - Live status indicator: `● Senior Software Engineer @ EY | Top 20 Finalist @ NVIDIA GSI Hackathon`.
- **Skills Section Overhaul**:
  - Replaced unaligned static images with 4 categorized modern competency cards:
    1. *Agentic AI & Accelerated Tech* (cuOpt, NIM, Nemotron 3 Nano, Omniverse, Isaac Sim, B300 clusters).
    2. *Spatial Computing & XR* (Unity 3D, C#, Three.js, JMR SDK, ARCore, Vuforia, WebXR).
    3. *Software & Full-Stack* (C++, Python, TypeScript, React.js, Node.js, Zod, DSA).
    4. *Cloud & DevOps* (AWS Cloud Practitioner, Docker, Linux, CI/CD).
- **Projects & Portfolio**:
  - Reorganized all 9 published projects with dynamic filter tabs (`All`, `AI & Digital Twins`, `AR / VR & XR`, `Robotics & IoT`, `Games & Python`).
  - Added direct live buttons (Google Play, Devfolio, YouTube) and upgraded subpages with matching dark styling.
- **Static GitHub Pages Optimization**:
  - Fixed broken PHP contact form script by providing:
    - One-click **Copy Email to Clipboard** button with instant feedback.
    - Direct **WhatsApp chat** button (`+91 9013263991`).
    - LinkedIn direct connect link.
    - Client-side static-friendly email composer.

---

## 📦 Version 2.2.1 (September 2022)
- Updated Bootstrap to version 4.6.0.
- Updated all third-party vendor libraries (AOS, Boxicons, Venobox, Owl Carousel, Typed.js).
- Added skills section logos.
- Minor content refinements to `index.html`.

## 📦 Version 2.2.0 (August 2022)
- Updated Bootstrap to version 4.5.3.
- Updated PHP email form to v2.3.
- General bug fixes and layout adjustments.

## 📦 Version 2.1.0 (2021)
- Added smooth scroll on page load with hash links in the URL.
- Updated PHP email form library to v2.0 with reCaptcha support.

## 📦 Version 2.0.0 (2020)
- Rebuilt template using Bootstrap 4.5.0.
- Added NodeJS NPM development setup.

## 📦 Version 1.0.0 (2019 - 2020)
- Initial release of the portfolio website on GitHub Pages.
