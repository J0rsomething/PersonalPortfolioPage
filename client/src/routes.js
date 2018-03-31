import React from 'react'
import { Router, Route} from 'react-router'
import NavigationBar from './components/NavigationBar'
import Homepage from './components/Homepage'


const Routes = (props)=> (
  <Router {...props}>
    <Route component={NavigationBar}>
      <Route path='/' component={Homepage}/>
      <Route path='/photos' component={()=>(<p>Photos</p>)}/>
      <Route path='/forums' component={()=><p>Forums</p>}>
        <Route path='experiences' component={()=>(<p>Forum->Experiences</p>)}/>
        <Route path='news' component={()=>(<p>Forum->News</p>)}/>
        <Route path='qa' component={()=>(<p>Forum->Q&A</p>)}/>
      </Route>
      <Route path='/shop' component={()=><p>Shop</p>}></Route>
    </Route>
  </Router>
)
export default Routes
