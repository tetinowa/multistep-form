import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { resolve } from "path";
import { type } from "os";

export default function Step1() {
  const formSchema = z.object({
    username: z
      .string()
      .min(1, "Username is required")
      .max(15, "Username must be at most 15 characters"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  });

  type FormSchemaType = z.infer<typeof formSchema>;

  const formPage = () => {
    const form = useForm<FormSchemaType>({
      resolver: zodResolver(formSchema),
      defaulValues: {
        username: "",
        firstName: "",
        lastName: "",
      },
    });
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="firstName">
          First name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="firstName"
          type="text"
          placeholder="e.g. Simon"
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
          placeholder="e.g. Riley"
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
          placeholder="e.g. ghost_07"
          className="h-12"
        />
      </div>
    </div>
  );
}
