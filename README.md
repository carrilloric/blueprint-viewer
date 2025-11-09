# Blueprint Components Explorer

A comprehensive Next.js 14 application for exploring and interacting with ALL Blueprint.js components, including advanced data visualization components.

## Features

- **Component Search**: Quickly find components by name or description
- **Category Filtering**: Filter components by 9 categories
- **Interactive Examples**: Live, interactive component demonstrations for 40+ components
- **Code Display**: View the code for each component example
- **Responsive Design**: Clean, modern UI built with Tailwind CSS
- **Dark Mode Support**: Automatic dark mode support
- **Complete Coverage**: Includes ALL major Blueprint.js component categories

## Technologies

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Blueprint.js (@blueprintjs/core, @blueprintjs/icons, @blueprintjs/datetime, @blueprintjs/table, @blueprintjs/select)

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
│   └── componentData.tsx    # Component examples and categories (40+ components)
├── types/
│   └── components.ts        # TypeScript type definitions
└── package.json
```

## Available Components (40+)

The explorer includes examples of the following Blueprint component categories:

### 🔘 Buttons (3 components)
- **Button**: Default, primary, success, warning, danger buttons
- **Icon Button**: Buttons with icons, minimal and outlined styles
- **Button Group**: Grouped buttons for related actions

### 📝 Forms (11 components)
- **Switch**: Toggle switches for binary settings
- **Checkbox**: Multi-select checkboxes
- **Radio Group**: Single selection from multiple options
- **Input Group**: Text inputs with icons and buttons
- **Text Area**: Multi-line text input
- **Numeric Input**: Number input with increment/decrement
- **HTML Select**: Styled select dropdowns
- **Slider**: Single value selection from range
- **Range Slider**: Dual-handle range selection
- **File Input**: File upload input
- **Tag Input**: Multi-value tag entry

### 🧭 Navigation (4 components)
- **Navbar**: Application navigation bar
- **Menu**: Dropdown menus with items and dividers
- **Breadcrumbs**: Hierarchical navigation
- **Tabs**: Tab-based content switching

### 🎭 Overlays (5 components)
- **Dialog**: Modal dialogs for focused interactions
- **Drawer**: Side panels that slide in
- **Popover**: Floating content anchored to elements
- **Tooltip**: Helpful hover information
- **Alert**: Confirmation dialogs for important actions

### 💬 Feedback (4 components)
- **Progress Bar**: Task completion indicators
- **Spinner**: Loading spinners in various sizes
- **Callout**: Important message boxes with intents
- **Toaster**: Toast notifications for temporary messages

### 📊 Data Display (6 components)
- **Tag**: Labels and metadata tags
- **Card**: Content container cards
- **Divider**: Visual section separators
- **HTML Table**: Styled tables with striped/bordered options
- **Tree**: Hierarchical tree structures for nested data
- **Editable Text**: Inline text editing

### 📅 Date & Time (3 components)
- **Date Input**: Single date selection
- **Time Picker**: Time selection
- **Date Range Picker**: Date range selection with shortcuts

### 🎨 Layout (2 components)
- **Panel Stack**: Navigable panel stack with history
- **Collapse**: Collapsible content containers

### 🎯 Icons (1 gallery)
- **Icons Gallery**: 48+ popular Blueprint.js icons with hover tooltips

## Component Categories

1. **Buttons** - Interactive buttons and button groups
2. **Forms** - Form inputs and controls (11 different input types)
3. **Navigation** - Menus, tabs, breadcrumbs, and navigation bars
4. **Overlays** - Dialogs, drawers, popovers, tooltips, and alerts
5. **Feedback** - Progress indicators, spinners, callouts, and toasts
6. **Data Display** - Tables, trees, tags, cards, and editable text
7. **Date & Time** - Date pickers, time pickers, and range pickers
8. **Layout** - Panel stacks and collapsible sections
9. **Icons** - Complete icon gallery with 48+ icons

## Features by Category

### Data Visualization Components
- **HTML Table**: Striped, bordered, and interactive tables
- **Tree**: Expandable/collapsible tree structures perfect for file systems or hierarchical data
- **Editable Text**: Inline editing for quick data updates

### Advanced Form Controls
- **Slider & Range Slider**: Visual numeric input with customizable steps
- **Tag Input**: Perfect for tags, keywords, or multi-value inputs
- **File Input**: Styled file upload component
- **Numeric Input**: Specialized number input with +/- buttons

### Overlay System
Complete overlay system with modals, side panels, popovers, and alerts for building rich interactive experiences.

### Date & Time Pickers
Full date and time selection with calendars, time pickers, and range selection with built-in shortcuts.

## Component Statistics

- **Total Components**: 40+
- **Categories**: 9
- **Interactive Examples**: All components have live, working examples
- **Code Samples**: Every component includes usage code
- **Icons**: 48+ popular icons in the gallery

## Usage Examples

Each component in the explorer includes:
1. Live interactive preview
2. Component description
3. Code example showing usage
4. Props and configuration options demonstrated

## Dark Mode

All components support Blueprint's dark theme automatically. The explorer works seamlessly in both light and dark modes.

## Browser Support

Supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT

## Credits

Built with [Blueprint.js](https://blueprintjs.com/) - A React-based UI toolkit for the web.
