import useOnClickAway from "@/utils/hooks/useOnClickAway";
import React, {
  cloneElement,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

const Outer = styled.div`
  position: relative;
  border-radius: 5px;
  padding: 5px;
`;

const Absolute = styled.div`
  position: fixed;
  max-height: 500px;
  overflow-y: auto;
  padding: 10px;
`;

const DefaultDropdown = () => <div>No Dropdown Passed</div>;

const calculatePosition = (bottom, right) => {
  const { innerHeight, innerWidth } = window;
  if (bottom > innerHeight) {
    bottom = innerHeight - 60;
  }
  if (right > innerWidth) {
    right = innerWidth - 60;
  }
  return { bottom, right };
};

const Dropdown = ({ children, DropdownComponent = DefaultDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);
  const dropRef = useRef(null);

  useOnClickAway(ref, () => setIsOpen(false), [dropRef]);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setIsOpen(false);
    });

    return () => {
      window.removeEventListener("scroll", (e) => {
        setIsOpen(false);
      });
    };
  }, []);

  // Create a higher-order component that forwards the ref
  const ChildrenWithRef = forwardRef((props, ref) =>
    cloneElement(children, props)
  );

  return (
    <Outer>
      <ChildrenWithRef ref={ref} />
      {isOpen && (
        <Absolute
          ref={(r) => {
            if (!r) return;
            // get the bottom and left of the button
            const { bottom, left } = ref.current.getBoundingClientRect();

            // get the height and width of the dropdown
            const { height: dropHeight, width: dropWidth } =
              r.getBoundingClientRect();

            // calculate the bottom and right of the dropdown
            const { bottom: dropBottom, right: dropRight } = calculatePosition(
              bottom + dropHeight,
              left + dropWidth
            );

            // set the position of the dropdown
            r.style.top = `${dropBottom - dropHeight}px`;
            r.style.left = `${dropRight - dropWidth}px`;

            // set the ref
            dropRef.current = r;
          }}
        >
          {DropdownComponent}
        </Absolute>
      )}
    </Outer>
  );
};

export default Dropdown;
