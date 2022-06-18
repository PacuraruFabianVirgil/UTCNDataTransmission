function getFibonacci(n){
	if ((typeof n === 'number')&&(n>=1)&&(n<=10)) {
		var a = 1;
		var b = 1;
		var v = [];
		for(var i=1;i<=n;i++){
			v.push(a);
			var aux = b;
			b = a+b;
			a = aux;
		}
		return v;
	}
	else return " not allowed ";
}