import styles from "../style"
import { arrowUp } from "../assets"


const GetStarted = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #5ce1e8, #5ce1e8, #ffffff)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  <div style={gradientStyle} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px]`}>

  </div>

}

export default GetStarted
