function nwd(a, b){
    while (b != 0){
        var c = a%b;
        a = b;
        b = c;
    }
    console.log(a);
}