import { useContext } from 'react'
import EmailContext from 'context/templateContext'
import PreviewContainer from './PreviewContainer'
import TemplateOne from './TemplateOne'
import TemplateTwo from './TemplateTwo'
import TemplateThree from './TemplateThree'
import TemplateFour from './TemplateFour'

const EmailTemplates = () => {

  const emailCtx = useContext(EmailContext)

  return (
    <PreviewContainer>
      <div id="email-signature">
        {emailCtx.templateOneValue && <TemplateOne />}
        {emailCtx.templateTwoValue && <TemplateTwo />}
        {emailCtx.templateThreeValue && <TemplateThree />}
        {emailCtx.templateFourValue && <TemplateFour />}
      </div>
    </PreviewContainer>
  )

}

export default EmailTemplates