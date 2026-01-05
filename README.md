# ContractorFinancingPro - Website Build Guide

This document outlines the architecture, design system, and component breakdown used to create the **ContractorFinancingPro** high-conversion landing page.

## 🛠 Technology Stack

*   **Framework**: React 19 (via ES Modules)
*   **Styling**: Tailwind CSS (via CDN for rapid prototyping)
*   **Icons**: Lucide React
*   **Typography**: Google Fonts (Inter)
*   **Bundling**: None (Native ES Modules with Import Maps)

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
*   **Elements**: Logo (HardHat icon), Brand Name, and a "Book Free Call" CTA button.

### 2. Hero Section (`Hero.tsx`)
*   **Layout**: Split layout with text on the left and visual weight on the background.
*   **Background**: 
    *   **Image**: High-quality Unsplash image of a truck/construction site.
    *   **Technique**: The image is wrapped in a `div` with `absolute inset-0`.
    *   **Overlays**: A dark slate overlay (`bg-slate-900/70`) + a gradient (`bg-gradient-to-r`) ensures white text remains readable against the busy image.
*   **Key Conversion Elements**: Two distinct buttons (Primary CTA vs Secondary "Learn More") and "Trust Signals" (icons at the bottom).

### 3. Problem Section (`ProblemSection.tsx`)
*   **Goal**: Agitate the user's pain points (Banks saying "No").
*   **UI Pattern**: 3-Column Grid of cards.
*   **Interactivity**: Hover effects on cards (`hover:shadow-lg`, icon scaling) to increase engagement.

### 4. Solution Section (`SolutionSection.tsx`)
*   **Goal**: Present the alternative financing solution.
*   **Layout**: 2-Column Asymmetric layout (Text Left, List Right).
*   **Visuals**: Uses Lucide icons (Truck, PenTool) to represent specific services.

### 5. Process Section (`ProcessSection.tsx`)
*   **Goal**: Remove friction by showing how easy the process is.
*   **UI Pattern**: 3-step timeline. On desktop, a CSS horizontal line connects the steps behind the numbers.

### 6. Booking Section (`BookingSection.tsx`)
*   **Complexity**: High. Contains internal state (`useState`) to mock a scheduling interface.
*   **Design**: "Glassmorphism" inspired card with a split view (Specialist info vs Calendar).
*   **Logic**: 
    1.  User selects a date (Updates `selectedDate` state).
    2.  User selects a time slot.
    3.  View switches to a "Success" state (`step === 2`).

### 7. FAQ Section (`FAQSection.tsx`)
*   **UI Pattern**: Accordion / Collapsible list.
*   **SEO Feature**: Dynamically injects JSON-LD Structured Data (`<script type="application/ld+json">`) into the DOM for Google Rich Snippets.

## 🖼 Images & Assets

We utilize external high-quality placeholders.

| Component | Source | URL / Description |
| :--- | :--- | :--- |
| **Hero Background** | Unsplash | `https://images.unsplash.com/photo-1533473359331-0135ef1b58bf` (Truck/Construction) |
| **Specialist Avatar** | Picsum | `https://picsum.photos/60/60?random=1` |

## 🚀 Setup Instructions

1.  **HTML Setup**: Ensure `index.html` includes the Tailwind CDN script and the customized `tailwind.config` in the `<head>`.
2.  **Import Maps**: Use the `<script type="importmap">` tag in `index.html` to resolve `react`, `react-dom`, and `lucide-react` from `esm.sh`.
3.  **Entry Point**: `index.tsx` mounts the `App` component to the root div.

## 📂 File Structure

```
/
├── index.html          # Entry point + Tailwind Config + Import Maps
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
