import { RequestHeader } from 'types';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ReactComponent as MinusIcon } from '../../assets/svg/minus-svgrepo-com.svg';
import styles from './HeaderElement.module.scss';

interface HeaderElementProps {
  data: RequestHeader;
  last?: boolean;
  removeItem: (id: string) => void;
  updateItem: (id: string, key: string, value: string) => void;
}

const HeaderElement: FC<HeaderElementProps> = ({ data, last, removeItem, updateItem }) => {
  const [key, setKey] = useState(data.key);
  const [value, setValue] = useState(data.value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUpdate = () => {
    updateItem(data.id, key, value);
  };

  useEffect(() => {
    setKey(data.key);
    setValue(data.value);
  }, [data]);

  useEffect(() => {
    if (last) {
      inputRef.current?.focus();
    }
  }, [inputRef, last]);

  return (
    <li className={styles.liContainer}>
      <input
        name="key"
        className={styles.liInput}
        ref={inputRef}
        value={key}
        pattern=".*"
        placeholder="Key"
        onBlur={handleUpdate}
        onChange={handleKeyChange}
        type="text"
      />
      <input
        name="value"
        className={styles.liInput}
        value={value}
        placeholder="Value"
        onBlur={handleUpdate}
        onChange={handleValueChange}
        type="text"
      />
      <button className={styles.minusButton} onClick={() => removeItem(data.id)}>
        <MinusIcon />
      </button>
    </li>
  );
};

export default HeaderElement;
