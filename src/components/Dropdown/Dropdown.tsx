import React, {
  FC,
  ReactNode,
  useState,
  useEffect,
  useRef,
  Children,
} from 'react';
import { usePopper } from 'react-popper';
import { Placement } from '@popperjs/core';
import Panel from './Panel';
import Trigger from './Trigger';

export interface DropdownProps {
  containerClassName?: string;
  triggerText?: string;
  onChange?: () => void;
  popperPlacement?: Placement;
}

interface TriggerStatic {
  Trigger: typeof Trigger;
}
interface PanelStatic {
  Panel: typeof Panel;
}

const Dropdown: FC<DropdownProps> & TriggerStatic & PanelStatic = ({
  children,
  triggerText = 'Options',
  onChange = () => {},
  containerClassName = '',
  popperPlacement = 'bottom-start',
}) => {
  const containerRef = useRef(null);
  const [
    referenceElement,
    setReferenceElement,
  ] = useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  );

  const { styles, attributes, update } = usePopper(
    referenceElement,
    popperElement,
    { placement: popperPlacement },
  );

  const [isVisible, setVisible] = useState<boolean>(false);

  const handleDocumentClick = (event: MouseEvent) => {
    if (!containerRef) return;
    if ((containerRef as any).current.contains(event.target)) {
      return;
    }
    setVisible(false);
  };

  useEffect(() => {
    // listen for clicks and close dropdown on body
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const renderTrigger = (triggerChild?: ReactNode) => (
    <button
      type="button"
      ref={setReferenceElement}
      aria-describedby="tooltip"
      onClick={() => {
        setVisible(!isVisible);
        if (update) {
          update();
        }
      }}
    >
      {triggerChild || (
        <div
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {triggerText}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </button>
  );

  const renderPanel = (panelChild?: ReactNode) => {
    if (!isVisible) {
      return null;
    }
    return (
      <div
        className="ttnc-dropdown__panel my-2"
        ref={setPopperElement}
        style={styles.popper}
        role="tooltip"
        aria-labelledby="options-menu"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...attributes.popper}
      >
        {panelChild || (
          <div
            className="py-1 w-56 shadow-lg bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="none"
          >
            <a
              href="#r"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Account settings
            </a>
            <a
              href="#root"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Support
            </a>
            <a
              href="#root"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              License
            </a>
          </div>
        )}
      </div>
    );
  };

  const renderChildren = (
    { type, props }: React.ReactElement<
    { children: React.ReactNode }, string | React.JSXElementConstructor<any>
    >,
  ) => {
    if (type === Panel) {
      return renderPanel(props.children);
    }
    if (type === Trigger) {
      return renderTrigger(props.children);
    }
    return 'The Children must Dropdown.Trigger or Dropdown.Panel';
  };

  return (
    <div
      className={`ttnc-dropdown relative inline-flex ${containerClassName}`}
      ref={containerRef}
    >
      {Children.map(children, (child) => {
        if (!child) return '';
        return renderChildren(
          child as React.ReactElement<any, string | React.JSXElementConstructor<any>>,
        );
      })}
    </div>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Panel = Panel;

export default Dropdown;
