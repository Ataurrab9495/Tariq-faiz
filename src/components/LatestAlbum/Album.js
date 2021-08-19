import React from 'react'
import {AlbumInfo, AlbumUl, AlbumLi, AlbumH5, AlbumSpan,BlockOfIcon,
    Icons,
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Spotify,
    IconsContainer,} from './LatestAlbum'

const Album = ({Label, genre, date, Style}) => {
    return (
        <>
          <AlbumInfo>
                  <AlbumUl>
                      <AlbumLi>
                          <AlbumH5>Label:- </AlbumH5>
                          <AlbumSpan>{Label}</AlbumSpan>
                      </AlbumLi>
                      <AlbumLi>
                          <AlbumH5>ReleaseDate:- </AlbumH5>
                          <AlbumSpan>{date}</AlbumSpan>
                      </AlbumLi>
                      <AlbumLi>
                          <AlbumH5>Genere:- </AlbumH5>
                          <AlbumSpan>{genre}</AlbumSpan>
                      </AlbumLi>
                      <AlbumLi>
                          <AlbumH5>Styles:- </AlbumH5>
                          <AlbumSpan>{Style}</AlbumSpan>
                      </AlbumLi>
                  </AlbumUl>
                  <IconsContainer>
                    <BlockOfIcon>
                        <Icons>
                            <a href="https://www.facebook.com/tariqfaizofficial/" target="_blank" rel="noopener noreferrer"><Facebook /></a>
                        </Icons>
                        <Icons>
                            <a href="https://instagram.com/tariqfaizofficial" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                        </Icons>
                        <Icons>
                            <a href="https://twitter.com/drtariqfaiz" target="_blank" rel="noopener noreferrer"><Twitter /></a>
                        </Icons>
                        <Icons>
                            <a href="https://youtube.com/channel/UCkR160Ha5lOI8TuztwdWyCA" target="_blank" rel="noopener noreferrer"><Youtube /></a>
                        </Icons>
                        <Icons>
                            <a href="https://open.spotify.com/artist/5lX81FO7Lb5U6zrzinxAAe?si=A7hfjk0VRuCRbvtwcR0tYw&utm_source=native-share-menu&dl_branch=1" target="_blank" rel="noopener noreferrer"><Spotify /></a>
                        </Icons>
                    </BlockOfIcon>
                </IconsContainer>
              </AlbumInfo>  
        </>
    )
}

export default Album
