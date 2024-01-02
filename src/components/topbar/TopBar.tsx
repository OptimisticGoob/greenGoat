import { Card, CardBody, Text, Heading, Flex, Spacer, Input, Box} from '@chakra-ui/react'

const TopBar = () => {
    return (

        <>
            <Heading as='h2' size='3xl' paddingTop= '30px'> GreenGoat </Heading>
            <Box padding= '30px'>
                    <Flex>
                    <Heading as='h3' size='2xl' > Home </Heading>
                    <Spacer />
                    <Input width = '50' placeholder='' />
                    </Flex>
            </Box>

        </>
    )
}

export { TopBar }