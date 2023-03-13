<script lang="ts" setup>



</script>
<template>
  <div class="flex items-center justify-center  md:px-32 px-12  pt-12 pb-8 footer">
    <div class="col-span-2">
        <div class="flex gap-4 flex-col items-center">
            <img src="../../../public/logo.jfif" class="w-32 h-32 logo" alt="Logo">
            <div class="flex md:flex-row flex-col justify-start items-start gap-2">
                <div class="flex items-center md:pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#07395e" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg> 
                    <span class="ml-2 md:ml-0">123 Street, New York, USA
                    </span>
                </div>
                <div class="flex items-center md:px-5 md:border-l-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="#07395e" fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42a18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/></svg>
                    <span class="ml-2 md:ml-0">+012 345 67890</span>
                </div>
                <div class="flex items-center md:pl-5 md:border-l-4">
                         <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#07395e" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z"/></svg>
                    <span class="ml-2 md:ml-0">Info@richbasin.com</span>
                </div>
            </div>
        </div>
    </div>
    <div class="grid-span-1"></div>
    <div class="grid-span-1"></div>
  </div>
</template>


<style scoped>
.footer{
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.068);
}
.logo{
    mix-blend-mode: darken;
}
</style>