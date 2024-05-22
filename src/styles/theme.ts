// 1. Import the extendTheme function
import { ThemeConfig, extendTheme } from '@chakra-ui/react'
import { ButtonStyle, Container } from './components'
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
}
// const colors = {
//   palette: {
//     mainDarkBlue: '#121220',
//     mainCyan: '#94E4E2',
//     primaryViolet: '#26263D',
//     secondaryPurple: '#6F5BC6',
//     grayText: '#838383',
//     whiteText: '#FFFFFF',
//     sectionAbout: '#1A1A2A',
//     background: '#ececec',
//     cardBackground: '#fff',
//     buttonBackground: '#f3f3f3'
//   }
// }

const colors = {
  background: '#131313',
  secondary: '#262c3c',
  text: {
    primary: '#fff',
    secondary: '#d8d8d8',
    tertiary: '#838383'
  }
}

const theme = extendTheme({
  colors,
  components: { Container, ButtonStyle },
  fonts: {
    heading: `'CabinetGrotesk-Extrabold', sans-serif`,
    body: `'Satoshi-Medium', sans-serif`
  },
  config
})

export default theme
