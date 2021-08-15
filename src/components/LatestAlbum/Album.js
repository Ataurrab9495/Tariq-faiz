import React from 'react'
import {AlbumInfo, AlbumUl, AlbumLi, AlbumH5, AlbumSpan} from './LatestAlbum'

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
              </AlbumInfo>  
        </>
    )
}

export default Album
