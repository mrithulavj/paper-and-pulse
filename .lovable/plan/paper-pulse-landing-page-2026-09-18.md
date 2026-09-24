# Paper & Pulse Landing Page

## Goal

Build a responsive editorial landing page for the college publication, using off-white, charcoal, muted maroon, and a restrained complementary sage accent.

## Page structure

- Create a compact masthead with navigation links to About, Magazine, Activities, and Office Bearers.
- Build a typography-led opening composition with “PAPER & PULSE” and “The Magazine” as the primary first-screen signal.
- Add a concise About section that introduces the publication platform.
- Add a magazine-editions area with three editable placeholder covers, dates, and disabled preview actions until PDFs are supplied.
- Add an editorial activities area with three editable placeholder entries.
- Add an office-bearers grid with neutral photo placeholders, names, and designations.
- Add a minimal footer with the publication name, institution placeholder, social placeholders, and copyright.

## Maintainability

- Keep magazine editions, activities, and office bearers in separate data arrays.
- Use focused reusable components for section headings, edition cards, activity entries, and profile cards.
- Keep all visual colors, typography, spacing rhythm, and motion in the shared design system.

## Technical details

- Use TanStack Router’s existing home route and route-specific metadata.
- Use Instrument Serif for display typography and Work Sans for interface/body copy.
- Keep the initial edition buttons accessible but inactive until real PDF URLs are added; future PDF entries can open in an in-site viewer route.
- Verify desktop and mobile layouts, navigation anchors, visual overflow, and current preview diagnostics.
