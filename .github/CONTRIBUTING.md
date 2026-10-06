# Contributing to Meena Mahal AC Auditorium Website

Thank you for your interest in improving the **Meena Mahal AC Auditorium** web application!

---

## Development Guidelines

1. **Node.js Environment:** Ensure you are using Node.js 18+ and npm 9+.
2. **Branching Strategy:**
   - Create a feature branch: `git checkout -b feature/your-feature-name`
   - Keep commits clear, concise, and focused.
3. **Type Safety:** Ensure all TypeScript checks pass without errors (`npx tsc --noEmit`).
4. **Bilingual Parity:** If you introduce new user-facing text strings, update both English and Tamil entries in `src/translations.ts`.
5. **Responsive Design:** Verify that UI adjustments function seamlessly on mobile, tablet, and desktop viewports.

---

## Submitting Pull Requests

1. Run a production build locally to verify there are no compilation errors:
   ```bash
   npm run build
   ```
2. Submit your PR against the `main` branch.
3. Describe the visual and functional changes made.
