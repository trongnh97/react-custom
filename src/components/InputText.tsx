import { memo } from "react";

function InputText({
  value,
  name,
  onChange,
  onBlur,
  onKeyup,
}: {
  value: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyup?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyUp={onKeyup}
      className="form-control"
    />
  );
}

export default memo(InputText);
