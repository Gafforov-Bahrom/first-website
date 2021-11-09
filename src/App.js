import Data from "./data";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Avatar from "./components/Avatar/Avatar";
import {Switch , Route} from 'react-router-dom'
import Cardbody from "./components/Card/CardBody";
import Administration from "./pages/Administration";
import Design from "./pages/Design";
import Management from "./pages/Management";
import Marketing from "./pages/Marketing";
import Developments from "./pages/Developments";
import Nauchpop from "./pages/Nauchpop";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Card/>
        </Route>
        <Route exact path="/posts/:id">
          <Cardbody/>
        </Route>
        <Route exact path="/home">
          <Avatar/>
        </Route>
        <Route exact path='/administration' component={Administration} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/developments' component={Developments} />
        <Route exact path='/management' component={Management} />
        <Route exact path='/marketing' component={Marketing} />
        <Route exact path='/nauchpop' component={Nauchpop} />
      </Switch>
      <Footer/> 
    </div>
  );
}

export default App;
