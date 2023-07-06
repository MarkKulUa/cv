import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';
import CodeMirror from '@uiw/react-codemirror';
import { lightTheme, initialSettings } from '../../consts/codemirror';
import { javascript } from '@codemirror/lang-javascript';
import styles from './Editor.module.scss';

const Editor = () => {
  const { setQuery } = useActions();
  const { query } = useAppSelector((state) => state.graphQl);

  const handleChange = (value: string) => {
    setQuery(value);
  };

  return (
    <div className={styles.editor}>
      <div className={styles.textareaContainer}>
        <CodeMirror
          className={styles.textareaContent}
          value={query}
          theme={lightTheme}
          extensions={[javascript()]}
          onChange={handleChange}
          basicSetup={initialSettings}
        />
      </div>
    </div>
  );
};
export default Editor;
