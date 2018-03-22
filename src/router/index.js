import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bancodedados from '@/components/Bancodedados'
import Cep from '@/components/Cep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/bancodedados',
    	name:'Bancodedados',
    	component: Bancodedados
    },
    {
      path:'/cep',
      name: 'Cep',
      component: Cep
    }
  ]
})
