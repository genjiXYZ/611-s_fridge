
import Toast from 'vue-toastification'
// Toast styles

import  Vue from 'vue'
import 'vue-toastification/dist/index.css'
const notify_config = { 
	transition: 'Vue-Toastification__bounce',
	maxToasts: 3,
	newestOnTop: true,
	position: 'top-right',
	timeout: 2000,
	closeOnClick: true,
	pauseOnFocusLoss: true,
	pauseOnHover: false,
	draggable: true,
	draggablePercent: 0.7,
	showCloseButtonOnHover: false,
	hideProgressBar: true,
	closeButton: 'button',
	icon: true,
	rtl: false
}

Vue.use(Toast,notify_config)










