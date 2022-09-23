<!-- eslint-disable prettier/prettier -->
<template>
  <div class="diagonal  bottom-0 left-0 bg-[#002d72] w-full h-auto">
    <div class=" flex flex-col lg:flex-row w-full h-auto  items-center justify-between">
      <div class="h-full pr-12 mt-4 w-full z-1 flex justify-between lg:flex-col   lg:justify-start">
        <div class=" h-full z-1 flex  pl-4 lg:ml-[80px]">
          <img src="../assets/logo.png" alt="Brsk Logo">
        </div>
        <div class=" h-full z-1 flex items-stretch justify-start pl-4 lg:ml-[80px]">
          <img src="../assets/trustpilot.png" alt="Brsk Logo">
        </div>
      </div>
      <div class="h-full pr-12 pl-4 w-full z-1 flex lg:flex-col  justify-start lg:hidden">
        <div class=" line md:block"></div>
        <div class="flex flex-col md:block">
          <p class="text-left text-2xl text-[#e8e8e8] tracking-tight">Sales- <span
              class="text-[#e10098]  font-bold text-lg md:text-2xl tracking-tight">0330 088
              0564</span></p>
          <p class="text-xs text-[#e8e8e8] text-left tracking-tight "> Mon-Fri,8:00am-17:30pm</p>
        </div>
      </div>
      <div class="h-full pr-12 pl-4 w-full z-1 flex flex-col  justify-start">
        <p class="text-2xl text-[#e8e8e8] py-6">Company</p>
        <RouterLink class="text-[#e8e8e8] text-lg mb-1 hover:text-[#e10098] tracking-tight" to="/">Careers
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="">Referral Program
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="">Privacy & Cookie
          Policy
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="/login">Residential
          Broadband Service Terms & Conditions
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="/login">Business
          Broadband
          Terms & Conditions
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="/login">Customer
          Complaints Policy
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="/login">Price Book
        </RouterLink>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="/login">Fair Usage
          Policy
        </RouterLink>
        <div class="h-full  flex hidden pl-4 lg:block w-full z-1 flex mb-8 justify-center items-start">
          <img class="w-[120px] mr-12" src="../assets/ispa-uk-logo.png" alt="">
        </div>
      </div>
      <div class="h-full pr-12 pl-4 w-full z-1 flex flex-col  justify-start lg:justify-between">
        <p class="text-2xl text-[#e8e8e8] py-6">Contact</p>
        <p class="text-[#e8e8e8] text-lg mb-1 tracking-tight">Support
        </p>
        <p class="text-[#e8e8e8] text-lg tracking-tight" to="">Call support on: 02039 255
          299
        </p>
        <p class="text-[#e8e8e8] text-lg mb-1 tracking-tight" to="">Lines are open: Mon-Fri,
          9:00am-18:00pm
        </p>
        <p class="text-[#e8e8e8] text-lg my-1 tracking-tight" to="/login">Company Address
        </p>
        <p class="text-[#e8e8e8] text-lg my-1 tracking-tight" to="/login">Brsk Limited, 85
          Great Portland Street, First Floor, London, W1W 7LT
        </p>
        <RouterLink class="text-[#e8e8e8] text-lg my-1 hover:text-[#e10098] tracking-tight" to="/login">info@brsk.co.uk
        </RouterLink>
        <div class="h-full  w-full z-1 flex  mb-8 justify-center">
          <a><img class="w-[25px] mr-12" src="../assets/facebook-7-xxl.png" alt="">
          </a>
          <a><img class="w-[25px] mr-12" src="../assets/instagram-6-xxl.png" alt="">
          </a>
          <a><img class="w-[25px] " src="../assets/linkedin-6-xxl.png" alt="">
          </a>
        </div>
      </div>
      <div class="h-full  pl-4 lg:hidden w-full z-1 flex mb-8 justify-center items-start">
        <img class="w-[120px] mr-12" src="../assets/ispa-uk-logo.png" alt="">
        <img class="w-[200px]" src="../assets/ombudsman-logo-1.svg" alt="">
      </div>
      <div class="h-full pr-12 pl-4 w-full z-1 flex lg:flex-col  justify-start hidden lg:block">
        <div class=" line md:block"></div>
        <div class="flex flex-col md:block">
          <p class="text-2xl text-[#e8e8e8] py-6">Sales</p>
          <p class="text-left text-2xl text-[#e10098] tracking-tight">0330 088
            0564</p>
          <p class="text-xs text-[#e8e8e8] text-left tracking-tight "> Mon-Fri,8:00am-17:30pm</p>
        </div>
      </div>
    </div>
  </div>

</template>
<style scoped>
.diagonal::before {
  content: "";
  display: block;
  border-bottom: 6vw solid transparent;
  border-left: 100vw solid #fff
}
</style>