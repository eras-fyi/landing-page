import Link from "next/link";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Section>
    <CTABanner
      title="What are you waiting for?"
      subtitle="Make an Action Plan now!"
      button={
        <Link href="https://app.eras.fyi">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
