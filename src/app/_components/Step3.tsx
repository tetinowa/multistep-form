import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step3() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="address">
          Street address <span className="text-red-500">*</span>
        </Label>
        <Input
          id="address"
          type="text"
          placeholder="e.g. 123 Main St"
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">
          City <span className="text-red-500">*</span>
        </Label>
        <Input
          id="city"
          type="text"
          placeholder="e.g. New York"
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">
          Zip code <span className="text-red-500">*</span>
        </Label>
        <Input
          id="zipCode"
          type="text"
          placeholder="e.g. 10001"
          className="h-12"
        />
      </div>
    </div>
  );
}
