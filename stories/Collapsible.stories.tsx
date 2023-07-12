import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Collapsible, CollapsibleProps } from '../src';

const meta: Meta = {
  title: 'Collapsible',
  component: Collapsible,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: StoryFn<CollapsibleProps> = args => <Collapsible {...args} />;

export const Default = Template.bind({});

Default.args = {};

{
  /* <Collapsible
title="My Collapsible"
children={
  <div style={{ padding: "10px" }}>
    <h2>Title 1</h2>
    <p>Content 1</p>
  </div>}
/> */
}
