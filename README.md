# Rise Broker Firm - Website Build Guide

This document outlines the architecture, design system, and component breakdown used to create the **Rise Broker Firm** high-conversion landing page.

## 🛠 Technology Stack

*   **Framework**: React 18 (via Vite)
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React
*   **Typography**: Google Fonts (Inter)
*   **Build Tool**: Vite

## 🎨 Design System

The design uses a conversion-focused color palette aimed at blue-collar industries (trust, urgency, and energy).

### Color Palette
*   **Primary (Dark)**: Slate 900 (`#0f172a`) & Slate 800 (`#1e293b`) - Used for backgrounds and text to convey stability.
*   **Secondary (Action)**: Orange 600 (`#ea580c`) - High-contrast color for Buttons and CTAs to drive clicks.
*   **Accent**: Amber 400 (`#fbbf24`) - Used for highlights and gradients.
*   **Surface**: Slate 50 (`#f8fafc`) - Off-white for section backgrounds to reduce eye strain.

### Typography
*   **Font**: 'Inter', sans-serif.
*   **Weights**: 300 (Light), 400 (Regular), 600 (Semi-Bold), 800 (Extra Bold).

## 🏗 Component Architecture

The application is composed of modular functional components found in the `/components` directory.

### 1. Header (`Header.tsx`)
*   **Behavior**: Sticky positioning (`sticky top-0`) with a `backdrop-blur` effect to maintain visibility while scrolling.
*   **Elements**: Logo (CarFront icon), Brand Name, and a "Apply Now" CTA button.

### 2. Hero Section (`Hero.tsx`)
*   **Layout**: Split layout with text on the left and visual weight on the background.
*   **Background**: 
    *   **Image**: High-quality Unsplash image of a truck/construction site.
    *   **Technique**: The image is wrapped in a `div` with `absolute inset-0`.
    *   **Overlays**: A dark slate overlay (`bg-slate-900/70`) + a gradient (`bg-gradient-to-r`) ensures white text remains readable against the busy image.
*   **Key Conversion Elements**: Two distinct buttons (Primary CTA vs Secondary "View Benefits") and "Trust Signals" (icons at the bottom).

### 3. Problem Section (`ProblemSection.tsx`)
*   **Goal**: Agitate the user's pain points (Banks saying "No").
*   **UI Pattern**: 3-Column Grid of cards.
*   **Interactivity**: Hover effects on cards (`hover:shadow-lg`, icon scaling) to increase engagement.

### 4. Solution Section (`SolutionSection.tsx`)
*   **Goal**: Present the alternative financing solution.
*   **Layout**: 2-Column Asymmetric layout (Text Left, List Right).
*   **Visuals**: Uses Lucide icons (Truck, Car, Shield) to represent specific services.

### 5. Process Section (`ProcessSection.tsx`)
*   **Goal**: Remove friction by showing how easy the process is.
*   **UI Pattern**: 3-step timeline. On desktop, a CSS horizontal line connects the steps behind the numbers.

### 6. Booking Section (`BookingSection.tsx`)
*   **Complexity**: High. Contains `useEffect` to load external Calendly script.
*   **Design**: "Glassmorphism" inspired card container for the widget.

### 7. FAQ Section (`FAQSection.tsx`)
*   **UI Pattern**: Accordion / Collapsible list.
*   **SEO Feature**: Dynamically injects JSON-LD Structured Data (`<script type="application/ld+json">`) into the DOM for Google Rich Snippets.

## 🚀 Setup Instructions

1.  **Install Dependencies**: `npm install`
2.  **Run Development Server**: `npm run dev`
3.  **Build for Production**: `npm run build`

## 📂 File Structure

```
/
├── index.html          # Entry point
├── index.tsx           # React Root Mount
├── App.tsx             # Main layout assembler
├── metadata.json       # App metadata
├── types.ts            # Shared TypeScript interfaces
└── components/         # UI Components
    ├── Button.tsx      # Reusable button with variants
    ├── Header.tsx      # Nav bar
    ├── Hero.tsx        # Top banner
    ├── ProblemSection.tsx
    ├── SolutionSection.tsx
    ├── ProcessSection.tsx
    ├── BookingSection.tsx
    ├── FAQSection.tsx
    ├── Footer.tsx
    └── SectionHeading.tsx # Standardized titles
```