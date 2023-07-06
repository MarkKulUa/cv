import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IFormRegister } from '../../types';
import { errorMessages, patterns } from '../../form-constants';
import { CustomButton } from '../UI/button/CustomButton';
import { TextError } from '../UI/message/Message';
import { Link, useNavigate } from 'react-router-dom';
import { credentials, signUp } from '../../auth/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { MAIN_PAGE_PATH } from '../../constants';
import styles from './Auth.module.scss';

export const Register = () => {
  const [loading] = useAuthState(credentials);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const requiredText = t(errorMessages.required) || errorMessages.required;
  const shortText = t(errorMessages.short) || errorMessages.short;
  const longText = t(errorMessages.long) || errorMessages.long;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegister>({ reValidateMode: 'onSubmit' });

  const onSubmit: SubmitHandler<IFormRegister> = (data: IFormRegister) => {
    signUp(data.name, data.email, data.password)
      .then(() => {
        toast.success(t('Success registration') + '!', {
          className: 'toast-success-message',
        });
        navigate(MAIN_PAGE_PATH);
      })
      .catch((err) => {
        if (err?.message) {
          toast.error(t('Error registration') + '! ' + err?.message);
        }
      });
  };

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.loginForm}>
          <p className={styles.loginHeader}>{t('Sign Up')}</p>
          <input
            {...register('name', {
              required: requiredText,
              minLength: {
                value: 4,
                message: shortText,
              },
              maxLength: {
                value: 50,
                message: longText,
              },
              pattern: patterns.name,
            })}
            placeholder={t('Enter name') || 'Enter name'}
            autoComplete="off"
            type="text"
          />
          {errors.name && (
            <div className={styles.error}>{t(errors.name?.message || '') || TextError('')}</div>
          )}
          <input
            {...register('email', {
              required: requiredText,
              minLength: {
                value: 4,
                message: shortText,
              },
              maxLength: {
                value: 50,
                message: longText,
              },
              pattern: patterns.email,
            })}
            placeholder={t('Enter email') || 'Enter email'}
            autoComplete="off"
            type="text"
          />
          {errors.email && (
            <div className={styles.error}>{t(errors.email?.message || '') || TextError('')}</div>
          )}
          <input
            {...register('password', {
              required: requiredText,
              minLength: {
                value: 4,
                message: shortText,
              },
              maxLength: {
                value: 20,
                message: longText,
              },
              pattern: patterns.password,
            })}
            placeholder={t('Enter password') || 'Enter password'}
            autoComplete="off"
            type="password"
          />
          {errors.password && (
            <div className={styles.error}>{t(errors.password?.message || '') || TextError('')}</div>
          )}
          <CustomButton type="submit" name="submit" text="Submit" />
          <p className={styles.haveAccauntText}>
            {t('Have an account')}?{' '}
            <Link to="/sign-in" className={styles.authSubLink}>
              {t('Sign In')}
            </Link>{' '}
            {t('now')}.
          </p>
        </form>
      )}
    </>
  );
};
