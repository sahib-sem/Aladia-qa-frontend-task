import type { Meta, StoryObj } from "@storybook/vue3";
import SignUpForm from "../../components/organisms/SignUPForm.vue";


const meta: Meta<typeof SignUpForm> = {
  title: "Organisms/SignUpForm",
  component: SignUpForm,
  tags: ["autodocs"],
  
};

export default meta;

type Story = StoryObj<typeof SignUpForm>;


export const DefaultSignUp: Story = {
  render: () => ({
    components: {SignUpForm},
    template: '<SignUpForm />',
  }),
};
