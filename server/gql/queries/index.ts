import { gql } from 'apollo-boost'

export const getUserQuery = gql`
  query GetUseR($id: String!) {
    user(id: $id) {
      firstName
      lastName
      email
      verified
    }
  }
`
