var a=12;
console.log(a);
var arr=[1,2,3,4,5];
console.log(arr);
function f1(a,b) {
    if(a>b){
        console.log(a+b);
    }
    else{
        console.log(b-a);
    }
}
f1(2,3);
arr.push(6);
console.log(arr);
var arr1=[1,2,3,4,5,6,7,8,9,10];
console.log(arr1);
for(var j=0;j<arr1.length;j++){
    if(arr1[j]%2==0){
        console.log(arr1[j]);
    }
}
var are=[1,2,3,4,5,6,7,8,9,10];
console.log(are);

for(var i=0;i<are.length;i++){
    var b=true;
    for(var j=2;j<i;j++){
        if(are[i]%2==0){
            b=false;
            break;
        }
    }
    if(b){
        console.log(are[i]);
    }
    
}
