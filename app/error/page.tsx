"use strict";

interface ErrorPageProps {
    reset:()=> void,
    error:Error
}

const ErrorPage = ({reset,error}:ErrorPageProps) => {
   
  return (
    <div className="error-page">
        <div>
            <h1>custom Error:</h1>
            <p>un Expected error has haced us</p>
            <button onClick={reset}>
                Try again
            </button>
        </div>
    </div>
  )
}

export default ErrorPage