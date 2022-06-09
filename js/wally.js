const arrTop = document.querySelector('#arrTop');
const arrBottom = document.querySelector('#arrBottom');
const leg = document.querySelector('#leg');
const face = document.querySelector('#face');
const heightBox =  document.querySelector('#heightBox');

let currentHeight = 180;
const checkPoint = 160;

arrTop.addEventListener('click',()=>{
    currentHeight+=5;
    updateHeight();

})
arrBottom.addEventListener('click',()=>{
    currentHeight-=5;
    updateHeight();
})

function updateHeight(){
    heightBox.innerText=currentHeight;
    leg.style.height=currentHeight+'px';
    if(checkPoint>currentHeight){
        face.style.backgroundPosition ='right';
    }else{
        face.style.backgroundPosition ='left';
    }
}

