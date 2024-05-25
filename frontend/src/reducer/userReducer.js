function userReducer(user, action) {
    console.log("userreducer");
    switch(action.type){
        case "SET_USER":{
            return action.payload;
        }
        case "UNSET_USER":{
            return {};
        }
        default: return user;
    }
}
console.log(11);
export default userReducer;