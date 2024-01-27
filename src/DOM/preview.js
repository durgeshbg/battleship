import s5 from '../assets/5.svg';
import s4 from '../assets/4.svg';
import s3 from '../assets/3.svg';
import s2 from '../assets/2.svg';
import s1 from '../assets/1.svg';

export default function previewUpdate(player, z) {
  const img = new Image();
  const svgs = [s1, s2, s3, s4, s5];
  const type = player.gameboard.ships[0];
  const previewDisplay = document.querySelector('.preview .display');

  img.src = svgs[type - 1];

  if (z === 0) img.style.rotate = '90deg';
  else img.style.rotate = '0deg';
  
  previewDisplay.innerHTML = '';
  previewDisplay.appendChild(img);
}
