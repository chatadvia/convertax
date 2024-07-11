import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import InvestmentList from './index';

export default {
  title: 'Components/InvestmentList',
  component: InvestmentList,
} as Meta<typeof InvestmentList>;

const Template: StoryFn<typeof InvestmentList> = (args) => <InvestmentList {...args} />;

export const Default = Template.bind({});
Default.args = {};
