const hr =document.getElementById('hr')
const tr =document.getElementById('tr')
const sn =document.getElementById('sn')


setInterval(function(){
    let date =new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let day = date.toLocaleDateString()
  
    
     hours = hours>12 ? hours-12 :hours
     hours = hours<10 ?'H: '+ '0 '+ hours :'H: '+  hours 
     minute = minute<10 ?'M: '+ '0' + minute :'M: '+  minute
     second = second<10 ? '0' + second : second
     
    hr.innerHTML =hours
    tr.innerHTML=minute
    sn.innerHTML=second
},1000)