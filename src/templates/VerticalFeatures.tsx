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
        title="We're with you on each step of your financial journey"
        description=""
        id="how-it-works"
      >
        <VerticalFeatureRow
          title="Make an Action Plan"
          description="Use our AI-tool to identify a goal you have - it doesn’t even have to be financial - and get inspired by links in each step."
          image="/assets/images/sample-plan.svg"
          imageAlt="Sample plan for users"
          button={
            <Button onClick={onClickScroll} property="hero" primary>
              Get Started
            </Button>
          }
        />
        <VerticalFeatureRow
          title="Follow Our Guidance"
          description={
            <p>
              When you have a satisfactory plan, we&apos;ll email you detailed
              guidance on how to achieve your goal. Each email will contain
              links, information, and inspiration <b>specifically designed</b>{" "}
              for you. First email is free, then £1.99 after.
            </p>
          }
          image="/assets/images/feature2.svg"
          imageAlt="Getting guidance to your goal"
          reverse
          button={
            <Button onClick={onClickScroll} property="hero" primary>
              Get Started
            </Button>
          }
        />
        <VerticalFeatureRow
          title="Embrace Your Future Self"
          description="At the end of your journey, we'll send you a personalised certificate to celebrate your achievement. You deserve it!"
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
