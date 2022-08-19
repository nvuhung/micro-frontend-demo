import { useEffect } from 'react';
import { getProducts } from 'host/Service';
import { useUser } from 'host/UserContext';
import event from 'footer/Event';

const SideBar = () => {
  const userContext = useUser();
  console.log('userContext in sidebar :>> ', userContext);

  useEffect(() => {
    event.on('footerCall', (rs) => {
      console.log('rs :>> ', rs);
    });
    getProducts().then((rs) => {
      console.log('rs :>> ', rs);
    });
  });

  return <h2>Sidebar</h2>;
};

export default SideBar;
