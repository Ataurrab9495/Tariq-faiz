import styled from 'styled-components'
import {BiCamera} from 'react-icons/bi'

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

export const CameraIcon= styled(BiCamera)`
    font-size:70px;
    color:#fff;
    
`

export const Button = styled.button`
    background:transparent;
    color:#fff;
    border:1px solid grey;

    &:hover{
        color:grey;
    }
`