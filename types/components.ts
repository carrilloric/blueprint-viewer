export interface ComponentExample {
  id: string;
  name: string;
  description: string;
  category: string;
  code: string;
  component: React.ComponentType<any>;
  props?: Record<string, any>;
}

export interface ComponentCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export type CategoryId = "buttons" | "forms" | "navigation" | "overlays" | "data" | "feedback" | "datetime" | "layout" | "icons" | "charts";
