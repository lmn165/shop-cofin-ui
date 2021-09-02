import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { HomePage, LocalMapPage, WorldMap, NavigationForJavaScript } from 'place/index'
import styled from 'styled-components'
import { Header, Navigation } from 'common/index'

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

<Route exact path='/cofin-map' component = { LocalMapPage }/>
<Route exact path='/cofin-world-map' component = { WorldMap }/>
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
