const authReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'AUTH':
            localStorage.setItem('Profile',JSON.stringify({...action?.data})) // question mark here means if the data is present then only it will select otherwise not
            return { ...state, data: action?.data }
        default:
            return state;
    }
}

export default authReducer