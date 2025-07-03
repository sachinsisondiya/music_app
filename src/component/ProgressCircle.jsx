import "./Progress.css"
export const Circle = ({color,percentage,size,strokewidth})=>{
  const radius =size /2-10;
  const circ= 2*Math.PI * radius-20;
  const strokepct=((100-Math.round(percentage))*circ)/100;

  return (
    <circle
    r={radius}
    cx="50%"
    cy="50%"
    fill="transparent"
    stroke={strokepct !== circ ? color : ""}
    strokeWidth={strokewidth}
    strokeDasharray={circ}
    strokeDashoffset={percentage ? strokepct :0}
    strokeLinecap="round"
    ></circle>
  );
};
const ProgressCircle= ({percentage
        ,isPlaying
        ,size
        ,color})=>{        
  return(
    <div className="progress-circle">
      <svg width={size} height={size}>
        <g>
          <Circle strokewidth={"0.4rem"} color='#3B4F73' size={size}
          
          />
          <Circle
           strokewidth={"0.4rem"} color={color}
           percentage={percentage}
           size={size}>
          </Circle>
         
        </g>
      </svg>
      yes
    </div>
  )
}
export default ProgressCircle;