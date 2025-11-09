"use client";

import { InputGroup } from "@blueprintjs/core";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <InputGroup
      leftIcon="search"
      placeholder="Search components..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      large
      className="mb-6"
    />
  );
}
