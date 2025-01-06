<template>
    <MainLayout>
        <div class="messages-container">
            <!-- Left sidebar -->
            <div class="sidebar">
                <h2 class="sidebar-title">Messages</h2>

                <!-- Message list -->
                <div class="message-list">
                    <label v-for="msg in messagesList" :key="msg.id" class="message-item">
                        <input type="radio" name="message" :value="msg.id" v-model="selectedMessage">
                        <div class="message-content-wrapper">
                            <h3>
                                {{ msg.title }}
                                <span class="time">{{ msg.time }}</span>
                            </h3>
                            <p class="from">From: {{ msg.from }}</p>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Main chat area -->
            <div class="chat-area">
                <div class="date-header">{{ currentMessage?.time || 'Today' }}</div>

                <!-- Message bubble -->
                <div class="message-bubble" v-if="currentMessage">
                    <div class="avatar">{{ currentMessage.avatar }}</div>
                    <div class="message-content">
                        <p>{{ currentMessage.content }}</p>
                        <p class="signature" v-html="currentMessage.signature"></p>
                    </div>
                </div>

                <!-- AI typing indicator -->
                <div v-if="isAiResponding" class="message-bubble">
                    <div class="avatar">🤖</div>
                    <div class="message-content typing">
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                    </div>
                </div>

                <!-- Modify message bubbles to handle AI messages -->
                <div v-for="message in messages" :key="message.id" class="message-bubble"
                    :class="{ sent: !message.isAi }">
                    <div class="avatar">{{ message.avatar }}</div>
                    <div class="message-content" :class="{ 'ai-message': message.isAi }">
                        <p v-html="message.text"></p>
                    </div>
                </div>

                <!-- Message input section -->
                <div class="message-input">
                    <textarea v-model="messageText" placeholder="Write Your Message"
                        @keyup.enter.exact="sendMessage"></textarea>
                    <div class="toolbar">
                        <div class="formatting-buttons">
                            <input 
                                type="file" 
                                ref="fileInput" 
                                @change="handleFileUpload" 
                                accept="image/*,.pdf,.doc,.docx"
                                class="hidden-input"
                            >
                            <button @click="$refs.fileInput.click()">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_32_685)">
<path d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5C10.29 21.5 8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5C12.38 2.5 13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5C11.95 16.5 11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18C13.88 18 15 16.88 15 15.5V5C15 2.79 13.21 1 11 1C8.79 1 7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23C15.54 23 18 20.54 18 17.5V6H16.5Z" fill="#BDBCBC"/>
</g>
<defs>
<clipPath id="clip0_32_685">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>

                            </button>
                            <button @click="formatText('italic')"><i>
                                    <svg width="11" height="14" viewBox="0 0 11 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.6 6.79C9.57 6.12 10.25 5.02 10.25 4C10.25 1.74 8.5 0 6.25 0H0V14H7.04C9.13 14 10.75 12.3 10.75 10.21C10.75 8.69 9.89 7.39 8.6 6.79ZM3 2.5H6C6.83 2.5 7.5 3.17 7.5 4C7.5 4.83 6.83 5.5 6 5.5H3V2.5ZM6.5 11.5H3V8.5H6.5C7.33 8.5 8 9.17 8 10C8 10.83 7.33 11.5 6.5 11.5Z"
                                            fill="#BDBCBC" />
                                    </svg>

                                </i></button>
                            <button @click="formatText('underline')"><svg width="12" height="14" viewBox="0 0 12 14"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0V3H6.21L2.79 11H0V14H8V11H5.79L9.21 3H12V0H4Z" fill="#BDBCBC" />
                                </svg>
                            </button>
                            <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_32_702)">
                                        <path
                                            d="M2 17H4V17.5H3V18.5H4V19H2V20H5V16H2V17ZM3 8H4V4H2V5H3V8ZM2 11H3.8L2 13.1V14H5V13H3.2L5 10.9V10H2V11ZM7 5V7H21V5H7ZM7 19H21V17H7V19ZM7 13H21V11H7V13Z"
                                            fill="#BDBCBC" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_32_702">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_32_702)">
                                        <path
                                            d="M2 17H4V17.5H3V18.5H4V19H2V20H5V16H2V17ZM3 8H4V4H2V5H3V8ZM2 11H3.8L2 13.1V14H5V13H3.2L5 10.9V10H2V11ZM7 5V7H21V5H7ZM7 19H21V17H7V19ZM7 13H21V11H7V13Z"
                                            fill="#BDBCBC" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_32_702">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            
                            <!-- Add file upload button -->
                           
                        </div>
                        <div class="right-actions">
                            <div class="emoji-picker-container">
                                <svg @click="showEmojiPicker = !showEmojiPicker" width="18" height="18"
                                    viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18ZM13.5 9C14.33 9 15 8.33 15 7.5C15 6.67 14.33 6 13.5 6C12.67 6 12 6.67 12 7.5C12 8.33 12.67 9 13.5 9ZM6.5 9C7.33 9 8 8.33 8 7.5C8 6.67 7.33 6 6.5 6C5.67 6 5 6.67 5 7.5C5 8.33 5.67 9 6.5 9ZM10 15.5C12.33 15.5 14.31 14.04 15.11 12H4.89C5.69 14.04 7.67 15.5 10 15.5Z"
                                        fill="#BDBCBC" />
                                </svg>
                                <!-- Simple emoji picker -->
                                <div v-if="showEmojiPicker" class="emoji-picker">
                                    <button v-for="emoji in ['😊', '😂', '❤️', '👍', '😎', '🎉']" :key="emoji"
                                        @click="addEmoji(emoji)">
                                        {{ emoji }}
                                    </button>
                                </div>
                            </div>

                            <svg width="4" height="14" viewBox="0 0 4 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                                    fill="#BDBCBC" />
                            </svg>

                            <button class="send-btn" @click="sendMessage">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import MainLayout from '~/layout/MainLayout.vue'
import { ref, computed } from 'vue'

// Message state
const messageText = ref('')
const messages = ref([])
const selectedMessage = ref(1)
const isAiResponding = ref(false)

// Text formatting functions
const formatText = (command) => {
    const textarea = document.querySelector('textarea')
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = messageText.value.substring(start, end)

    switch (command) {
        case 'bold':
            messageText.value = messageText.value.substring(0, start) + `**${selectedText}**` + messageText.value.substring(end)
            break
        case 'italic':
            messageText.value = messageText.value.substring(0, start) + `_${selectedText}_` + messageText.value.substring(end)
            break
        case 'underline':
            messageText.value = messageText.value.substring(0, start) + `<u>${selectedText}</u>` + messageText.value.substring(end)
            break
    }
}

// Send message function
const sendMessage = async () => {
    if (!messageText.value.trim()) return

    const userMessage = messageText.value.trim()
    messageText.value = ''

    // Add user message
    messages.value.push({
        id: Date.now(),
        text: userMessage,
        sender: 'You',
        avatar: 'YO',
        timestamp: new Date(),
        isAi: false
    })

    // Show AI is typing
    isAiResponding.value = true

    try {
        const aiResponse = await getAiResponse(userMessage)

        messages.value.push({
            id: Date.now(),
            text: aiResponse,
            sender: 'AI Assistant',
            avatar: '🤖',
            timestamp: new Date(),
            isAi: true
        })
    } catch (error) {
        console.error('Chat error:', error)
    } finally {
        isAiResponding.value = false
    }
}

// Add AI response function
const getAiResponse = async (question) => {
    try {
        // Replace with your actual AI API endpoint
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: messages.value.map(msg => ({
                    role: msg.isAi ? 'assistant' : 'user',
                    content: msg.text
                })),
                newMessage: question
            })
        })

        if (!response.ok) throw new Error('Failed to get AI response')
        const data = await response.json()
        return data.response

    } catch (error) {
        console.error('AI response error:', error)
        return "I apologize, but I'm having trouble connecting right now. Please try again."
    }
}

// Emoji picker state
const showEmojiPicker = ref(false)

// Add emoji to message
const addEmoji = (emoji) => {
    messageText.value += emoji
    showEmojiPicker.value = false
}

// Messages data structure
const messagesList = ref([
    {
        id: 1,
        title: 'Test Results',
        time: 'Today',
        from: 'Abdullah Neck',
        avatar: 'RJ',
        content: `Dear Neck, I've reviewed the results of your recent visual filed test. Everything looks normal, which is great news. Keep up the good work with your eye care routine. If you have any questions, don't hesitate to reach out.`,
        signature: 'Best Regards<br>Abdullah Neck'
    },
    {
        id: 2,
        title: 'Follow-Up Appointment',
        time: '2h ago',
        from: 'Sanwal Yaar..Yaar',
        avatar: 'JP',
        content: `Dear Sanwal, I've reviewed the results of your recent visual filed test. Everything looks normal, which is great news. Keep up the good work with your eye care routine. If you have any questions, don't hesitate to reach out.`,

        signature: 'Regards<br>Sanwal Senior Developer'
    },
    {
        id: 3,
        title: 'Follow-Up Appointment',
        time: '2h ago',
        from: 'Kashif Khokhar',
        avatar: 'JP',
        content: `Dear Kashif, I've reviewed the results of your recent visual filed test. Everything looks normal, which is great news. Keep up the good work with your eye care routine. If you have any questions, don't hesitate to reach out.`,

        signature: 'Regards<br>Kashif Khokhar'
    },
    {
        id: 4,
        title: 'Follow-Up Appointment',
        time: '2h ago',
        from: 'Shaheer Naniwala',
        avatar: 'JP',
        content: `Dear Shaheer, I've reviewed the results of your recent visual filed test. Everything looks normal, which is great news. Keep up the good work with your eye care routine. If you have any questions, don't hesitate to reach out.`,

        signature: 'Regards<br>Shaheer Naniwala'
    },
    {
        id: 5,
        title: 'Follow-Up Appointment',
        time: '2h ago',
        from: 'Azhar Mushtaq',
        avatar: 'JP',
        content: `Dear Azhar, I've reviewed the results of your recent visual filed test. Everything looks normal, which is great news. Keep up the good work with your eye care routine. If you have any questions, don't hesitate to reach out.`,

        signature: 'Regards<br>Azhar Nondiyala'
    },
    // Add more messages as needed
])

// Computed property to get current selected message
const currentMessage = computed(() =>
    messagesList.value.find(msg => msg.id === selectedMessage.value)
)

// Add these styles:
const fileInput = ref(null)
const selectedFile = ref(null)

// Add this function
const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    selectedFile.value = file

    // If it's an image, you might want to create a preview
    if (file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => {
            messages.value.push({
                id: Date.now(),
                text: `<img src="${e.target.result}" alt="uploaded image" style="max-width: 200px;">`,
                sender: 'You',
                avatar: 'YO',
                timestamp: new Date(),
                isAi: false
            })
        }
        reader.readAsDataURL(file)
    } else {
        // For other file types, just show the file name
        messages.value.push({
            id: Date.now(),
            text: `Attached file: ${file.name}`,
            sender: 'You',
            avatar: 'YO',
            timestamp: new Date(),
            isAi: false
        })
    }

    // Optional: Upload to server
    try {
        const formData = new FormData()
        formData.append('file', file)
        
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        })
        
        if (!response.ok) throw new Error('Upload failed')
        
        // Clear the file input
        event.target.value = ''
        selectedFile.value = null
        
    } catch (error) {
        console.error('File upload error:', error)
        // Handle error appropriately
    }
}
</script>


<style scoped>
.messages-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #F3F3F3;
}

.sidebar {
    width: 100%;
    background-color: white;
    border-bottom: 1px solid #eee;
    padding: 15px;
    height: 100vh;
    border-radius: 16px;
}

.sidebar h2 {
    font-size: 20px;
}

.message-list {
    margin-top: 50px;
}

.sidebar-title {
    color: #14428c;
    margin-bottom: 20px;
}

.message-list .message-item {
    position: relative;
    cursor: pointer;
    display: block;
}

.message-item input[type="radio"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.message-content-wrapper {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    margin-bottom: 10px;
    background-color: white;
    transition: all 0.3s ease;
}

/* Style for selected radio card */
.message-item input[type="radio"]:checked+.message-content-wrapper {
    background-color: #F4F9FD;
    border: 1px solid #5EADFF;
}

/* Remove the previous first-child styling since we're using radio now */
.message-list .message-item:first-child .message-content-wrapper {
    background-color: inherit;
    border: 1px solid #eee;
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
    background-color: #F3F3F3;
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
    position: sticky;
    bottom: 0px;
}

textarea {
    width: 98%;
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
.formatting-buttons,
.right-actions {
    height: 100%;
    display: flex;
    align-items: center;
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

/* Add these new styles */
.emoji-picker-container {
    position: relative;
}

.emoji-picker {
    position: absolute;
    bottom: 100%;
    right: 0;
    background: white;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-bottom: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.emoji-picker button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 5px;
}

.sent {
    flex-direction: row-reverse;
}

.sent .message-content {
    background-color: #F4F9FD;
}

.typing {
    padding: 12px 20px;
}

.typing-dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 4px;
    background: #14428c;
    border-radius: 50%;
    animation: typing 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {

    0%,
    60%,
    100% {
        transform: translateY(0);
    }

    30% {
        transform: translateY(-6px);
    }
}

.ai-message {
    background-color: #f0f7ff;
    border-left: 3px solid #14428c;
}

.hidden-input {
    display: none;
}

.file-preview {
    padding: 8px;
    background-color: #f5f5f5;
    border-radius: 4px;
    margin-top: 8px;
}

.preview-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
}

.remove-file {
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    font-size: 18px;
    padding: 0 4px;
}
</style>