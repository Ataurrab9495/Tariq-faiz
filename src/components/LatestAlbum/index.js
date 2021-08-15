import React from 'react'
import Album from './Album'
import {
    AlbumContainer,
    AlbumHeading,
    BlockTitle,
    BlockOfIcon,
    Icons,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Spotify,
    IconsContainer,
    
} from './LatestAlbum'

import { Data } from './Data'
import { Link } from 'react-router-dom'




const LatestAlbum = () => {
    return (
        <>
            <AlbumContainer id="album">
                <BlockTitle>
                    <AlbumHeading>latest Album</AlbumHeading>
                </BlockTitle>

                <Album {...Data} />

                <IconsContainer>
                    <BlockOfIcon>
                        <Icons>
                            <a href="https://www.facebook.com/tariqfaizofficial/" target="_blank"><Facebook /></a>
                        </Icons>
                        <Icons>
                            <a href="https://instagram.com/tariqfaizofficial" target="_blank"><Instagram /></a>
                        </Icons>
                        <Icons>
                            <a href="https://twitter.com/drtariqfaiz" target="_blank"><Twitter /></a>
                        </Icons>
                        <Icons>
                            <a href="https://youtube.com/channel/UCkR160Ha5lOI8TuztwdWyCA" target="_blank"><Youtube /></a>
                        </Icons>
                        <Icons>
                            <a href="https://open.spotify.com/artist/5lX81FO7Lb5U6zrzinxAAe?si=A7hfjk0VRuCRbvtwcR0tYw&utm_source=native-share-menu&dl_branch=1" target="_blank"><Spotify /></a>
                        </Icons>
                    </BlockOfIcon>
                </IconsContainer>

            </AlbumContainer>
        </>
    )
}

export default LatestAlbum
