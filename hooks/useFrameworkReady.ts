import { useEffect } from 'react';
import { Platform } from 'react-native';

declare global {
  interface Global {
    frameworkReady?: () => void;
  }

  interface Window {
    frameworkReady?: () => void;
  }
}

export function useFrameworkReady() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      (window as any).frameworkReady?.();
    }
  }, []);
}
