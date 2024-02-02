import './Home.css'; // Make sure to create and import your CSS file

import { AuthRedirectWrapper, PageWrapper } from 'wrappers';

import HeroSection from './HeroSection';
import { HowItWorksSection } from 'components/howItWorksSection';
import RoadmapSection from './RoadmapSection';

export const Home = () => {
  

  return (
    <AuthRedirectWrapper requireAuth={false}>
      <PageWrapper>
    <div>
      <HeroSection />
      <RoadmapSection />
      <HowItWorksSection/>
    </div>
      </PageWrapper>
    </AuthRedirectWrapper>
  );
};
