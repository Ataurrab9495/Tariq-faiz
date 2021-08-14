import styled from 'styled-components'

export const Ticket = styled.div`
    background:url('https://webredox.net/demo/wp/mousiqua/wp-content/uploads/2019/01/24.jpg'),linear-gradient(90deg, rgba(1,1,10,1) 0%, rgba(10,10,19,1) 50%, rgba(11,28,31,1) 100%, rgba(13,21,23,1) 100%);
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
        color:#fff;
    }

    .button{
        padding:40px;
        display:flex;
        justify-content: center;
    }

    @media screen and (max-width:768px){
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