import { Background } from "@/background/Background";
import { onClickScroll } from "@/utils/helpers";

import { Button } from "../button/Button";
import { CTABanner } from "../cta/CTABanner";
import { Section } from "../layout/Section";

const Banner = () => (
  <Background className="bg-slate-50 dark:bg-gray-800">
    <Section>
      <CTABanner
        title="Ready to turn your dreams into reality?"
        subtitle="Design Your Action Plan today!"
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
