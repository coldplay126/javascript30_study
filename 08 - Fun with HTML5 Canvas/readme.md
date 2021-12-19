//브라우저 사이즈 조정

 //css 
 html, body {
   width:100%;
   height:100%
 }

 //script

const resize = () => {
  let stageWidth = document.body.clientWidth;
  let stageHeight = document.body.clientHeight;

  canvas.widht = stageWidth * 2;
  canvas.height = stageHeight * 2;
  canvas.scale(2,2);
};

canvas.addEventListener('resize', resize);

