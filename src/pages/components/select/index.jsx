import React from 'react';
import Style from './select.module.scss';

const Select = ({ placeholder, required, options }) => {
  return (
    <select required={required} className={Style.select}>
      <option value="" disabled hidden>{placeholder}</option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Select;
