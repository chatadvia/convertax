import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InvestmentForm from './index';

export default {
  title: 'Components/InvestmentForm',
  component: InvestmentForm,
} as Meta<typeof InvestmentForm>;

const Template: StoryFn<typeof InvestmentForm> = (args) => <InvestmentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
