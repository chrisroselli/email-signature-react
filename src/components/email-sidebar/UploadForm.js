import { useState } from "react"
import { useContext } from 'react'
import { Heading, FormControl, Stack, FormLabel, Alert, AlertIcon, Input, Flex, Button } from '@chakra-ui/react'
import UploadContext from 'context/uploadContext'


const UploadForm = ({ }) => {
  const ctx = useContext(UploadContext)
  const logoURL = ctx.logoURLValue
  
  return (
    <>
      <Heading as="h2" size="md">
        Upload Your Signature Images
      </Heading>

      <Stack spacing={8} p="40px 0">
        <FormControl>
          <FormLabel htmlFor="url" mb="0">
            Company logo URL
          </FormLabel>
          <Input id="url" flex="1" type="text" variant="flushed" placeholder="https://example.com/image.jpg" value={logoURL} onChange={(e) => ctx.fetchLogoURL(e.target.value)} />
        </FormControl>

        <Flex flexDirection="column">
          <Stack spacing={6}>
            <Alert status="error">
              If you do not have a URL for your logo, go to your company website, find the logo and 'right-click' on the image.
              Select 'Copy image address', then go back to the 'Company logo URL' field and 'right-click' on it and select 'paste'.
              The 'Company logo URL' field should now be popualted with the copied image URL.
            </Alert>
          </Stack>
        </Flex>
      </Stack>
    </>
  )
}

export default UploadForm
