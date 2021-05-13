const initialState = {
    cards: [
        {
            id: 1,
            title: 'Denny',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, corporis odit sapiente quibusdam voluptates voluptatibus porro eos, ipsum omnis distinctio tempore? Debitis soluta deleniti minima illum ut consectetur adipisci quam. Mollitia quibusdam doloremque ea reprehenderit. Quas consequuntur voluptate consequatur dolore?'
        }, {
            id: 2,
            title: 'Alex',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, corporis odit sapiente quibusdam voluptates voluptatibus porro eos, ipsum omnis distinctio tempore? Debitis soluta deleniti minima illum ut consectetur adipisci quam. Mollitia quibusdam doloremque ea reprehenderit. Quas consequuntur voluptate consequatur dolore?'
        }, {
            id: 3,
            title: 'Ben',
            body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, corporis odit sapiente quibusdam voluptates voluptatibus porro eos, ipsum omnis distinctio tempore? Debitis soluta deleniti minima illum ut consectetur adipisci quam. Mollitia quibusdam doloremque ea reprehenderit. Quas consequuntur voluptate consequatur dolore?'
        }
    ],
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'DELETE_CARD':
            let newCard = state.cards.filter((card) => {
                return action.id !== card.id
            })
            return {
                ...state,
                cards: newCard
            }
        case 'FETCH_USERS':
            return {
                ...state,
                users: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;