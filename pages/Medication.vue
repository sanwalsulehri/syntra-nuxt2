<template lang="">
    <MainLayout>
    <div>
        <div class="container">
  <h2 class="heading">Medication List</h2>

  <div class="content">
    <div class="card">
      <h3 class="card-heading">Atorvastatin</h3>

      <div class="info">
        <div class="info-item">
          <span class="info-label">Dosage</span>
          <span class="info-value">20mg</span>
        </div>

        <div class="info-item">
          <span class="info-label">Frequency</span>
          <span class="info-value">Once Daily</span>
        </div>

        <div class="info-item">
          <span class="info-label">Prescribed By</span>
          <span class="info-value">Dr.Lisa Patel</span>
        </div>

        <div class="info-item">
          <span class="info-label">Start Date</span>
          <span class="info-value">2023-09-22</span>
        </div>

        <div class="info-item">
          <span class="info-label">Notes</span>
          <span class="info-value">Take At Bedtime</span>
        </div>
      </div>
    </div>

    <div class="card">
      <h3 class="card-heading">Patient-Reported Medications</h3>

      <div class="info">
        <div class="info-item">
          <span class="info-value">Vitamin D</span>
        </div>

        <div class="info-item">
          <span class="info-value">1000 IU</span>
        </div>

        <div class="info-item">
          <span class="info-value">Once Daily</span>
        </div>

        <div class="info-notes">
          <span class="info-label">Notes</span>
        </div>

        <div class="remove-btn-wrapper">
          <button class="remove-btn">Remove</button>
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
  margin: 0 auto;
  max-width: 1408px;
  padding: 1rem;
}

.heading {
  margin-bottom: 0.75rem;
  font-size: 20px;
  font-weight: 500;
  color: #1E1E1E;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.card {
  border-radius: 8px;
  background-color: #F5F5F5;
  padding: 1.5rem;
}

.card-heading {
  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: 500;
  color: #1E1E1E;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 56px;
  max-width: 454px;
  border-bottom: 1px solid #D9D9D9;
  background-color: #F9FAFF;
  padding: 0.25rem 0.75rem;
}

.info-label {
  width: 33%;
  text-align: start;
  font-weight: 500;
  color: #797272;
}

.info-value {
  width: 67%;
  font-weight: 500;
  color: #1E1E1E;
}

.info-notes {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: 106.25px;
  max-width: 454px;
  border-bottom: 1px solid #D9D9D9;
  background-color: #F9FAFF;
  padding: 0.75rem;
}

.remove-btn-wrapper {
  display: flex;
  padding-top: 0.5rem;
}

.remove-btn {
  font-size: 14px;
  border-radius: 8px;
  background-color: #FF6B58;
  color: white;
  padding: 0.75rem 1.25rem;
  border: none;
  cursor: pointer;
}

.remove-btn:hover {
  background-color: #E65A47;
}

    
</style>