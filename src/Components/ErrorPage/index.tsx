import { ComponentType } from 'react';
import './style.scss';
import { FallbackProps } from 'react-error-boundary';


const ErrorPage: ComponentType<FallbackProps> = ({ error, resetErrorBoundary }) => {
    console.log('Error occured', error);
        return (
            <div className='error-page'>
      
      <p className='error-msg'>
        Something went wrong. Try clicking the refresh page button to reload the
        application.{' '}
        <button className='btn' onClick={resetErrorBoundary}>
          Refresh page
        </button>
      </p>
    </div>
        ) 
}

export default ErrorPage