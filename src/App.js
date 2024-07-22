import React from 'react';
import { useState } from 'react'
import { motion } from 'framer-motion'
import { EmailContextProvider } from 'context/templateContext'
import { DetailsContextProvider } from 'context/detailsContext'
import { CustomizeContextProvider } from 'context/customizeContext'
import { UploadContextProvider } from 'context/uploadContext'
import Navbar from 'components/Navbar';
import EmailSidebar from 'components/email-sidebar/EmailSidebar'
import EmailTemplates from 'components/email-templates'
import CreateSignatureButton from 'components/email-sidebar/CreateSignatureButton'
import ClearFieldsButton from 'components/email-sidebar/ClearFieldsButton'
import CreateSignatureSidebar from 'components/email-sidebar/CreateSignatureSidebar'
import {
  ChakraProvider,
  Box,
  Grid,
  GridItem,
  theme,
  Text
} from '@chakra-ui/react';

import 'styles/app.css'

function App() {
  const [createSig, setCreateSig] = useState(false)

  const handleCreateSignature = (value) => {
    setCreateSig(value)
  }

  const handleEditSignature = (value) => {
    setCreateSig(value)
  }

  const handleClearFields = (value) => {
    setCreateSig(value)
  }
  
  const variants = {
    initial: {
      opacity: 0,
      x: '-100%'
    },
    animate: {
      opacity: 1,
      x: '0'
    }
  }

  const transition = {
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <ChakraProvider theme={theme}>
      <EmailContextProvider>
        <DetailsContextProvider>
          <CustomizeContextProvider>
            <UploadContextProvider>

              <Box w="100%" h="100%" display="flex" flexDirection="column">
                <Navbar />
                <Box as="main" w="100%" h={{ lg: "calc(100vh - 60px)" }}>
                  <Grid h="100%" templateColumns={{ base: '1fr', lg: "320px auto", xl: "380px auto" }}>
                    <GridItem as="aside" borderRight="1px solid #BBB" overflow="hidden">
                      {createSig ?
                          <motion.div
                            initial="initial"
                            animate="animate"
                            transition={transition}
                            variants={variants}
                        >
                          <CreateSignatureSidebar handleClick={(value) => handleEditSignature(value)} />
                        </motion.div>
                      :
                        <EmailSidebar />
                      }
                    </GridItem>

                    <GridItem as="section" display="flex" flexDirection="column">
                      <Box w="100%" h="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="40px" px={2}>
                        <EmailTemplates />
                        <CreateSignatureButton handleClick={(value) => handleCreateSignature(value)} />
                      </Box>
                      <ClearFieldsButton handleClick={(value) => handleClearFields(value)} />
                    </GridItem>
                  </Grid>
                </Box>
              </Box>

              <Text fontSize="xs" position={{ lg: "absolute" }} bottom={{ lg: "10px" }} right={{ lg: "10px" }} m={{ base: '10px', lg: '0'}}>© {new Date().getFullYear()} {' '}
                <a href="https://www.treehousemarketing.com" target="_blank">
                  Treehouse Marketing
                </a></Text>

            </UploadContextProvider>
          </CustomizeContextProvider>
        </DetailsContextProvider>
      </EmailContextProvider>
    </ChakraProvider>
  );
}

export default App;
