import Layout from 'components/Layout'
import React from 'react'
import Logo from 'components/Logo'
import Typist from 'react-typist'
import { motion, AnimatePresence } from 'framer-motion'
import LazyLoad from 'react-lazyload'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Home = () => {
  const things = [
    'web and mobile engineering.',
    'user experience design.',
    'building great products.',
  ]
  return (
    <Layout>
      <AnimatePresence>
        <motion.div className="item w-full h-screen overflow-hidden flex flex-col lg:flex-row justify-center items-center">
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            src={'/avataaars.svg'}
          />
          <h2 className="max-w-lg h-12 w-screen text-center lg:text-left">
            <Typist show={false} avgTypingDelay={40}>
              Hello. <Typist.Delay ms={1000} /> <br /> <br /> My name is
              Abhishek <br /> <Typist.Delay ms={300} /> I enjoy{' '}
              <span
                className="bold"
                style={{ borderBottom: '1px solid white' }}
              >
                {things[0]}
                <Typist.Backspace soeed delay={2500} count={things[0].length} />
                {things[1]}
                <Typist.Backspace delay={2500} count={things[1].length} />
                {things[2]}
              </span>
            </Typist>
          </h2>
        </motion.div>
        <LazyLoad height={1000}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="item w-full h-screen overflow-hidden flex flex-col justify-center items-center"
          >
            <h3>About Me</h3>
            <h2 className="max-w-2xl w-full">
              I am software engineer from New Delhi, India. I currently live and
              work in Vancouver, BC.
            </h2>

            <div></div>

            <h3>My Work</h3>
            <h2 className="max-w-2xl w-full">
              Over the last 5 years, I've gotten to work with some awesome
              people and live in three amazing cities
            </h2>
            <div className="h-64 w-full  max-w-4xl">
              <Tabs
                orientation="vertical"
                indicatorColor="secondary"
                variant="scrollable"
                value={'1'}
                onChange={() => {}}
                aria-label="Vertical tabs example"
              >
                <Tab label="Mellon Institute" value="1" />
                <Tab label="Zynga" value="1" />
                <Tab label="Carnegie Museums" value="2" />
                <Tab label="Dapper Labs" value="2" />
                <Tab label="ZeroDown" value="3" />
                <TabPanel value={'1'} index={0}>
                  Hey Zynga
                </TabPanel>
              </Tabs>
            </div>
          </motion.div>
        </LazyLoad>
      </AnimatePresence>
    </Layout>
  )
}

export default Home
