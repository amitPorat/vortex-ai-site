"use client";

import { useLocale } from "@/context/LocaleContext";
import { useEffect } from "react";

export function LayoutDir({ children }: { children: React.ReactNode }) {
  const { dir } = useLocale();

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", dir === "rtl" ? "he" : "en");
  }, [dir]);

  return <div dir={dir}>{children}</div>;
}
