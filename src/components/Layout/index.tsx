import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { AppBar, Typography, Tab, Tabs } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import LoginModal from 'components/LoginModal'

export default function Layout({ children }) {
  return (
    <div className="w-full h-screen overflow-scroll">
      <AppBar color="primary" position="fixed">
        <Toolbar variant="dense" className="w-full h-10 flex justify-between">
          <div>
            <Tabs
              aria-label="main navigation"
              value={'about'}
              onChange={() => {
                console.log('Changed')
              }}
            >
              <Tab aria-label="about me" value={'about'} label="About Me" />
              <Tab aria-label="work" value={'work'} label="My Work" />
              <Tab aria-label="news" value={'news'} label="Newsfeed" />
              <Tab aria-label="blog" value={'blog'} label="Blog" />
            </Tabs>
          </div>

          <div className="ml-auto">{/* <LoginModal /> */}</div>
        </Toolbar>
      </AppBar>
      <Paper>{children}</Paper>
    </div>
  )
}
