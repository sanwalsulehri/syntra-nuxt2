<template>
    <MainLayout>
      <div class="container">
  
  <!-- Alerts -->
  <div class="alert bg-orange">
      <div>
          <h3 class="alert-header">Injury Recovery Alert!</h3>
          <p class="alert-text">Time for a Check-in! It's been 6 months since your last injury. Schedule your follow-up to stay on track with your recovery.</p>
      </div>
      <div class="m">
          <button class="btn btn-primary">Book Follow-Up</button>
          <svg width="20" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_5_125)">
  <path d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z" fill="#323232"/>
  </g>
  <defs>
  <clipPath id="clip0_5_125">
  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  
      </div>
  </div>
  
  <div class="alert bg-blue">
      <div>
          <h3 class="alert-header">Physiotherapy Reminder</h3>
          <p class="alert-text">You have 3 physiotherapy sessions remaining covered by your insurance!</p>
      </div>
      <div class="m">
          <button class="btn btn-primary">Book Physio</button>
          <svg width="20" height="22" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_5_125)">
  <path d="M19 6.91L17.59 5.5L12 11.09L6.41 5.5L5 6.91L10.59 12.5L5 18.09L6.41 19.5L12 13.91L17.59 19.5L19 18.09L13.41 12.5L19 6.91Z" fill="#323232"/>
  </g>
  <defs>
  <clipPath id="clip0_5_125">
  <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
  </clipPath>
  </defs>
  </svg>
  
      </div>
  </div>
  
  <!-- Upcoming Appointments -->
  <div>
      <h2 class="header">Upcoming Appointments</h2>
  </div>
  
  <div class="appointments-container">
  
      <div class="appointment">
          <div class="appointment-info">
              <div class="status-indicator status-red"></div>
              <div>
                  <h3>Follow-Up</h3>
                  <p class="appointment-time">With: Dr. Smith</p>
              </div>
          </div>
          <p class="appointment-time">Time: 10:00 AM</p>
          <button class="btn-sec">Prepare For Appointment</button>
      </div>
  
      <div class="appointment">
          <div class="appointment-info">
              <div class="status-indicator status-green"></div>
              <div>
                  <h3>X-Ray</h3>
                  <p class="appointment-time">With: Dr. Johnson</p>
              </div>
          </div>
          <p class="appointment-time">Time: 2:30 PM</p>
          <button class="btn-sec">Prepare For Appointment</button>
      </div>
  
      <div class="appointment">
          <div class="appointment-info">
              <div class="status-indicator status-yellow"></div>
              <div>
                  <h3>Physiotherapy</h3>
                  <p class="appointment-time">With: Dr. Williams</p>
              </div>
          </div>
          <p class="appointment-time">Time: 11:15 AM</p>
          <button class="btn-sec">Prepare For Appointment</button>
      </div>
  
  </div>
  
  </div>
    </MainLayout>
  </template>
  
  <script setup>
  import MainLayout from '~/layout/MainLayout.vue'
  </script>
  
  <style scoped>
   .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 16px;
          }
  
          .alert, .appointment {
              background-color: #f9faff;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              padding: 16px;
              margin-bottom: 16px;
              display: flex;
              justify-content: space-between;
              gap: 5px;
          }
  
          .alert.bg-orange {
              background-color: #fff7ed;
              border-color: #ffedd5;
          }
  
          .alert.bg-blue {
              background-color: #F5F5F5;
              border-color: #dbeafe;
          }
  
          .alert-header {
              font-size: 16px;
              font-weight: 500;
              color: #000;
              margin-bottom: 10px;
          }
  
          .alert-text {
              color: #000;
              margin: 4px 0;
              font-size: 16px;
          }
          .m{
          gap: 20px;
          display: flex 
          }
          .btn-sec{
              display: inline-block;
              padding: 10px 20px;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
              text-align: center;
              transition: all 0.3s ease;
              margin-right: 20px;
              white-space: nowrap;
              color: #204887;
              border: 1px solid #204887;
              background-color: transparent;
              
          }
          .btn {
              display: inline-block;
              padding: 5px 30px;
              height: 45px;
              border-radius: 6px;
              font-size: 14px;
              cursor: pointer;
              text-align: center;
              transition: all 0.3s ease;
              margin-right: 20px;
              white-space: nowrap;
              max-width: 150px;
          }
  
          .btn-primary {
              background-color: #204887;
              color: #fff;
              border: none;
          }
  
          .btn-primary:hover {
              background-color: #1a3870;
              transform: scale(1.05);
          }
  
          .btn-secondary {
              color: #204887;
              border: 1px solid #204887;
              background-color: transparent;
          }
  
          .btn-sec:hover {
              background-color: #eff6ff;
              transform: scale(1.05);
          }
  
          .close-btn {
              background: none;
              border: none;
              color: #6b7280;
              cursor: pointer;
          }
  
          .close-btn:hover {
              color: #374151;
          }
  
          .appointments-container {
              background-color: #F5F5F5;
              border-radius: 8px;
              padding: 20px;
              min-height: 430px;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
  
          .appointment {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              align-items: center;
              gap: 16px;
              padding: 16px;
              background-color: #F9FAFF;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
  
          .appointment-info {
              display: flex;
              align-items: center;
              gap: 12px;
          }
  
          .appointment-info div {
              display: flex;
              flex-direction: column;
          }
  
          .status-indicator {
              width: 12px;
              height: 12px;
              border-radius: 50%;
          }
  
          .status-red {
              background-color: #ef4444;
          }
  
          .status-green {
              background-color: #22c55e;
          }
  
          .status-yellow {
              background-color: #eab308;
          }
  
          .appointment-time {
              font-size: 14px;
              color: #6b7280;
          }
  
          .header {
              font-size: 18px;
              font-weight: 500;
              color: #111827;
              margin-bottom: 16px;
              text-align: left;
              line-height: 40px;
          }
  
          @media (max-width: 768px) {
              .btn {
                  width: 100%;
              }
  
              .appointment {
                  flex-direction: column;
                  align-items: flex-start;
              }
  
              .alert {
                  flex-direction: column;
                  align-items: flex-start;
              }
  
              .alert div {
                  width: 100%;
              }
          }
  </style>