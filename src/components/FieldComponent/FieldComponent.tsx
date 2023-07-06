import React from 'react';
import { FieldInfo } from '../../types';
import styles from './FieldComponent.module.scss';

type FieldComponentProps = {
  field: FieldInfo;
  handleFieldButtonClick: (type: string) => void;
};

const FieldComponent: React.FC<FieldComponentProps> = ({ field, handleFieldButtonClick }) => {
  return (
    <div className={styles.fieldCompContainer}>
      <div>
        <span className={styles.field}>
          {field.name}(
          {field.variables && field.variables.length ? (
            <div>
              {field.variables.map((variable, variableIndex) => (
                <div key={variableIndex} style={{ marginLeft: '15px', marginTop: '7px' }}>
                  <div>
                    {variableIndex !== (field.variables?.length ?? 0) - 1 ? (
                      <>
                        <span>{variable.name},</span>
                      </>
                    ) : (
                      <>
                        <strong>{variable.name}</strong>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ''
          )}
          ):
        </span>
        <button className={styles.btn} onClick={() => handleFieldButtonClick(field.type)}>
          {field.type}
        </button>
      </div>
      {field.variables && field.variables.length ? (
        <div>
          <span className={styles.field}>arguments:</span>
          {field.variables.map((variable, variableIndex) => (
            <div key={variableIndex} className={styles.varContainer}>
              {variable.name}:
              <button className={styles.btn} onClick={() => handleFieldButtonClick(variable.type)}>
                {variable.type}
              </button>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
      <div>
        {field.description && <span className={styles.field}>description: </span>}
        {field.description}
      </div>
    </div>
  );
};

export default FieldComponent;
