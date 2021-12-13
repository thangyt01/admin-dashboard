import Chart from "../../componets/chart/Chart"
import FeaturedInfo from "../../componets/featuredInfo/FeaturedInfo"
import "./home.css"
import WidgetLg from "../../componets/widgetLg/WidgetLg"
import WidgetSm from "../../componets/widgetSm/WidgetSm"
import TopBar from "../../componets/topbar/TopBar"
import SideBar from "../../componets/sidebar/SideBar"
import { useEffect, useMemo, useState } from "react"
import { userRequest } from "../../requestMethods"

const Home = () => {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
        () => [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        []
    );

    useEffect(() => {
        const getUserStats = async()=>{
            try {
                const res = await userRequest.get("users/stats")
                const list = (res.data).sort((a,b) => {return a._id - b._id})
                list.map(item=>
                    setUserStats(prev=>[
                        ...prev,
                        {name: MONTHS[item._id - 1], "Active User": item.total}
                    ])
                )
            } catch (error) {
                
            }
        }
        getUserStats()
    }, [MONTHS])

    return (
        <div>
            <TopBar/>
            <div className="container">
                <SideBar/>
                <div className="home">
                    <FeaturedInfo/>
                    <Chart data={userStats} title={"User Analytics"} grid dataKey="Active User"/>
                    <div className="homeWidget">
                        <WidgetSm/>
                        <WidgetLg/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
