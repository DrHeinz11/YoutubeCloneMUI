import NewSidebar from '../components/newSidebar/NewSidebar'
import { Heading } from '@chakra-ui/react'

interface paramsProps {
  params: { id: string }
}

export const Prueba = ({ params }: paramsProps): JSX.Element => {
  // const route = useRouter()
  return (
    <>
      <Heading>{JSON.stringify(params.id)}</Heading>
      <NewSidebar />
    </>
  )
}
