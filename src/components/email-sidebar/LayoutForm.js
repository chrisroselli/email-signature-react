import React from 'react';
import { useContext } from 'react'
import EmailContext from 'context/templateContext'
import { Box, IconButton, Grid, GridItem, Heading, Text, Stack, Badge, Flex } from '@chakra-ui/react'

import template1IMG from 'assets/template-one-IMG.jpg'
import template2IMG from 'assets/template-two-IMG.jpg'
import template3IMG from 'assets/template-three-IMG.jpg'
import template4IMG from 'assets/template-four-IMG.jpg'

const LayoutForm = ({}) => {
  const emailCtx = useContext(EmailContext)

  return (
    <>
      <Heading as="h2" size="md">
        Select Your Layout
      </Heading>

      <Stack spacing="40px" p="40px 0">
        <Box>
          <Text fontSize="md" fontWeight="600" mb="10px">
            Template 1
          </Text>
          <Box onClick={() => emailCtx.fetchTemplateOneValue(true)} cursor="pointer">
            <img className={emailCtx.templateOneValue ? 'template__image click' : 'template__image'} src={template1IMG} width={260} height={140} alt="template 1" />
            <Flex className={emailCtx.templateOneValue ? 'template__badge click' : 'template__badge'}>
              <Badge colorScheme="green">Selected</Badge>
            </Flex>
          </Box>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="600" mb="10px">
            Template 2
          </Text>
          <Box onClick={() => emailCtx.fetchTemplateTwoValue(true)} cursor="pointer">
            <img className={emailCtx.templateTwoValue ? 'template__image click' : 'template__image'} src={template2IMG} width={260} height={177} alt="template 2" />
            <Flex className={emailCtx.templateTwoValue ? 'template__badge click' : 'template__badge'}>
              <Badge colorScheme="green">Selected</Badge>
            </Flex>
          </Box>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="600" mb="10px">
            Template 3
          </Text>
          <Box onClick={() => emailCtx.fetchTemplateThreeValue(true)} cursor="pointer">
            <img className="template__image" src={template3IMG} width={260} height={140} alt="template 3" />
            <Flex className={emailCtx.templateThreeValue ? 'template__badge click' : 'template__badge'}>
              <Badge colorScheme="green">Selected</Badge>
            </Flex>
          </Box>
        </Box>

        <Box>
          <Text fontSize="md" fontWeight="600" mb="10px">
            Template 4
          </Text>
          <Box onClick={() => emailCtx.fetchTemplateFourValue(true)} cursor="pointer">
            <img className="template__image" src={template4IMG} width={260} height={159} alt="template 4" />
            <Flex className={emailCtx.templateFourValue ? 'template__badge click' : 'template__badge'}>
              <Badge colorScheme="green">Selected</Badge>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </>
  )
}

export default LayoutForm
