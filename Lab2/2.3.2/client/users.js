function users() {

	put = async function(username,userCity){
        return axios.put("http://localhost:3000/users", {name:username,city:userCity});
    }
	
    remove = async function (id) {
        return axios.delete("http://localhost:3000/users/" + id, { id });
    }

    get = async function() {
        return axios.get("http://localhost:3000/users");
    }
	
    return {
        get: get, 
        put: put,
        remove: remove
    }
}
