import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'

const ValidationHeader = styled.div`
  height: 100vh;
  margin: 6rem 0;
  text-align: center;

  a {
    display: block;
    margin: 2rem 0;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media (min-width: 820px) {
    a {
      font-size: var(--small);
    }
  }
`

const success = () => {
  return (
    <Layout>
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <ValidationHeader>
          <PageTitle title="Form successfully submitted" />
          <Link href="/">Return Home</Link>
        </ValidationHeader>
      </motion.section>
    </Layout>
  )
}

export default success
