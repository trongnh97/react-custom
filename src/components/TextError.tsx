function TextError({ children }: { children: React.ReactNode }) {
  return(
    <span className="text-danger">{children || ""}</span>
  );
};

export default TextError;
