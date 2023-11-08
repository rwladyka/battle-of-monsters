import styled from "@emotion/styled"
import { Card, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    padding: '13px 11px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: centralized ? 'flex' : 'auto',
    alignItems: centralized ? 'center' : 'auto',
    justifyContent: centralized ? 'center' : 'auto',
}))
  
export const BattleMonsterTitle = styled(Typography)(() => ({
    fontSize: '36px',
    lineHeight: '42px',
    color: colors.black,
}))

export const BattleMonsterName = styled(Typography)(() => ({
    fontSize: '22px',
    lineHeight: '42px',
    color: colors.black,
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 15,
    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.25)',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));

export const BattleMonsterImage = styled.img(() => ({
    borderRadius: '7px',
    width: '283px',
    height: '178px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)'
  }))

export const BattleMonsterDividerWrapper = styled.div(() => ({
    padding: '8px 0'
}))

export const MonsterBarWrapper = styled.div(() => ({
    padding: '8px 0'
}))

export const MonsterStatusWrapper = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}))

export const MonsterBarLabel = styled.span(() => ({
    display: 'block',
    fontSize: '12px',
    padding: '0 0 4px 0',
    lineHeight: 'normal',
}))