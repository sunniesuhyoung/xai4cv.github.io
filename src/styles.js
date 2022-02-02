// Copyright (c) Facebook, Inc. and its affiliates.
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#9ccc65',
        main: '#3b4252',
        dark: '#33691e',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
    typography: {
      useNextVariants: true,
    },
  });
export default theme;