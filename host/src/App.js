import './index.scss';

import SideBar from 'sidebar/SideBarComponent';
import Footer from 'footer/FooterComponent';
import {UserProvider, useUser} from './UserContext';


const Login = () => {
  const userContext= useUser();
  console.log('userContext in host :>> ', userContext.user);

  return <button onClick={() => userContext.setUser({name: 'Login'})}>Login</button>
}

const App = ({}) => {
  return (
    <UserProvider>
      App Host
      <Login />
      <SideBar />
      <Footer />
    </UserProvider>
  );
};

export default App;
