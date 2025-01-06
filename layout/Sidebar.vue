<template>
  <div :class="['sidebar', { 'messages-view': route.path === '/messages' || route.path === '/testresults' }]">
    <div>
      <router-link to="/">
        <h3 class="fake-logo" v-show="route.path === '/messages' || route.path === '/testresults'">S</h3>
        <img v-show="route.path !== '/messages' && route.path !== '/testresults'" :src="logo" class="logo" />
      </router-link>
      <div class="links">
        <div v-for="(item, index) in links" :key="index">
          <router-link :to="`/${item.link.toLowerCase()}`">
            <div class="link">
              <img :src="item.icon" class="img" alt="icon" />
              <span v-show="route.path !== '/messages' && route.path !== '/testresults'">{{ item.link }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>

    <div class="sidebar-bottom">
      <div v-for="(item, index) in bottomLink" :key="index">
        <router-link :to="item.link">
          <div class="link">
            <img :src="item.icon" class="img" />
            <span v-show="route.path !== '/messages' && route.path !== '/testresults'">{{ item.label }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import "../main.css";
import logo from "/logo.svg";

import dashoard from "/dashboard.svg";
import forms from "/forms.svg";
import medical from "/medical.svg";
import medication from "/medication.svg";
import test from "/test.svg";
import profile from "/profile.svg";
import message from "/message.svg";
import billing from "/billing.svg";
import logout from "/logout.svg";
import { useRoute } from 'vue-router';

const route = useRoute();

const links = [
  { icon: dashoard, link: "Dashboard" },
  { icon: forms, link: "Appointments & Forms" },
  { icon: medical, link: "Medical Records" },
  { icon: medication, link: "Medications" },
  { icon: test, link: "Test Results" },
];

const bottomLink = [
  {
    icon: profile,
    link: "#",
    label: "Profile",
  },
  {
    icon: message,
    link: "#",
    label: "Message",
  },
  {
    icon: billing,
    link: "#",
    label: "Billing",
  },
  {
    icon: logout,
    link: "#",
    label: "Logout",
  },
];
</script>

<style scoped>
.sidebar {
  width: 280px;
  height: 100vh;
  background-color: #204887;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
  z-index: 99999999;
  overflow: auto;
}

.fake-logo{
  color: white;
  text-align: center;
  padding-top: 20px;
}

.sidebar.collapsed {
  width: 60px;
}

.logo {
  width: 100%;
  padding: 10px;
  transition: opacity 0.3s ease;
}

.links {
  padding: 20px 12px;
}

.link {
  padding: 12px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 600;
  color: white;
  border-radius: 16px;
  transition: padding 0.3s ease;
  font-size: 16px;
}

.link img {
  width: 24px;
  height: 24px;
  fill: currentColor;

}



.link:hover {
  background-color: #fff;
  color: #204887;
}

.link:hover .img {
  color: red;
}

.sidebar.collapsed .link {
  justify-content: center;
  padding: 12px 8px;
}

.sidebar.collapsed .link span {
  display: none;
}

.sidebar-bottom {
  padding: 10px 5px;
}

.user {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: padding 0.3s ease;
}

.user img {
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 100%;
  object-fit: cover;
}

.user:hover {
  background-color: #4374c3;
}

.sidebar.collapsed .user {
  justify-content: center;
  padding: 12px 8px;
}

.sidebar.collapsed .user .details {
  display: none;
}

.user h1 {
  font-weight: 600;
  font-size: 14px;
}

.user h5 {
  font-weight: 400;
  font-size: 12px;
  padding-top: 1px;
}



@media all and (max-width: 1024px) {
  .sidebar {
    display: none;
  }
}

.sidebar.messages-view {
  width: fit-content !important;
  min-width: 60px;
  max-width: fit-content;
  padding: 0 5px;
}

.sidebar.messages-view .link {
  justify-content: center;
  padding: 12px 8px;
  width: fit-content;
}
</style>
