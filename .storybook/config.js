import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.(j|t)sx in `src/components`
configure(require.context('../src/components', true, /.+stories\.(j|t)sx?$/), module);
