import { TextField, Button } from '@material-ui/core'
export default function LoginStart() {
  return (
    <div className="w-full h-full flex flex-col justify-around items-center p-3">
      <h3>Login</h3>
      <TextField
        name="email"
        className="max-w-md"
        placeholder="Enter your email"
        variant="outlined"
        color="secondary"
        fullWidth
      />
      <Button size="large" fullWidth color="primary" variant="outlined">
        Continue
      </Button>
    </div>
  )
}
