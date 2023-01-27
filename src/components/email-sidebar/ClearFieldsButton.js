import { useContext } from 'react'
import DetailsContext from 'context/detailsContext'
import CustomizeContext from 'context/customizeContext'
import UploadContext from 'context/uploadContext'
import { Button, Flex } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

const ClearFieldsButton = ({ handleClick }) => {
  const detailsCTX = useContext(DetailsContext)
  const customizeCTX = useContext(CustomizeContext)
  const uploadCTX = useContext(UploadContext)

  const handleClearFields = () => {
    detailsCTX.clearDetailFields()
    customizeCTX.clearCustomizeFields()
    uploadCTX.clearLogoURL()
    handleClick(false)
  }

  return (
    <Flex position={{ lg: "absolute" }} bottom={{ lg: "20px" }} left={{ lg: "20px" }} m={{base: '20px', lg: '0'}}>
      <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="solid" onClick={() => handleClearFields()}>
        Clear all fields
      </Button>
    </Flex>
  )
}

export default ClearFieldsButton