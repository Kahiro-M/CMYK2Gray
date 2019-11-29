
    /**
    * RGB値を十六進表記に変換する
    * @param {Number,Number,Number} rgb - RGB値
    * @returns {String} RGB値の十六進表記(#000000-#FFFFFF)
    * @author Kahiro-M
    */
   function rgb2hex ( r,g,b ) {
    var tR = become0to255(r);
    var tG = become0to255(g);
    var tB = become0to255(b);
    var tmpR = Number(tR).toString(16);
    if(tmpR<16){
      tmpR = "0"+tmpR
    }
    var tmpG = Number(tG).toString(16);
    if(tmpG<16){
      tmpG = "0"+tmpG
    }
    var tmpB = Number(tB).toString(16);
    if(tmpB<16){
      tmpB = "0"+tmpB
      }
    return "#" + tmpR + tmpG + tmpB;
  }
  function become0to255(inputValue){
    var tmp = become255(Number(inputValue));
    tmp = become0(tmp);
    return Number(tmp);
  }
  function become255(inputValue){
    if(255 < inputValue){
      return 255;
    }
    return inputValue;
  }
  function become0(inputValue){
    if(inputValue < 0){
      return 0;
    }
    return inputValue;
  }