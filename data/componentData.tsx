import { ComponentCategory, ComponentExample } from "@/types/components";
import {
  Button,
  AnchorButton,
  ButtonGroup,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  InputGroup,
  TextArea,
  NumericInput,
  Tag,
  Callout,
  Card,
  Collapse,
  Divider,
  HTMLSelect,
  ProgressBar,
  Spinner,
  Navbar,
  Menu,
  MenuItem,
  MenuDivider,
  Breadcrumbs,
  Tabs,
  Tab,
  Intent,
} from "@blueprintjs/core";
import React from "react";

export const categories: ComponentCategory[] = [
  {
    id: "buttons",
    name: "Buttons",
    description: "Interactive buttons and button groups",
  },
  {
    id: "forms",
    name: "Forms",
    description: "Form inputs and controls",
  },
  {
    id: "navigation",
    name: "Navigation",
    description: "Navigation components like menus, tabs, and breadcrumbs",
  },
  {
    id: "feedback",
    name: "Feedback",
    description: "User feedback components like progress bars and spinners",
  },
  {
    id: "data",
    name: "Data Display",
    description: "Components for displaying data",
  },
];

// Button Examples
const ButtonExample = () => (
  <div className="flex gap-2 flex-wrap">
    <Button>Default</Button>
    <Button intent="primary">Primary</Button>
    <Button intent="success">Success</Button>
    <Button intent="warning">Warning</Button>
    <Button intent="danger">Danger</Button>
  </div>
);

const IconButtonExample = () => (
  <div className="flex gap-2 flex-wrap">
    <Button icon="refresh">Refresh</Button>
    <Button icon="add" intent="primary">Add Item</Button>
    <Button icon="edit" minimal>Edit</Button>
    <Button icon="trash" intent="danger" outlined>Delete</Button>
  </div>
);

const ButtonGroupExample = () => (
  <ButtonGroup>
    <Button icon="database">Queries</Button>
    <Button icon="function">Functions</Button>
    <Button icon="cog">Options</Button>
  </ButtonGroup>
);

// Form Examples
const SwitchExample = () => (
  <div className="flex flex-col gap-2">
    <Switch label="Enabled" defaultChecked />
    <Switch label="Public" />
    <Switch label="Experimental" disabled />
  </div>
);

const CheckboxExample = () => (
  <div className="flex flex-col gap-2">
    <Checkbox label="Subscribe to newsletter" defaultChecked />
    <Checkbox label="Enable notifications" />
    <Checkbox label="Agree to terms" disabled />
  </div>
);

const RadioExample = () => (
  <RadioGroup
    label="Choose your plan"
    selectedValue="standard"
    onChange={() => {}}
  >
    <Radio label="Free" value="free" />
    <Radio label="Standard" value="standard" />
    <Radio label="Premium" value="premium" />
  </RadioGroup>
);

const InputGroupExample = () => (
  <div className="flex flex-col gap-2 max-w-md">
    <InputGroup placeholder="Search..." leftIcon="search" />
    <InputGroup placeholder="Username" leftIcon="person" />
    <InputGroup
      placeholder="Password"
      type="password"
      leftIcon="lock"
      rightElement={<Button minimal icon="eye-open" />}
    />
  </div>
);

const TextAreaExample = () => (
  <TextArea
    className="w-full max-w-md"
    placeholder="Enter your message..."
    rows={4}
    fill
  />
);

const NumericInputExample = () => (
  <div className="flex flex-col gap-2 max-w-xs">
    <NumericInput placeholder="Enter a number..." />
    <NumericInput
      placeholder="Quantity"
      min={0}
      max={100}
      defaultValue={10}
      stepSize={5}
    />
  </div>
);

const HTMLSelectExample = () => (
  <HTMLSelect>
    <option value="">Choose an option...</option>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </HTMLSelect>
);

// Navigation Examples
const NavbarExample = () => (
  <Navbar>
    <Navbar.Group>
      <Navbar.Heading>Blueprint</Navbar.Heading>
      <Navbar.Divider />
      <Button minimal icon="home">Home</Button>
      <Button minimal icon="document">Files</Button>
      <Button minimal icon="cog">Settings</Button>
    </Navbar.Group>
    <Navbar.Group align="right">
      <Button minimal icon="user" />
    </Navbar.Group>
  </Navbar>
);

const MenuExample = () => (
  <Menu>
    <MenuItem icon="new-text-box" text="New" />
    <MenuItem icon="new-object" text="New Object" />
    <MenuItem icon="new-link" text="New Link" />
    <MenuDivider />
    <MenuItem icon="cog" text="Settings" />
    <MenuItem icon="log-out" text="Logout" intent="danger" />
  </Menu>
);

const BreadcrumbsExample = () => (
  <Breadcrumbs
    items={[
      { text: "Home", icon: "home" },
      { text: "Projects", icon: "folder-close" },
      { text: "Current", icon: "document" },
    ]}
  />
);

const TabsExample = () => (
  <Tabs id="tabs-example">
    <Tab id="overview" title="Overview" panel={<div className="p-4">Overview content</div>} />
    <Tab id="settings" title="Settings" panel={<div className="p-4">Settings content</div>} />
    <Tab id="about" title="About" panel={<div className="p-4">About content</div>} />
  </Tabs>
);

// Feedback Examples
const ProgressBarExample = () => (
  <div className="flex flex-col gap-4 w-full max-w-md">
    <ProgressBar value={0.3} />
    <ProgressBar value={0.7} intent="success" />
    <ProgressBar intent="warning" />
  </div>
);

const SpinnerExample = () => (
  <div className="flex gap-4 items-center">
    <Spinner size={20} />
    <Spinner size={30} />
    <Spinner size={50} intent="primary" />
  </div>
);

const CalloutExample = () => (
  <div className="flex flex-col gap-2">
    <Callout title="Info" intent="primary" icon="info-sign">
      This is an informational message.
    </Callout>
    <Callout title="Success" intent="success" icon="tick-circle">
      Operation completed successfully!
    </Callout>
    <Callout title="Warning" intent="warning" icon="warning-sign">
      Please review before proceeding.
    </Callout>
    <Callout title="Error" intent="danger" icon="error">
      Something went wrong.
    </Callout>
  </div>
);

// Data Display Examples
const TagExample = () => (
  <div className="flex gap-2 flex-wrap">
    <Tag>Default</Tag>
    <Tag intent="primary">Primary</Tag>
    <Tag intent="success" icon="tick">Success</Tag>
    <Tag intent="warning" icon="warning-sign">Warning</Tag>
    <Tag intent="danger" icon="cross" onRemove={() => {}}>Removable</Tag>
    <Tag minimal>Minimal</Tag>
    <Tag round>Round</Tag>
  </div>
);

const CardExample = () => (
  <Card className="max-w-md">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-gray-600 mb-4">
      This is a card component that can contain any content you want.
      It provides a consistent container with padding and styling.
    </p>
    <Button intent="primary">Action</Button>
  </Card>
);

const DividerExample = () => (
  <div>
    <div className="mb-2">Section 1</div>
    <Divider />
    <div className="mt-2 mb-2">Section 2</div>
    <Divider />
    <div className="mt-2">Section 3</div>
  </div>
);

export const components: ComponentExample[] = [
  // Buttons
  {
    id: "button",
    name: "Button",
    category: "buttons",
    description: "Buttons trigger actions when clicked. They come in various intents and styles.",
    code: `<Button>Default</Button>
<Button intent="primary">Primary</Button>
<Button intent="success">Success</Button>
<Button intent="warning">Warning</Button>
<Button intent="danger">Danger</Button>`,
    component: ButtonExample,
  },
  {
    id: "icon-button",
    name: "Icon Button",
    category: "buttons",
    description: "Buttons with icons for common actions. Can be minimal or outlined.",
    code: `<Button icon="refresh">Refresh</Button>
<Button icon="add" intent="primary">Add Item</Button>
<Button icon="edit" minimal>Edit</Button>
<Button icon="trash" intent="danger" outlined>Delete</Button>`,
    component: IconButtonExample,
  },
  {
    id: "button-group",
    name: "Button Group",
    category: "buttons",
    description: "Group related buttons together for a cohesive interface.",
    code: `<ButtonGroup>
  <Button icon="database">Queries</Button>
  <Button icon="function">Functions</Button>
  <Button icon="cog">Options</Button>
</ButtonGroup>`,
    component: ButtonGroupExample,
  },
  // Forms
  {
    id: "switch",
    name: "Switch",
    category: "forms",
    description: "Toggle switches for binary settings.",
    code: `<Switch label="Enabled" defaultChecked />
<Switch label="Public" />
<Switch label="Experimental" disabled />`,
    component: SwitchExample,
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "forms",
    description: "Checkboxes for multi-select options.",
    code: `<Checkbox label="Subscribe to newsletter" defaultChecked />
<Checkbox label="Enable notifications" />
<Checkbox label="Agree to terms" disabled />`,
    component: CheckboxExample,
  },
  {
    id: "radio",
    name: "Radio Group",
    category: "forms",
    description: "Radio buttons for selecting one option from multiple choices.",
    code: `<RadioGroup
  label="Choose your plan"
  selectedValue="standard"
>
  <Radio label="Free" value="free" />
  <Radio label="Standard" value="standard" />
  <Radio label="Premium" value="premium" />
</RadioGroup>`,
    component: RadioExample,
  },
  {
    id: "input-group",
    name: "Input Group",
    category: "forms",
    description: "Text input fields with optional icons and buttons.",
    code: `<InputGroup placeholder="Search..." leftIcon="search" />
<InputGroup placeholder="Username" leftIcon="person" />
<InputGroup
  placeholder="Password"
  type="password"
  leftIcon="lock"
/>`,
    component: InputGroupExample,
  },
  {
    id: "textarea",
    name: "Text Area",
    category: "forms",
    description: "Multi-line text input for longer content.",
    code: `<TextArea
  placeholder="Enter your message..."
  rows={4}
  fill
/>`,
    component: TextAreaExample,
  },
  {
    id: "numeric-input",
    name: "Numeric Input",
    category: "forms",
    description: "Input field specifically for numeric values with increment/decrement buttons.",
    code: `<NumericInput placeholder="Enter a number..." />
<NumericInput
  placeholder="Quantity"
  min={0}
  max={100}
  defaultValue={10}
  stepSize={5}
/>`,
    component: NumericInputExample,
  },
  {
    id: "select",
    name: "HTML Select",
    category: "forms",
    description: "Native HTML select dropdown with Blueprint styling.",
    code: `<HTMLSelect>
  <option value="">Choose an option...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</HTMLSelect>`,
    component: HTMLSelectExample,
  },
  // Navigation
  {
    id: "navbar",
    name: "Navbar",
    category: "navigation",
    description: "Navigation bar for app-wide navigation.",
    code: `<Navbar>
  <Navbar.Group>
    <Navbar.Heading>Blueprint</Navbar.Heading>
    <Navbar.Divider />
    <Button minimal icon="home">Home</Button>
    <Button minimal icon="document">Files</Button>
  </Navbar.Group>
</Navbar>`,
    component: NavbarExample,
  },
  {
    id: "menu",
    name: "Menu",
    category: "navigation",
    description: "Menu with items, dividers, and icons.",
    code: `<Menu>
  <MenuItem icon="new-text-box" text="New" />
  <MenuItem icon="new-object" text="New Object" />
  <MenuDivider />
  <MenuItem icon="cog" text="Settings" />
</Menu>`,
    component: MenuExample,
  },
  {
    id: "breadcrumbs",
    name: "Breadcrumbs",
    category: "navigation",
    description: "Breadcrumb navigation showing the current location hierarchy.",
    code: `<Breadcrumbs
  items={[
    { text: "Home", icon: "home" },
    { text: "Projects", icon: "folder-close" },
    { text: "Current", icon: "document" },
  ]}
/>`,
    component: BreadcrumbsExample,
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "navigation",
    description: "Tab navigation for switching between different views.",
    code: `<Tabs id="tabs-example">
  <Tab id="overview" title="Overview" panel={<div>Content</div>} />
  <Tab id="settings" title="Settings" panel={<div>Content</div>} />
  <Tab id="about" title="About" panel={<div>Content</div>} />
</Tabs>`,
    component: TabsExample,
  },
  // Feedback
  {
    id: "progress-bar",
    name: "Progress Bar",
    category: "feedback",
    description: "Progress indicator for showing task completion.",
    code: `<ProgressBar value={0.3} />
<ProgressBar value={0.7} intent="success" />
<ProgressBar intent="warning" />`,
    component: ProgressBarExample,
  },
  {
    id: "spinner",
    name: "Spinner",
    category: "feedback",
    description: "Loading spinner in various sizes.",
    code: `<Spinner size={20} />
<Spinner size={30} />
<Spinner size={50} intent="primary" />`,
    component: SpinnerExample,
  },
  {
    id: "callout",
    name: "Callout",
    category: "feedback",
    description: "Callout component for important messages and alerts.",
    code: `<Callout title="Info" intent="primary" icon="info-sign">
  This is an informational message.
</Callout>
<Callout title="Success" intent="success" icon="tick-circle">
  Operation completed successfully!
</Callout>`,
    component: CalloutExample,
  },
  // Data Display
  {
    id: "tag",
    name: "Tag",
    category: "data",
    description: "Tags for labels, categories, and metadata.",
    code: `<Tag>Default</Tag>
<Tag intent="primary">Primary</Tag>
<Tag intent="success" icon="tick">Success</Tag>
<Tag intent="danger" icon="cross" onRemove={() => {}}>Removable</Tag>`,
    component: TagExample,
  },
  {
    id: "card",
    name: "Card",
    category: "data",
    description: "Card container for grouping related content.",
    code: `<Card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
  <Button intent="primary">Action</Button>
</Card>`,
    component: CardExample,
  },
  {
    id: "divider",
    name: "Divider",
    category: "data",
    description: "Visual divider to separate content sections.",
    code: `<div>Section 1</div>
<Divider />
<div>Section 2</div>
<Divider />
<div>Section 3</div>`,
    component: DividerExample,
  },
];
