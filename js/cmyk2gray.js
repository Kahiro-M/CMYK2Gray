function culc(){
  checkBoxObj = document.getElementsByName("transList");
  for(i=0;i<checkBoxObj.length;i++){
    if(checkBoxObj[i].checked){
      choicedType = checkBoxObj[i].value;
    }
  }

  cObj = document.getElementById("inC");
  mObj = document.getElementById("inM");
  yObj = document.getElementById("inY");
  kObj = document.getElementById("inK");
  cmykSampleObj = document.getElementById("inCMYKsample");
  rObj = document.getElementById("outR");
  gObj = document.getElementById("outG");
  bObj = document.getElementById("outB");
  outGrayObj = document.getElementById("outGray");
  outKObj = document.getElementById("outK");
  kSampleObj = document.getElementById("outKsample");
  
  c = Math.round(cObj.value/100*255);
  m = Math.round(mObj.value/100*255);
  y = Math.round(yObj.value/100*255);
  k = Math.round(kObj.value/100*255);
  rObj.value = Math.round(255 - Math.min(255, c/255*(255-k)+k));
  gObj.value = Math.round(255 - Math.min(255, m/255*(255-k)+k));
  bObj.value = Math.round(255 - Math.min(255, y/255*(255-k)+k));

  switch(choicedType){
    case "OpenCV":
      cmykSampleObj.style.backgroundColor=rgb2hex(rObj.value,gObj.value,bObj.value);
      outGrayObj.value = Math.round((2449*rObj.value + 4805*gObj.value + 938*bObj.value)/Math.pow(2,13));
      outKObj.value = Math.round((255-outGrayObj.value)/255*100);
      kSampleObj.style.backgroundColor=rgb2hex(outGrayObj.value,outGrayObj.value,outGrayObj.value);
      break;

    case "CIE1931":
      cmykSampleObj.style.backgroundColor=rgb2hex(rObj.value,gObj.value,bObj.value);
      outGrayObj.value = Math.round((0.2126*rObj.value + 0.7152*gObj.value + 0.0722*bObj.value));
      outKObj.value = Math.round((255-outGrayObj.value)/255*100);
      kSampleObj.style.backgroundColor=rgb2hex(outGrayObj.value,outGrayObj.value,outGrayObj.value);
      break;

    case "Average":
      cmykSampleObj.style.backgroundColor=rgb2hex(rObj.value,gObj.value,bObj.value);
      outGrayObj.value = Math.round((Number(rObj.value) + Number(gObj.value) + Number(bObj.value))/3);
      outKObj.value = Math.round((255-outGrayObj.value)/255*100);
      kSampleObj.style.backgroundColor=rgb2hex(outGrayObj.value,outGrayObj.value,outGrayObj.value);
      break;

    default: //OpenCVと同じ
      cmykSampleObj.style.backgroundColor=rgb2hex(rObj.value,gObj.value,bObj.value);
      outGrayObj.value = Math.round((2449*rObj.value + 4805*gObj.value + 938*bObj.value)/Math.pow(2,13));
      outKObj.value = Math.round((255-outGrayObj.value)/255*100);
      kSampleObj.style.backgroundColor=rgb2hex(outGrayObj.value,outGrayObj.value,outGrayObj.value);
      break;
  }

}
