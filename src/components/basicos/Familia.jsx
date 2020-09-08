import React from 'react'
import FamiliaMenbro from './FamiliaMenbro'
export default (props) => {
    return (
        <div>
        {30 * 10}
        <FamiliaMenbro nome='Emerson' {...props} />
        <FamiliaMenbro nome='Silva' sobrenome='max'/>
        <FamiliaMenbro nome='Batista' {...props}/>
        </div>
    )
}