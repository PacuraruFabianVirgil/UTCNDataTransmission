var app = new Vue({
    el: '#app',
    data: {
        message: ''
    },
    methods: {
        process: function(){
            if(this.message=="123"){
                document.getElementById("write").innerHTML = "The message is 123";
            } else document.getElementById("write").innerHTML = "";
        }
    }
})