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
      {/* Barber Pole Background */}
      <svg
        className="animate-spin-slow absolute inset-0"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="#C8A448"
          strokeWidth="4"
          strokeDasharray="10,5"
          className="animate-dash"
        />
      </svg>
      
      {/* Rotating Scissors */}
      <svg
        className="animate-spin absolute inset-0"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 15 L20 35 M20 15 L30 35"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="20" cy="15" r="3" fill="white" />
        <circle cx="30" cy="15" r="3" fill="white" />
        <circle cx="20" cy="35" r="3" fill="white" />
        <circle cx="30" cy="35" r="3" fill="white" />
      </svg>
    </div>
  );
};
