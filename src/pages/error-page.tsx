import NavBar from "@/components/my-components/nav-bar";
import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom"


function ErrorPage() {
  const error = useRouteError;
  console.log(error)
  return (
    <>
    <NavBar/>
    <Box padding={10}>
      <Heading>Oooops...</Heading>
      <Text>{isRouteErrorResponse(error) ?   'something wrong': 'this page does not exist' }</Text>
    </Box>
    </>
  )
}

export default ErrorPage