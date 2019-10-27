import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js in `src/components`
configure(require.context('../src/components', true, /.+stories\.jsx?$/), module);
