"use client";
import { useState } from "react";
import "./Expandable.css";

interface ExpandableProps {
  label: string;
  children: React.ReactNode;
}

export const Expandable: React.FC<ExpandableProps> = ({ label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentClassName = isExpanded ? "content expanded" : "content";
  return (
    <div className="expandable">
      <div>
        <span>{label}</span>
        <button type="button" onClick={() => setIsExpanded(!isExpanded)}>
          expand
        </button>
      </div>

      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Expandable;
