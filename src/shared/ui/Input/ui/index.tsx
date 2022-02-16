import { HTMLAttributes } from 'react';

import styles from './styles.module.scss';

type InputProps = HTMLAttributes<HTMLInputElement> & { name: string };

const Input = ({ name, ...props }: InputProps) => {
  return (
    <input
      className={styles.input}
      type='text'
      name={name}
      id={`${name}-input`}
      {...props}
    />
  );
};

export { Input };
