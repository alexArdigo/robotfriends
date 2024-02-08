import './style.scss';
import {Robots} from "../../assets/robots.ts";
import Card from "../Card";

type Props = {
    robots: Robots[]
}
const CardList = ({robots}: Props) => {
        return (
            robots.map(robot => {
                return <Card
                    key={robot.id}
                    id={robot.id}
                    name={robot.name}
                    email={robot.email}
                    username={robot.username}
                />;
            })

        );
}

export default CardList