//
let para
let slider 
let sliderValue =16
let button 

function setup() {
  let c = createCanvas(windowWidth, windowHeight);
  // Help blind or low-vision users understand your sketch
  button = createButton('Give Me Cookie'); 
  describe("A 400 by 400 pixel gray canvas.");

  para = createP('this text is on the webpage, made with p5')
//adjust the position of mu p5 added <p>
  para.position(0,20)
  //adjusting the CSS with JavaScript 
  //any style applied with js will override any styles applied with CSS
  para.style('background-color:blue')
  para.style('margin:0')

  slider = createSlider(12,72,sliderValue)
  slider.position(0,40)
  slider.changed(sliderChanged)

  button.mousePressed(giveMe)
  
  
}

function draw() {

  text("this text is on the canvas",10,20)

  push()
textSize(sliderValue)
  text(sliderValue,width/2,height/2)
  pop()

}

// declared function that when the slider changes, update the global slider 
function sliderChanged()
{
  sliderVaule = slider.value() 
}

function giveMe()
{
  if(button.mousePressed == true)
  {
    let c = random(100,200)
    for(let i = 0; i >= button.mousePressed; i++)
    {
      circle(c,c,10)
    }
  }
}