import React, { ReactNode, useRef, useState } from 'react';
import { ReactComponent as Caret } from '../../../assets/svg/down-arrow.svg';
import styles from './select.module.scss';
import { ReactComponent as EnFlag } from '../../../assets/svg/en-flag.svg';
import { ReactComponent as PlFlag } from '../../../assets/svg/pl-flag.svg';
import { ReactComponent as UaFlag } from '../../../assets/svg/ua-flag.svg';
import { useOutsideClickDetector } from '../../../hooks/layout';

const languageIcons: { [key in string]: ReactNode } = {
  en: <EnFlag />,
  pl: <PlFlag />,
  ua: <UaFlag />,
};

interface LangSwotcherType {
  options: string[];
  onChange: (val: string) => void;
  defaultValue?: string;
}

export const Select = ({ options, onChange, defaultValue = '' }: LangSwotcherType) => {
  const [isOpenList, setOpenList] = useState(false);
  const [selected, setSelectedVal] = useState(defaultValue);
  const ref = useRef<HTMLDivElement | null>(null);
  useOutsideClickDetector(ref, () => setOpenList(false));

  const handleChangeLang = (val: string) => {
    onChange(val);
    setSelectedVal(val);
    setOpenList(!isOpenList);
  };

  return (
    <div ref={ref} className={styles.selectWrapper}>
      <div className={styles.label} onClick={() => setOpenList(!isOpenList)}>
        {selected === 'ua' ? <UaFlag /> : selected === 'pl' ? <PlFlag /> : <EnFlag />}
        {isOpenList ? (
          <Caret className={`${styles.caret} ${styles.rotate}`} />
        ) : (
          <Caret className={styles.caret} />
        )}
      </div>
      <div className={`${styles.list} ${isOpenList ? styles.listOpen : styles.listClose}`}>
        {Object.keys(options).map((option, i) => (
          <div key={option} onClick={() => handleChangeLang(options[i])}>
            {languageIcons[options[i]]}
          </div>
        ))}
      </div>
    </div>
  );
};
