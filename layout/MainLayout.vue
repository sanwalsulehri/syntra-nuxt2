<template lang="">
    <div class="app">
      <div :class="['desktop', { 'is-visible': isSidebarVisible || isLargeScreen }]">
        <div v-if="isSidebarVisible && !isLargeScreen" @click="toggleSidebar" class="overlay"></div>
        <Sidebar />
      </div>
  
      <div class="content">
        <div class="burger" @click="toggleSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4" />
          </svg>
        </div>


        <div class="startContent">
        <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import Sidebar from "./Sidebar.vue";
  
  const isSidebarVisible = ref(false);
  
  const isLargeScreen = ref(window.innerWidth > 1024);
  
  const toggleSidebar = () => {
    isSidebarVisible.value = !isSidebarVisible.value;
  };
  
  const updateScreenSize = () => {
    isLargeScreen.value = window.innerWidth > 1024;
    if (isLargeScreen.value) {
      isSidebarVisible.value = false; 
    }
  };
  
  onMounted(() => {
    window.addEventListener("resize", updateScreenSize);
    updateScreenSize();
  });
  
  onUnmounted(() => {
    window.removeEventListener("resize", updateScreenSize);
  });
  </script>
  
  <style scoped>
  .app {
    background-color: #f3f3f3;
    min-height: 100vh;
  }
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.187);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
  }
  
  .content {
    padding-left: 330px;
    padding-top: 50px;
  }
  
  .burger {
    display: none;
    cursor: pointer;
    margin-bottom: 40px;
  }
  
  .desktop {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 280px;
    height: 100vh;
    background-color: #204887;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: translateX(-100%);
  }
  
  .desktop.is-visible {
    transform: translateX(0); 
  }

  .startContent{
    background-color: white;
    min-height: 100vh;
        border-radius: 16px;
    padding: 50px;
  }
  
  @media all and (max-width: 1024px) {
    .content {
      padding-left: 16px;
      padding-right: 16px;
    }
  
    .burger {
      display: block;
    }

    .startContent{
        padding: 24px;
    }
  }
  </style>
  