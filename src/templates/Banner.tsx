import Link from "next/link";

import { Background } from "@/background/Background";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Background color="bg-slate-50 dark:bg-stone-900">
    <Section>
      <CTABanner
        title="Are you ready to start your journey to financial freedom?"
        subtitle="Make an Action Plan now!"
        button={
          <Link href="https://app.eras.fyi">
            <Button primary>Get Started</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Banner };
