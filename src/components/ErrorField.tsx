interface ErrorMessageProps {
  name: string;
  value?: string;
  required?: boolean;
}

export const ErrorMessage = ({ name, value, required }: ErrorMessageProps) => {
  let errorMessage = "";
  switch (name) {
    case "email":
      if (!value) {
        errorMessage = "Please enter a valid email address";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "El email no es válido.";
      }
      break;
    case "radio":
      if(!value){
        errorMessage = "Please select a query type"
      }
      break;
    case "checkbox":
      if(!value){
        errorMessage = "To submit this form, please consent to be contacted"
      }
      break;
    default:
      if(required && !value){
        errorMessage = "Thi field is required"
      }
      break
  }
  return errorMessage ?  <p className="text-red-500">{errorMessage}</p> : null
};
