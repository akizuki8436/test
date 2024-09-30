import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { LanguageSelectorArrowIcon, LanguageSelectorGlobeIcon } from './../';
import { LanguageSelectorButton } from './Button';

const meta = {
  title: 'Component/LanguageSelector/Parts/Button',
  component: LanguageSelectorButton,
  tags: ['autodocs', '!dev'],
  parameters: {
    docs: {
      description: {
        component:
          'LanguageSelectorButton コンポーネントはランゲージセレクターのメニューを表示するトリガーのためのボタンとして使用します。\nLanguageSelectorGlobeIcon と LanguageSelectorArrowIcon を組み合わせて使用してください。',
      },
    },
  },
} satisfies Meta<typeof LanguageSelectorButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <LanguageSelectorGlobeIcon />
        Language
        <LanguageSelectorArrowIcon className='mt-0.5' />
      </>
    ),
    onClick: fn(),
  },
};
