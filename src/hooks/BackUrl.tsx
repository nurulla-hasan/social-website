import { usePathname, useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const useBackNavigation = (
  currentPathOverride?: string,
  fallbackUrl: string | null = null
) => {
  const path = usePathname();
  const [currentPath, setCurrentPath] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(currentPathOverride || path);
  }, [path, currentPathOverride]);

  const handleBack = () => {
    // If a dynamic fallback URL is provided, use it
    if (fallbackUrl) {
      router.push(fallbackUrl);
      return;
    }

    // Default behavior for specific paths
    switch (currentPath) {
      case "/settings/contact-and-faq":
        router.push("/settings");
        break;

      default:
        router.back();
    }
  };

  return { handleBack };
};

export default useBackNavigation;
