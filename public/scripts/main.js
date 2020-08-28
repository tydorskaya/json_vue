import Vue from "vue/dist/vue";
import users from "./../users.json";

export default new Vue({
    el: '#app',
    data: {
        users: users,
    },
    methods: {
      
    },
    created() {
        console.log(this.users)
    }
});