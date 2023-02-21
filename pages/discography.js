// Components
import Discography from '../components/Discography'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'

import albumData from '../public/data.json'

const discography = ({ albumData }) => {
  return (
    <Layout>
      <SEO subTitle="Discography" url="https://www.robbywebb.com/discography" />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <Discography albumData={albumData} />
      </motion.section>
    </Layout>
  )
}

export default discography

export const getStaticProps = async () => {
  return {
    props: { albumData },
  }
}
