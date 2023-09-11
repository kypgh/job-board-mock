import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Background, Flex } from "./generic";

const Button = styled.button`
  display: contents;
  cursor: pointer;
`;

const DefaultCollapse = () => <div>No Collapsed View Passed</div>;

const Collapse = ({ children, CollapsedView = DefaultCollapse }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isFunction = typeof CollapsedView === "function";

  const View = () => (
    <Animate isCollapsed={collapsed}>
      {isFunction ? <CollapsedView /> : CollapsedView}
    </Animate>
  );

  return (
    <Background $bb="1px solid #dedede" $mb={10} $pb={10}>
      <Button
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        <Flex
          $justify="flex-start"
          $align="center"
          $gap={10}
          $pb={collapsed ? 10 : 0}
        >
          {collapsed ? (
            <AiOutlineMinus size={20} color="#00788C" />
          ) : (
            <AiOutlinePlus size={20} color="#00788C" />
          )}
          {children}
        </Flex>
      </Button>
      {collapsed && <View />}
    </Background>
  );
};

const animateOpen = keyframes`
    from {
        transform: scaleY(0);
        opacity: 0;
    }
    to {
        transform: scaleY(1);
        opacity: 1;
    }
`;

const Scale = styled.div`
  transform-origin: top;
  animation: ${animateOpen} 0.2s ease-in;
`;

const Animate = ({ children }) => {
  return <Scale>{children}</Scale>;
};

export default Collapse;
