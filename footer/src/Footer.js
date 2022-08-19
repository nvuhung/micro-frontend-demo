// import { useEffect } from './Event';
import event from './Event';

const Footer = () => {
  // useEffect(() => {
  // }, []);

  return (
    <button
      onClick={() => {
        event.emit('footerCall', { data: 'abc' });
      }}
    >
      Footer
    </button>
  );
};

export default Footer;
