import './style.scss';
import {Robots} from "../../assets/robots.ts";
import Card from "../Card";

type Props = {
    robots?: Robots[]
    search: string
}
const CardList = ({robots, search}: Props) => {
    const filteredRobots = robots?.filter(robot => {
        return robot.name.toLowerCase().includes(search.toLowerCase());
    })


        return (
            <>
            {
                filteredRobots?.map(robot => {
                return <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                    username={robot.username}
                />;
            })
            }
            </>
            

        );
}

export default CardList