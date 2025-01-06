<template>
    <MainLayout>
  <div class="test-results">
    <!-- Header Section -->
    <div class="header">
      <div class="search-section">
        <!-- Left side: Search with calendar -->
        <div class="search-wrapper">
          <div class="search-box">
            <span class="search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#666666"/>
              </svg>
            </span>
            <input type="search" placeholder="Search" />
            <button class="calendar-btn">
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 9.25H4V11.25H14V9.25ZM16 2.25H15V0.25H13V2.25H5V0.25H3V2.25H2C0.89 2.25 0.00999999 3.15 0.00999999 4.25L0 18.25C0 19.35 0.89 20.25 2 20.25H16C17.1 20.25 18 19.35 18 18.25V4.25C18 3.15 17.1 2.25 16 2.25ZM16 18.25H2V7.25H16V18.25ZM11 13.25H4V15.25H11V13.25Z" fill="#323232"/>
</svg>

            </button>
          </div>
        </div>

        <!-- Right side: Sort, Category, and Pagination -->
        <div class="pagination-container">
  <div class="sort-section">
    <span>Sort By</span>
    <span class="sort-category">Category</span>
    <span class="sort-icon">
        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.59 0.840088L6 5.42009L1.41 0.840088L0 2.25009L6 8.25009L12 2.25009L10.59 0.840088Z" fill="#323232"/>
</svg>

    </span>
  </div>
  <div class="page-info">
    <span>1–10 of 10</span>
    <button class="nav-button" disabled>❮</button>
    <button class="nav-button">❯</button>
  </div>
</div>

      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <div class="test-res">
          <p>Test Results</p>
        </div>
        <div class="test-btn">
        <button class="download">Download Results PDF</button>
        <button class="email">Email Results To Referring Physician</button>
        <button class="schedule">Schedule Follow-Up Consultation</button>
    </div>
      </div>

      <!-- Results Table -->
      <div class="results-table-container">
        <table class="results-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Test</th>
              <th>Result</th>
              <th>Reference Range</th>
              <th>Interpretation</th>
              <th>Test date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="result in testResults" :key="result.id">
              <td>{{ result.category }}</td>
              <td>{{ result.test }}</td>
              <td>{{ result.result }}</td>
              <td>{{ result.referenceRange }}</td>
              <td>{{ result.interpretation }}</td>
              <td>{{ result.testDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</MainLayout>
</template>

<script setup>
import MainLayout from '~/layout/MainLayout.vue'
import { ref } from 'vue'

const testResults = ref([
  {
    id: 1,
    category: 'Joint Health',
    test: 'Knee MRI',
    result: 'Meniscus tear detected',
    referenceRange: 'No Tear',
    interpretation: 'Medial meniscus tear, surgical evaluation\n recommended',
    testDate: '11/10/23'
  },
  {
    id: 2,
    category: 'Joint Health',
    test: 'Hip X-ray',
    result: 'Mild osteoarthritis',
    referenceRange: 'No joint space narrowing',
    interpretation: 'Early signs of hip osteoarthritis',
    testDate: '11/10/23'
  },
  {
    id: 3,
    category: 'Joint Health',
    test: 'Shoulder Ultrasound',
    result: 'Rotator cuff tendinopathy',
    referenceRange: 'No tendon abnormalities',
    interpretation: 'Chronic rotator cuff inflammation',
    testDate: '11/10/23'
  },
  {
    id: 4,
    category: 'Spine Health',
    test: 'Lumbar MRI',
    result: 'L4-L5 disc herniation',
    referenceRange: 'No Disc protrusion',
    interpretation: 'Significant disc herniation, possible nerve\n compression',
    testDate: '11/10/23'
  },
  {
    id: 5,
    category: 'Spine Health',
    test: 'Cervical X-ray',
    result: 'Cervical spondylosis',
    referenceRange: 'Normal vertebral alignment',
    interpretation: 'Degenerative changes in cervical spine',
    testDate: '11/10/23'
  },
  {
    id: 6,
    category: 'Joint Health',
    test: 'Knee MRI',
    result: 'Meniscus tear detected',
    referenceRange: 'No Tear',
    interpretation: 'Medial meniscus tear, surgical evaluation\n recommended',
    testDate: '11/10/23'
  }
])
</script>

<style scoped>
.test-results  {
  padding: 20px;
  background: #fff;
}
.test-btn{
    display: flex;
    gap: 10px;
}
.header {
  margin-bottom: 20px;
}

.search-section {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  margin-bottom: 10px;
}

.search-wrapper {
  display: flex;
  align-items: center;
  width: fit-content;
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  padding: 6px 8px;
  gap: 8px;
  background: #fff;
}

.search-icon {
  display: flex;
  align-items: center;
}

.search-box input {
  border: none;
  outline: none;
  padding: 0;
  font-size: 14px;
  width: 180px;
}

.calendar-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  border-left: 1px solid #E5E7EB;
  padding-left: 8px;
}

.controls-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sort-dropdown,
.category-dropdown {
  position: relative;
  display: flex;
  align-items: center;
}

.sort-dropdown select,
.category-dropdown select {
  appearance: none;
  padding: 8px 32px 8px 12px;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  font-size: 14px;
  background: #fff;
  color: #666;
  cursor: pointer;
  min-width: 100px;
}

.sort-dropdown svg,
.category-dropdown svg {
  position: absolute;
  right: 12px;
  pointer-events: none;
}

.pagination {
  display: flex;
  align-items: center;
  gap: 12px;
}

.page-info {
  color: #666;
  font-size: 14px;
  white-space: nowrap;
}

.page-controls {
  display: flex;
  gap: 4px;
}

.page-controls button {
  background: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  font-size: 18px;
  padding: 0;
}

.page-controls button:disabled {
  color: #ccc;
  border-color: #E5E7EB;
  cursor: not-allowed;
}

.page-controls button:not(:disabled):hover {
  background: #f5f5f5;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  min-height: 40px;
}

.action-buttons button {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.download {
  background: #204887;
  color: white;
  border: none;
}

.email, .schedule {
  background: white;
  border: 1px solid #14428c;
  color: #14428c;
}

.results-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.results-table th,
.results-table td {
  padding: 20px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
.results-table td{
    
    font-weight: 500;
  color: #524E4E;
  font-size: 16px;
}

.results-table th {
    color: #204887;
    font-size: 18px;
    font-weight: 600;
}

.results-table tr:hover {
  background-color: #f5f5f5;
}
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  border-radius: 4px;
  padding: 8px 16px;
  gap: 30px;
}

.sort-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sort-category {
  color: #0056b3;
  cursor: pointer;
  font-weight: bold;
  margin: 0 4px;
}

.sort-icon {
  font-size: 10px;
  color: #333;
  margin-left: 4px;
}

.page-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-button {
  border: none;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin: 0 2px;
}

.nav-button:disabled {
  cursor: not-allowed;
  color: #aaa;
}

.nav-button:hover:not(:disabled) {
  background-color: #eee;
}

.results-table td {
  white-space: pre-line;
  vertical-align: top;
  line-height: 1.5;
}

.results-table th:first-child,
.results-table td:first-child {
  border-right: 2px solid #E5E7EB;
}

.results-table th {
  color: #204887;
  font-size: 18px;
  font-weight: 600;
  padding: 20px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.results-table td {
  padding: 20px 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-weight: 500;
  color: #524E4E;
  font-size: 16px;
  white-space: pre-line;
  vertical-align: top;
  line-height: 1.5;
}

.test-res {
  display: flex;
  align-items: center;
  height: 100%;
}

.test-res p {
  margin: 0;
  font-size: 18px;
  color: #1E1E1E;
  font-weight: 600;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .search-section {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }

  .search-wrapper {
    width: 100%;
  }

  .search-box {
    width: 100%;
  }

  .search-box input {
    width: 100%;
  }

  .pagination-container {
    width: 100%;
    flex-direction: column;
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .test-btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }

  .test-btn button {
    width: 100%;
  }

  .results-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  .test-res {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .sort-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .page-info {
    flex-direction: column;
    align-items: center;
  }

  .search-section {
    padding: 8px;
  }

  .results-table th,
  .results-table td {
    padding: 12px 8px;
    font-size: 14px;
  }

  .test-res p {
    font-size: 18px;
  }
}

/* Add smooth transitions */
.search-section,
.action-buttons,
.test-btn,
.pagination-container,
.sort-section {
  transition: all 0.3s ease;
}

/* Make table scrollable on all screen sizes */
.results-table-container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* For smooth scrolling on iOS */
}

/* Optional: Add scroll indicators */
.results-table-container::-webkit-scrollbar {
  height: 6px;
}

.results-table-container::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.results-table-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

.results-table-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style> 