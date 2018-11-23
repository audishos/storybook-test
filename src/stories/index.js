import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import { withInfo } from '@storybook/addon-info';

import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs';

import Input from '../Input';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Input', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .addParameters({info: { inline: true, header: true }})
  .add('test', () => {
    const backgroundColor = select('Background Color', {
      None: null,
      Red: 'red',
      Grey: '#dedede',
    });
    return <Input backgroundColor={backgroundColor} />
});
