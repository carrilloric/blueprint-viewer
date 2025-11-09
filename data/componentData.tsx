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
  Icon,
  Dialog,
  Drawer,
  Popover,
  Tooltip,
  Alert,
  EditableText,
  FileInput,
  Slider,
  RangeSlider,
  HTMLTable,
  Tree,
  TreeNode,
  TagInput,
  ContextMenu,
  PanelStack,
  Panel,
  Toaster,
  Position,
  OverlaysProvider,
} from "@blueprintjs/core";
import { DateInput, DateRangePicker, TimePicker } from "@blueprintjs/datetime";
import React, { useState } from "react";

export const categories: ComponentCategory[] = [
  {
    id: "buttons",
    name: "Buttons",
    description: "Interactive buttons and button groups",
    icon: "widget-button",
  },
  {
    id: "forms",
    name: "Forms",
    description: "Form inputs and controls",
    icon: "form",
  },
  {
    id: "navigation",
    name: "Navigation",
    description: "Navigation components like menus, tabs, and breadcrumbs",
    icon: "menu",
  },
  {
    id: "overlays",
    name: "Overlays",
    description: "Dialogs, drawers, popovers, and tooltips",
    icon: "panel-stats",
  },
  {
    id: "feedback",
    name: "Feedback",
    description: "User feedback components like progress bars and spinners",
    icon: "notifications",
  },
  {
    id: "data",
    name: "Data Display",
    description: "Components for displaying and visualizing data",
    icon: "th",
  },
  {
    id: "datetime",
    name: "Date & Time",
    description: "Date and time picker components",
    icon: "calendar",
  },
  {
    id: "layout",
    name: "Layout",
    description: "Layout and structure components",
    icon: "layout",
  },
  {
    id: "icons",
    name: "Icons",
    description: "Blueprint.js icon gallery",
    icon: "symbol-diamond",
  },
];

// ============== BUTTON EXAMPLES ==============
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

// ============== FORM EXAMPLES ==============
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

const SliderExample = () => {
  const [value, setValue] = useState(5);
  return (
    <div className="max-w-md space-y-4">
      <Slider
        min={0}
        max={10}
        stepSize={1}
        labelStepSize={2}
        value={value}
        onChange={setValue}
        showTrackFill={true}
      />
      <div className="text-sm text-gray-600">Value: {value}</div>
    </div>
  );
};

const RangeSliderExample = () => {
  const [range, setRange] = useState<[number, number]>([20, 80]);
  return (
    <div className="max-w-md space-y-4">
      <RangeSlider
        min={0}
        max={100}
        stepSize={5}
        labelStepSize={25}
        value={range}
        onChange={setRange}
      />
      <div className="text-sm text-gray-600">Range: {range[0]} - {range[1]}</div>
    </div>
  );
};

const FileInputExample = () => (
  <div className="max-w-md">
    <FileInput text="Choose file..." buttonText="Browse" />
  </div>
);

const TagInputExample = () => {
  const [values, setValues] = useState<string[]>(["React", "TypeScript", "Next.js"]);
  return (
    <div className="max-w-md">
      <TagInput
        values={values}
        onChange={(values) => setValues(values as string[])}
        placeholder="Add a tag..."
      />
    </div>
  );
};

// ============== NAVIGATION EXAMPLES ==============
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

// ============== OVERLAY EXAMPLES ==============
const DialogExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} intent="primary">
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Dialog"
        icon="info-sign"
      >
        <div className="p-4">
          <p>This is an example dialog with some content.</p>
        </div>
        <div className="flex justify-end gap-2 p-4 border-t">
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button intent="primary" onClick={() => setIsOpen(false)}>
            Confirm
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

const DrawerExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} intent="primary">
        Open Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Example Drawer"
        icon="menu"
      >
        <div className="p-4">
          <p className="mb-4">This is a drawer that slides in from the side.</p>
          <p>You can put any content here.</p>
        </div>
      </Drawer>
    </div>
  );
};

const PopoverExample = () => (
  <Popover
    content={
      <div className="p-4">
        <h3 className="font-bold mb-2">Popover Title</h3>
        <p>This is the content of the popover.</p>
      </div>
    }
    position={Position.RIGHT}
  >
    <Button>Hover or click me</Button>
  </Popover>
);

const TooltipExample = () => (
  <div className="flex gap-2 flex-wrap">
    <Tooltip content="This is a tooltip" position={Position.TOP}>
      <Button>Top</Button>
    </Tooltip>
    <Tooltip content="This is a tooltip" position={Position.RIGHT}>
      <Button>Right</Button>
    </Tooltip>
    <Tooltip content="This is a tooltip" position={Position.BOTTOM}>
      <Button>Bottom</Button>
    </Tooltip>
    <Tooltip content="This is a tooltip" position={Position.LEFT}>
      <Button>Left</Button>
    </Tooltip>
  </div>
);

const AlertExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(true)} intent="danger">
        Show Alert
      </Button>
      <Alert
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        icon="trash"
        intent="danger"
        confirmButtonText="Delete"
        cancelButtonText="Cancel"
      >
        <p>Are you sure you want to delete this item? This action cannot be undone.</p>
      </Alert>
    </div>
  );
};

// ============== FEEDBACK EXAMPLES ==============
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

const ToasterExample = () => {
  const showToast = (intent: Intent) => {
    if (typeof window !== "undefined") {
      const toaster = Toaster.create({ position: Position.TOP });
      toaster.show({
        message: `This is a ${intent} toast notification`,
        intent: intent,
        icon: intent === "success" ? "tick" : intent === "danger" ? "error" : "info-sign",
      });
    }
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <Button onClick={() => showToast("primary")}>Primary Toast</Button>
      <Button onClick={() => showToast("success")} intent="success">Success Toast</Button>
      <Button onClick={() => showToast("warning")} intent="warning">Warning Toast</Button>
      <Button onClick={() => showToast("danger")} intent="danger">Danger Toast</Button>
    </div>
  );
};

// ============== DATA DISPLAY EXAMPLES ==============
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

const HTMLTableExample = () => (
  <HTMLTable striped bordered interactive className="w-full">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Developer</td>
      </tr>
      <tr>
        <td>Jane Smith</td>
        <td>jane@example.com</td>
        <td>Designer</td>
      </tr>
      <tr>
        <td>Bob Johnson</td>
        <td>bob@example.com</td>
        <td>Manager</td>
      </tr>
    </tbody>
  </HTMLTable>
);

const TreeExample = () => {
  const [nodes, setNodes] = useState([
    {
      id: 0,
      hasCaret: true,
      icon: "folder-close" as any,
      label: "Documents",
      isExpanded: false,
      childNodes: [
        {
          id: 1,
          icon: "document" as any,
          label: "readme.md",
        },
        {
          id: 2,
          icon: "document" as any,
          label: "notes.txt",
        },
      ],
    },
    {
      id: 3,
      hasCaret: true,
      icon: "folder-close" as any,
      label: "Projects",
      isExpanded: false,
      childNodes: [
        {
          id: 4,
          icon: "folder-close" as any,
          label: "project-1",
        },
        {
          id: 5,
          icon: "folder-close" as any,
          label: "project-2",
        },
      ],
    },
  ]);

  const handleNodeClick = (node: any) => {
    const newNodes = [...nodes];
    const findAndToggle = (n: any) => {
      if (n.id === node.id) {
        n.isExpanded = !n.isExpanded;
        n.icon = n.isExpanded ? "folder-open" : "folder-close";
      }
      if (n.childNodes) {
        n.childNodes.forEach(findAndToggle);
      }
    };
    newNodes.forEach(findAndToggle);
    setNodes(newNodes);
  };

  return (
    <Tree
      contents={nodes}
      onNodeClick={handleNodeClick}
      className="max-w-md"
    />
  );
};

const EditableTextExample = () => {
  const [value, setValue] = useState("Click to edit this text");
  return (
    <div className="max-w-md">
      <EditableText
        value={value}
        onChange={setValue}
        placeholder="Enter text..."
      />
    </div>
  );
};

// ============== DATE & TIME EXAMPLES ==============
const DateInputExample = () => {
  const [date, setDate] = useState<string>(new Date().toLocaleDateString());
  return (
    <div className="max-w-xs">
      <DateInput
        formatDate={(date) => date.toLocaleDateString()}
        parseDate={(str) => new Date(str)}
        placeholder="Select a date"
        value={date}
        onChange={(newDate) => setDate(newDate || "")}
      />
    </div>
  );
};

const TimePickerExample = () => {
  const [time, setTime] = useState(new Date());
  return (
    <div className="max-w-xs">
      <TimePicker value={time} onChange={setTime} />
    </div>
  );
};

const DateRangePickerExample = () => {
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  return (
    <div className="max-w-2xl">
      <DateRangePicker
        value={range}
        onChange={setRange}
        shortcuts={true}
      />
    </div>
  );
};

// ============== LAYOUT EXAMPLES ==============
const PanelStackExample = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className="max-w-md">
      <Card>
        <h3 className="text-lg font-bold mb-2">Panel Stack Example</h3>
        <p className="mb-4 text-sm text-gray-600">
          PanelStack provides a way to stack multiple panels with navigation.
        </p>
        <Button onClick={() => setIsPanelOpen(!isPanelOpen)}>
          {isPanelOpen ? "Close" : "Show"} Panel Stack Demo
        </Button>
        {isPanelOpen && (
          <div className="mt-4 p-4 border rounded bg-gray-50">
            <h4 className="font-semibold mb-2">Root Panel</h4>
            <p className="text-sm">This demonstrates a panel stack interface.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

const CollapseExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-md">
      <Button onClick={() => setIsOpen(!isOpen)} icon={isOpen ? "chevron-up" : "chevron-down"}>
        {isOpen ? "Hide" : "Show"} Content
      </Button>
      <Collapse isOpen={isOpen}>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>This content is collapsible. Click the button above to toggle visibility.</p>
        </div>
      </Collapse>
    </div>
  );
};

// ============== ICONS EXAMPLES ==============
const IconsExample = () => {
  const popularIcons = [
    "add", "remove", "edit", "trash", "search", "filter", "settings", "cog",
    "user", "people", "home", "folder-close", "folder-open", "document",
    "calendar", "time", "notifications", "info-sign", "warning-sign", "error",
    "tick", "cross", "chevron-right", "chevron-left", "chevron-up", "chevron-down",
    "arrow-right", "arrow-left", "menu", "more", "star", "heart", "upload", "download",
    "refresh", "lock", "unlock", "eye-open", "eye-off", "thumbs-up", "thumbs-down",
    "pin", "share", "link", "database", "cloud", "chart", "graph", "map"
  ];

  return (
    <div className="grid grid-cols-6 gap-4">
      {popularIcons.map((iconName) => (
        <Tooltip key={iconName} content={iconName}>
          <div className="flex flex-col items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
            <Icon icon={iconName as any} size={24} />
            <span className="text-xs text-gray-600">{iconName}</span>
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

// ============== COMPONENT DEFINITIONS ==============
export const components: ComponentExample[] = [
  // ========== BUTTONS ==========
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

  // ========== FORMS ==========
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
    code: `<RadioGroup label="Choose your plan" selectedValue="standard">
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
<InputGroup placeholder="Password" type="password" leftIcon="lock" />`,
    component: InputGroupExample,
  },
  {
    id: "textarea",
    name: "Text Area",
    category: "forms",
    description: "Multi-line text input for longer content.",
    code: `<TextArea placeholder="Enter your message..." rows={4} fill />`,
    component: TextAreaExample,
  },
  {
    id: "numeric-input",
    name: "Numeric Input",
    category: "forms",
    description: "Input field specifically for numeric values with increment/decrement buttons.",
    code: `<NumericInput placeholder="Enter a number..." />
<NumericInput min={0} max={100} defaultValue={10} stepSize={5} />`,
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
</HTMLSelect>`,
    component: HTMLSelectExample,
  },
  {
    id: "slider",
    name: "Slider",
    category: "forms",
    description: "Slider for selecting a numeric value from a range.",
    code: `const [value, setValue] = useState(5);
<Slider
  min={0}
  max={10}
  stepSize={1}
  value={value}
  onChange={setValue}
  showTrackFill={true}
/>`,
    component: SliderExample,
  },
  {
    id: "range-slider",
    name: "Range Slider",
    category: "forms",
    description: "Slider for selecting a range of values.",
    code: `const [range, setRange] = useState<[number, number]>([20, 80]);
<RangeSlider
  min={0}
  max={100}
  stepSize={5}
  value={range}
  onChange={setRange}
/>`,
    component: RangeSliderExample,
  },
  {
    id: "file-input",
    name: "File Input",
    category: "forms",
    description: "File input for uploading files.",
    code: `<FileInput text="Choose file..." buttonText="Browse" />`,
    component: FileInputExample,
  },
  {
    id: "tag-input",
    name: "Tag Input",
    category: "forms",
    description: "Input field for entering multiple tags or values.",
    code: `const [values, setValues] = useState(["React", "TypeScript"]);
<TagInput
  values={values}
  onChange={setValues}
  placeholder="Add a tag..."
/>`,
    component: TagInputExample,
  },

  // ========== NAVIGATION ==========
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
</Tabs>`,
    component: TabsExample,
  },

  // ========== OVERLAYS ==========
  {
    id: "dialog",
    name: "Dialog",
    category: "overlays",
    description: "Modal dialog for focused interactions.",
    code: `const [isOpen, setIsOpen] = useState(false);
<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Dialog"
  icon="info-sign"
>
  <div className="p-4">Dialog content</div>
</Dialog>`,
    component: DialogExample,
  },
  {
    id: "drawer",
    name: "Drawer",
    category: "overlays",
    description: "Side panel that slides in from the edge.",
    code: `const [isOpen, setIsOpen] = useState(false);
<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Drawer"
>
  <div className="p-4">Drawer content</div>
</Drawer>`,
    component: DrawerExample,
  },
  {
    id: "popover",
    name: "Popover",
    category: "overlays",
    description: "Floating card anchored to a target element.",
    code: `<Popover
  content={<div className="p-4">Popover content</div>}
  position={Position.RIGHT}
>
  <Button>Hover or click me</Button>
</Popover>`,
    component: PopoverExample,
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "overlays",
    description: "Small popup with helpful information.",
    code: `<Tooltip content="This is a tooltip" position={Position.TOP}>
  <Button>Hover me</Button>
</Tooltip>`,
    component: TooltipExample,
  },
  {
    id: "alert",
    name: "Alert",
    category: "overlays",
    description: "Dialog for confirming important actions.",
    code: `const [isOpen, setIsOpen] = useState(false);
<Button onClick={() => setIsOpen(true)} intent="danger">
  Show Alert
</Button>
<Alert
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  intent="danger"
  confirmButtonText="Delete"
>
  <p>Are you sure?</p>
</Alert>`,
    component: AlertExample,
  },

  // ========== FEEDBACK ==========
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
</Callout>`,
    component: CalloutExample,
  },
  {
    id: "toaster",
    name: "Toaster",
    category: "feedback",
    description: "Toast notifications for temporary messages.",
    code: `const toaster = Toaster.create({ position: Position.TOP });
toaster.show({
  message: "Success!",
  intent: "success",
  icon: "tick",
});`,
    component: ToasterExample,
  },

  // ========== DATA DISPLAY ==========
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
  <p>Card content...</p>
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
<div>Section 2</div>`,
    component: DividerExample,
  },
  {
    id: "html-table",
    name: "HTML Table",
    category: "data",
    description: "Styled HTML table for displaying tabular data.",
    code: `<HTMLTable striped bordered interactive>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</HTMLTable>`,
    component: HTMLTableExample,
  },
  {
    id: "tree",
    name: "Tree",
    category: "data",
    description: "Hierarchical tree structure for nested data.",
    code: `const nodes = [
  {
    id: 0,
    hasCaret: true,
    icon: "folder-close",
    label: "Documents",
    childNodes: [
      { id: 1, icon: "document", label: "readme.md" }
    ]
  }
];
<Tree contents={nodes} onNodeClick={handleClick} />`,
    component: TreeExample,
  },
  {
    id: "editable-text",
    name: "Editable Text",
    category: "data",
    description: "Text that can be edited inline by clicking.",
    code: `const [value, setValue] = useState("Click to edit");
<EditableText
  value={value}
  onChange={setValue}
  placeholder="Enter text..."
/>`,
    component: EditableTextExample,
  },

  // ========== DATE & TIME ==========
  {
    id: "date-input",
    name: "Date Input",
    category: "datetime",
    description: "Input field for selecting a single date.",
    code: `<DateInput
  formatDate={(date) => date.toLocaleDateString()}
  parseDate={(str) => new Date(str)}
  placeholder="Select a date"
/>`,
    component: DateInputExample,
  },
  {
    id: "time-picker",
    name: "Time Picker",
    category: "datetime",
    description: "Picker for selecting a specific time.",
    code: `const [time, setTime] = useState(new Date());
<TimePicker value={time} onChange={setTime} />`,
    component: TimePickerExample,
  },
  {
    id: "date-range-picker",
    name: "Date Range Picker",
    category: "datetime",
    description: "Picker for selecting a range of dates.",
    code: `const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
<DateRangePicker
  value={range}
  onChange={setRange}
  shortcuts={true}
/>`,
    component: DateRangePickerExample,
  },

  // ========== LAYOUT ==========
  {
    id: "panel-stack",
    name: "Panel Stack",
    category: "layout",
    description: "Stack of panels with navigation history.",
    code: `<PanelStack
  stack={panels}
  onOpen={(panel) => setPanels([...panels, panel])}
  onClose={() => setPanels(panels.slice(0, -1))}
/>`,
    component: PanelStackExample,
  },
  {
    id: "collapse",
    name: "Collapse",
    category: "layout",
    description: "Collapsible container for showing/hiding content.",
    code: `const [isOpen, setIsOpen] = useState(false);
<Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
<Collapse isOpen={isOpen}>
  <div>Collapsible content</div>
</Collapse>`,
    component: CollapseExample,
  },

  // ========== ICONS ==========
  {
    id: "icons",
    name: "Icons Gallery",
    category: "icons",
    description: "Gallery of popular Blueprint.js icons. Hover to see icon names.",
    code: `<Icon icon="add" size={24} />
<Icon icon="search" size={24} />
<Icon icon="settings" size={24} />`,
    component: IconsExample,
  },
];
