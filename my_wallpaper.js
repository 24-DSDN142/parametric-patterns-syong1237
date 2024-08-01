//your parameter variables go here!

let pith_size = 10; //changes the size of the pith core 

let pith_white = '#ffffff'; //Changes the colour of the pith lines,changes automatically via if statment
let pith_black = '#000000';

let seed_size = 5 ; //Changes the size of seeds

let lime_skin = '#32CD32'; // Lime Colour scheme
let lime_flesh = '#90EE90';

let lemon_skin = '#fff44f'; // Lemon Colour Scheme
let lemon_flesh = '#fffed3';

let orange_skin = '#F28C28'; //Orange Colour Scheme
let orange_flesh = '#FFAC1C';

// line 61: citrus(orange_skin,orange_flesh) //Top Left

// line 67: citrus(lime_skin,lime_flesh)  //Top Right

// line 72: citrus(lime_skin,lime_flesh) //Bottom Left

// line 78: citrus(orange_skin,orange_flesh) //Bottom Right

// line 84: citrus(lemon_skin,lemon_flesh) //Middle Left

// line 90: citrus(lemon_skin,lemon_flesh) //Middle Right

//For Copy/Paste

//  orange_skin,orange_flesh

//  lime_skin, lime_flesh

//  lemon_skin,lemon_flesh

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  //background(240, 255, 240); //light honeydew green colour
  background('#ffb7c5')
  
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  
  push()//Top left
  rotate(93)
  translate(-4,-202)
  citrus(orange_skin,orange_flesh)
  pop()
  
  push()//Top right
  rotate(181)
  translate(-202,-196)
  citrus(lime_skin, lime_flesh)
  pop()


  //Bottom left
  citrus(lime_skin, lime_flesh)


  push()//Bottom right
  rotate(274)
  translate(-190,10)
  citrus(orange_skin,orange_flesh)
  pop()

  push()//Middle Left
  translate(170.1,-37.8)
  rotate(48)
  citrus(lemon_skin,lemon_flesh)
  pop()

  push()//Middle right
  translate(28,238)
  rotate(228)
  citrus(lemon_skin,lemon_flesh)
  pop()








}


function citrus(skin, flesh) {
  stroke('#000000')
  fill(skin);
  arc(55, 145, 100, 100, 45, 220,CHORD);//Skin

  fill(flesh);
  arc(54.9, 145.1, 85, 85, 45, 220,CHORD);//Flesh

 
  stroke(pith_white) //Pith Lines

  if(flesh==lemon_flesh) //Pith
  {stroke(pith_black)}; 
  line(14,145,53,147);
  line(26,175,53,147);
  line(55,186,53,146);

 if(stroke==pith_white) //Pith
  {stroke(pith_black)};


  fill(255,255,255);
  arc(54,146.1,pith_size,pith_size,45,220,CHORD);
  
//Seed
 ellipse(38,140,seed_size/2,seed_size)
 ellipse(61,161,seed_size,seed_size/2)

}
