import { useColorMode } from '@chakra-ui/react'
import './App.css'
import Routes from './routes/Routes'
import NavigationLayout from './template/NavigationLayout'
import { useEffect } from 'react'

function App() {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    setColorMode('dark')
  }, [setColorMode])

  return (
    <NavigationLayout>
      <Routes />
    </NavigationLayout>
  )
}

export default App
