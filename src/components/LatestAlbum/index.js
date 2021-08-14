import React from 'react'
import Album from './Album'
import {
    AlbumContainer,
    AlbumHeading,
    BlockTitle,
    BlockOfIcon,
    Icons,
    Apples,
    Play,
    Amazon,
    Soundcloud,
    IconsContainer,
    PlayListContainer,
    PlayList
} from './LatestAlbum'

import { Data } from './Data'
import { Link } from 'react-router-dom'




const LatestAlbum = () => {
    return (
        <>
            <AlbumContainer>
                <BlockTitle>
                    <AlbumHeading>latestAlbum</AlbumHeading>
                </BlockTitle>

                <Album {...Data} />

                <IconsContainer>
                    <BlockOfIcon>
                        <Icons>
                            <Link to="/"><Apples /></Link>
                        </Icons>
                        <Icons>
                            <Link to="/"><Play /></Link>
                        </Icons>
                        <Icons>
                            <Link to="/"><Amazon /></Link>
                        </Icons>
                        <Icons>
                            <Link to="/"><Soundcloud /></Link>
                        </Icons>
                    </BlockOfIcon>
                </IconsContainer>
                
            </AlbumContainer>
        </>
    )
}

export default LatestAlbum
