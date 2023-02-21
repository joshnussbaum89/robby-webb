import Layout from '../components/Layout'
import SEO from '../components/SEO'
import About from '../components/About'
import { motion } from 'framer-motion'

const about = () => {
  return (
    <Layout>
      <SEO subTitle="About" url="https://www.robbywebb.com/about" />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <About />
      </motion.section>
    </Layout>
  )
}

export default about
