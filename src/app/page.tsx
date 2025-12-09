import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Sidebar from "./_components/Sidebar";
import FormHeader from "./_components/FormHeader";
import Step1 from "./_components/Step1";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex">
        <Sidebar />

        <div className="flex-1 p-10">
          <div className="max-w-md mx-auto">
            <FormHeader />
            <Step1 />

            <div className="flex justify-end mt-8">
              <Button className="bg-purple-600 hover:bg-purple-700 h-12 px-6">
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
