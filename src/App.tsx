import { Box } from '@chakra-ui/react'
import './App.css'
import Routes from './routes/Routes'
import NavigationLayout from './templates/NavigationLayout'

function App() {
  return (
    <NavigationLayout>
      <Box marginLeft={'10rem'} paddingRight={'.35rem'} mt={'20'}>
        <Routes />
      </Box>
    </NavigationLayout>
  )
}

export default App
