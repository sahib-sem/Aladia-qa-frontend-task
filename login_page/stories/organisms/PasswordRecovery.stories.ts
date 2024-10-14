import type { Meta, StoryObj } from '@storybook/vue3';
import PasswordRecovery from '../../components/organisms/PasswordRecovery.vue';

const meta: Meta<typeof PasswordRecovery> = {
  component: PasswordRecovery,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PasswordRecovery>;

export const Default: Story = {
  render: (args) => ({
    components: { PasswordRecovery }, 
    setup() {
      return { args };
    },
    template: '<PasswordRecovery v-bind="args" />',
  }),
  args: {
    email: 'user@example.com',
  },
};

export const PasswordSet: Story = {
  render: (args) => ({
    components: { PasswordRecovery }, 
    setup() {
      return { args };
    },
    template: '<PasswordRecovery v-bind="args" />',
  }),
  args: {
    email: 'user@example.com',
    showPasswordRecoverySection: false, 
  },
};
