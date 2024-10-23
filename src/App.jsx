// import './App.css'
import bg from './assets/images/bg.jpg'

function App() {

  const content = {
    // hero_heading: 'BESPOKE WEBSITES TAILORED FOR SMALL BUSINESSES',
    hero_heading: ['BESPOKE', 'WEBSITES', 'TAILORED', 'FOR SMALL', 'BUSINESSES'],
    hero_subheading: 'Build a digital storefront and convert more window shoppers to small business customers. A handmade website designed for your unique business needs and the customers you know.',
  }

  return (
    <main className="">

      {/* ===== Navigation ===== */}
      <nav className="flex justify-between px-6 py-8 pb-8 max-w-screen-xl m-auto">
        <a href='/' className="text-3xl font-semibold">DeSANTIS</a>
      </nav>

      {/* ===== Hero ===== */}
      {/* <section className='relative sm:static lg:grid lg:grid-cols-2 max-w-screen-xl m-auto'> */}
        {/* <div className='absolute sm:static px-6 py-8 pt-16'> */}
          {/* {content.hero_heading.map((text, index) => ( */}
            {/* <div key={ index } className="text-4xl lg:text-5xl text-balance font-semibold leading-snug mb-6 bg-white">{ text }</div> */}
          {/* ))} */}
          {/* <div className="text-5xl text-balance font-semibold leading-snug pb-4">{ content.hero_heading }</div> */}
          {/* <div className="font-mono pb-8 p-1 max-w-xl leading-tight">{ content.hero_subheading }</div> */}
          {/* <a href="/"><button className="transition-colors font-semibold font-mono bg-white border border-gray-950 hover:bg-gray-950 hover:text-white p-2 rounded-lg">Let&apos;s Connect</button></a> */}
        {/* </div> */}
        {/* <div className='max-h-[50rem] sm:max-h-[44rem] sm:p-4 overflow-hidden'> */}
          {/* <img loading='lazy' decoding='async' className='max-w-screen-xl' src={ bg } alt="" /> */}
        {/* </div> */}
      {/* </section> */}

      {/* <section className='relative sm:static lg:grid lg:grid-cols-2 max-w-screen-xl m-auto'> */}
      <section className='relative'>
        <div className='max-w-screen-xl m-auto'>
          <div className='absolute px-6 py-8 pt-16'>
            {content.hero_heading.map((text, index) => (
              <div key={ index } className="text-4xl lg:text-5xl text-balance font-semibold leading-snug mb-6 bg-white">{ text }</div>
            ))}
            {/* <div className="text-5xl text-balance font-semibold leading-snug pb-4">{ content.hero_heading }</div> */}
            <div className=" bg-white font-mono mb-8 p-1 max-w-xl leading-tight">{ content.hero_subheading }</div>
            <a href="/"><button className="transition-colors font-semibold font-mono bg-white border border-gray-950 hover:bg-gray-950 hover:text-white p-2 rounded-lg">Let&apos;s Connect</button></a>
          </div>
        </div>
        <div className='max-h-[48rem] overflow-hidden'>
          {/* <img loading='lazy' decoding='async' className='max-w-screen-xl' src={ bg } alt="" /> */}
          <img className='bg-repeat-y min-h-screen' loading='lazy' decoding='async' src={ bg } alt="" />
        </div>
      </section>

      {/* ===== Belt ===== */}
      <section className='bg-gray-950'>
          <div className='font-mono text-white text-center font-bold text-3xl py-8 italic'>Business-minded, Client-driven design</div>
      </section>

      {/* ===== Process ===== */}
      <section className='px-6 py-8 pt-16 pb-16 lg:pb-36 lg:pt-24 max-w-screen-xl m-auto'>

        <div className='text-center pb-8'>
          <div className='font-bold text-4xl pb-4 '>THE PROCESS</div>
          <div className='font-mono max-w-2xl m-auto text-sm'>Let&apos;s work together to address the needs of your business, design to your custom aesthetic, and develop a final product that you are exicted to use.</div>
        </div>

        <div className='flex flex-col gap-4 lg:gap-10 lg:flex-row justify-between'>
          <div className='shadow-xl rounded-3xl p-8 lg:pl-12 lg:pr-24 lg:pt-16 lg:pb-24'>
            <div className='flex items-center'>
              <div className='border text-2xl font-extrabold border-transparent bg-gray-400 text-white rounded-full px-4 py-2'>1</div>
              <div className='text-3xl font-bold pl-4'>Assess</div>
            </div>
            <div></div>
            <ul className='pl-16'>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>What is the goal?</div>
              </li>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>Who is the audience?</div>
              </li>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>Where do you want them to go?</div>
              </li>
            </ul>
          </div>

          <div className='shadow-xl rounded-3xl p-8 lg:pl-12 lg:pr-24 lg:pt-16 lg:pb-24'>
            <div className='flex items-center'>
              <div className='border text-2xl font-extrabold border-gray-500 bg-gray-600 text-white rounded-full px-4 py-2'>2</div>
              <div className='text-3xl font-bold pl-4'>Design</div>
            </div>
            <div></div>
            <ul className='pl-16'>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>What is the goal?</div>
              </li>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>Who is the audience?</div>
              </li>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>Where do you want them to go?</div>
              </li>
            </ul>
          </div>

          <div className='shadow-xl rounded-3xl p-8 lg:pl-12 lg:pr-24 lg:pt-16 lg:pb-24'>
            <div className='flex items-center'>
              <div className='border text-2xl font-extrabold border-gray-500 bg-gray-950 text-white rounded-full px-4 py-2'>3</div>
              <div className='text-3xl font-bold pl-4'>Develop</div>
            </div>
            <div></div>
            <ul className='pl-16'>
              <li className='italic list-disc py-2'>
                {/* <svg className='fill-black' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg> */}
                <div className='hover:translate-x-2 transition duration-300 font-mono'>What is the goal?</div>
              </li>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>Who is the audience?</div>
              </li>
              <li className='italic list-disc py-2'>
                <div className='hover:translate-x-2 transition duration-300 font-mono'>Where do you want them to go?</div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===== Text Content ===== */}
      <section className='flex flex-col lg:flex-row gap-4 px-6 pb-16 max-w-screen-xl m-auto'>
          <div className='flex items-center'>
            <div className='text-4xl font-semibold'>WHY GO CUSTOM</div>
          </div>
          <div>
            <div className='font-mono lg:px-4 max-w-3xl pb-6 mx-auto'>A custom website offers a unique design, better user experience, and improved SEO. You have full control over content and functionality, ensuring your site meets your specific needs. Plus, custom websites are more secure and scalable, ensuring your online presence remains strong.</div>
            <a className='flex lg:px-4 fill-white text-white bg-gray-950 py-2 px-2 border items-center border-gray-950 rounded-2xl max-w-48' href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
              <div className='hover:translate-x-2 duration-300 transition font-mono text-xl'>GET STARTED</div>
            </a>
          </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className='bg-gray-950 text-white'>
        <div className='flex flex-col-reverse lg:flex-row justify-between max-w-screen-xl m-auto px-6 pt-12 pb-24'>
          <div className='pb-8 lg:pb-0'>
            <div className='text-xl font-bold pb-4'>DeSANTIS Development</div>
            <div className='font-mono max-w-80 pb-4'>We build bespoke, client-driven, responsive websites. Programmed to your specification and design in mind.</div>
            <div className='font-mono max-w-80 text-sm'>Copyright &copy; DeSANTIS Development, LLC. All rights reserved. </div>
          </div>
          <div className='pb-8 lg:pb-0'>
            <div className='text-xl font-bold pb-4'>SERVICES</div>
            <ul>
              <li className='flex fill-white text-white pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                <a className='hover:translate-x-2 transition font-mono duration-300 hover:text-blue-300' href="/">Web Development</a>
              </li>
              <li className='flex fill-white text-white pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                <a className='hover:translate-x-2 transition font-mono duration-300 hover:text-blue-300' href="/">Design Consultation</a>
              </li>
              <li></li>
            </ul>
          </div>
          <div className='pb-8 lg:pb-0'>
            <div className='text-xl font-bold pb-4'>CONTACT</div>
            <ul className='grid grid-cols-2 lg:flex lg:flex-col'>
              <li className='fill-white text-white pb-4'>
                <a className='flex hover:text-blue-300 fill-white hover:fill-blue-300 duration-300 transition-colors' href="/">
                  <svg className='' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
                  <div className='font-mono font-semibold pl-2'>Phone</div>
                </a>
              </li>
              <li className='fill-white text-white pb-4'>
                <a className='flex hover:text-blue-300 fill-white hover:fill-blue-300 transition-colors' href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                  <div className='font-mono font-semibold pl-2'>Email</div>
                </a>
              </li>
              <li className='fill-white text-white pb-4'>
                <a className='flex hover:text-blue-300 fill-white hover:fill-blue-300 transition-colors' href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                  </svg>
                  <div className='font-mono font-semibold pl-2'>Instagram</div>
                </a>
              </li>
              <li className='fill-white text-white pb-4'>
                <a className='flex hover:text-blue-300 fill-white hover:fill-blue-300 transition-colors' href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  <div className='font-mono font-semibold pl-2'>Github</div>
                </a>
              </li>
              <li className='fill-white text-white pb-4'>
                <a className='flex hover:text-blue-300 fill-white hover:fill-blue-300 transition-colors' href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                  </svg>
                  <div className='font-mono font-semibold pl-2'>LinkedIn</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
