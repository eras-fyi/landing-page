import type { FormEvent } from "react";
import { useState } from "react";

import { Background } from "@/background/Background";
import { Button } from "@/button/Button";
import { Waitlist } from "@/form/Waitlist";
import { Modal } from "@/modal/Modal";
import { onClickScroll } from "@/utils/helpers";

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
        title="We're with you on each step of your journey"
        description=""
        id="how-it-works"
      >
        <VerticalFeatureRow
          title="Design Your Action Plan"
          description="Use our AI-tool to pinpoint a goal - whether it's personal, professional, or just for fun - and get inspired with resources at every stage."
          image="/assets/images/sample-plan.svg"
          imageAlt="Sample plan for users"
          button={
            <Button onClick={onClickScroll} property="hero" primary>
              Get Started
            </Button>
          }
        />
        <VerticalFeatureRow
          title="Stay on Track with Our Guidance"
          description={
            <p>
              Once you&apos;ve set your plan, we&apos;ll email you tailored
              advice on how to stay on course. Each day, you&apos;ll receive
              links, information, and motivation crafted <b>just for you</b>.
              First week is free, then £3 per week after.
            </p>
          }
          image="/assets/images/sample-email.svg"
          imageAlt="Getting guidance to your goal"
          reverse
          button={
            <Button onClick={onClickScroll} property="hero" primary>
              Get Started
            </Button>
          }
        />
        <VerticalFeatureRow
          title="Celebrate Your Achievements"
          description="When you reach your goal, we'll send you a personalized certificate to commemorate your success. You've earned it!"
          image="/assets/images/feature3.svg"
          imageAlt="Automating your goals"
          button={
            <Button onClick={onClickScroll} property="hero" primary>
              Get Started
            </Button>
          }
        />
        <Modal show={showModal} toggleModal={toggleModalVisibility}>
          <Waitlist />
        </Modal>
      </Section>
    </Background>
  );
};

export { VerticalFeatures };
