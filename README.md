# Blueprint Components Explorer

A Next.js 14 application for exploring and interacting with Blueprint.js components.

## Features

- **Component Search**: Quickly find components by name or description
- **Category Filtering**: Filter components by category (Buttons, Forms, Navigation, Feedback, Data Display)
- **Interactive Examples**: Live, interactive component demonstrations
- **Code Display**: View the code for each component example
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Dark Mode Support**: Automatic dark mode support

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Blueprint.js (@blueprintjs/core, @blueprintjs/icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
blueprint-viewer/
├── app/
│   ├── layout.tsx       # Root layout with Blueprint CSS imports
│   ├── page.tsx         # Main page with component explorer
│   └── globals.css      # Global styles
├── components/
│   ├── ComponentCard.tsx    # Card for displaying component examples
│   ├── SearchBar.tsx        # Search input component
│   └── CategoryFilter.tsx   # Category filter buttons
├── data/
│   └── componentData.tsx    # Component examples and categories
├── types/
│   └── components.ts        # TypeScript type definitions
└── package.json
```

## Available Components

The explorer includes examples of the following Blueprint component categories:

- **Buttons**: Button, Icon Button, Button Group
- **Forms**: Switch, Checkbox, Radio Group, Input Group, Text Area, Numeric Input, HTML Select
- **Navigation**: Navbar, Menu, Breadcrumbs, Tabs
- **Feedback**: Progress Bar, Spinner, Callout
- **Data Display**: Tag, Card, Divider
