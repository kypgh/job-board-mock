import React, { useState } from "react";

// This component manages the tabs state.
export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return React.Children.map(children, (child, index) => {
    if (child.type === TabList) {
      return React.cloneElement(child, { activeIndex, setActiveIndex });
    }
    if (child.type === TabPanel && index === activeIndex + 1) {
      return child;
    }
    return null;
  });
}

// This component displays the tab headers.
export function TabList({ children, activeIndex, setActiveIndex }) {
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeIndex,
          setActiveIndex: () => setActiveIndex(index),
        })
      )}
    </div>
  );
}

// This component is for each individual tab header.
export function Tab({ children, isActive, setActiveIndex }) {
  return (
    <button onClick={setActiveIndex} disabled={isActive}>
      {children}
    </button>
  );
}

// This component displays the content of the currently active tab.
export function TabPanel({ children }) {
  return <div>{children}</div>;
}
