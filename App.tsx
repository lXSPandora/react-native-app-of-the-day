import React, { Component } from 'react'
import { Router } from './src/Routes'

export interface Props {}

export default class App extends Component<Props> {
  render = () => <Router />
}
