import React from 'react'
import {Ticket, TicketContainer, Button} from './TicketElements'

const Tickets = () => {
    return (
        <>
           <Ticket>
               <TicketContainer>
                   <h1 className="upperCase">pre-sale of 'the upcoming tour'</h1>
                   <p>All pre-sales begin 12am local and end 6pm local time.</p>
                   <div className="button">
                        <Button>Click for More Info</Button>
                   </div>
               </TicketContainer>
           </Ticket> 
        </>
    )
}

export default Tickets
