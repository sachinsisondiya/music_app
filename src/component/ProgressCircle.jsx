import "./Progress.css"
export const Circle = ({color,percentage,size,strokewidth})=>{
  const radius =size /2-10;
  const circ= 2 * Math.PI * radius-20;
  const strokepct=((100-Math.round(percentage)) * circ) / 100;

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
    <div className="progress-circle flex">
      <svg width={size} height={size}>
        <g>
          <Circle strokewidth={"0.5rem"} color='#3B4F73' size={size}
          
          />
          <Circle
           strokewidth={"0.5rem"} color={color}
           percentage={percentage}
           size={size}>
          </Circle>
         
        </g>
        <defs>
          <clipPath
          id='myCircle'>
            <circle cx="50%" cy="50%" 
            r={size/2-30} fill="#FFFFFF"/>
          </clipPath>
          <clipPath
          id='myInnerCircle'>
            <circle cx="50%" cy="50%" 
            r={size/2-100} fill="#FFFFFF"/>
          </clipPath>
        </defs>
        <image
        className={isPlaying ? "active" : ""} 
        x={30}
        y={30}
        width={2 * (size / 2 -30)}
        height={2 * (size / 2 - 30)}
        href="https://i.pinimg.com/736x/db/67/b3/db67b38f7c1ef6b1e2c2fcbf7a3a33d6.jpg"
        clipPath="url(#myCircle)"/>
         <image
        className={isPlaying ? "active" : ""} 
        x={100}
        y={100}
        width={2 * (size / 2 -100)}
        height={2 * (size / 2 - 100)}
        href="https://static.vecteezy.com/system/resources/previews/004/274/599/original/headphones-flat-linear-long-shadow-icon-listen-to-music-line-symbol-vector.jpg"
        clipPath="url(#myInnerCircle)"/>
      </svg>
    </div>
  )
}
export default ProgressCircle;