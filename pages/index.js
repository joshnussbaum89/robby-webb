import Home from '../components/Home'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'

const IndexPage = () => {
  return (
    <>
      <SEO subTitle="Producer, Drummer, Engineer" />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <Home />
      </motion.section>
    </>
  )
}

export default IndexPage
