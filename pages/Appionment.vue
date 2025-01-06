<template lang="">
    <MainLayout>
    <div>
        <div class="container">
  <div class="header">
    <h2 class="title">Upcoming Appointments</h2>
    <div class="buttons">
      <button class="button primary">Book New Appointment</button>
      <button class="button secondary">Upload Insurance Information</button>
    </div>
  </div>

  <div class="appointments">
    <div class="appointment">
      <div class="appointment-header">
        <div class="appointment-status">
          <div class="status-indicator red"></div>
          <div class="appointment-details">
            <h3>Follow-Upppp</h3>
            <p>With: Dr.Smith</p>
          </div>
        </div>
        <div class="appointment-time">
          <p>Time: 10:00 AM</p>
        </div>
        <button class="prepare-button">Prepare For Appointment</button>
      </div>
    </div>

    <div class="appointment">
      <div class="appointment-header">
        <div class="appointment-status">
          <div class="status-indicator green"></div>
          <div class="appointment-details">
            <h3>X-Ray</h3>
            <p>With: Dr.Johnson</p>
          </div>
        </div>
        <div class="appointment-time">
          <p>Time: 02:30 PM</p>
        </div>
        <button class="prepare-button">Prepare For Appointment</button>
      </div>
    </div>

    <div class="appointment">
      <div class="appointment-header">
        <div class="appointment-status">
          <div class="status-indicator yellow"></div>
          <div class="appointment-details">
            <h3>Physiotherapy</h3>
            <p>With: Dr.Williams</p>
          </div>
        </div>
        <div class="appointment-time">
          <p>Time: 11:15 AM</p>
        </div>
        <button class="prepare-button">Prepare For Appointment</button>
      </div>
    </div>
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
  padding: 20px;
  margin: 0 auto;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
}

.title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #333;
}

.buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.primary {
  background-color: #204887;
  color: white;
}

.primary:hover {
  background-color: #1e3b73;
}

.secondary {
  background-color: white;
  border: 1px solid #204887;
  color: #204887;
}

.secondary:hover {
  background-color: #e0f1ff;
  color: white;
}

/* Appointment Section */
.appointments {
  background-color: #f5f5f5;
  min-height: 430px;
  border-radius: 8px;
  padding: 20px;
}

.appointment {
  background-color: #f9fafb;
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}

.appointment-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.appointment-status {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.status-indicator {
  width: 12px;
  height: 12px;
  margin-top: 17px;
  border-radius: 50%;
}

.red {
  background-color: #f44336;
}

.green {
  background-color: #4caf50;
}

.yellow {
  background-color: #ffeb3b;
}

.appointment-details h3 {
  font-weight: 500;
  color: #333;
}

.appointment-details p {
  font-size: 0.875rem;
  color: #666;
}

.appointment-time p {
  font-size: 0.875rem;
  color: #666;
}

.prepare-button {
  padding: 0.5rem 1rem;
  border: 1px solid #204887;
  background-color: white;
  color: #204887;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.prepare-button:hover {
  background-color: #e0f1ff;
}

</style>