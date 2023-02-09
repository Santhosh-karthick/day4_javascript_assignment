function reverseString(string){
    return string.split(' ').map(function(word) { 
        return word.split('').reverse().join(''); 
    }).join(' ');
}
console.log(reverseString( 'Welcome to this Javascript Guide!'))