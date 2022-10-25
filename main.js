function perimeter(length,width){
	return (length+width)*2

}


function ispositive(number){
	if (number>=0) {
		return true 
	}
	else {
		return false
	}
}


function isbetween0and1(number){
	if (number>0 && number<1){
		return true

	}
	else{
		return false
	}
}

console.log(perimeter(4,8))


console.log(ispositive(-4))

console.log(isbetween0and1(0.3))
