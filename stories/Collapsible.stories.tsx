import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Collapsible, { CollapsibleProps } from '../src';

const InnerComponent: React.FC = () => {
  return (
    <div
      style={{
        padding: '10px',
        fontFamily: 'sans-serif',
        backgroundColor: 'rgba(230, 232, 255, 0.281)',
      }}
    >
      <h2>Title 1</h2>
      <p>Content 1</p>
    </div>
  );
};

const meta: Meta = {
  title: 'Collapsible',
  component: Collapsible,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    style: {
      control: { type: 'text' },
    },
    customTrigger: { type: 'function' },
  },
};

export default meta;

const Template: StoryFn<CollapsibleProps> = () => (
  <Collapsible title="My Collapsible" children={<InnerComponent />} />
);

export const Default = Template.bind({});

Default.args = {};
