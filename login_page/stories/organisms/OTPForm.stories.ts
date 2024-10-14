import type { Meta, StoryObj } from "@storybook/vue3";
import OTPForm from "../../components/organisms/OTPForm.vue";

const meta: Meta<typeof OTPForm> = {
  title: "Organisms/OTPForm",
  component: OTPForm,
  tags: ["autodocs"],
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export default meta;

type Story = StoryObj<typeof OTPForm>;

export const Default: Story = {
  render: (args) => ({
    components: { OTPForm },

    template: '<OTPForm v-bind="args" />',
  }),
};
