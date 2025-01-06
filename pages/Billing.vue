<template>
  <div class="billing-summary">
    <h2>Billing Summary</h2>
    <div class="summary-cards">
      <div class="card">
        <div class="card-content">
          <div class="title">Total Outstanding</div>
          <div class="subtitle">Due in 2 days</div>
          <div class="amount">$1150.89</div>
        </div>
        <div class="card-content">
          <div class="title">Last payment</div>
          <div class="subtitle">(2024-02-10)</div>
          <div class="amount">$200</div>
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
</template>

<script>
export default {
  // Add any necessary script logic here
}
</script>

<style scoped>
.billing-summary {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
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

.amount {
  font-size: 40px;
  font-weight: 600;
  color: #1E1E1E;
  margin-bottom: 16px;
  margin-top: 40px;
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
  color: #333;
  margin-bottom: 20px;
}

/* Outstanding Bills Styles */
.bill-items {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;

}

.bill-item {
  padding-bottom: 15px;
}

.bill-title {
  color: #0066CC;
  line-height: 1;
  margin: 0;
  padding: 0;
}

.bill-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}

.bill-details {
  display: block;
}

.amount, .due-date {
  margin-bottom: 8px;
  display: flex;
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
  padding: 12px 30px;
  border-radius: 4px;
  cursor: pointer;
  height: fit-content;
  margin-top: 40px;
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

  .table-header, .table-row {
    grid-template-columns: 30px 1fr 80px 80px 80px;
    font-size: 0.9em;
  }

  .card {
    flex-direction: column;
    gap: 24px;
    padding: 20px;
  }

  .card-content {
    width: 100%;
  }

  .amount {
    font-size: 28px;
  }
}
</style>