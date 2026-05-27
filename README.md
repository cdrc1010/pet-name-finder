# Pet Name Finder

A modern web application built with React, TypeScript, and Vite that helps users discover the perfect pet names based on their preferences.

## Features

- **Alphabetical Selection**: Browse pet names by letter
- **Gender Filtering**: Filter names by pet gender
- **Category Browsing**: Explore names across different pet categories
- **Interactive UI**: Smooth and intuitive user experience with custom components
- **Type-Safe**: Built entirely with TypeScript for type safety and better development experience

## Tech Stack

- **React 18** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool and dev server
- **Context API** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code quality and consistency

## Project Structure

```
src/
├── components/        # Reusable UI components
│   └── ui/           # Base UI component library
├── features/         # Feature-specific modules
│   └── pet-finder/   # Main pet name finder feature
│       ├── components/     # Feature components
│       ├── context/        # React Context setup
│       ├── hooks/          # Custom hooks
│       ├── provider/       # Context provider
│       └── types/          # TypeScript types
├── lib/              # Utilities and data
│   ├── utils.ts      # Helper functions
│   └── data/         # Static data files
├── App.tsx           # Main app component
└── main.tsx          # App entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
or
yarn dev
```

The application will open at `http://localhost:5173`

### Building

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Usage

1. Launch the application
2. Select a letter to browse names starting with that letter
3. (Optional) Choose a gender to filter names
4. (Optional) Select a pet category
5. View matching pet names and select your favorites
