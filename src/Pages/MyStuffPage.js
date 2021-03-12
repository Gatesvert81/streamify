import React, { useState } from 'react'
import { usePalette } from 'react-palette'
// import MovieCard from '../Components/MovieCard'
import MyStuffWrapper from '../MainComponents/MyStuffWrapper'
import Wrapper from '../StyledComponents/Wrapper'

function MyStuffPage() {
    const [background, setBackground] = useState()
    const { data } = usePalette(background)
    return (
        <Wrapper className="mystuff" background={background} pageColor={data.muted} >
            <MyStuffWrapper setBackground={setBackground} />
        </Wrapper>
    )
}

export default MyStuffPage
