import type { Meta, StoryObj } from '@storybook/vue3';
import LoginForm from '../../components/organisms/LoginForm.vue';


const meta: Meta<typeof LoginForm> = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'dark' }, 
  },
};


export default meta;

type Story = StoryObj<typeof LoginForm>;

export const EmailForm: Story = {
  render: (args) => ({
    components: { LoginForm },
    setup() {
      return { args };
    },
    template: '<LoginForm v-bind="args" />',
  }),
  args: {
    isPasswordField: false
  },
};


export const PasswordForm: Story = {
  render: (args) => ({
    components: { LoginForm },
    setup() {
      return { args };
    },
    template: '<LoginForm v-bind="args" />',
  }),
  args: {
    isPasswordField: true,
  },
};
