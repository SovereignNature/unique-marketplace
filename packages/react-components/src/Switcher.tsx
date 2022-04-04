import React, { VFC } from 'react';
import styled from 'styled-components';

interface SwitcherProps {
  checked: boolean;
  className?: string;
  childClassName?: string;
  disabled?: boolean;
  onChange: () => void;
  text: string;
}

const Switcher: VFC<SwitcherProps> = (props) => {
  const { checked, className, childClassName, disabled, onChange, text } = props;

  return (
    <div className={`unique-switcher ${className}`}>
      <label className='switch'>
        <input
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          type='checkbox'
        />
        <span className={`slider round ${childClassName}`} />
      </label>
      <div className='title'>{text}</div>
    </div>
  )
}

export default styled(Switcher)`
  display: flex;
  align-items: center;
  padding: 20px;

  .title {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: var(--text-color);
  }

  input[type="checkbox"] {
    margin-bottom: 11px;
    position: relative;
    cursor: pointer;
    width: 0;
  }

  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid var(--card-border-color);
    background-color: white;
    border-radius: 5px;
  }

  input[type="checkbox"]:checked:before {
    border-radius: 4px;
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: var(--link-color);
  }

  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 8px;
    height: 13px;
    border: 1px solid var(--input-background-color);
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: 33px;
    height: 18px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: transparent;
    border: 1px solid #203D3D;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    &:hover {
      border: 1px solid #203D3D;
    }
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    top: 0px;
    left: 0px;
    width: 16px;

    background-color: transparent;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #5A7D7C;
    border: 1px solid #5A7D7C;
  }

  input:checked + .slider:before {
    left: -1px;
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
  }

  .slider.round {
    border-radius: 16px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
