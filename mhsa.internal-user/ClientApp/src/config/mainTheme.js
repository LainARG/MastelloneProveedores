import { createMuiTheme } from '@material-ui/core'

const createMainTheme = () => {

  const palette = {
    primary: {
      main: '#009639',
    },
    secondary: {
      main: '#E3061F'
    },
    background: {
      default: '#FFF'
    },
    disabled: {
      main: '#EEEEEF'
    },
  }

  const overrides = {
    MuiAppBar:{
      root:{
        width: '100%',
      }
    },
    MuiTabs: {
      indicator: {
        top:0,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "1.6rem",
        backgroundColor: palette.disabled.main,
      },
    },
  }

  const theme = createMuiTheme({
    palette,
    overrides
  })

  return theme
}


export default createMainTheme