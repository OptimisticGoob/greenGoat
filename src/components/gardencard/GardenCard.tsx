import { Card, CardHeader, CardBody, CardFooter, Box, Stack, Text, Heading, StackDivider } from '@chakra-ui/react'

const GardenCard = () => {
    return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        bg='grey'
        width='200px'
        height='100px'
        margin='10px'
        >
           <Stack >
            
           </Stack>

           <Stack >
            <CardBody>
            <Heading size='md'>Named Garden</Heading>
            </CardBody>   
           </Stack>
        
        </Card>
    )
}

export { GardenCard }

