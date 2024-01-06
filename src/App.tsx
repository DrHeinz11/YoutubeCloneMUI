import { useColorMode } from '@chakra-ui/react'
import './App.css'
import Routes from './routes/Routes'
import NavigationLayout from './templates/NavigationLayout'

function App() {
  const { setColorMode } = useColorMode()
  setColorMode('dark')
  return (
    <NavigationLayout>
      <Routes />
    </NavigationLayout>
  )
}

export default App
