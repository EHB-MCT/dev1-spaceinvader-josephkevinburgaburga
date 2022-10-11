"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

spaceInvader();

function spaceInvader(){
    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.stroke();
    context.fill();
    
    context.fillStyle = "#6BF216";
    context.beginPath();
    context.rect(75, 75, 50, 50);
    context.rect(125, 125, 50, 50);
    context.rect(175, 175, 50, 50);
    context.rect(225, 125, 50, 50);
    context.rect(275, 75, 50, 50);
    context.rect(75, 225, 50, 50);
    context.rect(125, 275, 50, 50);
    context.rect(75, 275, 50, 50)
    context.rect(175, 275, 50, 50);
    context.rect(200, 275, 50, 50);
    context.rect(275, 275, 50, 50);
    context.stroke();
    context.fill();

    
}