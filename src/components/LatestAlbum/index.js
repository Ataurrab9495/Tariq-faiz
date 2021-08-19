import React from 'react'
import Album from './Album'
import {
    AlbumContainer,
    AlbumHeading,
    BlockTitle,
    MainContainer
} from './LatestAlbum'

import { Data } from './Data'




const LatestAlbum = () => {
    return (
        <>
            <AlbumContainer id="album">
                <BlockTitle>
                    <AlbumHeading>latest Album</AlbumHeading>
                </BlockTitle>
                <MainContainer>
                    <Album {...Data} />
                    
                </MainContainer>
            </AlbumContainer>
        </>
    )
}

export default LatestAlbum
