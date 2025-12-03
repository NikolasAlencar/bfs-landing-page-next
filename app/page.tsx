import { Hero } from "@/components/Hero/Hero";
import { Services } from "@/components/Services/Services";

export default function HomePage() {
  return (
    <main style={{ marginTop: '170px' }}>
      <Hero />

      <Services />
    </main>
  );
}
