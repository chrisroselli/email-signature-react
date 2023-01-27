import React from 'react';
import { Box, Heading } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import { GitHubIcon } from 'styles/theme';

const Navbar = () => {
  
  return (
    <>
      <Box
        as="header"
        pos="relative"
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        height={{ base: '90px', lg: "60px" }}
        p={{ base: "10px", lg: "10px 30px" }}
        borderBottom="1px solid #BBB"
      >
        <a href="/">
          <Heading as="h1" fontSize="xl">Email Signature Generator | Web App</Heading>
        </a>
        <Box>
          <a href="https://github.com/robbiecren07/email-signature-react" target="_blank" rel="noreferrer">
            <Icon as={GitHubIcon} w={6} h={6} mr="20px" />
          </a>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Box>
      </Box>
    </>
  )

}

export default Navbar