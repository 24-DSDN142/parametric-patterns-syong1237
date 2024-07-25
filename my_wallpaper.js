//your parameter variables go here!
let pith_size = 10;
let pith_white = '#ffffff'
let pith_black = '#000000'

let lime_skin = '#32CD32'
let lime_flesh = '#90EE90'

let lemon_skin = '#fff44f'
let lemon_flesh = '#fffed3'

let orange_skin = '#F28C28'
let orange_flesh = '#FFAC1C'


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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
  
  citrus(lime_skin, lime_flesh) //bottom left
  
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
  
 
}