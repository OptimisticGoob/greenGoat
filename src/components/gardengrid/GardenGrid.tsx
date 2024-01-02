import { SimpleGrid, Box, Card, Center, Button, Text } from '@chakra-ui/react'
import { GardenCard } from '../gardencard/GardenCard'


const GardenGrid = () => {

  return (
    <Center>
    <Card width='500px' padding='20px'>

    <Text fontSize='4xl'>Your Smart Gardens</Text>
    <SimpleGrid columns={2} >
    <GardenCard />
    <GardenCard />
    <GardenCard />
    <GardenCard />
    <GardenCard />
    <GardenCard />
    
    </SimpleGrid>

    <Button margin ='20px' >Add Garden</Button>
    </Card>
    </Center>
  )
}

export { GardenGrid }