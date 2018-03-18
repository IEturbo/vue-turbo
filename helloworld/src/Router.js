import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from './tranistion.vue'
Vue.use(VueRouter)

const Home = {
        template: `
        <div>
          <h2>Home</h2>
          <p>This is Home</p>
        </div>
    `
    }
    // const Parent = {
    //     template: `
    //         <div>
    //           <h2>Home</h2>
    //           <p>This is Parent</p>
    //         </div>
    //     `
    // }


const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Home },
        { path: '/Parent', component: Parent },
    ]
})

new Vue({
    router,
    data() {
        return {
            aaa: 'fade',
        }
    },
    template: `
    <div id="app">
        <h2>This is transition</h2>
        <ul>
            <li> <router-link to='/'>/</router-link></li>
            <li> <router-link to='/Parent'>/parent</router-link></li>
        </ul>
        <transition :name='aaa' mode='out-in'>
            <router-view></router-view> 
        </transition>
    </div>
    `,
    watch: {
        "$route" (to, from) {
            console.log(to);

            console.log(from);
            if (from.path == './Parent') {
                this.aaa = 'fade1'
            } else {
                this.aaa = 'fade2'
            }
        }
    }
}).$mount('#app')