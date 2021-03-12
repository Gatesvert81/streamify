import React from 'react'
import LandFooterCard from '../Components/LandFooterCard'
import LandWrapper from '../StyledComponents/LandWrapper'
// import Wrapper from '../StyledComponents/Wrapper'

function LandFooter() {
    return (
        <LandWrapper className="land-footer">
            <LandFooterCard />
            <LandFooterCard />
            <LandFooterCard />
        </LandWrapper>
    )
}

export default LandFooter
