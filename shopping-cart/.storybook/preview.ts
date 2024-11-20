import type { Preview } from "@storybook/react";
import 'bootstrap/dist/css/bootstrap.min.css';

process.env.REACT_APP_ENV = 'storybook';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: [
    'autodocs',
  ],
};

export default preview;
