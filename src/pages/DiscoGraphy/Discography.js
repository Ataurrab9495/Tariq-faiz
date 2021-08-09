import React from 'react'
import './Discography.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillApple } from 'react-icons/ai'
import { IoMdPlay } from 'react-icons/io'
import { SiAmazon } from 'react-icons/si'
import { FaSoundcloud } from 'react-icons/fa'

export const BlockOfIcon = styled.ul`
padding-left: 0px;
list-style: none;
margin-top:1.5rem !important;
display:flex;
justify-content:center;
align-items: center;
cursor:pointer;
`

export const Icons = styled.li`
    display: flex;
    justify-content:center;
    align-items: center;
    margin-right:20px;
`

export const Apples = styled(AiFillApple)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const Play = styled(IoMdPlay)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const Amazon = styled(SiAmazon)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const Soundcloud = styled(FaSoundcloud)`
    display:flex;
    justify-content: center;
    align-items:center;
    color:#fff;
    border: 1px solid gray;
    font-size:25px;

    &:hover{
        color:grey;
    }
`

export const IconsContainer = styled.div`
    display:flex;
`


const Discography = () => {
    return (
        <>
            <div className="discography">
                <div className="conatiner">
                    <div className="first">
                        <div className="discography-title mt-5">
                            <h1 className="upperCase">Discography</h1>
                        </div>
                    </div>
                    <div className="custom-container mt-5">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <div className="block-content">
                                    <h5 className="upperCase opc-7 mb-0">Limitless</h5>
                                    <Link to="/" className="link">View Album</Link>
                                    <Link to="/">
                                        <img className="animated" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/12/1-1.jpg" />
                                    </Link>
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
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="block-content">
                                    <h5 className="upperCase opc-7 mb-0">Limitless</h5>
                                    <Link to="/" className="link">View Album</Link>
                                    <Link to="/">
                                        <img className="animated" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/10/2.jpg" />
                                    </Link>
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
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="block-content">
                                    <h5 className="upperCase opc-7 mb-0">Limitless</h5>
                                    <Link to="/" className="link">View Album</Link>
                                    <Link to="/">
                                        <img className="animated" src="	https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/07/3.jpg" />
                                    </Link>
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
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3">
                                <div className="block-content">
                                    <h5 className="upperCase opc-7 mb-0">Limitless</h5>
                                    <Link to="/" className="link">View Album</Link>
                                    <Link to="/">
                                        <img className="animated" src="https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2018/04/4.jpg" />
                                    </Link>
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="custom-container">
                        <div className="contain padding">
                            <div className="col-lg-7 col-md-7">
                                <div className="block-teaser">
                                    <p className="mb-0">
                                        PRE-ORDER THE NEW ALBUM AND GET ACCESS TO<br></br>
                                        THE PRE-SALE OF 'THE upcoming TOUR'
                                    </p>
                                    <Link to="/" className="link1">Click here for more info</Link>
                                </div>
                            </div>

                            <div class=" gap-one-top-sm">
                                <ul>
                                    <li>
                                        <h5 class="uppercase list-inline-item">Pre-Sale Tour 1 :</h5>
                                        <span>2/07 - 2/09</span>
                                    </li>
                                    <li>
                                        <h5 class="uppercase list-inline-item">Pre-Sale Tour 1 :</h5>
                                        <span>2/14 - 2/16</span>
                                    </li>
                                    <li>
                                        <h5 class="uppercase list-inline-item">Pre-Sale Tour 1 :</h5>
                                        <span>2/14 - 2/16</span>
                                    </li>
                                </ul>
                                <p class=" opc-70 mb-0">All pre-sales begin 12am local and end 6pm local time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Discography
