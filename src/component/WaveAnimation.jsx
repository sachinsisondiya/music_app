import './WaveAnimation.css'
const WaveAnimation = ({isPlaying})=>{
  const activeClass= isPlaying ? "box active":"box";
  
  return(
    <div className='box-container flex'>
      <div className={`${activeClass} box1`}></div>
      <div className={`${activeClass} box2`}></div>
      <div className={`${activeClass} box3`}></div>
      <div className={`${activeClass} box4`}></div>
      <div className={`${activeClass} box5`}></div>
      <div className={`${activeClass} box6`}></div>
      <div className={`${activeClass} box7`}></div>
      <div className={`${activeClass} box2`}></div>
      <div className={`${activeClass} box3`}></div>
      <div className={`${activeClass} box4`}></div>
      <div className={`${activeClass} box5`}></div>
      <div className={`${activeClass} box6`}></div>
      <div className={`${activeClass} box7`}></div>
      <div className={`${activeClass} box2`}></div>
      <div className={`${activeClass} box3`}></div>
      <div className={`${activeClass} box4`}></div>
      <div className={`${activeClass} box5`}></div>
      <div className={`${activeClass} box6`}></div>
      <div className={`${activeClass} box7`}></div>
      
    </div>

  )
}
export default WaveAnimation;