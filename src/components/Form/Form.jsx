import { useForm, FormProvider } from "react-hook-form"
import { InputField } from "./InputField";
import { TextArea } from "./TextArea";
import { SubmitButton } from "./SubmitButton";
import { RadioSelection } from "./RadioSelection";
import { CheckBox } from "./CheckBox";

export const Form = () => {
  const methods = useForm();
  const onSubmit = (data) => {
    console.log('Data from form:', data)
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="w-80 flex flex-col justify-center items-center">
        <InputField
          name="FirstName"
          label="First name"
          placeholder="Donald"
          validation={{ required: "This field is required" }}
        />
        <InputField
          name="LastName"
          label="Last name"
          placeholder="McBurguer"
          validation={{ required: "This field is required" }}
        />
        <InputField
          name="Email"
          label="Email address"
          placeholder="dmcburguer@yummy.com"
          validation={{
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          }}
        />
        <RadioSelection
          name="QueryType"
          label="Query type"
          options={[
            { label: "General Enquiry", value: "General Enquiry" },
            { label: "Support Request", value: "Support Request" }
          ]}
          validation={{ required: "Please select a query type" }}
        />
        <TextArea
          name="Message"
          label="Message"
          placeholder="bimbambum"
          validation={{ required: "This field is required" }}
        />
        
        <CheckBox 
          name="CheckBox"
          label="I conscent being contacted by the team"
          validation={{required: "To submit this form please consent to being contacted"}}/>

        <SubmitButton />
      </form>

    </FormProvider>
  )
}
