// hooks/useHistoryBack.ts
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Custom hook to manage the back navigation dynamically.
 */
const useHistoryBack = () => {
  const router = useRouter();
  const pathname = usePathname(); // Use pathname to track the current URL
  const [previousUrl, setPreviousUrl] = useState<string | null>(null);

  // Track the previous URL
  useEffect(() => {
    // Save the current path as the previous URL when it changes
    setPreviousUrl(pathname);
  }, [pathname]);

  // Function to navigate back to the previous page
  const goBack = () => {
    if (previousUrl) {
      router.push(previousUrl); // Go back to the previous page
    } else {
      router.push("/"); // Fallback if no previous page is available
    }
  };

  return { goBack };
};

export default useHistoryBack;
