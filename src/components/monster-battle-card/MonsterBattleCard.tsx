import { Divider } from "@mui/material"
import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterImage, BattleMonsterName, BattleMonsterTitle, MonsterStatusWrapper } from "./MonsterBattleCard.styled"
import MonsterBar from "./MonsterBar"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
    if(!monster) {
        return (
            <BattleMonsterCard centralized>
                <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            </BattleMonsterCard>
        )
    }

    return (
        <BattleMonsterCard>
            <BattleMonsterImage src={monster.imageUrl} />
            <BattleMonsterName>{monster.name}</BattleMonsterName>
            <Divider />
            <MonsterStatusWrapper>
                <MonsterBar title='HP' value={monster.hp} />
                <MonsterBar title='Attack' value={monster.attack} />
                <MonsterBar title='Defense' value={monster.defense} />
                <MonsterBar title='Speed' value={monster.speed} />
            </MonsterStatusWrapper>
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }