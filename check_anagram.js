function checkAnagram(string1,string2){
    let len1 = string1.length;
    let len2= string2.length;
    
    
    if(len1!=len2){
        return false;
    }
    string1.sort();
    string2.sort();
    for (let i = 0; i < len1; i++){
        if (string1[i] != string2[i]){
            return false;
        }
    return true;
    }
}
let string1=['M', 'a', 'r', 'Y' ];
let string2=['A', 'r', 'm' ,'Y'];

    if (checkAnagram(string1, string2))
        console.log("Anagram");
    else
        console.log("Not an Anagram");
