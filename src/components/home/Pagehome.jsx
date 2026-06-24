import HeroSection from "./HeroSection";
import HomeSocialProof from "./HomeSocialProof";
import OurProducts from "./OurProducts";
import ProblemsSolved from "./ProblemsSolved";
import HowWeWork from "./HowWeWork";
import Credibility from "./Credibility";
import LeadershipStrip from "./LeadershipStrip";
import InsightsSection from "./InsightsSection";
import FaqSection from "./FaqSection";
import ContactCta from "./ContactCta";

const Pagehome = () => {
  return (
    <>
      {/* ── Cinematic dark hero ── */}
      <HeroSection />

      {/* ── 01 Social proof strip (light, breath after dark hero) ── */}
      <HomeSocialProof chapterNo="01" />

      {/* ── 02 Products (muted surface) ── */}
      <OurProducts chapterNo="02" />

      {/* ── 03 Problems solved (dark ink — alternating contrast) ── */}
      <ProblemsSolved chapterNo="03" />

      {/* ── 04 How we work (light) ── */}
      <HowWeWork chapterNo="04" />

      {/* ── 05 Credibility & Recognition (muted) ── */}
      <Credibility chapterNo="05" />

      {/* ── 06 Leadership (light) ── */}
      <LeadershipStrip chapterNo="06" />

      {/* ── 07 Insights (muted) ── */}
      <InsightsSection />

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── CTA ── */}
      <ContactCta />
    </>
  );
};

export default Pagehome;
