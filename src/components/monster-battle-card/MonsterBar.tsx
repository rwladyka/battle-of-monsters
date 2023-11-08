import { MonsterBarLabel, MonsterBarWrapper, ProgressBar } from "./MonsterBattleCard.styled"

type MonsterBarProps = {
    title: string;
    value: number;
}

const MonsterBar: React.FC<MonsterBarProps> = ({ title, value}) => (
    <MonsterBarWrapper>
        <MonsterBarLabel>{title}</MonsterBarLabel>
        <ProgressBar value={value} variant='determinate'/>
    </MonsterBarWrapper>
)


export default MonsterBar;