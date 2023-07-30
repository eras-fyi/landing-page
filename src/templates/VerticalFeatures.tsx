import { Background } from "@/background/Background";

import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Background color="bg-blue-50 dark:bg-blue-950">
    <Section
      title="We're with you on each step of your financial journey"
      description=""
      id="how-it-works"
    >
      <VerticalFeatureRow
        title="Make an Action Plan"
        description="Use our AI-tool to identify a goal you have - it doesn’t even have to be financial - and get inspired by links in each step."
        image="/assets/images/feature.svg"
        imageAlt="First feature alt text"
        buttonText="Get Started"
        buttonLink="https://app.eras.fyi"
        buttonPrimary
      />
      <VerticalFeatureRow
        title="Follow Our Guidance"
        description="For £5 a week - the price of a sandwich - we’ll do everything to ensure you follow through on your plan. We'll call you, set calendar invites, message you on your favourite platforms. What method works best for you? Don’t be shy - let us know!"
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
        buttonText="Subscribe Now"
        buttonLink="/subscribe"
      />
      <VerticalFeatureRow
        title="Automate It"
        description="When you’ve achieved your goals, we’ll automate the maintenance of it. No longer will you have to worry about this goal - let’s move on to the next!"
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
        buttonText="Join Waitlist"
        buttonLink="/waitlist"
      />
    </Section>
  </Background>
);

export { VerticalFeatures };
