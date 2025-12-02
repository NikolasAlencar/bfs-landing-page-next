"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

export function ServiceIcon({ icon }: { icon: string }) {
  const { theme } = useTheme();

  const src = `/icons/${icon}-${theme}.svg`;

  return <Image key={theme} src={src} alt={icon} width={42} height={42} />;
}
