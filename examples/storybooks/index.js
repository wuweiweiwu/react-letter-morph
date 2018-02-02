/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import styles from './generic.scss';
import { handleClick, SANDBOX_URL } from './sandbox-utils';

import BasicMorph from './basic';
import ColorMorph from './color';
import FontSizeMorph from './font-size';
import LineWidthMorph from './line-width';
import PeriodMorph from './period';
import SpeedMorph from './speed';
import FontMorph from './font-url';

const wrapWithSource = (node, src) => (
  <div>
    {node}

    <br />
    <form id="codesandbox-form" action={SANDBOX_URL} method="POST">
      <input id="codesandbox-parameters" type="hidden" name="parameters" />
    </form>
    <button className={styles.sandboxButton} onClick={handleClick(src)}>
      PLAY WITH THIS CODE →
    </button>
    <a
      href={`https://github.com/wuweiweiwu/react-isometric-grid/blob/master/examples/storybooks/${src}`}
      target="_top"
      rel="noopener noreferrer"
      className={styles.sourceLink}
    >
      VIEW SOURCE →
    </a>
  </div>
);

storiesOf('Basics', module)
  .add(
    'Basic Morph',
    withNotes('A basic morph illustrating core functionality')(() =>
      wrapWithSource(<BasicMorph />, 'basic.js')
    )
  )
  .add(
    'Morph colors',
    withNotes('Default is black. The colors are rotated in order')(() =>
      wrapWithSource(<ColorMorph />, 'color.js')
    )
  )
  .add(
    'Morph fontSize',
    withNotes('Illustrating fontSize from 50px -> 200px')(() =>
      wrapWithSource(<FontSizeMorph />, 'font-size.js')
    )
  )
  .add(
    'Morph lineWidth',
    withNotes('Illustrating lineWidth from .5 -> 10')(() =>
      wrapWithSource(<LineWidthMorph />, 'line-width.js')
    )
  )
  .add(
    'Morph period',
    withNotes('Illustrating how period affects word transitions 0.1 -> 5')(() =>
      wrapWithSource(<PeriodMorph />, 'period.js')
    )
  )
  .add(
    'Morph speed',
    withNotes('Illustrating how speed affects color transitions 2 -> 20')(() =>
      wrapWithSource(<SpeedMorph />, 'speed.js')
    )
  )
  .add(
    'Different fontUrl',
    withNotes('Illustrating different fonts')(() =>
      wrapWithSource(<FontMorph />, 'font-url.js')
    )
  );
