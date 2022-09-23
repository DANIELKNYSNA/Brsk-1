<!-- eslint-disable prettier/prettier -->
<template>
   <div
      class="bg-[#002d72] flex  container-fluid lg:(container mx-auto) w-full h-[60px] lg:h-[110px] items-center justify-between box-content">
      <div class="h-full z-1 flex items-center justify-start pl-4 lg:ml-[80px] shadow-2xl">
         <img src="../assets/logo.png" alt="Brsk Logo">
      </div>
      <div class=" flex justify-end items-center pr-4 ">
         <div class="hidden lg:block">
            <RouterLink class="text-[#e8e8e8] text-xl  hover:text-[#e10098] mr-12 tracking-tight" to="/">Home Broadband
            </RouterLink>
            <RouterLink class="text-[#e8e8e8] text-xl  hover:text-[#e10098] mr-12 tracking-tight" to="">Better Business
            </RouterLink>
            <RouterLink class="text-[#e8e8e8] text-xl  hover:text-[#e10098] mr-12 tracking-tight" to="">Our Network
            </RouterLink>
            <RouterLink class="text-[#e8e8e8] text-xl mr-12 hover:text-[#e10098] tracking-tight" to="/login">Login
            </RouterLink>
         </div>
         <div class="flex justify-end items-center pr-4 lg:mr-[80px]">
            <button
               class="bg-[#e10098]  font-bold text-sm py-2 px-6 rounded-full text-[#e8e8e8] md:text-lg lg:text-xl hover:bg-[#f560c6] tracking-tight">Get
               brsk Now
            </button>
            <div class="line hidden md:block"></div>
            <div class="flex flex-col hidden md:block">
               <p class="text-left text-2xl text-[#e8e8e8] tracking-tight">Sales- <span
                     class="text-[#e10098]  font-bold text-lg md:text-2xl tracking-tight">0330 088
                     0564</span></p>
               <p class="text-xs text-[#e8e8e8] text-left tracking-tight "> Mon-Fri,8:00am-17:30pm</p>
            </div>
            <div class="ml-2">
               <font-awesome-icon icon="fa-solid fa-bars" />
               <img src="../assets/menuIcon.png" alt="">
            </div>
         </div>

      </div>
   </div>
   <div class="bg-[#e10098] w-full text-center md:hidden lg:hidden xl:hidden">
      <p class="text-[#e8e8e8] text-xs tracking-tight">Call us:Mon-Fri, 8:00am - 17:30pm</p>
   </div>
</template>
<style scoped>
.line {
   width: 1px;
   height: 50px;
   background-color: azure;
   margin-left: 1.5rem;
   margin-right: 1.5rem;
}
</style>

