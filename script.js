const secondHand = document.querySelector('.seconds-hand');
const minutesHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360 )+ 90;
    secondHand.style.transform =`rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesdegree =((minutes/60)* 360) +90;
    minutesHand.style.transform =`rotate(${minutesdegree}deg)`;
    
    const hours = now.getHours();
    const hourDegree  = ((hours/12)* 360) + 90;
    hourHand.style.transform =`rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000); 