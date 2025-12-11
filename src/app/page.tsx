import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import FormHeader from "./_components/FormHeader";
import Step1 from "./_components/Step1";
import { use, useState } from "react";
import Step2 from "./_components/Step2";
import Step3 from "./_components/Step3";

export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white flex justify-center w-[480px] h-[655px] p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <FormHeader />
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          <div className="flex justify-end mt-8"></div>
        </div>
      </div>
    </div>
  );
}
