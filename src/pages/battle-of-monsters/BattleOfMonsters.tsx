import { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../app/hooks"
import { MonsterBattleCard } from "../../components/monster-battle-card/MonsterBattleCard"
import { MonstersList } from "../../components/monsters-list/MonstersList"
import { Title } from "../../components/title/Title"
import { fetchMonstersData } from "../../reducers/monsters/monsters.actions"
import { selectMonsters, selectSelectedMonster } from "../../reducers/monsters/monsters.selectors"
import { BattleSection, PageContainer, StartBattleButton } from "./BattleOfMonsters.styled"
import { MonsterService } from "../../reducers/monsters/monsters.service"
import { WinnerDisplay } from "../../components/winner-display/WinnerDisplay"
import { Winner } from "../../models/interfaces/monster.interface"

const BattleOfMonsters = () => {
    const [winner, setWinner] = useState<Winner | null>(null);
    const dispatch = useAppDispatch()

    const monsters = useSelector(selectMonsters)
    const selectedMonster = useSelector(selectSelectedMonster)

    const computerMonster = useMemo(() => {
        if(!monsters || !selectedMonster) return null;
        let index = 0;
        do {
            index = Math.floor(Math.random() * monsters.length)
        } while (monsters[index].id === selectedMonster.id)

        return monsters[index];
    }, [monsters, selectedMonster])

    useEffect(() => {
        dispatch(fetchMonstersData())
    }, []);

    const handleStartBattleClick = async () => {
        // Fight!
        const res = await MonsterService.battle(selectedMonster?.id!, computerMonster?.id!);
        setWinner(res);
    }

    return (
        <PageContainer>
            <Title>Battle of Monsters</Title>

            <MonstersList monsters={monsters} />

            {winner && <WinnerDisplay text={winner.winner.name} />}

            <BattleSection>
                <MonsterBattleCard title={selectedMonster?.name || "Player"} monster={selectedMonster}></MonsterBattleCard>
                <StartBattleButton data-testid="start-battle-button"  disabled={selectedMonster === null} onClick={handleStartBattleClick}>Start Battle</StartBattleButton>
                <MonsterBattleCard title="Computer" monster={computerMonster}></MonsterBattleCard>
            </BattleSection>
        </PageContainer>
    )
}

export { BattleOfMonsters }