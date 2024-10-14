import type { Meta, StoryObj } from "@storybook/vue3";
import SocialLoginButtons from "../../components/molecules/SocialLoginButtons.vue";

const meta: Meta<typeof SocialLoginButtons> = {
  component: SocialLoginButtons,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" }, 
  },
};


export default meta;
type Story = StoryObj<typeof SocialLoginButtons>;


export const Default: Story = {
  render: () => ({
    components: { SocialLoginButtons },

    template: '<SocialLoginButtons v-bind="args" />',
  }),
};
