import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[22px] leading-[23px] mr-2">
            <span style={gradientStyle}>
              Get 
            </span>
          </p>
          <img src={arrowUp} alt ="arrow" className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="font-poppins font-medium text-[22px] leading-[23px]">
          <span style={gradientStyle}>
            Started
          </span>
        </p>
      </div>
    </div>
);

export default GetStarted
