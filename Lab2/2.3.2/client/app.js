var app = new Vue({
    el: '#app',
    data: {
        users: [],
        usersService: null,
        username: '',
        userCity: '',
        userId: 0,
        msg: ''
    },
    created: function () {
        this.usersService = users();
        this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
        add: function(){
            usersService = users();
            usersService.put(this.username,this.userCity).then(response => (this.msg = response.data));
            console.log(this.users);
            location.reload();
       },
       delete_user: function(){
            usersService = users();
            usersService.remove(this.userId).then(response => (this.msg = response.data));
            console.log(this.users);
            location.reload();
       },
        update: function () {
            usersService = users();
            this.add();
            this.delete_user();
            location.reload();
       }

    }
})