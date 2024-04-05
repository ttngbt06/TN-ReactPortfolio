function HomePage() {
    return (
      <section class="bg-white">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Toan Nguyen,
            </h1>
            <p class="max-w-2xl mb-6 font-light text-black-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              A new full stack Web Developer who always learn and improve his skills!
            </p>
  
  
          </div>
          <div class="lg:mt-0 lg:col-span-5 lg:flex">
            <img class="rounded-full" 
            src="https://github.com/ttngbt06/TN-Porfolio/blob/main/assets/D6C6FD48-0ADB-44AB-BC77-4850BF07D184.JPEG?raw=true"></img>
          </div>
        </div>
      </section>
    )
  };
  
  export default HomePage;