import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PageTitle from '../components/PageTitle'
import { motion } from 'framer-motion'

const ErrorHeader = styled.div`
  width: 100%;
  height: 100vh;
  margin: 6rem 0;
  text-align: center;
`

const ServerErrorPage = () => {
  return (
    <Layout>
      <SEO subTitle="500" url="https://www.robbywebb.com/500" />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <ErrorHeader>
          <PageTitle title="500: Server-side error occurred" />
        </ErrorHeader>
      </motion.section>
    </Layout>
  )
}

export default ServerErrorPage
