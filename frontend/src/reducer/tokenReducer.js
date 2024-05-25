function tokenReducer(userToken, action) {
    console.log("tokenreducer");
    switch(action.type){
        case "SET_TOKEN":{
            return action.payload;
        }
        case "UNSET_TOKEN":{
            return null;
        }
        default: return userToken;
    }
}
console.log(5);
export default tokenReducer;