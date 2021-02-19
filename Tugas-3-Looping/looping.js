console.log("No 1")
console.log("LOOPING PERTAMA")
var i=2
while(i<=20){
    console.log(i+" - I love coding")
    i+=2;
}

console.log("LOOPING KEDUA")
var i=20
while(i>=2){
    console.log(i+" - I will become a mobile developer")
    i-=2;
}
console.log("---------------")
console.log("No 2")
for(i=1;i<=20;i+=1){
    if(i%3==0&&i%2==1){
        console.log(i+" - I Love Coding")
    }
    else if(i%2==0){
        console.log(i+" - Berkualitas")
    }
    else if(i%2==1){
        console.log(i + " - Santai")
    }
}

console.log("---------------")

console.log("No 3")
for(i=0;i<=3;i+=1){
    for(j=0;j<=7;j+=1){
        process.stdout.write("#")
    }
    console.log("")

}
console.log("---------------")
console.log("No 4")
for (i=1;i<=8;i++){
    for (j=1;j<=8;j++){
        if (i%2==1){
            if(j%2==1){
                process.stdout.write(" ")
            }
            else{
                process.stdout.write("#")
            }
            
        }else{
            if(j%2==1){
                process.stdout.write("#")
            }
            else{
                process.stdout.write(" ")
            }
            
        }
        
    }console.log("")
}