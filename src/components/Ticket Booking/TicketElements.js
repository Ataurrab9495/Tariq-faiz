import styled from 'styled-components'

export const Ticket = styled.div`
    background:url('https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2019/01/24.jpg');
    background-size:100% 100%;
    background-blend-mode: exclusion;
    display:flex;
    flex-direction:column;
    padding-top:150px;
    padding-bottom:150px;
    justify-content:center;
    align-items:center;
    margin-left:auto;
    margin-right:auto;



    &:before{
        content:"";
        position:absolute;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(1,1,10,1) 0%, rgba(14,14,14,1) 2%, rgba(15,16,22,1) 16%, rgba(6,6,6,1) 100%, rgba(11,28,31,1) 100%, rgba(12,14,27,1) 100%);
    }
`

export const TicketContainer = styled.div`
    display:flex;
    justify-content:center;
    flex-direction:column;

    h1{
        font-size:64px;
    }

    p{
        text-align:center;
        color:#FF8181;
        font-size:34px !important;
    }

    .button{
        padding:40px;
        display:flex;
        justify-content: center;
    }

    @media screen and (max-width:1025px){
       display:flex;
       justify-content:center;

        h1{
            font-size:44px;
            --container:100px !important;
            padding-left:calc(var(--container)/2);
            padding-right:calc(var(--container)/2);
            margin-left:auto;
            margin-right:auto;
        }
    }
`

export const Button = styled.button`
    padding:8px 25px;
    border:2px solid red;
    background:transparent;
    color:#fff;

    &:hover{
        color:grey;
        transition:.1s ease;
    }

`