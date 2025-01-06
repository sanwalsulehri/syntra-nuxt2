<template>
  <div class="app">
    <!-- Sidebar -->
    <div :class="['desktop', { 'is-visible': isSidebarVisible }]">
      <div v-if="isSidebarVisible" @click="toggleSidebar" class="overlay"></div>
      <Sidebar />
    </div>

    <!-- Content Area -->
    <div class="content" :style="{ paddingLeft: contentPadding }">
      <!-- Hamburger Menu -->
      <div class="burger" @click="toggleSidebar">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4" />
        </svg>
      </div>

      <!-- Main Content -->
      <div class="startContent" :class="{ 'transparent-bg': isMessagesRoute }">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from 'vue-router';
import Sidebar from "./Sidebar.vue";

const route = useRoute();
const isSidebarVisible = ref(false);

const contentPadding = computed(() => {
  return ['Messages', 'TestResults'].includes(route.name) ? '100px' : '330px';
});

const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};

const isMessagesRoute = computed(() => {
  return route.name === 'Messages';
});
</script>


<style scoped>
/* App Wrapper */
.app {
  background-color: #f3f3f3;
  min-height: 100vh;
}

/* Overlay for Small Screens */
.overlay {
  background-color: rgba(0, 0, 0, 0.187);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}

/* Content Section */
.content {
  padding-top: 50px;
}

/* Hamburger Menu */
.burger {
  display: none;
  cursor: pointer;
  margin-bottom: 40px;
}

/* Sidebar */
.desktop {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: #204887;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
}

.desktop.is-visible {
  transform: translateX(0);
}

.startContent {
  background-color: white;
  min-height: 100vh;
  border-radius: 16px;
  padding: 20px;
}

.startContent.transparent-bg {
  background-color: transparent;
}

@media (max-width: 1024px) {
  .content {
    padding-left: 16px !important;
    padding-right: 16px;
  }

  .burger {
    display: block;
  }

  .startContent {
    padding: 24px;
  }

  .desktop {
    transform: translateX(-100%);
  }

  /* .desktop.is-visible {
    transform: translateX(0);
  } */
}
</style>
