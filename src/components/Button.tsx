type ButtonProps = {
  className?: string;
  size?: "sm" | "md";
  children: React.ReactNode;
};

export const Button = ({ className = "", size = "md", children }: ButtonProps) => {
  const baseClass =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-300 bg-primary text-primary-foreground hover:bg-primary/90";

  const sizeClass = size === "sm" ? "px-3 py-1 text-sm" : "px-4 py-2";

  const classes = `${baseClass} ${sizeClass} ${className}`;

  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};