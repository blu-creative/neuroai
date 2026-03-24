import { Hero } from '../components/Hero';
import { UrgencyBanner } from '../components/UrgencyBanner';
import { Services } from '../components/Services';
import { WhyChoose } from '../components/WhyChoose';
import { ComplianceDeadline } from '../components/ComplianceDeadline';
import { LogoStrip } from '../components/LogoStrip';

export function Home() {
  return (
    <>
      <Hero />
      <UrgencyBanner />
      <Services />
      <WhyChoose />
      <ComplianceDeadline />
      <LogoStrip />
    </>
  );
}
