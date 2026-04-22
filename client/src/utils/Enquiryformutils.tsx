// Shared types, field config and validation used by both
// EnquiryForm (dark/hero) and MobileEnquiryForm (white/standalone)

export type FormStateType = {
  name: string;
  phone: string;
  email: string;
};

export type FieldMetaType = {
  key: keyof FormStateType;
  label: string;
  type: string;
  required: boolean;
};

export const FIELDS: FieldMetaType[] = [
  { key: "name", label: "Full Name", type: "text", required: true },
  { key: "phone", label: "Phone Number", type: "tel", required: true },
  { key: "email", label: "Email Address", type: "email", required: false },
];

export const INITIAL_VALUES: FormStateType = { name: "", phone: "", email: "" };
export const INITIAL_FOCUSED: Record<keyof FormStateType, boolean> = {
  name: false,
  phone: false,
  email: false,
};

export function validateEnquiry(values: FormStateType): Partial<FormStateType> {
  const errors: Partial<FormStateType> = {};
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.phone.trim()) errors.phone = "Phone is required";
  else if (!/^[6-9]\d{9}$/.test(values.phone.trim()))
    errors.phone = "Enter a valid 10-digit number";
  if (values.email && !/\S+@\S+\.\S+/.test(values.email))
    errors.email = "Enter a valid email";
  return errors;
}
