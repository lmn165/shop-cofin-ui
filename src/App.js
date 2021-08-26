import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import NavigationForJavaScript from './components/NavigationForJavaScript'
import styled from 'styled-components'
import Header from './Layout/Header'
import HomePage from "./pages/HomePage";
import CofinMap from './components/CofinMap'
import Navigation from './Layout/Navigation'

const App = () => (
<>
<Layout>
<Header/>
<Navigation/>
<NavigationForJavaScript/>
</Layout>
<Switch>
<Route exact path='/' component = { HomePage }/>
<Redirect from='/home' to = { '/' }/>

<Route exact path='/cofin-map' component = { CofinMap }/>
</Switch>
</>
)

export default App;

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`
