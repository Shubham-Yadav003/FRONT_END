// const slides=document.querySelectorAll(" .slide")
// var counter=0;
// slides.forEach((slides,index)=>{
//     slides.style.left=`${index*100}%`;

// })
// const goPrev=()=>{
//     counter--;
  
//     slideImg()
// }

// const goNext=()=>{
//     counter++;
   
//     slideImg()
// }



// const slideImg=()=>{
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform=`translateX(-${counter * 100}%)`
//         }
//     )
// }

const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach((slides,index)=>{
    slides.style.left=`${index*100}%`;
})
const goPrev=()=>{
    counter--;
    // Check if the counter is negative
    if (counter < 0) {
        // Set it to the last slide index
        counter = slides.length - 1;
    }
    slideImg();
}
const goNext=()=>{
    counter++;
    slideImg();
}
const slideImg=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter * 100}%)`;
        }
    )
    // Check if the counter has reached the slides length
    if (counter == slides.length-1) {
        // Reset it to zero
        counter = 0;
    }
}
