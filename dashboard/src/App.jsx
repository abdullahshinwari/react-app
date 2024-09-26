import './App.css'

function App() {

  return (
    <>
      <div className='main flex'>
        <div className='left-side  w-1/4 text-white left-bar-bg-color'>
          <div>
            <div>
              <div>
                <div className='space-y-6'>
                  <div className='justify-center flex mt-10'>
                    <img className='w-40 h-40 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOme6vZXapI-HTNJXRwstlO_vjjF59Wt6cQ&s" alt="" />
                  </div>
                  <div>
                    <p className='text-center text-4xl my-1'>Abd Ullah</p>
                    <p className='text-center'>abshinwari786@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className='justify-center flex '>
                <div>
                  <div className='p-4 flex justify-evenly items-center w-64'>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
                    <p className='w-32'>Home</p>
                  </div>
                  <div className='p-4 flex justify-evenly items-center w-64'>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
                    <p className='w-32'>File</p>
                  </div>
                  <div className='p-4 flex justify-evenly items-center w-64'>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
                    <p className='w-32'>Message</p>
                  </div>
                  <div className='p-4 flex justify-evenly items-center w-64'>
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <rect x="10" y="12" width="4" height="4" /></svg>
                    <p className='w-32'>Notifications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-side boarder w-full h-full bg-gray-300'>
          <div className='p-12'>
            <div className=' flex justify-between'>
              <div className=''>
                Dashboard User
              </div>
              <div className=''>
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                </svg>
              </div>
            </div>

            <div className='mt-6 flex justify-between'>
              <div className=' p-3 w-48 h-32 shadow-2xl left-bar-bg-color text-white'>
                <div className='border border-black justify-between flex'>
                  <p>Earning</p>
                  <div className=''>
                    <svg class="h-8 w-8 white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className='flex text-4xl mt-6'>
                  $1234
                </div>
              </div>
              <div className='ml-6 p-3 w-48 h-32 shadow-2xl bg-white text-black'>
                <div className='justify-between flex'>
                  <p>Share</p>
                  <div className=''>
                    <svg class="h-8 w-8 white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className='flex text-4xl mt-6'>
                  2434
                </div>
              </div>
              <div className='ml-6 p-3 w-48 h-32 shadow-2xl bg-white text-black'>
                <div className='justify-between flex'>
                  <p>Likes</p>
                  <div className=''>
                    <svg class="h-8 w-8 white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className='flex text-4xl mt-6'>
                  1259
                </div>
              </div>
              <div className='ml-6 p-3 w-48 h-32 shadow-2xl bg-white text-black'>
                <div className=' justify-between flex'>
                  <p>Rating</p>
                  <div className=''>
                    <svg class="h-8 w-8 white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                <div className='flex text-4xl mt-6'>
                  8.5
                </div>
              </div>
            </div>

              <div className='mt-6 border border-red-600 h-40 w-9/12'>
                <img className='w-full h-full' src="ss1.png" alt="" />
              </div>
              <div className='border border-white h-32 w-2/12 ml-24'>
              </div>
            <div className='mt-6 w-full h-full border border-blue-900 flex justify-between'>
              <div className='border border-white h-32 w-2/12 ml-24'>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  )
}

export default App
