/// <reference types="@emotion/react/types/css-prop" />
import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

// const Text1 = styled.div`
//   font-size: 20px;
//   font-weight: 700;
// `
const Text1 = styled.div<{ disable: boolean }>`
  font-size: 20px;
  font-weight: 700;
  text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`
// const Text2 = styled('div')(() => ({
//   fontSize: '15px',
//   color: 'blue',
// }))

const Text2 = styled('div')<{ disable: boolean }>(disable => ({
  fontSize: '15px',
  color: 'blue',
  textDecoration: disable ? 'line-through' : 'none',
}))

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        siteUrl: string
        author: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, siteUrl, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      <div css={TextStyle}>{title}</div>
      <Text1 disable={true}>{siteUrl}</Text1>
      <Text2 disable={true}>{author}</Text2>
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
    }
  }
`
