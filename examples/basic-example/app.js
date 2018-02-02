/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import LetterMorph from '../../src';

import styles from './stylesheets/app.scss';
import '../shared/favicon/favicon.ico';

class App extends Component {
  render() {
    const projectName = 'React Letter Morph';
    const authorName = 'Wei-Wei Wu';
    const authorUrl = 'https://github.com/wuweiweiwu';
    const githubUrl = 'https://github.com/wuweiweiwu/react-letter-morph';

    return (
      <div>
        <section className={styles['page-header']}>
          <h1 className={styles['project-name']}>{projectName}</h1>

          <h2 className={styles['project-tagline']}>
            React component to display letter morphs like the Google I/O 2016{' '}
            <a href="https://events.google.com/io2016/">website</a>
          </h2>
        </section>
        <section className={styles['main-content']}>
          <h3>Demo</h3>
          <div style={{ height: '200px', textAlign: 'center' }}>
            <LetterMorph
              words={[
                '19:35:02',
                '19:35:03',
                '15:35:04',
                '19:35:05',
                '19:35:06',
                '14:35:07',
                '19:35:08',
                '19:35:09',
                '19:35:10',
                '18:35:11',
                '19:35:12',
                '19:35:13',
                '19:35:14',
                '09:35:15',
                '19:35:16',
                '19:35:99',
                '19:33:06',
                '19:35:07',
                '29:25:08',
                '19:35:09',
                '59:35:10',
                '19:55:11',
                '19:69:12',
                '19:35:83',
              ]}
              height={300}
              width={1000}
              colors={['#ff0000', '#53c93f', '#5c89ff', '#cd7dff']}
            />
          </div>
          <a href={githubUrl}>Documentation on Github</a>
          <br />
          <a href="storybook/index.html">More examples on Storybook</a>
          <footer className={styles['site-footer']}>
            <span className={styles['site-footer-owner']}>
              <a href={githubUrl}>{projectName}</a> is maintained by{' '}
              <a href={authorUrl}>{authorName}</a>.
            </span>

            <span className={styles['site-footer-credits']}>
              This page was generated by{' '}
              <a href="https://pages.github.com">GitHub Pages</a> using the{' '}
              <a href="https://github.com/jasonlong/cayman-theme">
                Cayman theme
              </a>{' '}
              by <a href="https://twitter.com/jasonlong">Jason Long</a>.
            </span>
          </footer>
        </section>

        <a href={githubUrl}>
          <img
            style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          />
        </a>
      </div>
    );
  }
}

export default App;
