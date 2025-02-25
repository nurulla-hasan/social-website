"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Custom hook to track history and navigate back.
 */
const useHistoryBack = () => {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(window.history.length > 1);
  }, []);

  const goBack = () => {
    if (canGoBack) {
      window.history.back(); // Navigate back
    } else {
      router.push("/"); // Fallback to home if no history
    }
  };

  return { goBack, canGoBack };
};

export default useHistoryBack;
