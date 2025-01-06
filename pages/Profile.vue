<template lang="">
    <MainLayout>
      <div class="dashboard">
  <!-- Left Panel -->
  <div class="info-panel">
    <div class="panel-header">
      <h2>Personal Information</h2>
      <button class="edit-btn">Edit</button>
    </div>

    <div class="info-section">
      <div class="info-group">
        <label>Name</label>
        <span>John Doe</span>
      </div>
      <div class="info-group">
        <label>Date Of Birth</label>
        <span>1980-05-15</span>
      </div>
      <div class="info-group">
        <label>Gender</label>
        <span>Male</span>
      </div>
      <div class="info-group">
        <label>Patient ID</label>
        <span>OPH-12345</span>
      </div>
    </div>

    <div class="info-section">
      <h3>Contact Information</h3>
      <div class="info-group">
        <label>Phone</label>
        <span>(555) 123-4567</span>
      </div>
      <div class="info-group">
        <label>Email</label>
        <span>John.doe@gmail.com</span>
      </div>
      <div class="info-group">
        <label>Address</label>
        <span>123 Main, St Avion, ST 12345</span>
      </div>
      <div class="info-group">
        <label>Emergency Contact</label>
        <span>(Wife) - (555) 567-7890</span>
      </div>
    </div>

    <div class="info-section">
      <h3>Additional Information</h3>
      <div class="info-group">
        <label>Preferred Language</label>
        <span>English</span>
      </div>
      <div class="info-group">
        <label>Occupation</label>
        <span>Product Designer</span>
      </div>
      <div class="info-group">
        <label>Insurance Provider</label>
        <span>Health Plus Insurance</span>
      </div>
      <div class="info-group">
        <label>Policy Number</label>
        <span>HP987654321</span>
      </div>
    </div>
  </div>

  <!-- Right Panel -->
  <div class="appointments-panel">
    <h2>Recent Appointments</h2>
    <div class="appointments-list">
      <!-- Appointment Card Template -->
      <div class="appointment-card">
        <div class="appointment-date">
          <div class="date">01 Dec,2024</div>
          <div class="time">09:00 AM</div>
        </div>
        <div class="appointment-type">Routine Check-Up</div>
        <div class="doctor">Dr. Joseph Gillian</div>
        <button class="notes-btn">Notes</button>
      </div>
      <!-- Repeat appointment card 2 more times -->
    </div>
    <button class="add-appointment-btn">Add Appointment</button>
  </div>
</div>

</MainLayout>
</template>
<script setup>
import MainLayout from '~/layout/MainLayout.vue'
</script>
<style scoped>
/* Container and layout styling */
/* Container and layout styling */
:root {
  --primary-color: #2B4570;
  --text-color: #333;
  --border-color: #E5E7EB;
  --background-gray: #F9FAFB;
}


.dashboard {
  display: flex;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Left Panel Styles */
.info-panel {
  flex: 0 0 360px;
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.panel-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.edit-btn {
  padding: 6px 16px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background: white;
  color: var(--primary-color);
  cursor: pointer;
}

.info-section {
  border-bottom: 1px solid var(--border-color);
  padding: 20px 0;
}

.info-section:last-child {
  border-bottom: none;
}

.info-section h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 16px 0;
}

.info-group {
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
}

.info-group label {
  color: #6B7280;
  font-size: 14px;
}

.info-group span {
  font-size: 14px;
}

/* Right Panel Styles */
.appointments-panel {
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.appointments-panel h2 {
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: 600;
}

.appointments-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.appointment-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}

.appointment-date {
  width: 120px;
}

.date {
  font-size: 14px;
  font-weight: 500;
}

.time {
  font-size: 12px;
  color: #6B7280;
}

.appointment-type {
  flex: 1;
  font-size: 14px;
  color: var(--primary-color);
}

.doctor {
  width: 150px;
  font-size: 14px;
}

.notes-btn {
  padding: 6px 12px;
  border: none;
  background: none;
  color: var(--primary-color);
  cursor: pointer;
  font-size: 14px;
}

.add-appointment-btn {
  margin-top: 24px;
  padding: 12px 24px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }
  
  .info-panel {
    flex: none;
    width: auto;
  }
}

</style>