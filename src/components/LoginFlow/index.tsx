import useThunkReducer from "react-hook-thunk-reducer";

import LoginStart from "./LoginStart";

enum LoginActionType {
  SubmitEmail = "SubmitEmail",
}

interface LoginState {
  email?: string;
}

interface LoginAction {
  type: LoginActionType;
  payload?: any;
}

const initialState = {
  email: null,
};

function reducer(state: LoginState, action: LoginAction) {
  switch (action.type) {
    case LoginActionType.SubmitEmail:
      return { email: action.payload.email };
    default:
      throw new Error();
  }
}

export default function LoginFlow() {
  const [state, dispatch] = useThunkReducer<LoginState, LoginAction>(
    reducer,
    initialState
  );
  return <LoginStart />;
}
