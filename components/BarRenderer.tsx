import type { Bar } from "@/lib/types";
import {
  BarHero,
  BarCurso,
  BarCertificacoes,
  BarCTA,
  BarFAQ,
} from "./bars";

export function BarRenderer({ bars }: { bars: Bar[] }) {
  return (
    <>
      {bars.map((bar, index) => {
        switch (bar.type) {
          case "hero":
            return <BarHero key={index} {...bar.props} />;
          case "curso":
            return <BarCurso key={index} {...bar.props} />;
          case "certificacoes":
            return <BarCertificacoes key={index} {...bar.props} />;
          case "cta":
            return <BarCTA key={index} {...bar.props} />;
          case "faq":
            return <BarFAQ key={index} {...bar.props} />;
        }
      })}
    </>
  );
}
