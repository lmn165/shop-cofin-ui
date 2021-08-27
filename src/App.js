import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { KoreaMap, CofinWorldMap, NavigationForJavaScript } from 'components/index'
import styled from 'styled-components'
import { Header, Navigation } from 'Layout/index'
import { HomePage } from "pages/index";

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

<Route exact path='/cofin-map' component = { KoreaMap }/>
<Route exact path='/cofin-world-map' component = { CofinWorldMap }/>
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
