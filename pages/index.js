import Home from '../components/Home'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'

const IndexPage = () => {
  return (
    <motion.section
      style={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      <SEO subTitle="Producer, Drummer, Engineer" />
      <Home />
    </motion.section>
  )
}

export default IndexPage
