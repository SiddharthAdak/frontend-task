import { info } from '../types'
const color:{
    [key: string]: string;
  } = {
    blond: "rgb(250,240,190)",
    white: "rgb(255,255,255)",
    black: "rgb(0,0,0)",
    auburn: "rgb(165,42,42)",
    brown: "rgb(92,64,51)"
}
const Card = ({name, hair_color, skin_color, gender, vehicle_count}: info) => {
    function setBG() {
        const temp = hair_color.split(", ")
        let backColor:string;
        
        if(color[temp[0]]) {
            backColor = color[temp[0]];
            // console.log(backColor);
            
            return backColor;
        }
        else{
            backColor = "rgb(255,255,255)";
            return backColor;
        }
    }
    function setTextColor() {
        const backColor = setBG();
        
        const rgbValue: string[] = ["255", "0", "0"];
        const colorArr = backColor.slice(backColor.indexOf("(") + 1, backColor.indexOf(")")).split(",");

        colorArr.forEach((k, i) => {
          rgbValue[i] = k;
        });
        
        const color = Math.round((parseInt(rgbValue[0]) * 299 + parseInt(rgbValue[1]) * 587 + parseInt(rgbValue[2]) * 114) / 1000);
        const textColor = color > 125 ? "black" : "white";
        return textColor

    }

  return (
    <div>
        <div style={{backgroundColor: setBG()}} className=' rounded-md p-4 flex items-center gap-4 shadow-lg '>
            <div className=''>
                <img className='rounded-md h-56' src={`https://picsum.photos/200/300?a=${name}`} alt="" />
            </div>
            <div  style={{color: setTextColor()}} className=' backdrop-blur-sm h-56 rounded-md px-4'>
                <div className='card_text '>
                    name: {name}
                </div>
                <div className='card_text '>
                    hair color: {hair_color}
                </div>
                <div className='card_text'>
                    skin color: {skin_color}
                </div>
                <div className='card_text'>
                    gender: {gender}
                </div>
                <div className='card_text'>
                    vehicle count: {vehicle_count}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card