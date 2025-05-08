import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface LoginCheckboxProps {
  accepted: boolean;
  setAccepted: (value: boolean) => void;
}

const LoginCheckbox = ({ accepted, setAccepted }: LoginCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        checked={accepted}
        onCheckedChange={(checked) => setAccepted(checked === true)}
      />
      <label
        htmlFor="terms"
        className="text-xs font-medium font-roboto text-[#1A1A1A] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I accept the{" "}
        <Link href="/terms" className="text-purple-500 hover:underline">
          Terms and Conditions
        </Link>
      </label>
    </div>
  );
};

export default LoginCheckbox;
