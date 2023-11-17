import HomeHead from "../components/HomeHead";
import {useState} from "react";
import dayjs from "dayjs";

const Home = function Home() {

  const currentDate = dayjs().format('YYYYMMDD')
    // 创建我们所需要的状态
    let [today,setToday] = useState(currentDate);

    return <div className="home-box">
        <HomeHead tody={today}></HomeHead>
    </div>;
};

export default Home
