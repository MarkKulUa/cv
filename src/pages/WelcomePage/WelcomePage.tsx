import React from 'react';
import { ReactComponent as WelcomeIcon } from '../../assets/svg/welcome.svg';
import styles from './Welcome.module.scss';
import { AuthorBlock } from '../../components/AuthorBlock/AuthorBlock';
import { MarkInfo, FeaturesData_1, FeaturesData_2, FeaturesData_3 } from '../../constants';
import { CardFeature } from '../../components/CardBlock/Card';
import { Trans, useTranslation } from 'react-i18next';

export const WelcomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.welcomeWrapper}>
        <h1 className={styles.welcomeTitle}>
          {t('Welcome')} <WelcomeIcon /> {t('to the')}
          <br />
          GraphiQL
        </h1>
        <p className={styles.welcomeSubtitle}>
          {t(
            'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.'
          )}
          <br />
          {t('GraphiQL is the GraphQL integrated development environment (IDE).')}
        </p>
        <section className={`${styles.welcomeWrapper} ${styles.welcomeLayout} ${styles.devBlock}`}>
          <AuthorBlock {...MarkInfo} />
        </section>
        <section className={styles.welcomeLayout}>
          <h2 className={styles.title}>{t('Our application contains')}:</h2>
          <div className={styles.Features}>
            {FeaturesData_1.map((item, i) => (
              <CardFeature key={i} img={item.img} featureName={t(item.featureName)} />
            ))}
            <div className={`${styles.GraphContainer} ${styles.GraphContainerLayout}`}>
              <p className={styles.GraphTitle}>GraphiQL page</p>
              <div className={styles.GraphContainer}>
                {FeaturesData_2.map((item, i) => (
                  <CardFeature key={i} img={item.img} featureName={t(item.featureName)} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className={styles.title}>{t('Technical requirements')}:</h2>
          <div className={`${styles.GraphContainer} ${styles.TechContainer}`}>
            {FeaturesData_3.map((item, i) => (
              <CardFeature key={i} img={item.img} featureName={t(item.featureName)} />
            ))}
          </div>
        </section>
        <section className={styles.CourseInfo}>
          <div className={styles.imgConatiner}>
            <img src="https://i.ibb.co/HqX1zTs/course.png" alt={t('course') || 'course'} />
          </div>
          <div className={styles.textCourseInfoContainer}>
            <h3 className={`${styles.title} ${styles.courseTitle}`}>
              <Trans i18nKey="rssCourseTitle" t={t}>
                RS School is <span className={styles.different}>free-of-charge</span>
                community-based education program.
                <span className={styles.different}>The Rolling Scopes</span> developer community
                since 2013
              </Trans>
            </h3>
          </div>
        </section>
      </div>
    </>
  );
};
