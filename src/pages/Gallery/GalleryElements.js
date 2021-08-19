import styled from 'styled-components'


export const Gallery = styled.div`
    border-top:1px solid rgba(59, 75, 91, 0.3);
    background:#000000d4;
`

export const GalleryIconContainer = styled.div`
    display:flex;
    flex:column;
    justify-content:center;
    align-items:center;
    padding-top:80px;
    padding-bottom:80px;
`

export const GalleryHeading= styled.div`
    display: inline-block;
    position: relative;
    padding: 0 .625em;
    z-index:1;
     
        
    &::before{
        
       position: absolute;
       content: " ";
       width: 100%;
       height: .875rem;
       background: #ff5252;
       bottom: .875rem;
       left: 0;
       z-index:-1;
       top:61%;
`

export const GalleryH1 = styled.h1`
    text-transform: uppercase;
`

export const Button = styled.button`
    background:transparent;
    color:#fff;
    border:1px solid grey;

    &:hover{
        color:grey;
    }
`