function summ() {
    let didgit1 = Number(prompt("1st number")); // Number with capital letter
    let didgit2 = Number(prompt("2st number"));
    let didgit3 = Number(prompt("3st number"));
   
    if ((didgit1 >= 0) || (didgit2 >= 0) || (didgit3 >=0)) {
        console.log ('summ', didgit1+didgit2+didgit3);}
    if ((didgit1 >= 0) && (didgit2 >= 0) && (didgit3 >=0)) {
        console.log ('mult', didgit1*didgit2*didgit3);}
    else {console.log("Negatives")};
}
summ(); 
