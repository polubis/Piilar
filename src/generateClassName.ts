import { createGenerateClassName } from '@material-ui/core';

export const generateClassName = createGenerateClassName({
  disableGlobal: true,
  productionPrefix: '',
  seed: 'app'
});
