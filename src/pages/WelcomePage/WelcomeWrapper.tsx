import { useEffect, useState } from 'react';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { WelcomePage } from './WelcomePage';


export function WelcomeWrapper() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingPage />;

  return <WelcomePage />;
}
