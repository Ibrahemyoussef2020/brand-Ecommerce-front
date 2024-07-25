
"use client";


const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>An error occurred</h1>
      <button onClick={()=> location.reload()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;