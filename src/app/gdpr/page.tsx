import type { Metadata } from "next";
import GdprContent from "./GdprContent";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov (GDPR)",
  description:
    "Informácie o spracovaní osobných údajov spoločnosťou VOSS AUTOSERVIS s.r.o. v súlade s GDPR.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function GdprPage() {
  return <GdprContent />;
}
