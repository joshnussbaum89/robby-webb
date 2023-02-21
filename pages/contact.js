import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
      <SEO subTitle="Contact" url="https://www.robbywebb.com/contact" />
      <motion.section
        style={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
      >
        <ContactForm />
      </motion.section>
    </Layout>
  )
}

export default contact
