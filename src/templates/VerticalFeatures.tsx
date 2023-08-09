import type { FormEvent } from "react";
import { useState } from "react";

import { Background } from "@/background/Background";
import { Waitlist } from "@/form/Waitlist";
import { Modal } from "@/modal/Modal";

import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModalVisibility = (e: FormEvent) => {
    e.preventDefault();
    setShowModal(!showModal);
  };

  return (
    <Background className="bg-blue-50 dark:bg-blue-950">
      <Section
        title="We're with you on each step of your financial journey"
        description=""
        id="how-it-works"
      >
        <VerticalFeatureRow
          title="Make an Action Plan"
          description="Use our AI-tool to identify a goal you have - it doesn’t even have to be financial - and get inspired by links in each step."
          image="/assets/images/sample-plan.svg"
          imageAlt="Sample plan for users"
          buttonText="Get Started"
          buttonLink="https://app.eras.fyi"
          buttonPrimary
        />
        <VerticalFeatureRow
          title="Follow Our Guidance"
          description="For £5 a week - the price of a sandwich - we’ll do everything to ensure you follow through on your plan. We'll call you, set calendar invites, message you on your favourite platforms. What method works best for you? Don’t be shy - let us know!"
          image="/assets/images/feature2.svg"
          imageAlt="Getting guidance to your goal"
          reverse
          buttonText="Join Waitlist"
          buttonLink="/"
          buttonOnClick={toggleModalVisibility}
        />
        <VerticalFeatureRow
          title="Automate It"
          description="When you’ve achieved your goals, we’ll automate what you need to. No longer will you have to worry about this goal - let’s move on to the next!"
          image="/assets/images/feature3.svg"
          imageAlt="Automating your goals"
          buttonText="Join Waitlist"
          buttonLink="/"
          buttonOnClick={toggleModalVisibility}
        />
        <Modal show={showModal} toggleModal={toggleModalVisibility}>
          <Waitlist />
        </Modal>
      </Section>
    </Background>
  );
};

export { VerticalFeatures };
