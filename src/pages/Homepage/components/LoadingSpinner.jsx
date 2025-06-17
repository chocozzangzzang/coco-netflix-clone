import { BarLoader } from 'react-spinners'
import "./LoadingSpinner.style.css";

const LoadingSpinner = ({ loading }) => {
    return (
        <div className='spinner-wrapper'>
            <BarLoader
            color="#f51111"
            height={10}
            loading={loading}
            speedMultiplier={1}
            width={300}
            />
        </div>
    )
}

export default LoadingSpinner