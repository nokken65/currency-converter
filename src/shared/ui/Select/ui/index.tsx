import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

type SelectProps = HTMLAttributes<HTMLSelectElement> & {
  name: string;
  options: Array<string>;
  selected: string;
};

const Select = ({ name, options, selected, ...props }: SelectProps) => {
  return (
    <select
      className={styles.Select}
      name={name}
      id={`${name}-select`}
      defaultValue={selected}
      {...props}
    >
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export { Select };
