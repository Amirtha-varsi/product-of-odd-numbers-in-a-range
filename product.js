let m=parseInt(prompt("Enter a start limit"))
let n=parseInt(prompt("Enter a end limit"));
let prod=1;
    if(m>n){
        console.log("The start limit is greater than the end limit");
    }
    else{
        for(let i=m;i<=n;i++){
            if(i%2!=0){
                
                prod*=i;
               
            }
            
        }
        console.log("The product of odd integers: "+prod)
    }
       
    
    
