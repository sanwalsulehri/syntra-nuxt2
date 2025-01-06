<template>
  <div class="messages-container">
    <!-- Left sidebar -->
    <div class="sidebar">
      <h2 class="sidebar-title">Messages</h2>
      
      <!-- Message list -->
      <div class="message-list">
        <div class="message-item">
          <h3>
            Test Results
            <span class="time">Today</span>
          </h3>
          <p class="from">From: Dr.Robert Johnson</p>
        </div>

        <div v-for="n in 4" :key="n" class="message-item">
          <h3>
            Follow-Up Appointment
            <span class="time">2h ago</span>
          </h3>
          <p class="from">From: Dr.John Paul</p>
        </div>
      </div>
    </div>

    <!-- Main chat area -->
    <div class="chat-area">
      <div class="date-header">Today</div>

      <!-- Message bubble -->
      <div class="message-bubble">
        <div class="avatar">RJ</div>
        <div class="message-content">
          <p>Dear John, I've reviewed the results of your recent visual filed test. Everything looks normal, which is great news. Keep up the good work with your eye care routine. If you have any questions, don't hesitate to reach out.</p>
          <p class="signature">Best Regards<br>Dr. Robert Johnson</p>
        </div>
      </div>

      <!-- Message input -->
      <div class="message-input">
        <textarea placeholder="Write Your Message"></textarea>
        <div class="toolbar">
          <div class="formatting-buttons">
            <button>B</button>
            <button><i>I</i></button>
            <button>U</button>
            <button>≡</button>
          </div>
          <div class="right-actions">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM13.5 9C14.33 9 15 8.33 15 7.5C15 6.67 14.33 6 13.5 6C12.67 6 12 6.67 12 7.5C12 8.33 12.67 9 13.5 9ZM6.5 9C7.33 9 8 8.33 8 7.5C8 6.67 7.33 6 6.5 6C5.67 6 5 6.67 5 7.5C5 8.33 5.67 9 6.5 9ZM10 15.5C12.33 15.5 14.31 14.04 15.11 12H4.89C5.69 14.04 7.67 15.5 10 15.5Z" fill="#BDBCBC"/>
            </svg>

            <svg width="4" height="14" viewBox="0 0 4 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z" fill="#BDBCBC"/>
            </svg>

            <button class="send-btn">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Messages'
}
</script>

<style scoped>
.messages-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  max-width: 80rem; /* 1280px */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.sidebar {
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #eee;
  padding: 20px;
}
.sidebar h2{
    font-size: 20px;
}
.message-list{
    margin-top: 50px;
}

.sidebar-title {
  color: #14428c;
  margin-bottom: 20px;
}

.message-list .message-item {
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: white;
  cursor: pointer;
}

.message-item h3 {
  margin: 0;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.message-item .from {
  color: #666;
  font-size: 16px;
  margin: 5px 0;
}

.message-item .time {
  color: #BDBCBC;
  font-size: 12px;
  margin-left: auto;
}

.chat-area {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.date-header {
  text-align: center;
  color: #666;
  margin-bottom: 20px;
}

.message-bubble {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #14428c;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.message-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 70%;
}

.message-content p {
  margin: 0;
  line-height: 1.5;
}

.signature {
  margin-top: 15px !important;
  color: #666;
}

.message-input {
  margin-top: auto;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
}

textarea {
  width: 100%;
  border: none;
  resize: none;
  padding: 10px;
  margin-bottom: 10px;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-top: 1px solid #eee;
}

.formatting-buttons button {
  background: none;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  color: #BDBCBC;
  font-size: 14px;
}

.right-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.right-actions svg {
  cursor: pointer;
}

.send-btn {
  background-color: #14428c !important;
  color: white;
  padding: 8px 20px !important;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

/* Add consistent spacing for formatting buttons */
.formatting-buttons {
  display: flex;
  gap: 5px;
  align-items: center;
}

/* Make both sections align properly */
.formatting-buttons, .right-actions {
  height: 100%;
  display: flex;
  align-items: center;
}

.message-list .message-item:first-child {
  background-color: #F4F9FD;
  border: 1px solid #5EADFF;
}

/* Responsive Design */
@media (min-width: 768px) {
  .messages-container {
    flex-direction: row;
  }

  .sidebar {
    width: 300px;
    border-right: 1px solid #eee;
    border-bottom: none;
  }
}

@media (max-width: 767px) {
  .message-bubble {
    flex-direction: column;
  }

  .message-content {
    max-width: 100%;
  }
}
</style>