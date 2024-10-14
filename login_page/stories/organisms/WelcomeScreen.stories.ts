import type { Meta, StoryObj } from '@storybook/vue3';
import WelcomeScreen from '../../components/organisms/WelcomeScreen.vue';

// Define the meta export
const meta: Meta<typeof WelcomeScreen> = {
  title: 'Organisms/WelcomeScreen',
  component: WelcomeScreen,
  tags: ['autodocs'],

};

// Default export for story
export default meta;

type Story = StoryObj<typeof WelcomeScreen>;

//👇 Default story for the WelcomeScreen component
export const DefaultWelcome: Story = {
  render: () => ({
    components: { WelcomeScreen },
    template: '<WelcomeScreen />',
  }),
};
