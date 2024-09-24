const sliderItems = document.querySelectorAll('sections');
var arreyNum = 0;
var arreyNumDispNone1 = 1;
var arreyNumDispNone2 = 2;
var arreyNum2 = 3;
var arreyNumDisp2None1 = 4;
var arreyNumDisp2None2 = 5;


function changeSliderArreyNumRight(){
    arreyNum += 1;
    arreyNumDispNone1 += 1;
    arreyNumDispNone2 += 1;
    arreyNum2 += 1;
    arreyNumDisp2None1 += 1;
    arreyNumDisp2None2 += 1;
    if(arreyNum > 2 || arreyNum2 > 5){
        arreyNum = 0;
        arreyNum2 = 3;
    }
    if(arreyNumDispNone1 > 2 || arreyNumDisp2None1 > 5){
        arreyNumDispNone1 = 0;
        arreyNumDisp2None1 = 3;
    }
    if(arreyNumDispNone2 > 2 || arreyNumDisp2None2 > 5){
        arreyNumDispNone2 = 0;
        arreyNumDisp2None2 = 3;
    }
    lookIfIsPhone();
}
function changeSliderArreyNumLeft(){
    arreyNum -= 1;
    arreyNumDispNone1 -= 1;
    arreyNumDispNone2 -= 1;
    arreyNum2 -= 1;
    arreyNumDisp2None1 -= 1;
    arreyNumDisp2None2 -= 1;
    if(arreyNum < 0 || arreyNum2 < 3){
        arreyNum = 2;
        arreyNum2 = 5;
    }
    if(arreyNumDispNone1 < 0 || arreyNumDisp2None1 < 3){
        arreyNumDispNone1 = 2;
        arreyNumDisp2None1 = 5;
    }
    if(arreyNumDispNone2 < 0 || arreyNumDisp2None2 < 3){
        arreyNumDispNone2 = 2;
        arreyNumDisp2None2 = 5;

    }
    console.log(arreyNum)
    lookIfIsPhone();
}
function lookIfIsPhone(){
    if (window.matchMedia('(hover: none)').matches) {
        const sliderItems = document.querySelectorAll('.pictureSections');
        console.log("No hover capability detected (e.g., touch screen).");
        sliderItems[arreyNum].style.display = "inline-block";
        sliderItems[arreyNumDispNone1].style.display = "none";
        sliderItems[arreyNumDispNone2].style.display = "none";
        
        sliderItems[arreyNum2].style.display = "inline-block";
        sliderItems[arreyNumDisp2None1].style.display = "none";
        sliderItems[arreyNumDisp2None2].style.display = "none";
    } else {
        console.log("Hover capability detected (e.g., mouse or stylus).");
    }
}
