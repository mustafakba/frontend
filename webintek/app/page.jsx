import Image from "next/image";
import Button from "./components/shared/Button";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import IntroSection from "./components/IntroSection";
import FutureSection from "./components/FutureSection";

export default function Home() {
  return (
    <div className="container-lines relative">
      <div className="pb-10">
        <IntroSection />
      </div>
      <div className="py-10">
        <FutureSection />
      </div>
    </div>
  );
}
