function Footer() {
    return (
      <footer class="bg-white rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
        <p class="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
          by Toan Nguyen
        </p>
        <div class="flex justify-center items-center space-x-1">
          <a href="https://github.com/ttngbt06" target="_blank" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/toan-nguyen-851a58155/" target="_blank" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
            <span>LinkedIn</span>
          </a>
        </div>
      </footer>
    )
  };
  
  export default Footer;