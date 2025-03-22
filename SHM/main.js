
let x = 500;
let y = 500;
let dx = 100;
let dy = 0;
let vx = 0;
let vy = 10;
let ax = 0;
let ay = 0;
let dt = 0.05;
let k = 0.01;
function move(){


    let obj = document.getElementById("div2");
    let obj3 = document.getElementById("div3");
    let obj4 = document.getElementById("div4");
   
    console.log( x, y);

    let dmax = 0;
    let dmin  = 0;
    setInterval(function(){
        dx += vx*dt;
        dy += vy*dt;
        vx += ax*dt;
        vy += ay*dt;
        ax = -k*dx;
        ay = -k*dy
       // console.log( dx, dy);
       dmax = Math.max( dmax, dx);
       dmin = Math.min( dmin, dx);
        obj.style.left = x + dx + "px";
         obj.style.top = y + dy + "px";

         obj3.style.left = x + dmax + "px";
         obj3.style.top = y + dy + "px";

         obj4.style.left = x + dmin + "px";
         obj4.style.top = y + dy + "px";

    },dt*100)
    console.log("After move:", x, y);

    
}
