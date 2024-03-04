import { HTMLProps, forwardRef } from 'react';

import UIIconsRadio from '../icons/radio';
import UIIconsRadioSelected from '../icons/radioSelected';

interface UIFormInputRadioProps extends HTMLProps<HTMLInputElement> {
  /** Is Radio selected */
  isSelected?: boolean;
  /** Label for the radio */
  label: string;
  /** On click event */
  onClick?: any;
  /** iconProps */
  iconProps?: any;
}

const UIFormInputRadio = (
  {
    isSelected = false,
    label,
    onClick,
    iconProps = {},
    ...props
  }: UIFormInputRadioProps,
  ref,
) => {
  return (
    <label
      className="flex cursor-pointer items-center justify-center"
      htmlFor={props.name}
      onClick={onClick}
    >
      <input ref={ref} {...props} type="radio" className="hidden" />
      {isSelected ? (
        <UIIconsRadioSelected {...iconProps} />
      ) : (
        <UIIconsRadio {...iconProps} />
      )}
      <p className="ml-[5px]">{label}</p>
    </label>
  );
};

export default forwardRef(UIFormInputRadio);
