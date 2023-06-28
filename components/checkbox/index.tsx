import React, { ChangeEvent } from "react";
import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--black-color);
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

const Checkmark = styled.div`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 12px;
  border: 2px solid var(--black-color);
  border-radius: 4px;
  transition: all 0.3s;

  ${HiddenCheckbox}:checked + & {
    background-color: var(--white-color);
    border-color: var(--black-color);
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: 5px;
    width: 4px;
    height: 10px;
    border: solid var(--black-color);
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    color: var(--black-color);
  }

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 2px #90909064;
  }

  ${CheckboxWrapper}:hover ${HiddenCheckbox}:not(:disabled) + & {
    border-color: var(--black-color);
  }

  ${HiddenCheckbox}:disabled + & {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${CheckboxWrapper}:hover ${HiddenCheckbox}:disabled + & {
    border-color: #646464aa;
  }
`;

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onChange(checked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <Checkmark />
    </CheckboxWrapper>
  );
};

export default Checkbox;
