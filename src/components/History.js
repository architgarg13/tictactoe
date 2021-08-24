import React from 'react'

const History = ({history,click,currentMove}) => {
    return (
        <div>
            <ul>
                {
                    history.map((_,move) => {
                        return <li>
                            <button type="button" key={move} onClick={()=> click(move)} style={{fontSize: move === currentMove ? '20px' : '10px'  }}>
                            {move == 0? "Play the game first " : `Game move is ${move}`}
                            </button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default History
