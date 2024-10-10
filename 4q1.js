Input=[1,2,3,4,5]
Output=Input.filter(a=>a%2==0).map(a=>a**2).reduce((a,c)=>a+c,0)
console.log(Output)