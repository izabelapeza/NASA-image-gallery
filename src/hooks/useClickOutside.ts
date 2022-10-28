import { useRef, useEffect } from "react";

function targetIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
}

export const useClickOutside = (handler: () => void) => {
  let domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideHandler = (event: MouseEvent) => {
      targetIsNode(event.target);
      if (!domNode.current?.contains(event.target)) handler();
    };

    document.addEventListener("mousedown", clickOutsideHandler);

    return () => {
      document.removeEventListener("mousedown", clickOutsideHandler);
    };
  });

  return domNode;
};
