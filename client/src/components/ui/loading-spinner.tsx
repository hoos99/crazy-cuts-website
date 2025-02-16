import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingSpinner = ({
  className,
  size = "md",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      {/* Rotating Scissors */}
      <svg
        className="animate-spin-slow absolute inset-0"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 10 L40 40 M40 10 L10 40"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M10 10 L10 40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <path d="M40 10 L40 40" stroke="white" strokeWidth="3" strokeLinecap="round"/>

      </svg>
    </div>
  );
};