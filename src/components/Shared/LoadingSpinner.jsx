import { ScaleLoader } from 'react-spinners'

const LoadingSpinner = ({ smallHeight }) => {
  return (
    <div
    // h-70vh
      className={` ${smallHeight ? 'h-[250px]' : ' h-screen'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader size={100} color='lime' />
    </div>
  )
}

export default LoadingSpinner
