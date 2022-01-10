/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");
const ta = (() => {
    let b = document.createElement("canvas").getContext("2d");
    if (b.measureText) {
        if (b.measureText("test").emHeightAscent)
            return (a, c, d = !1) => {
            c += B.graphical.fontSizeBoost;
            b.font = "bold " + c + "px Ubuntu";
            a = b.measureText(a);
            return d
            ? {
            width: a.width,
            height: a.emHeightAscent
            }
            : a.width;
            }
    }
    let a = document.createElement("div");
    a.style.padding = "0";
    a.style.margin = "0";
    a.style.position = "absolute";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    return (c, d, e = !1) => {
    d += B.graphical.fontSizeBoost;
    if (e)
        return ((a.style.font = "bold " + d + "px Ubuntu"),
        (a.innerText = c), { width: a.clientWidth, height: a.clientHeight }
        ); b.font = "bold " + d + "px Ubuntu";
        return b.measureText(c).width;
    };
          
}