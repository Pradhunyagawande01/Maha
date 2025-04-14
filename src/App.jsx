import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Hack4maha from './Hack4maha';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showHack4maha, setShowHack4maha] = useState(false);

  useEffect(() => {
    // First show loader for 4s
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setShowHack4maha(true);
    }, 4000);

    // Optional: hide Hack4maha and show main site after few seconds
    const hack4mahaTimeout = setTimeout(() => {
      setShowHack4maha(false);
    }, 7000); // 4s loader + 3s Hack4maha

    return () => {
      clearTimeout(loaderTimeout);
      clearTimeout(hack4mahaTimeout);
    };
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : showHack4maha ? (
        <Hack4maha
          sentence="Hack4Maharashtra"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={2}
          pauseBetweenAnimations={1}
        />
      ) : (
        <div className="app">
        <Hack4maha
        sentence="Hack4Maharashtra"
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />

        </div>
      )}
    </>
  );
}

export default App;
