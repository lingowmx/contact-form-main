import { useEffect, useState } from 'react'
import successIcon from '../../assets/images/icon-success-check.svg'

export const Success = ({ isSubmitSuccessful, onReset }) => {
  const [counter, setCounter] = useState(5)
  useEffect(() => {
    if(!isSubmitSuccessful) return
    const interval = setInterval(() => {
      setCounter((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [isSubmitSuccessful])
  useEffect(() => {
    if(counter === 0){
      onReset()
    }
  }, [counter])
  if(!isSubmitSuccessful) return null
  return (

    <div className='w-72 h-24 bg-green-900 rounded-lg text-white p-2 mt-4 absolute z-10'>
      <div className='flex gap-2'>
        <img src={successIcon} alt="successIcon" />
        <h2 className='text-base font-semibold'>Message sent!</h2>
      </div>
      <p className='text-sm font-thin mt-2'>Thanks for completing the form. We'll be in touch.</p>
      <div className='flex justify-center'>
        <button
          
          className='w-32 h-10 bg-amber-500 flex justify-center items-center border border-black rounded-lg cursor-pointer'>
            Going back Home in {counter}s</button>

      </div>
    </div>
  )
}
