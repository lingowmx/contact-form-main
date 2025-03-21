
import { Container } from './components/Container'
import { InputField } from './components/InputField'
import { SubmitButton } from './components/SubmitButton'
import './App.css'

function App() {


  return (
    <main className='bg-green-200 w-screen h-screen flex justify-center items-center'>
      <Container>
          <InputField label="First Name" type="text" name="Fname" placeholder="Peter" required/>
          <InputField label="Last Name" type="text" name="Lname" placeholder="Parker" required />
          <InputField label="Email Address" type="email" name="email" placeholder="spider@man.com" required/>
          <InputField label="Query Type" type="radio" name="query" value='general' labelText='General enquiry' required/>
          <InputField label="" type="radio" name="query" value='support' labelText='Support request'/>
          <InputField label="Message" type="textarea" name="message" placeholder='Great power....' required/>
          <InputField label="" type="checkbox" name="checkbox" labelText='I consent to being contacted by the team' required/>
          <SubmitButton />
      </Container>
    </main>
  )
}

export default App
