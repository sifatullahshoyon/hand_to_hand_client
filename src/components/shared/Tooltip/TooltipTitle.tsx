import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

const TooltipTitle = ({
  content,
  element,
}: {
  content: ReactNode;
  element: ReactNode;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p>{element}</p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-lato">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipTitle;
