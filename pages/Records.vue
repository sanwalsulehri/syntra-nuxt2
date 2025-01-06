<template lang="">
    <MainLayout>
    <div>
        <div class="container">
  <div class="header">
    <div class="patient-info">
      <p class="label">Patient Name</p>
      <div>
        <h2 class="patient-name">David Thompson</h2>
        <p class="patient-id">ID: ORTHO-67890</p>
      </div>
    </div>

    <div class="info-section">
      <div>
        <p class="label">Info</p>
        <div class="info-details">
          <p><span class="info-key">DOB:</span> 1978-03-15</p>
          <p><span class="info-key">SEX:</span> M</p>
          <p><span class="info-key">HEIGHT:</span> 171 CM</p>
        </div>
      </div>
    </div>

    <div class="allergies-section">
      <div>
        <p class="label">Allergies</p>
        <p class="allergies-detail">Penicillin</p>
      </div>
    </div>
  </div>

  <div class="navigation">
    <nav>
      <a href="#" class="active">Current Health Information</a>
      <a href="#">Orthopedic Records</a>
      <a href="#">Clinical Notes</a>
      <a href="#">Tests</a>
      <a href="#">Diagnosis</a>
      <a href="#">Medication List</a>
    </nav>
  </div>

  <div class="records">
    <div class="record-card">
      <div class="record-info">
        <div class="record-item">
          <span class="record-label">Blood Pressure</span>
          <span class="record-value">118/78</span>
        </div>

        <div class="record-item">
          <span class="record-label">Blood Pressure</span>
          <span class="record-value">118/78</span>
        </div>

        <div class="record-item">
          <span class="record-label">Blood Pressure</span>
          <span class="record-value">118/78</span>
        </div>

        <div class="record-item">
          <span class="record-label">Blood Pressure</span>
          <span class="record-value">118/78</span>
        </div>

        <div class="download-button">
          <button>Download Health Records</button>
        </div>
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
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #d1d5db;
  background-color: #e2e8f0;
  padding: 3.5rem 40px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.header .label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
}

.patient-info .patient-name {
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
}

.patient-info .patient-id {
  font-size: 0.875rem;
  color: #6b7280;
}

.info-section,
.allergies-section {
  border-left: 1px solid #d1d5db;
  padding-left: 1rem;
}

.info-details p,
.allergies-detail {
  font-size: 0.875rem;
  color: #374151;
}

.info-key {
  font-weight: 600;
}

.navigation nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border-top: 1px solid #d1d5db;
  background-color: #f9fafb;
  padding: 1rem 1.5rem;
}

.navigation a {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-decoration: none;
  padding-bottom: 0.5rem;
}

.navigation a.active {
  border-bottom: 2px solid #fb923c;
  color: #111827;
}

.records {
  padding: 1rem;
}

.record-card {
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 1.5rem;
}

.record-info {
  max-width: 454px;
}

.record-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid #d1d5db;
  background-color: #f9faff;
  padding: 0 1.25rem;
}

.record-label {
  font-weight: 500;
  color: #797272;
}

.record-value {
  font-weight: 500;
  color: #1e1e1e;
}

.download-button {
  display: flex;
  justify-content: flex-end;
  padding-top: 0.5rem;
}

.download-button button {
  font-size: 14px;
  border-radius: 8px;
  background-color: #204887;
  color: white;
  padding: 0.5rem 1.25rem;
  border: none;
  cursor: pointer;
}

.download-button button:hover {
  background-color: #1b3b71;
}

</style>