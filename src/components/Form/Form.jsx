import { useForm, FormProvider } from "react-hook-form"
import { InputField } from "./InputField";
import { TextArea } from "./TextArea";
import { SubmitButton } from "./SubmitButton";
import { RadioSelection } from "./RadioSelection";
import { CheckBox } from "./CheckBox";
import { Title } from "../Title";
import { Success } from "../Success";


export const Form = () => {
  const methods = useForm();
  const { handleSubmit, reset, formState: { isSubmitSuccessful } } = methods
  const onSubmit = (data) => {
    (data)
  };


  return (
    <FormProvider {...methods}>
      <Success
        isSubmitSuccessful={isSubmitSuccessful}
        onReset={() => reset()}

      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`${isSubmitSuccessful ? "w-80 flex flex-col justify-center items-center rounded-md opacity-45" : "w-80 flex flex-col justify-center items-center rounded-md"}
        sm:w-full`}>
        <fieldset disabled={isSubmitSuccessful} className="contents">


          <Title />
          <div className="sm:flex sm:gap-2">
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
          </div>
          <div className="sm:flex sm:w-[584px]">
            <div className="sm:w-full">
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
                fullWidth={true}
              />
            </div>
          </div>
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
            validation={{ required: "To submit this form please consent to being contacted" }}

          />

          <SubmitButton
          />
        </fieldset>
      </form>

    </FormProvider>
  )
}
