<template>
    <MainLayout>
  <div class="billing-summary">
    <h2>Billing Summary</h2>
    <div class="summary-cards">
      <div class="card">
        <div class="card-content">
          <div class="title">Total Outstanding</div>
          <div class="subtitle">Due in 2 days</div>
          <div class="amount-sum">$1150.89</div>
        </div>
        <div class="card-content">
          <div class="title">Last payment</div>
          <div class="subtitle">(2024-02-10)</div>
          <div class="amount-sum">$200</div>
        </div>
        <button class="make-payment">Make Payment</button>
      </div>
    </div>

    <div class="details">
      <div class="outstanding-bills">
        <h3>Outstanding Bills</h3>
        <div class="bill-items">
          <div class="bill-item">
            <div class="bill-title">Initial Orthopedic Consultation - 2024-03-15</div>
            <div class="bill-info">
              <div class="bill-details">
                <div class="amount">
                  <span class="label">Amount</span>
                  <span class="value">$200.00</span>
                </div>
                <div class="due-date">
                  <span class="label">Due Date</span>
                  <span class="value">2024-04-15</span>
                </div>
              </div>
              <button class="pay-btn">Pay</button>
            </div>
          </div>
          <!-- Repeat for other bills -->
          <div class="bill-item">
            <div class="bill-title">Initial Orthopedic Consultation - 2024-03-15</div>
            <div class="bill-info">
              <div class="bill-details">
                <div class="amount">
                  <span class="label">Amount</span>
                  <span class="value">$200.00</span>
                </div>
                <div class="due-date">
                  <span class="label">Due Date</span>
                  <span class="value">2024-04-15</span>
                </div>
              </div>
              <button class="pay-btn">Pay</button>
            </div>
          </div>

          <div class="bill-item">
            <div class="bill-title">Initial Orthopedic Consultation - 2024-03-15</div>
            <div class="bill-info">
              <div class="bill-details">
                <div class="amount">
                  <span class="label">Amount</span>
                  <span class="value">$200.00</span>
                </div>
                <div class="due-date">
                  <span class="label">Due Date</span>
                  <span class="value">2024-04-15</span>
                </div>
              </div>
              <button class="pay-btn">Pay</button>
            </div>
          </div>
        </div>
      </div>

      <div class="billing-history">
        <div class="history-header">
          <h3>Billing History</h3>
          <button class="download-btn">Download All</button>
        </div>
        <div class="history-table">
          <div class="table-header">
            <div class="checkbox-cell">
              <input type="checkbox" />
            </div>
            <div>Invoice</div>
            <div>Amount</div>
            <div>Date</div>
            <div>Status</div>
          </div>
          <div class="table-row">
            <div class="checkbox-cell">
              <input type="checkbox" />
            </div>
            <div>Consultation</div>
            <div>$200</div>
            <div>2024-02-10</div>
            <div><span class="status-paid">Paid</span></div>
          </div>
          <div class="table-row">
            <div class="checkbox-cell">
              <input type="checkbox" />
            </div>
            <div>Dental Check up</div>
            <div>$800</div>
            <div>2024-02-10</div>
            <div><span class="status-paid">Paid</span></div>
          </div>
          <div class="table-row">
            <div class="checkbox-cell">
              <input type="checkbox" />
            </div>
            <div>Bone setting</div>
            <div>$1200</div>
            <div>2024-02-10</div>
            <div><span class="status-paid">Paid</span></div>
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
.billing-summary {
  margin: 0 auto;
  font-family: Arial, sans-serif;
}
.billing-summary h2{
    color: #204887;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
}

.summary-cards {
  margin-bottom: 24px;
}

.card {
  background-color: #F3F3F3;
  border-radius: 8px;
  padding: 24px 32px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

.title {
  font-size: 30px;
  font-weight: 400;
  color: #333;
  margin-bottom: 4px;
}

.subtitle {
  font-size: 20px;
  color: #1E1E1E;
  margin-bottom: 12px;
  margin-top: 10px;
}

.amount-sum {
  font-size: 40px;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 16px;
  margin-top: 30px;
}

.make-payment {
  background-color: #204887;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 40px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-top: 70px;
}

.make-payment:hover {
  background-color: #0f3472;
}

.details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.outstanding-bills, .billing-history {
  background: #F3F3F3;
  border-radius: 8px;
  padding: 20px;
}

h3 {
  color: #204887;
  font-size: 20px;
  font-weight: 500;
}

/* Outstanding Bills Styles */
.bill-items {
  display: flex;
  flex-direction: column;
}

.bill-item {
    background-color: white;
  padding: 10px 12px;
  margin: 0px;
  position: relative;
  margin-top: 10px;
  border-radius: 10px;
  border: 1px solid #D9D9D9;
}

.bill-title {
  color: #0066CC;
  line-height: 1;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
}

.bill-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin: 0px;
  padding: 0;
}

.bill-details {
  padding: 0;
  margin: 0;
}

.due-date {
  margin-bottom: 10px;
  display: flex;
}

.amount{
    margin: 0px;
    display: flex;
    margin-bottom: 10px;
}

.label {
  color: #524E4E;
  font-size: 14px;
  font-weight: 400;
  width: 75px;
}

.value {
  color: #323232;
  font-weight: 600;
  font-size: 14px;
  margin-left: 20px;
}

.pay-btn {
  background: white;
  border: 1px solid #204887;
  color: #204887;
  padding: 8px 30px;
  border-radius: 4px;
  cursor: pointer;
}

.pay-btn:hover {
  background: #f5f8ff;
}

/* Billing History Styles */
.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.download-btn {
  background: white;
  border: 1px solid #204887;
  color: #204887;
  padding: 10px 60px;
  border-radius: 4px;
  cursor: pointer;
}

.history-table {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.table-header, .table-row {
  display: grid;
  grid-template-columns: 40px 1fr 100px 100px 100px;
  align-items: center;
  padding: 14px 0;
  color: #B2B7D0;
  background-color: white;
}

.table-row > div:nth-child(2) {
  color: #797272;
}

.checkbox-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-cell input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #204887;
}

.checkbox-cell input[type="checkbox"]:hover {
  transform: scale(1.1);
  transition: transform 0.2s ease;
}

.status-paid {
  background: #C8FFE0;
  color: #00B341;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
  }

  .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
    padding: 16px;
  }

  .make-payment {
    margin-top: 20px;
    width: 100%;
  }

  .title {
    font-size: 24px;
  }

  .subtitle {
    font-size: 16px;
  }

  .amount-sum {
    font-size: 32px;
    margin-top: 15px;
  }

  /* Billing History Table Responsive */
  .table-header, .table-row {
    grid-template-columns: 30px 2fr 1fr 1fr 1fr;
    font-size: 14px;
    padding: 10px 5px;
  }

  .download-btn {
    padding: 8px 20px;
    font-size: 14px;
  }

  /* Outstanding Bills Responsive */
  .bill-info {
    flex-direction: column;
    gap: 10px;
  }

  .pay-btn {
    width: 100%;
    margin-top: 10px;
  }

  .bill-title {
    font-size: 14px;
  }
}

/* Add smaller screen breakpoint */
@media (max-width: 480px) {
  .table-header, .table-row {
    grid-template-columns: 30px 1fr 80px;
  }

  .table-header > div:nth-child(4),
  .table-header > div:nth-child(5),
  .table-row > div:nth-child(4),
  .table-row > div:nth-child(5) {
    display: none;
  }

  .history-header {
    flex-direction: column;
    gap: 10px;
  }

  .download-btn {
    width: 100%;
  }

  .billing-summary h2 {
    font-size: 18px;
  }

  .card-content {
    width: 100%;
  }
}
</style>