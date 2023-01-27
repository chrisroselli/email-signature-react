import { useContext, useEffect, useState } from 'react'
import DetailsContext from 'context/detailsContext'
import EmptyTemplateThree from './EmptyTemplateThree'
import CustomizeContext from 'context/customizeContext'
import UploadContext from 'context/uploadContext'

const TemplateThree = () => {
  const [userTyped, setUserTyped] = useState(false)

  const ctx = useContext(DetailsContext)
  const detailsCTX = useContext(CustomizeContext)
  const uploadCTX = useContext(UploadContext)

  const name = ctx.nameValue
  const title = ctx.titleValue
  const company = ctx.companyNameValue
  const officeNumber = ctx.officeNumberValue
  const website = ctx.websiteValue
  const email = ctx.emailValue
  const address = ctx.addressValue
  const contactIcons = ctx.contactIconsValue
  const socialIcons = ctx.socialIconsValue
  const linkedin = ctx.linkedinValue
  const facebook = ctx.facebookValue
  const instagram = ctx.instagramValue
  const twitter = ctx.twitterValue
  const customField = ctx.customFieldValue
  const setFontFamily = detailsCTX.fontValue
  const setThemeColor = detailsCTX.themeColorValue
  const setFontColor = detailsCTX.textColorValue
  const setIconColor = detailsCTX.linkColorValue
  const headingFontSize = detailsCTX.fontSizeValue.heading
  const subHeadingFontSize = detailsCTX.fontSizeValue.subhead
  const subLineHeight = detailsCTX.fontSizeValue.lineheight
  const imageURL = uploadCTX.logoURLValue

  useEffect(() => {
    if (name.length > 0) {
      setUserTyped(true)
    } else {
      setUserTyped(false)
    }
  }, [name])

  const mainStyle={
    borderCollapse: 'collapse',
    color: setFontColor,
    fontFamily: setFontFamily,
    border: '0px',
    verticalAlign: '-webkit-baseline-middle',
  }
  
  return (
    <>
    {userTyped === true ? (
      <>
        <table cellPadding="0" cellSpacing="0" style={mainStyle}>
          <tbody>
            <tr>
              <td>
                <table cellPadding="0" cellSpacing="0" style={mainStyle}>
                  <tbody>
                    <tr>
                      <td style={{ verticalAlign: 'middle' }}>
                        <h3 style={{ margin: '0px', color: setFontColor, fontSize: headingFontSize, fontFamily: setFontFamily, fontWeight: 'bold', border: '0px' }}>{name}</h3>
                        <p id="job_title" style={{ margin: '0px', color: setFontColor, fontSize: subHeadingFontSize, fontFamily: setFontFamily, lineHeight: subLineHeight, border: '0px' }}>
                          {title}
                        </p>
                        <p
                          id="company_name"
                          style={{
                            margin: '0px',
                            fontWeight: '500',
                            color: setFontColor,
                            fontSize: subHeadingFontSize,
                            fontFamily: setFontFamily,
                            lineHeight: subLineHeight,
                            border: '0px'
                          }}
                        >
                          {company}
                        </p>
                        {customField.length !== 0 ? (
                          <p
                            id="custom_field"
                            style={{
                              margin: '0px',
                              fontWeight: '500',
                              color: setFontColor,
                              fontSize: subHeadingFontSize,
                              fontFamily: setFontFamily,
                              lineHeight: subLineHeight,
                              border: '0px'
                            }}
                          >
                            {customField}
                          </p>
                        ) : (
                          ''
                        )}
                      </td>
                      <td width="30" style={{ border: '0px' }}></td>
                      <td width="1" height="100" style={{ width: '1px', height: '100%', borderTop: '0', borderBottom: '0', borderRight: '0', borderLeft: '1px solid', borderLeftColor: '#6D7FE2' }}></td>
                      <td width="30" style={{ border: '0px' }}></td>
                      <td style={{ verticalAlign: 'middle' }}>
                        <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: 'Arial', textAlign: 'left', border: '0px' }}>
                          <tbody>
                            {officeNumber.length !== 0 ? (
                              <>
                                <tr height="24" style={{ verticalAlign: 'middle' }}>
                                  {contactIcons === true && officeNumber.length !== 0 ? (
                                    <td align="left" width="24" style={{ verticalAlign: 'middle', border: '0px' }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', border: '0px' }}>
                                        <tbody>
                                          <tr>
                                            <td align="center" style={{ verticalAlign: 'bottom', border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                              <span width="14" style={{ width: '13px', display: 'block', backgroundColor: setThemeColor, border: '0px' }}>
                                                <img
                                                  width="13"
                                                  style={{ display: 'block' }}
                                                  className="image-theme company_number_img"
                                                    src="https://threshmedia.com/wp-content/uploads/2021/12/phone-icon-2x.png"
                                                    alt="phone icon"
                                                />
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  ) : (
                                    <td width="10" style={{ border: '0px' }}></td>
                                  )}
                                  <td style={{ verticalAlign: 'middle', border: '0px' }}>
                                    <a className="company_number" href={'tel:' + officeNumber} style={{ textDecoration: 'none', color: setFontColor, fontSize: '12px', lineHeight: '20px', border: '0px' }}>
                                      {officeNumber}
                                    </a>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ''
                            )}

                            {email.length !== 0 ? (
                              <>
                                <tr height="24" style={{ verticalAlign: 'middle' }}>
                                  {contactIcons === true && email.length !== 0 ? (
                                    <td align="left" width="24" style={{ verticalAlign: 'middle', border: '0px' }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: setFontFamily, border: '0px' }}>
                                        <tbody>
                                          <tr>
                                            <td align="center" style={{ verticalAlign: 'bottom', border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                              <span width="11" style={{ display: 'block', backgroundColor: setThemeColor, border: '0px' }}>
                                                <img id="email_icon" width="13" style={{ display: 'block', border: '0px' }} src="https://threshmedia.com/wp-content/uploads/2021/12/email-icon-2x.png" alt="email icon" />
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  ) : (
                                    <td width="10" style={{ border: '0px' }}></td>
                                  )}
                                  <td style={{ border: '0px' }}>
                                    <a
                                      id="personal_email"
                                      href={'mailto:' + email}
                                      style={{ textDecoration: 'none', color: setFontColor, fontSize: '12px', fontFamily: setFontFamily, lineHeight: '20px', border: '0px' }}
                                    >
                                      {email}
                                    </a>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ''
                            )}

                            {website.length !== 0 ? (
                              <>
                                <tr height="24" style={{ verticalAlign: 'middle' }}>
                                  {contactIcons === true && website.length !== 0 ? (
                                    <td align="left" width="24" style={{ verticalAlign: 'middle', border: '0px' }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: setFontFamily, border: '0px' }}>
                                        <tbody>
                                          <tr>
                                            <td align="center" style={{ verticalAlign: 'bottom', border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                              <span width="11" style={{ display: 'block', backgroundColor: setThemeColor, border: '0px' }}>
                                                <img id="website_icon" width="13" style={{ display: 'block', border: '0px' }} src="https://threshmedia.com/wp-content/uploads/2021/12/link-icon-2x.png" alt="website icon" />
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  ) : (
                                    <td width="10"></td>
                                  )}
                                  <td style={{ border: '0px' }}>
                                    <a
                                      id="website_url"
                                      target="_blank" rel="noreferrer" 
                                      href={website}
                                      style={{ textDecoration: 'none', color: setFontColor, fontSize: '12px', fontFamily: setFontFamily, lineHeight: '20px', border: '0px' }}
                                    >
                                      {website}
                                    </a>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ''
                            )}

                            {address.length !== 0 ? (
                              <>
                                <tr height="24" style={{ verticalAlign: 'middle' }}>
                                  {contactIcons === true && address.length !== 0 ? (
                                    <td align="left" width="24" style={{ verticalAlign: 'middle', border: '0px' }}>
                                      <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', fontSize: 'medium', fontFamily: setFontFamily, border: '0px' }}>
                                        <tbody>
                                          <tr>
                                            <td align="center" style={{ verticalAlign: 'bottom', border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                              <span width="11" style={{ display: 'block', backgroundColor: setThemeColor, border: '0px' }}>
                                                <img id="website_icon" width="13" style={{ display: 'block', border: '0px' }} src="https://threshmedia.com/wp-content/uploads/2021/12/address-icon-2x.png" alt="address icon" />
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  ) : (
                                    <td width="10" style={{ border: '0px' }}></td>
                                  )}
                                  <td style={{ fontSize: '12px', border: '0px' }}>
                                    <span id="website_url" style={{ textDecoration: 'none', color: setFontColor, fontSize: '12px', fontFamily: setFontFamily, lineHeight: '20px', border: '0px' }}>
                                      {address}
                                    </span>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              ''
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td height="15" style={{ border: '0px' }}></td>
            </tr>
            <tr>
              <td height="1" width="100%" style={{ width: '100%', height: '1px', borderTop: '0', borderLeft: '0', borderRight: '0', borderBottom: '1px solid', borderBottomColor: '#6D7FE2', display: 'block' }}></td>
            </tr>
            <tr>
              <td height="15" style={{ border: '0px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '0px' }}>
                <table cellPadding="0" cellSpacing="0" width="100" style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      {imageURL.length !== 0 ? (
                        <>
                          <td style={{ textAlign: 'top', border: '0px' }}>
                            <div style={{ width: '160px' }}>
                              <img src={imageURL} width="160" style={{ width: '160px', display: 'block', margin: '0 auto', padding: '0', height: 'auto', border: '0px' }} alt="company logo" />
                            </div>
                          </td>
                        </>
                      ) : (
                        ''
                      )}
                      <td style={{ verticalAlign: 'center', border: '0px', textAlign: 'right' }}>
                        <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', border: '0px', marginLeft: 'auto' }}>
                          <tbody>
                            {socialIcons === true ? (
                              <>
                                <tr>
                                  <td height="10" style={{ border: '0px' }}></td>
                                </tr>
                                <tr>
                                  <td style={{ textAlign: 'center', border: '0px' }}>
                                    <table cellPadding="0" cellSpacing="0" style={{ verticalAlign: '-webkit-baseline-middle', display: 'inline-block', border: '0px' }}>
                                      <tbody>
                                        <tr style={{ textAlign: 'center' }}>
                                          {linkedin.length !== 0 ? (
                                            <>
                                              <td width="24" align="center" style={{ border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                                <a href={linkedin} target="_blank" rel="noreferrer"  style={{ display: 'inline-block', padding: '0px', backgroundColor: setIconColor, border: '0px' }}>
                                                  <img
                                                    height="24"
                                                    width="24"
                                                    style={{ display: 'block', width: '24px', border: '0px' }}
                                                    src="https://threshmedia.com/wp-content/uploads/2021/11/linkedin-icon-2x.png"
                                                    alt="LinkedIn Icon"
                                                  />
                                                </a>
                                              </td>
                                              <td width="5" style={{ border: '0px' }}></td>
                                            </>
                                          ) : (
                                            <td width="5" style={{ border: '0px' }}></td>
                                          )}

                                          {facebook.length !== 0 ? (
                                            <>
                                              <td width="24" align="center" style={{ border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                                <a href={facebook} target="_blank" rel="noreferrer"  style={{ display: 'inline-block', padding: '0px', backgroundColor: setIconColor, border: '0px' }}>
                                                  <img
                                                    height="24"
                                                    width="24"
                                                    style={{ display: 'block', width: '24px', border: '0px' }}
                                                    src="https://threshmedia.com/wp-content/uploads/2021/11/facebook-icon-2x.png"
                                                    alt="Facebook Icon"
                                                  />
                                                </a>
                                              </td>
                                              <td width="5" style={{ border: '0px' }}></td>
                                            </>
                                          ) : (
                                            <td width="5" style={{ border: '0px' }}></td>
                                          )}

                                          {instagram.length !== 0 ? (
                                            <>
                                              <td width="24" align="center" style={{ border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                                <a href={instagram} target="_blank" rel="noreferrer"  style={{ display: 'inline-block', padding: '0px', backgroundColor: setIconColor, border: '0px' }}>
                                                  <img
                                                    height="24"
                                                    width="24"
                                                    style={{ display: 'block', width: '24px', border: '0px' }}
                                                    src="https://threshmedia.com/wp-content/uploads/2021/11/instagram-icon-2x.png"
                                                    alt="Instagram Icon"
                                                  />
                                                </a>
                                              </td>
                                              <td width="5" style={{ border: '0px' }}></td>
                                            </>
                                          ) : (
                                            <td width="5" style={{ border: '0px' }}></td>
                                          )}

                                          {twitter.length !== 0 ? (
                                            <>
                                              <td width="24" align="center" style={{ border: '0px', backgroundColor: 'rgba(0,0,0,0)' }}>
                                                <a href={twitter} target="_blank" rel="noreferrer"  style={{ display: 'inline-block', padding: '0px', backgroundColor: setIconColor, border: '0px' }}>
                                                  <img
                                                    height="24"
                                                    width="24"
                                                    style={{ display: 'block', width: '24px', border: '0px' }}
                                                    src="https://threshmedia.com/wp-content/uploads/2021/11/twitter-icon-2x.png"
                                                    alt="Twitter Icon"
                                                  />
                                                </a>
                                              </td>
                                            </>
                                          ) : (
                                            ''
                                          )}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </>
                            ) : (
                              <tr>
                                <td height="40" style={{ border: '0px' }}></td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td height="30"></td>
            </tr>
          </tbody>
        </table>
      </>
      ) : (
        <EmptyTemplateThree />
      )}
    </>
  )

}

export default TemplateThree