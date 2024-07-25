//your parameter variables go here!
let post_random_X;
let post_random_Y;
let pit_size = 10;

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
  background(240, 255, 240); //light honeydew green colour
  post_random_X = random(0,110);
  post_random_Y = random(0,-110);
}
function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  push();
 
  fill(50,205,50);
  arc(55, 145, 100, 100, 45, 220,CHORD);
  fill(144,238,144);
  arc(54.9, 145.1, 85, 85, 45, 220,CHORD);
  line(13,145,53,147);
  line(26,175,53,147);
  line(55,187,53,146);
  fill(255,255,255);
  arc (54,146.5,pit_size,pit_size,45,220,CHORD);
  pop();
  
 
}
