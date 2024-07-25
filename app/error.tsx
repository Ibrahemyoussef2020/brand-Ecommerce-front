'use client'


interface ErrorPage  {
    error:Error,
    reset:()=> void
}

const page = ({error,reset}:ErrorPage) => {
  return (
      <div className='error-page'>
        <div>
          <h1>An error occurred</h1>
          <button onClick={()=> location.reload()}>Try Again</button>
        </div>
      </div>
  )
}

export default page