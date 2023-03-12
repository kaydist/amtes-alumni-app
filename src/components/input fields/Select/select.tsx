import React from "react";
import ReactSelect, { components, MultiValueRemoveProps } from "react-select";
// import makeAnimated from "react-select/animated";

// const animatedComponents = makeAnimated();

export interface SelectProps {
  icon?: React.ReactElement;
  selectOptions: Array<any>;
  selectPlaceholder?: string | number;
  label?: string;
  isMulti?: boolean;
  isRequired?: boolean;
  maxMenuHeight?: number;
  menuPlacement?: "top" | "bottom";
  [rest: string]: any;
}

// const MultiValueRemove = (props: MultiValueRemoveProps) => {
//   return (
//     <components.MultiValueRemove {...props}>
//       <span className="multivalue-remove-icon">
//         <MultiValueRemoveIcon />
//       </span>
//     </components.MultiValueRemove>
//   );
// };

const Option = (props: any) => {
  return (
    <div>
      <components.Option {...props}>
        {/* <Checkbox
          name="checkbox"
          variant="no-fill"
          id={props.data.value}
          value={props.data.value}
          defaultChecked={props.isSelected}
          onChange={() => null}
        />{" "} */}
        <label className="option-label">{props.label}</label>
      </components.Option>
    </div>
  );
};

// const DropdownIndicator = (props: any) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <DropdownIcon />
//     </components.DropdownIndicator>
//   );
// };

const Select: React.FC<SelectProps> = (props, _ref) => {
  const {
    selectOptions,
    selectPlaceholder,
    label,
    menuPlacement,
    isMulti,
    maxMenuHeight,
    isRequired,
    ...rest
  } = props;

  return (
    <div className="border border-grey-300 focus-within:border-other-blue py-2 px-4 rounded-md">
      {label && (
        <label className="input-label">
          {label}
          {isRequired && <sup>*</sup>}
        </label>
      )}

      <div className="input-field-container">
        <ReactSelect
          className="react-select_container"
          classNamePrefix="react-select"
          // components={{ MultiValueRemove, Option, DropdownIndicator }}
          options={selectOptions}
          placeholder={selectPlaceholder ? selectPlaceholder : "Select"}
          closeMenuOnSelect={!isMulti}
          blurInputOnSelect={!isMulti}
          isMulti={isMulti}
          hideSelectedOptions={false}
          menuPlacement={menuPlacement ? "top" : "auto"}
          onBlur={(event) => event.preventDefault()}
          maxMenuHeight={maxMenuHeight ? maxMenuHeight : 100}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Select;
