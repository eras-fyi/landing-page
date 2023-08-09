import { Background } from "@/background/Background";
import { onClickScroll } from "@/utils/helpers";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Background className="bg-slate-50 dark:bg-gray-800">
    <Section>
      <CTABanner
        title="Are you ready to start your journey to financial freedom?"
        subtitle="Make an Action Plan now!"
        button={
          <Button onClick={onClickScroll} property="hero" primary>
            Get Started
          </Button>
        }
      />
    </Section>
  </Background>
);

export { Banner };
