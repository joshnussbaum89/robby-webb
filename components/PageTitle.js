import styled from 'styled-components'

const PageTitleStyles = styled.div`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`

const PageTitle = ({ title }) => {
  return (
    <PageTitleStyles>
      <h2>{title}</h2>
    </PageTitleStyles>
  )
}

export default PageTitle
