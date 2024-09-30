import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelectorArrowIcon } from './ArrowIcon';

const meta = {
  title: 'Component/LanguageSelector/Parts/ArrowIcon',
  component: LanguageSelectorArrowIcon,
  tags: ['autodocs', '!dev'],
} satisfies Meta<typeof LanguageSelectorArrowIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {},
};
