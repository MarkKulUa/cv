import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';
import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { lightTheme, initialSettings } from '../../consts/codemirror';
import { javascript } from '@codemirror/lang-javascript';

const Variables = () => {
  const { variables } = useAppSelector((state) => state.graphQl);
  const { setVariables } = useActions();

  const handleChange = (variables: string) => {
    setVariables(variables);
  };

  return (
    <CodeMirror
      value={variables}
      theme={lightTheme}
      extensions={[javascript()]}
      onChange={handleChange}
      basicSetup={initialSettings}
    />
  );
};

export default Variables;
