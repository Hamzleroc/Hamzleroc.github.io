"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname?.startsWith("/nl") ? "nl" : "en";
  }, [pathname]);

  return null;
}
