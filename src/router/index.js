import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import AddisAbaba from '../components/AddisAbaba.vue'
import Amhara from '../components/Amhara.vue'
import Tigray from '../components/Tigray.vue'
import Gambella from '../components/Gambella.vue'
import Harer from '../components/Harer.vue'
import Oromia from '../components/oromia.vue'
import Landing from '../page/Landing.vue'
// import HeaderTop from '../components/HeaderTop.vue'
// import HeroSlider from '../components/HeroSlider.vue'
// import FooterBar from '../components/FooterBar.vue'
// import Features from '../components/Features.vue'
// import Counters from '../components/Counters.vue'
// import About from '../components/About.vue'
// import Contact from '../components/Contact.vue'

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/home', name: 'Home', component: Home },
  { path: '/addis-ababa', name: 'AddisAbaba', component: AddisAbaba },
  { path: '/amhara', name: 'Amhara', component: Amhara },
  { path: '/oromia', name: 'Oromia', component: Oromia },
  { path: '/tigray', name: 'Tigray', component: Tigray },
  { path: '/gambella', name: 'Gambella', component: Gambella },
  { path: '/harer', name: 'Harer', component: Harer },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
