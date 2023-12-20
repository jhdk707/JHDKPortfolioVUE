<!-- <template>
    <div class="about">
      <div className="container py-4">
    <div class="md:container md:mx-auto px-1 justify-items-center">
    <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-1 ">
      <h2 className="h2 text-center" id="About-Me">
          Technologies
        </h2>
      <div><img class="h-auto max-w-sm" src="@/assets/htmlcssjs.png" alt="htmlcssjs"></div>
      <div><img class="h-auto max-w-sm" src="@/assets/python.png" alt="python"></div>
      <div><img class="h-auto max-w-sm" src="@/assets/mernstack.jpg" alt="mernstack"></div>
      <div><img class="h-auto max-w-sm" src="@/assets/vuejs3.png" alt="vuejs"></div>
    </div>
  </div>
    </div>
    </div>
  </template>
  
  <style>
  img.logo {
    size: 1em;
  }


  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 640px) {
    .grid-cols-2 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
  </style> -->

  <template>
    <div class="about">
      <div class="container py-4">
        <div class="md:container md:mx-auto px-1">
          <div class="grid items-center grid-cols-1 gap-6 md:grid-cols-2">
            <div><img class="h-auto max-w-full" src="@/assets/htmlcssjs.png" alt="htmlcssjs"></div>
            <div><img class="h-auto max-w-full" src="@/assets/mernstack.jpg" alt="mernstack"></div>
            <div><img class="h-auto max-w-full" src="@/assets/vuejs3.png" alt="vuejs"></div>
            <div><img class="h-auto max-w-full" src="@/assets/python.png" alt="python"></div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
    .about {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    @media (min-width: 640px) {
      .grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  
    @media (min-width: 1024px) {
      .grid-cols-2 {
        grid-template-columns: repeat(4, minmax(0, 1fr));
      }
    }
  
    /* Add additional styles for consistent image size if needed */
    .grid-cols-2 img {
      width: 100%; /* Ensure all images take up 100% of their container's width */
      height: auto; /* Maintain the aspect ratio */
    }
  </style>
  