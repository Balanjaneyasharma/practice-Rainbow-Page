sum=(m)=>{
    let count =0;
    for(let i = 1; i<m;i++){
        if(i%3==0 && i%5==0){
            count+=i;
        }
    }
    console.log('hi this nothing');
    return count;
}
console.log(sum(345676565));