# CampusConnect UI

Build a modern, premium, responsive frontend for a web application called CampusFind – a Lost & Found platform designed for college students.

Goal: Create a clean, professional UI that looks like a real startup product, not a generic CRUD application.

Design Language

Minimal, modern aesthetic inspired by Linear, Notion and Apple.

White background with subtle gradients.

Primary color: Indigo (#4F46E5).

Accent color: Emerald (#10B981) for success and Amber (#F59E0B) for pending status.

Rounded cards (16px), soft shadows, smooth hover animations, glassmorphism only where appropriate.

Large typography with generous spacing.

Beautiful icons from Lucide Icons.

Fully responsive for desktop, tablet and mobile.

Pages

1. Landing Page

Hero section with illustration.

Navigation bar.

"Report Lost Item" and "Browse Items" CTA buttons.

Statistics section (Recovered Items, Active Listings, Happy Students).

How It Works (3 steps).

Feature cards.

Attractive footer.

2. Dashboard

Sidebar navigation.

Search bar.

Filter chips (Lost, Found, Claimed).

Category filters.

Statistics cards.

Grid of item cards.

3. Browse Items

Beautiful searchable grid.

Card contains:

Image

Item Name

Category

Location

Date

Status badge

View Details button

4. Report Item

Elegant multi-section form.

Upload image placeholder.

Item Name.

Category dropdown.

Date.

Location.

Description.

Contact Information.

Submit button.

5. Item Details

Large image.

Complete information.

Status badge.

Contact card.

Mark as Claimed button.

Similar Items section.

Components

Reusable buttons.

Modern cards.

Status badges.

Empty state.

Loading skeleton.

Toast notifications.

Search bar.

Filter panel.

Pagination.

Confirmation modal.

UX Features

Smooth page transitions.

Hover animations.

Loading animations.

Responsive navigation.

Mobile hamburger menu.

Dark mode toggle (UI only).

Important

Use realistic placeholder data.

Keep every component reusable.

Organize pages cleanly.

Do NOT implement authentication or backend.

Focus only on creating a polished frontend ready to connect with a Flask backend later.

Make the interface look hackathon-winning and professional rather than a basic student project.

One more idea: instead of "Lost & Found Board", name your project CampusFind.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3137debc-a9c4-43d4-a065-82d7a6bcc047).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
