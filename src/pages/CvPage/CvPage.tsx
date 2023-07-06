import React from 'react';
import styles from './Cv.module.scss';
import {useTranslation} from 'react-i18next';
import {Link} from "react-router-dom";
import {LangSwitcher} from "../../components/LangSwitcher/LangSwitcher";
import {useScrollDirection} from "../../hooks/layout";
import {ReactComponent as MailLogo} from '../../assets/svg/mail.svg';
import {ReactComponent as LinkedinLogo} from '../../assets/svg/linkedin.svg';
import {ReactComponent as PhoneLogo} from '../../assets/svg/phone.svg';
import {ReactComponent as GitHubLogo} from '../../assets/svg/github-square.svg';
import {FeaturesData_3, MarkInfo, StudyData_fe, StudyData_react} from "../../constants";
import {CardFeature} from "../../components/CardBlock/Card";

export const CvPage = () => {

    const scrollDirection = useScrollDirection();
    const {t} = useTranslation();

    return (
        <div>
            <header className={`${scrollDirection === 'down' ? styles.hide : 'show'}`}>
                <div className={styles.fioWrapper}>
                    <div className={styles.fioContainer}>
                        <h1 className={styles.cvTitle}>
                            {t('Mark Kulishov')}
                        </h1>
                        <div className={styles.cvSubtitle}>
                            Full Stack Developer | Laravel | ReactJs | VueJs | PHP
                        </div>
                        <div className={styles.cvSubtitle}>
                            {t('Poland, Warsawa')}
                        </div>
                        <div className={styles.socialContainer}>
                            <Link className={styles.social} to="mailto:mark.tabletpc@gmail.com">
                                <MailLogo className={styles.logo}/>
                            </Link>
                            <Link className={styles.social} to="https://linkedin.com/in/mark-kulishov-85140b1b5"
                                  target="_blank">
                                <LinkedinLogo className={styles.logo}/>
                            </Link>
                            <Link className={styles.social} to="https://github.com/MarkKulUa" target="_blank">
                                <GitHubLogo className={styles.logo}/>
                            </Link>
                            <Link className={styles.social} to="tel:+48604357902">
                                <PhoneLogo className={styles.logo}/>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.avatarContainer}>
                        <img className="vcard__avatar u-photo" src={MarkInfo.photo} alt={MarkInfo.name} />
                    </div>
                    <div className={styles.languageWrapper}>
                        <div className={styles.languageOwn}>
                            <div>{t('Language Capabilities')}:</div>
                            <div>{t('Ukrainian')} - {t('native')}, {t('English')} - B1, {t('Polish')} - A1</div>
                        </div>
                        <div className={styles.languageContainer}>
                            <LangSwitcher/>
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
                                <li>Proactive and motivated Full Stack Developer with technical
                                    education.
                                </li>
                                <li>I have a solid knowledge of PHP, Laravel, JavaScript, TypeScript, and Vue.js.</li>
                                <li>I'm constantly striving to learn new technologies and always do my best with every
                                    new challenge.
                                </li>
                                <li>Overall 10 years of work experience for top Ukrainian Bank, US and Canadian
                                    clients/companies, and Ukrainian private customers.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>{t('Hard Skills')}:</h3>
                            <ul className={styles.checkedList}>
                                <li>Follow best practices;</li>
                                <li>Strong organizational and problem-solving skills;</li>
                                <li>Great team-leading experience.</li>
                            </ul>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Soft Skills:</h3>
                            <ul className={styles.checkedList}>
                                <li>Reliability and responsibility;</li>
                                <li>Good communication skills;</li>
                                <li>Attention to detail.</li>
                            </ul>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Technical Skills:</h3>
                            <ul className={styles.checkedList}>
                                <li>Programming Languages: PHP, JavaScript/ES6, TypeScript</li>
                                <li>Back-end: Laravel, Lumen, Phpunit</li>
                                <li>Front-end: ReactJs, TypeScript, VueJs, Bootstrap, ES6, SCSS, Sass, React
                                    testing-library
                                </li>
                                <li>Database: PostgreSQL, MySQL, MongoDB, ElasticSearch</li>
                                <li>Tools: Jira, Trello, Miro, Slack, Git, Bitbucket, PHPStorm, Figma</li>
                                <li>PM Processes: Agile, Scrum</li>
                                <li>Other technologies: Zabbix, RabbitMq, ELK, Composer, Npm, Gulp, Webpack, Vite</li>
                            </ul>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Additional experience:</h3>
                            <ul className={styles.checkedList}>
                                <li>Graduated courses on Google advertising (Adwords)</li>
                                <li>SEO of site audits, semantic core, SEO articles</li>
                                <li>Huge SQL analytics for business customers</li>
                            </ul>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.title}>{t('Education')}</h2>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>
                                <img src="https://www.linkpicture.com/q/rs_img.png" alt="National Mining University"/>
                                React JS
                            </h3>
                            <div className={styles.studyPeriod}>
                                Mar 2023 - Jun 2023
                            </div>
                            <div className={styles.studyOrganization}>
                                <a href="https://rs.school/index.html" target="_blank" rel="noopener noreferrer" title="Rolling Scopes School">
                                    Rolling Scopes School
                                </a>
                                <span aria-hidden="true"> · </span>
                                <a href="https://github.com/rolling-scopes-school/tasks/blob/master/react/README.md" target="_blank" rel="noopener noreferrer" title="Study program">
                                    Study program
                                </a>
                            </div>
                            <div className={styles.studyDescription}>
                                <ul>
                                    <li>
                                        Final project deploy <a href="https://rs-graphiql-app.netlify.app" target="_blank" rel="noopener noreferrer" title="link">link</a>
                                    </li>
                                    <li>
                                        Certificate <a href="https://app.rs.school/certificate/lsw7hwal" target="_blank" rel="noopener noreferrer" title="link">link</a>
                                    </li>
                                    <li>The 28 challenging steps/tasks, 12-weeks ride, more than 10 coding projects.</li>
                                </ul>
                            </div>
                            <div className={styles.studySkills}>
                                <span>Skills</span>: React testing library · React Hooks · React Forms · GraphQl Api · Redux · SSR · SSG · React.js · REST APIs
                            </div>
                            <div className={styles.studyImg}>
                                {StudyData_react.map((item, i) => (
                                    <img  key={i} src={item.img} alt={item.name} />
                                ))}
                            </div>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>
                                <img src="https://www.linkpicture.com/q/rs_img.png" alt="National Mining University"/>
                                JS/Frontend Development Course
                            </h3>
                            <div className={styles.studyPeriod}>
                                Sep 2022 - Mar 2023
                            </div>
                            <div className={styles.studyOrganization}>
                                <a href="https://rs.school/index.html" target="_blank" rel="noopener noreferrer" title="Rolling Scopes School">
                                    Rolling Scopes School
                                </a>
                                <span aria-hidden="true"> · </span>
                                <a href="https://github.com/rolling-scopes-school/tasks/blob/master/stage2/README.md" target="_blank" rel="noopener noreferrer" title="Study program">
                                    Study program
                                </a>
                            </div>
                            <div className={styles.studyDescription}>
                                <ul>
                                    <li>
                                        Tasks project deploy <a href="https://deft-mooncake-b88ac0.netlify.app" target="_blank" rel="noopener noreferrer" title="link">link</a>
                                    </li>
                                    <li>
                                        Certificate <a href="https://app.rs.school/certificate/dk5lmpv5" target="_blank" rel="noopener noreferrer" title="link">link</a>
                                    </li>
                                    <li>The 63 challenging steps/tasks, 26-week ride, more than 10 coding projects, 3 tech interviews, tons of algorithmic tasks, and so much fun with a community of like-minded people!</li>
                                </ul>
                            </div>
                            <div className={styles.studySkills}>
                                <span>Skills</span>: Front-End Development · Vite · npm · SCSS · JSON · ESLint · Styled Components · Figma · Bash · ECMAScript · ES6 · GitHub · Jest · TypeScript · SASS · JavaScript · HTML · CSS · Webpack
                            </div>
                            <div className={styles.studyImg}>
                                {StudyData_fe.map((item, i) => (
                                    <img  key={i} src={item.img} alt={item.name} />
                                ))}
                            </div>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>
                                <img src="https://www.linkpicture.com/q/ld_3.png" alt="National Mining University"/>
                                Laravel Courses
                            </h3>
                            <div className={styles.studyPeriod}>
                                Issued Aug 2022
                            </div>
                            <div className={styles.studyOrganization}>
                                <a href="https://laraveldaily.teachable.com/" target="_blank" rel="noopener noreferrer" title="Rolling Scopes School">
                                    LaravelDaily Courses
                                </a>
                            </div>
                            <div className={styles.studyDescription}>
                                <ul>
                                    <li>"SOLID Code in Laravel"</li>
                                    <li>"PhpUnit in Laravel"</li>
                                    <li>"Queues in Laravel"</li>
                                </ul>
                            </div>
                            <div className={styles.studySkills}>
                                <span>Skills</span>: Full-Stack Development • Laravel • React.js • TypeScript • ESLint • SQL • PHPUnit • JavaScript
                                • Scrum • SOLID Design Principles
                            </div>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>
                                <img src="https://www.linkpicture.com/q/nmu.jpeg" alt="National Mining University"/>
                                Bachelor's and Engineer's Degree, Information Technology
                            </h3>
                            <div className={styles.studyPeriod}>
                                Sep 2001 - May 2006
                            </div>
                            <div className={styles.studyOrganization}>
                                <a href="https://www.nmu.org.ua/ua/" target="_blank" rel="noopener noreferrer" title="Rolling Scopes School">
                                    National Technical University "Dnipro Polytechnic"
                                </a>
                            </div>
                            <div className={styles.studyDescription}>
                               <span>Specialization:</span> "Information protection in computer systems and networks"
                            </div>
                        </div>
                    </section>
                    <section className={styles.section}>
                        <h2 className={styles.title}>{t('Experience')}</h2>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Full Stack Developer (Laravel + VueJs)</h3>
                            <div className={styles.experienceCompany}>Freelance</div>
                            <div>Saas project for collecting and visualizing equipment data:
                                <ul className={styles.checkedList}>
                                    <li>Debugged and resolved application issues;</li>
                                    <li>Wrote phpunit tests with coverage report;</li>
                                    <li>Discussed project structure and DB design with the customer on a regular
                                        basis;
                                    </li>
                                    <li>Communication with remote team;</li>
                                    <li>Refactored existing codebase, applied best practices;</li>
                                </ul>
                            </div>
                            <div>Tech Stack: Laravel, VueJs, AWS, PostgreSQ</div>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Senior Back-End Developer, Tech Lead</h3>
                            <div className={styles.experienceCompany}>Large commercial bank</div>
                            <div>Mortgage real estate revaluation project:
                                <ul className={styles.checkedList}>
                                    <li>Application and database design;</li>
                                    <li>Coordination of tasks with the customer and the team;</li>
                                    <li>Decompose tasks for other team developers;</li>
                                    <li>Wrote back-end code with PHPUnit tests coverage.</li>
                                </ul>
                            </div>
                            <div>Tech Stack: Laravel, VueJs, PostgreSQL, ELK, MongoDb</div>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Senior Full-Stack Developer</h3>
                            <div className={styles.experienceCompany}>Big corporate client</div>
                            <div>VIP contact center project, interacting with various external APIs
                                (financial, personal, legal, credit opportunities, opportunities in airports, and so on)
                                <ul className={styles.checkedList}>
                                    <li>Coordinated the technical specifications with the customer;</li>
                                    <li>Drew up a logical and visual scheme of the application;</li>
                                    <li>Work with user flow</li>
                                    <li>Wrote back-end and front-end code, wrote base documentation for users;</li>
                                    <li>Interaction with the information security department;</li>
                                </ul>
                            </div>
                            <div>Tech Stack: Laravel, VueJs, Bootstrap 4, PostgreSQL, ELK, MongoDb</div>
                        </div>
                        <div className={styles.features}>
                            <h3 className={styles.subTitle}>Frontend Developer</h3>
                            <div className={styles.experienceCompany}>"Clockwise"</div>
                            <div>Canadian mortgage broker
                            </div>
                            <div>Tech Stack: Bootstrap 4, JavaScript, NodeJs, AWS, Zoho, Mailchimp</div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};
