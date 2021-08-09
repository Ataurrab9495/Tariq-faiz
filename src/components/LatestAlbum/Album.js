import React from 'react'
import {AlbumInfo, AlbumUl, AlbumLi, AlbumH5, AlbumSpan} from './LatestAlbum'

const Album = ({Label, songname, ReleaseDate, Genere, genre1, date, Styles, jonra}) => {
    return (
        <>
          <AlbumInfo>
                  <AlbumUl>
                      <AlbumLi>
                          <AlbumH5>Label:- </AlbumH5>
                          <AlbumSpan>{songname}</AlbumSpan>
                      </AlbumLi>
                      <AlbumLi>
                          <AlbumH5>ReleaseDate:- </AlbumH5>
                          <AlbumSpan>{date}</AlbumSpan>
                      </AlbumLi>
                      <AlbumLi>
                          <AlbumH5>Genere:- </AlbumH5>
                          <AlbumSpan>{genre1}</AlbumSpan>
                      </AlbumLi>
                      <AlbumLi>
                          <AlbumH5>Styles:- </AlbumH5>
                          <AlbumSpan>{jonra}</AlbumSpan>
                      </AlbumLi>
                  </AlbumUl>
              </AlbumInfo>  
        </>
    )
}

export default Album
