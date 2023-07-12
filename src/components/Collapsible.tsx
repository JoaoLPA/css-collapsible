import React, { ReactNode, useState } from 'react';
import './styles.collapsible.css'; // Basic styles for the component
import { DefaultTrigger } from '../assets/DefaultTrigger';

export interface CollapsibleProps {
  style?: React.CSSProperties;
  title?: string;
  customTrigger?: ReactNode;
  children: ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({
  style,
  children,
  customTrigger = <DefaultTrigger />,
  title,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(state => !state);
  };

  return (
    <div className={`collapsible`} style={style}>
      <div
        className={`collapsible__header collapsible__header${
          isCollapsed ? '' : '__open'
        }`}
      >
        <button
          className={`collapsible__header__toggle ${isCollapsed ? '' : 'open'}`}
          onClick={handleToggle}
        >
          {/* Replace the SVG icon with your desired SVG */}
          {customTrigger ? customTrigger : <DefaultTrigger />}
        </button>
        {title && <span>{title}</span>}
      </div>
      <div className={`collapsible__content ${isCollapsed ? '' : 'open'}`}>
        <div className={`collapsible__content__inner`}>{children}</div>
      </div>
    </div>
  );
};

Collapsible.displayName = 'Collapsible';
