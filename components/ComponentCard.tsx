"use client";

import { ComponentExample } from "@/types/components";
import { Card, Tag, Divider, Button, Collapse } from "@blueprintjs/core";
import { useState } from "react";

interface ComponentCardProps {
  component: ComponentExample;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <Card className="mb-4">
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{component.name}</h3>
          <Tag minimal>{component.category}</Tag>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{component.description}</p>
      </div>

      <Divider className="my-4" />

      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Interactive Example:
        </h4>
        <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <component.component />
        </div>
      </div>

      <div>
        <Button
          minimal
          icon={showCode ? "chevron-up" : "code"}
          onClick={() => setShowCode(!showCode)}
          className="mb-2"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </Button>
        <Collapse isOpen={showCode}>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            <code>{component.code}</code>
          </pre>
        </Collapse>
      </div>
    </Card>
  );
}
