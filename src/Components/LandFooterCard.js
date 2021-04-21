import React from 'react'
import Card from '../StyledComponents/Card'
import Wrapper from '../StyledComponents/Wrapper'

function LandFooterCard({children, header }) {
    return (
        <Card className="land__footer__card" >
            <Wrapper className="land__footer__card__header"  >
                {header}
            </Wrapper>
            <Wrapper className="land__footer__card__detail" >
                {children}
            </Wrapper>
        </Card>
    )
}

export default LandFooterCard
