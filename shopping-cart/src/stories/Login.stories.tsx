import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Login from '../pages/Login';
import authReducer from '../redux/slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

const meta: Meta<typeof Login> = {
  title: 'Pages/Login',
  component: Login,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
          # Login Page

          This is the Login page component.
          It is wrapped with Redux Provider and MemoryRouter for state management and routing.

          ## Usage

          \`\`\`jsx
          <Login />
          \`\`\`

          ## Props

          The Login component does not take any props.

          ## Redux State

          The component is connected to the Redux store with the \`auth\` slice.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {};
