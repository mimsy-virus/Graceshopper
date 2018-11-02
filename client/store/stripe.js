import axios from 'axios'

const SEND_STRIPE_TOKEN = 'SEND_STRIPE_TOKEN'

const defaultToken = {
  token: ''
}

const sendTokenAction = token => ({ type: SEND_STRIPE_TOKEN, token })

export const sendTokenToServer = () => {}

export default function(state = defaultToken, action) {
  switch (action.type) {
    case SEND_STRIPE_TOKEN:
      return { token: action.token }
    default:
      return state
  }
}
