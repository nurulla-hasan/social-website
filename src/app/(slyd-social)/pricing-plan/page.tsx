import PricingPage from "@/components/boost/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRICING | SLYD SOCIAL",
  description: "Slyd social pricing page",
};

const PricingPlan = () => {
  return (
    <div>
      <PricingPage />
    </div>
  );
};

export default PricingPlan;
