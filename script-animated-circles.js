// Mouse Circle

const mouseCircle=document.querySelector(".mouse-circle");
const mouseDot=document.querySelector(".mouse-dot");

const mouseCircleFn=(x,y) => {
    mouseCircle.style.cssText=`top: ${y}px; left: ${x}px;opacity=1`;
    mouseDot.style.cssText=`top: ${y}px; left: ${x}px; opacity=1`;
};
//End of Mouse Circle

// Animated Circles
const circles = document.querySelectorAll(".circle");
const mainImg = document.querySelectorAll(".main-circle img");

let mX=0;
let mY=0;

const animatedCircles=(e,x,y)=>{
   
    if(x>mX)
    {
        // console.log("moved to right");
        circles.forEach((circle)=>{
            circle.style.left=`100px`;
        });
    }
    /* else if(x<mX)
    {
        console.log("moved to left");
    } */

    if(y>mY)
    {
        // console.log("moved to upward");
        circles.forEach((circle)=>{
            circle.style.top=`-100px`;
        });
    }
    /* else if(y<mY)
    {
        console.log("moved to downward");
    } */
    mX=e.clientX;
    mY=e.clientY;
};
// End of Animated Circles

document.body.addEventListener('mousemove',(e) => {
    //console.log(e);
    let x=e.clientX;
    let y=e.clientY;

    mouseCircleFn(x,y);
    animatedCircles(e,x,y);
});

document.body.addEventListener("mouseleave",()=>{
    mouseCircle.style.opacity='0';
    mouseDot.style.opacity='0';
});
