import LoginFlow from 'components/LoginFlow'
import { Grid } from '@material-ui/core'
export default function Login() {
  return (
    <Grid className="h-screen w-screen flex justify-center items-center">
      <div className="h-full w-full max-w-md" style={{ height: 500 }}>
        <LoginFlow />
      </div>
    </Grid>
  )
}
