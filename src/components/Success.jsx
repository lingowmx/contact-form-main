// import successIcon from '../../assets/images/icon-success-check.svg'
import check from '../../assets/images/icon-checkbox-check.svg'

export const Success = ({ isSubmitSuccessful }) => {
  if (!isSubmitSuccessful) return null
  return (

    <div className='w-72 h-24 bg-green-900 rounded-lg text-white p-2 mt-4 absolute z-10'>
      <div className='flex gap-2'>
          <img src={check} alt="" />
        <h2 className='text-base font-semibold'>Message sent!</h2>
      </div>
      <p className='text-sm font-thin mt-2'>Thanks for completing the form. We'll be in touch.</p>
    </div>
  )
}
