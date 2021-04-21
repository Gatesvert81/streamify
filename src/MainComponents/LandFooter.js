import React from 'react'
import LandFooterCard from '../Components/LandFooterCard'
import LandWrapper from '../StyledComponents/LandWrapper'
// import Wrapper from '../StyledComponents/Wrapper'

function LandFooter() {
    return (
        <LandWrapper className="land-footer">
            <LandFooterCard header="About" >
                Watch your favourite and latest movie trailers..
            </LandFooterCard>
            <LandFooterCard header="Pricing" >
                Streamify is completely free. Enjoy all great features with the best trailer website for free.
            </LandFooterCard>
            <LandFooterCard header="Support" >
                Contact us with any problem. We are available 24/7.
                
            </LandFooterCard>
        </LandWrapper> 
    )
}

export default LandFooter
