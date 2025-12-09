import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step2() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">
          Email address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="e.g. john@example.com"
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone number <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          className="h-12"
        />
      </div>
    </div>
  );
}
