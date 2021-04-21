import React from 'react'
import Youtube from 'react-youtube'
import Card from '../StyledComponents/Card'
import Wrapper from '../StyledComponents/Wrapper'

function VideoCard({ movie }) {

    const opt = {
        height: "200px",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }

    const onPlay = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo()
    }

    return (
        <Card className="video-card">
            <Wrapper>
                <Youtube
                    videoId={movie.key}
                    opts={opt}
                    onPlay={onPlay}
                />
            </Wrapper>
        </Card>
    )
}

export default VideoCard
