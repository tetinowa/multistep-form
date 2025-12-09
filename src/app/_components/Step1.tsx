import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Step1() {
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="firstName">
          First name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="firstName"
          type="text"
          placeholder="e.g. John"
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="lastName">
          Last name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="lastName"
          type="text"
          placeholder="e.g. Doe"
          className="h-12"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">
          Username <span className="text-red-500">*</span>
        </Label>
        <Input
          id="username"
          type="text"
          placeholder="e.g. johndoe123"
          className="h-12"
        />
      </div>
    </div>
  );
}
