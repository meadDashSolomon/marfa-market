const updateArrowKeyClasses = () => {
  const leftArrow = document.querySelector('.mainPicArrowLeft');
  const rightArrow = document.querySelector('.mainPicArrowRight');
  const mainPic = document.querySelector('.mainPic');

  if (isFullscreen) {
    mainPic.classList.remove('mainPicFullscreen');
    leftArrow.classList.remove('mainPicArrowLeftFullscreen');
    rightArrow.classList.remove('mainPicArrowRightFullscreen');
  } else {
    mainPic.classList.add('mainPicFullscreen')
    leftArrow.classList.add('mainPicArrowLeftFullscreen');
    rightArrow.classList.add('mainPicArrowRightFullscreen');
  }
}

export default updateArrowKeyClasses;