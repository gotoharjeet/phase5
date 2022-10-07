
// Mouse Circle
const mouseCircle=document.querySelector(".mouse-circle");
const mouseDot=document.querySelector(".mouse-dot");


const mouseCircleFn=(x,y) => {
    mouseCircle.style.cssText=`top: ${y}px; left: ${x}px;opacity=1`;
    mouseDot.style.cssText=`top: ${y}px; left: ${x}px; opacity=1`;
};
//End of Mouse Circle


// Animated Circle

const circles=document.querySelectorAll(".circle");
const mainImg=document.querySelectorAll(".main-circle img");

let mX=0;
let mY=0;

const animateCircles=(e,x,y)=>{
    
    if(x < mX)
    {
        circles.forEach((circle) => {
            circle.style.left=`100px`;
        });
        mainImg.style.left=`100px`;
    }
    else if(x > mX)
    {
        circles.forEach((circle) => {
            circle.style.left=`-100px`;
        });
        mainImg.style.left=`-100px`;

    }
    if(y < mY)
    {
        circles.forEach((circle) => {
            circle.style.top=`100px`;
        });
        mainImg.style.top=`100px`;
    }
    else if(y >mY)
    {
        circles.forEach((circle) => {
            circle.style.top=`-100px`;
        });
        mainImg.style.top=`-100px`;
    }
    mX=e.clientX;
    mY=e.clientY;
}
// End of Animated Circle



document.body.addEventListener('mousemove',(e) => {
    //console.log(e);
    let x=e.clientX;
    let y=e.clientY;

    mouseCircleFn(x,y);
    animateCircles(e,x,y);
});

document.body.addEventListener("mouseleave",()=>{
    mouseCircle.style.opacity='0';
    mouseDot.style.opacity='0';
});
