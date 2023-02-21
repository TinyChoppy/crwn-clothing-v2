import { Group, Input, FormInputLabel } from "./form-input-style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} autoComplete="off" />
      {label && <FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>}
    </Group>
  );
};

export default FormInput;
