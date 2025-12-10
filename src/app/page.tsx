import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import FormHeader from "./_components/FormHeader";
import Step1 from "./_components/Step1";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white flex justify-center w-[480px] h-[655px] p-8 rounded-lg">
        <div className="max-w-md mx-auto">
          <FormHeader />
          <Step1 />
          <div className="flex justify-end mt-8">
            <Button className="bg-black text-white h-12 px-6">
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
