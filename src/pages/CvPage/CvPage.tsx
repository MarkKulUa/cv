import React from 'react';
import styles from './Cv.module.scss';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LangSwitcher } from '../../components/LangSwitcher/LangSwitcher';
import { useScrollDirection } from '../../hooks/layout';
import { ReactComponent as MailLogo } from '../../assets/svg/mail.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/svg/linkedin.svg';
import { ReactComponent as PhoneLogo } from '../../assets/svg/phone.svg';
import { ReactComponent as GitHubLogo } from '../../assets/svg/github-square.svg';
import { MarkInfo, StudyData_fe, StudyData_react } from '../../constants';

export const CvPage = () => {
  const scrollDirection = useScrollDirection();
  const { t } = useTranslation();

  return (
    <div  id="top">
      <header className={`${scrollDirection === 'down' ? styles.hide : 'show'}`}>
        <div className={styles.fioWrapper}>
          <div className={styles.fioContainer}>
            <h1 className={styles.cvTitle}>{t('Mark Kulishov')}</h1>
            <div className={styles.cvSubtitle}>
              Full Stack {t('Developer')} | Laravel | ReactJs | VueJs | PHP
            </div>
            <div className={styles.cvSubtitle}>{t('Poland, Warsawa')}</div>
            <div className={styles.socialContainer}>
              <Link className={styles.social} to="mailto:mark.tabletpc@gmail.com">
                <MailLogo className={styles.logo} />
              </Link>
              <Link
                className={styles.social}
                to="https://linkedin.com/in/mark-kulishov-85140b1b5"
                target="_blank"
              >
                <LinkedinLogo className={styles.logo} />
              </Link>
              <Link className={styles.social} to="https://github.com/MarkKulUa" target="_blank">
                <GitHubLogo className={styles.logo} />
              </Link>
              <Link className={styles.social} to="tel:+48604357902">
                <PhoneLogo className={styles.logo} />
              </Link>
              <div className={` ${styles.mobileOnly} ${styles.social} `}>
                <LangSwitcher />
              </div>
            </div>
          </div>
          <div className={styles.avatarContainer}>
            <img className="vcard__avatar u-photo" src={MarkInfo.photo} alt={MarkInfo.name} />
          </div>
          <div className={styles.languageWrapper}>
            <div className={styles.languageOwn}>
              <div>{t('Language Capabilities')}:</div>
              <div>
                {t('Ukrainian')} - {t('native')}, {t('English')} - B1, {t('Polish')} - A1
              </div>
            </div>
            <div className={` ${styles.mobileHidden} ${styles.languageContainer} `}>
              <LangSwitcher />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.cvWrapper}>
        <div className={styles.contentWrapper}>
          <section className={styles.section}>
            <h2 className={styles.title}>{t('Summary')}</h2>
            <div className={styles.features}>
              <ul className={styles.summaryList}>
                <li>
                  {t('Proactive and motivated Full Stack Developer with technical education')}.
                </li>
                <li>
                  {t('I have a solid knowledge of')} PHP, Laravel, JavaScript, TypeScript, and
                  Vue.js.
                </li>
                <li>
                  {t(
                    'I`m constantly striving to learn new technologies and always do my best with every new challenge'
                  )}
                  .
                </li>
                <li>
                  {t(
                    'Overall 10 years of work experience for top Ukrainian Bank, US and Canadian clients/companies, and Ukrainian private customers'
                  )}
                  .
                </li>
              </ul>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>{t('Hard Skills')}:</h3>
              <ul className={styles.checkedList}>
                <li>{t('Follow best practices')};</li>
                <li>{t('Strong organizational and problem-solving skills')};</li>
                <li>{t('Great team-leading experience')}.</li>
              </ul>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>{t('Soft Skills')}:</h3>
              <ul className={styles.checkedList}>
                <li>{t('Reliability and responsibility')};</li>
                <li>{t('Good communication skills')};</li>
                <li>{t('Attention to detail')}.</li>
              </ul>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>{t('Technical Skills')}:</h3>
              <ul className={styles.checkedList}>
                <li>{t('Programming Languages')}: PHP, JavaScript/ES6, TypeScript</li>
                <li>{t('Back-end')}: Laravel, Lumen, Phpunit</li>
                <li>
                  {t('Front-end')}: ReactJs, TypeScript, VueJs, Bootstrap, ES6, SCSS, Sass, React
                  testing-library
                </li>
                <li>{t('Database')}: PostgreSQL, MySQL, MongoDB, ElasticSearch</li>
                <li>{t('Tools')}: Jira, Trello, Miro, Slack, Git, Bitbucket, PHPStorm, Figma</li>
                <li>{t('PM Processes')}: Agile, Scrum</li>
                <li>
                  {t('Other technologies')}: Zabbix, RabbitMq, ELK, Composer, Npm, Gulp, Webpack,
                  Vite
                </li>
              </ul>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>{t('Additional experience')}:</h3>
              <ul className={styles.checkedList}>
                <li>{t('Graduated courses on Google advertising (Adwords)')}</li>
                <li>{t('SEO of site audits, semantic core, SEO articles')}</li>
                <li>{t('Huge SQL analytics for business customers')}</li>
              </ul>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.title}>{t('Education')}</h2>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>
                <img
                  src="https://www.linkpicture.com/q/rs_img.png"
                  alt={t('National Mining University') || ''}
                />
                React JS
              </h3>
              <div className={styles.studyPeriod}>Mar 2023 - Jun 2023</div>
              <div className={styles.studyOrganization}>
                <a
                  href="https://rs.school/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('Rolling Scopes School') || ''}
                >
                  {t('Rolling Scopes School')}
                </a>
                <span aria-hidden="true"> · </span>
                <a
                  href="https://github.com/rolling-scopes-school/tasks/blob/master/react/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('Study program') || ''}
                >
                  {t('Study program')}
                </a>
              </div>
              <div className={styles.studyDescription}>
                <ul>
                  <li>
                    {t('Final project deploy')} &nbsp;
                    <a
                      href="https://rs-graphiql-app.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('link') || ''}
                    >
                      { t('link') }
                    </a>
                  </li>
                  <li>
                    {t('Certificate')} &nbsp;
                    <a
                      href="https://app.rs.school/certificate/lsw7hwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('link') || ''}
                    >
                      {t('link')}
                    </a>
                  </li>
                  <li>
                    {t(
                      'The 28 challenging steps/tasks, 12-weeks ride, more than 10 coding projects'
                    )}
                    .
                  </li>
                </ul>
              </div>
              <div className={styles.studySkills}>
                <span>{t('Skills')}</span>: React testing library · React Hooks · React Forms ·
                GraphQl Api · Redux · SSR · SSG · React.js · REST APIs
              </div>
              <div className={styles.studyImg}>
                {StudyData_react.map((item, i) => (
                  <img key={i} src={item.img} alt={t(item.name) || ''} />
                ))}
              </div>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>
                <img
                  src="https://www.linkpicture.com/q/rs_img.png"
                  alt={t('National Mining University') || ''}
                />
                {t('JS/Frontend Development Course')}
              </h3>
              <div className={styles.studyPeriod}>
                {t('Sep')} 2022 - {t('Mar')} 2023
              </div>
              <div className={styles.studyOrganization}>
                <a
                  href="https://rs.school/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('Rolling Scopes School') || ''}
                >
                  {t('Rolling Scopes School')}
                </a>
                <span aria-hidden="true"> · </span>
                <a
                  href="https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('Study program') || ''}
                >
                  {t('Study program')}
                </a>
              </div>
              <div className={styles.studyDescription}>
                <ul>
                  <li>
                    {t('Tasks project deploy')} &nbsp;
                    <a
                      href="https://deft-mooncake-b88ac0.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('link') || ''}
                    >
                      {t('link')}
                    </a>
                  </li>
                  <li>
                    {t('Certificate')} &nbsp;
                    <a
                      href="https://app.rs.school/certificate/dk5lmpv5"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={t('link') || ''}
                    >
                      {t('link')}
                    </a>
                  </li>
                  <li>{t('The_63_challenging_steps_tasks...')}</li>
                </ul>
              </div>
              <div className={styles.studySkills}>
                <span>{t('Skills')}</span>: Front-End Development · Vite · npm · SCSS · JSON ·
                ESLint · Styled Components · Figma · Bash · ECMAScript · ES6 · GitHub · Jest ·
                TypeScript · SASS · JavaScript · HTML · CSS · Webpack
              </div>
              <div className={styles.studyImg}>
                {StudyData_fe.map((item, i) => (
                  <img key={i} src={item.img} alt={t(item.name) || ''} />
                ))}
              </div>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>
                <img
                  src="https://www.linkpicture.com/q/ld_3.png"
                  alt={t('Laravel Courses') || ''}
                />
                {t('Laravel Courses')}
              </h3>
              <div className={styles.studyPeriod}>Issued Aug 2022</div>
              <div className={styles.studyOrganization}>
                <a
                  href="https://laraveldaily.teachable.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('LaravelDaily Courses') || ''}
                >
                  {t('LaravelDaily Courses')}
                </a>
              </div>
              <div className={styles.studyDescription}>
                <ul>
                  <li>&quot;{t('SOLID Code in Laravel')}&quot;</li>
                  <li>&quot;{t('PhpUnit in Laravel')}&quot;</li>
                  <li>&quot;{t('Queues in Laravel')}&quot;</li>
                </ul>
              </div>
              <div className={styles.studySkills}>
                <span>{t('Skills')}</span>: Full-Stack Development • Laravel • React.js • TypeScript
                • ESLint • SQL • PHPUnit • JavaScript • Scrum • SOLID Design Principles
              </div>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>
                <img
                  src="https://www.linkpicture.com/q/nmu.jpeg"
                  alt="National Mining University"
                />
                {t('Bachelor`s and Engineer`s Degree, Information Technology')}
              </h3>
              <div className={styles.studyPeriod}>Sep 2001 - May 2006</div>
              <div className={styles.studyOrganization}>
                <a
                  href="https://www.nmu.org.ua/ua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t('National Technical University `Dnipro Polytechnic`') || ''}
                >
                  {t('National Technical University `Dnipro Polytechnic`')}
                </a>
              </div>
              <div className={styles.studyDescription}>
                <span>{t('Specialization')}:</span> &quot;Information protection in computer systems
                and networks&quot;
              </div>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.title}>{t('Experience')}</h2>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>Full Stack {t('Developer')} (Laravel + VueJs)</h3>
              <div className={styles.experienceCompany}>{t('Freelance')}</div>
              <div>
                {t('Saas project for collecting and visualizing equipment data')}:
                <ul className={styles.checkedList}>
                  <li>{t('Debugged and resolved application issues')};</li>
                  <li>{t('Wrote phpunit tests with coverage report')};</li>
                  <li>
                    {t(
                      'Discussed project structure and DB design with the customer on a regular basis'
                    )}
                    ;
                  </li>
                  <li>{t('Communication with remote team')};</li>
                  <li>{t('Refactored existing codebase, applied best practices')};</li>
                </ul>
              </div>
              <div className={styles.techStack}>
                {t('Tech Stack')}: Laravel, VueJs, AWS, PostgreSQ
              </div>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>Senior Back-End {t('Developer')}, Tech Lead</h3>
              <div className={styles.experienceCompany}>{t('Large commercial bank')} (NDA)</div>
              <div>
                {t('Mortgage real estate revaluation project')}:
                <ul className={styles.checkedList}>
                  <li>{t('Application and database design')};</li>
                  <li>{t('Coordination of tasks with the customer and the team')};</li>
                  <li>{t('Decompose tasks for other team developers')};</li>
                  <li>{t('Wrote back-end code with PHPUnit tests coverage')}.</li>
                </ul>
              </div>
              <div className={styles.techStack}>
                {t('Tech Stack')}: Laravel, VueJs, PostgreSQL, ELK, MongoDb
              </div>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>Senior Full-Stack {t('Developer')}</h3>
              <div className={styles.experienceCompany}>{t('Big corporate client')}</div>
              <div>
                {t(
                  'VIP contact center project, interacting with various external APIs (financial, personal, legal, credit opportunities, opportunities in airports, and so on)'
                )}
                <ul className={styles.checkedList}>
                  <li>{t('Coordinated the technical specifications with the customer')};</li>
                  <li>{t('Drew up a logical and visual scheme of the application')};</li>
                  <li>{t('Work with user flow')}</li>
                  <li>
                    {t('Wrote back-end and front-end code, wrote base documentation for users')};
                  </li>
                  <li>{t('Interaction with the information security department')};</li>
                </ul>
              </div>
              <div className={styles.techStack}>
                {t('Tech Stack')}: Laravel, VueJs, Bootstrap 4, PostgreSQL, ELK, MongoDb
              </div>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>Frontend {t('Developer')}</h3>
              <div className={styles.experienceCompany}>&quot;Clockwise&quot;</div>
              <div>{t('Canadian mortgage broker')}</div>
              <div>{t('Tech Stack')}: Bootstrap 4, JavaScript, NodeJs, AWS, Zoho, Mailchimp</div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={` ${styles.title} ${styles.expectationsBorder} `}>
              <img
                  src="https://www.linkpicture.com/q/expectations.svg"
                  alt={t('My expectations for a new project') || ''}
                  className={` ${styles.logo} ${styles.textColorPrimaryMedium} `}
              />
              &nbsp;
              {t('My expectations for a new project')}
            </h2>
            <div className={styles.features}>
               <ul className={styles.checkedList}>
                <li>{t('Long term project')};</li>
                <li>{t('Teamwork')};</li>
                <li>Laravel + React + Typescript ({t('I will consider also other options')});</li>
              </ul>
            </div>
            <div className={styles.features}>
              <h3 className={styles.subTitle}>{t('The list of important for me first questions that I ask a recruiter')}:</h3>
              <ul className={styles.checkedList}>
                <li>{t('What is the composition of the team')}?</li>
                <li>{t('How is the communication in the team')}?</li>
                <li>{t('What technologies are used in the project')}?</li>
                <li>{t('What is the duration of the project')}?</li>
                <li>{t('What are your recruiting stages for this position')}?</li>
                <li>{t('What type of employment contract is planned')}?</li>
                <li>{t('What compensation package does someone in your company earn with experience like mine')}?</li>
              </ul>
            </div>
          </section>
            <a href="#top"  className={` ${styles.toTopBtnContainer} ${scrollDirection !== 'down' ? styles.hide : 'show'} `}>
              <div className={styles.arrow}></div>
            </a>
        </div>
      </main>
    </div>
  );
};
