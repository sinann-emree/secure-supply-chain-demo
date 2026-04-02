# 🛡️ Secure Supply Chain & DevSecOps Pipeline

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Security](https://img.shields.io/badge/Security-Trivy_%7C_Cosign_%7C_Syft-00A651?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)

An end-to-end demonstration of a **Secure Software Development Life Cycle (SSDLC)**. This monorepo includes a full-stack application (Node.js/TypeScript backend, frontend client, PostgreSQL database) integrated with a highly secure, automated CI/CD pipeline. 

The primary goal of this project is to showcase how to build, verify, scan, sign, and deploy software artifacts while strictly adhering to modern **Software Supply Chain Security** standards.

## ✨ DevSecOps Pipeline Architecture

The automated workflow (`.github/workflows/secure-pipeline.yml`) is triggered on pushes and pull requests to the `main` branch, executing the following critical security stages:

### 1. Automated Testing & Accessibility
* **Backend:** Runs unit/integration tests (`npm run test`) on Node.js 20.
* **Frontend:** Executes robust End-to-End (E2E) testing using **Playwright** and performs automated accessibility (a11y) audits using **Axe**.

### 2. Container Security,
