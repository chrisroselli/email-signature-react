import { useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react'
import { DisplayIcon, LayoutIcon, PaintIcon, UploadIcon } from 'styles/theme'
import LayoutForm from './LayoutForm'
import DetailsForm from './DetailsForm'
import CustomizeForm from './CustomizeForm'
import UploadForm from './UploadForm'

  
const EmailSidebar = () => {
  const fillColor = useColorModeValue('blue.400', 'blue.700')
  const navColor = useColorModeValue('gray.200', 'gray.800')
  const bgMainColor = useColorModeValue('white', 'gray.500')
  const [layoutForm, setLayoutForm] = useState(true)
  const [detailsForm, setDetailsForm] = useState(false)
  const [customizeForm, setCustomizeForm] = useState(false)
  const [uploadForm, setUploadForm] = useState(false)

  const displayLayoutForm = () => {
    setLayoutForm(true)
    setDetailsForm(false)
    setCustomizeForm(false)
    setUploadForm(false)
  }
  const displayDetailsForm = () => {
    setDetailsForm(true)
    setLayoutForm(false)
    setCustomizeForm(false)
    setUploadForm(false)
  }
  const displayCustomizeForm = () => {
    setCustomizeForm(true)
    setLayoutForm(false)
    setDetailsForm(false)
    setUploadForm(false)
  }
  const displayUploadForm = () => {
    setUploadForm(true)
    setLayoutForm(false)
    setDetailsForm(false)
    setCustomizeForm(false)
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
    <>
      <Grid className="nav_grid" bg={bgMainColor}>
        <GridItem className={layoutForm ? "nav_grid_item active" : "nav_grid_item"} bg={navColor} _hover={{ bg: bgMainColor }} onClick={displayLayoutForm}>
          <LayoutIcon w="30px" h="30px" fill={fillColor} />
        </GridItem>
        <GridItem className={detailsForm ? "nav_grid_item active" : "nav_grid_item"} bg={navColor} _hover={{ bg: bgMainColor }} onClick={displayDetailsForm}>
          <DisplayIcon w="30px" h="30px" fill={fillColor} />
        </GridItem>
        <GridItem className={customizeForm ? "nav_grid_item active" : "nav_grid_item"} bg={navColor} _hover={{ bg: bgMainColor }} onClick={displayCustomizeForm}>
          <PaintIcon w="30px" h="30px" fill={fillColor} />
        </GridItem>
        <GridItem className={uploadForm ? "nav_grid_item active" : "nav_grid_item"} bg={navColor} _hover={{ bg: bgMainColor }} onClick={displayUploadForm}>
          <UploadIcon w="30px" h="30px" fill={fillColor} />
        </GridItem>
      </Grid>
      
      <Box h="calc(100% - 80px)" p="30px" overflowY="auto" bg={bgMainColor}>
        {layoutForm &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <LayoutForm />
          </motion.div>
        }
        {detailsForm &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <DetailsForm />
          </motion.div>
        }
        {customizeForm &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <CustomizeForm />
          </motion.div>
        }
        {uploadForm &&
          <motion.div
            initial="initial"
            animate="animate"
            transition={transition}
            variants={variants}
          >
            <UploadForm />
          </motion.div>
        }
      </Box>
    </>
  )

}

export default EmailSidebar