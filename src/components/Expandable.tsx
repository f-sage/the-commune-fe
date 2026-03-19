"use client";
import { useState } from "react";
import "./Expandable.css";
import "material-icons/iconfont/material-icons.css";

interface ExpandableProps {
  label: string;
  children: React.ReactNode;
}

export const Expandable: React.FC<ExpandableProps> = ({ label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentClassName = isExpanded ? "content expanded" : "content";
  const buttonIcon = isExpanded ? "keyboard_double_arrow_left" : "add";
  const buttonAriaLabel = isExpanded ? "collapse" : "expand";
  return (
    <div className="expandable">
      <div>
        <span>{label}</span>
        <button
          aria-label={buttonAriaLabel}
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="material-icons">{buttonIcon}</span>
        </button>
      </div>

      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Expandable;
