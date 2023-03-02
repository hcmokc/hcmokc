// import axios from "axios";

// // const Items_REST_API_URL = '/items/';
// // const Items_Name_URL = '/items/title=';
// // const Items_Genre_URL = '/items/genre=';

// // Junior Individual 
// const ALL_MATCH_REST_API_URL = '/';
// // const Player_Name_URL = '/items/name=';
// // const PLayer_Ippon_URL = '/items/genre=';

// // const Users_REST_API_URL = '/users';
// // const Users_GET_API_URL = '/user/name/';
// // const Users_Register_URL = '/register';

// // const Admin_Register_URL = '/register/admin'

// // const Orders_POST_API_URL = '/order/';
// // const Orders_GET_API_URL = '/orders';
// // const Orders_Delete_API_URL = '/order/';


// class DataServices {

//     //Match Axios
//     getMatch() {
//         return axios.get(Player_REST_API_URL);
//     }

//     // getItemById(itemId) {
//     //     return axios.get(Items_REST_API_URL + itemId);
//     // }

//     // postItem(data) {
//     //     return axios.post(Items_REST_API_URL, data);
//     // }

//     // updateItemById(itemId, data) {
//     //     return axios.put(Items_REST_API_URL + itemId, data);
//     // }

//     // deleteItemById(itemId) {
//     //     return axios.delete(Items_REST_API_URL + itemId);
//     // }

//     // getItemByName(gameName) {
//     //     gameName.replace(" ", "%20");
//     //     return axios.get(Items_Name_URL + gameName);
//     // }

//     // getItemByGerne(gameGerne) {
//     //     // gameGerne.replace(" ", "%20");
//     //     return axios.get(Items_Genre_URL + gameGerne);
//     // }

//     // //User Axios 
//     // getUsers() {
//     //     return axios.get(Users_REST_API_URL);
//     // }

//     // getUserById(userId) {
//     //     return axios.get(Users_REST_API_URL + userId);
//     // }

//     // postUser(data) {
//     //     return axios.post(Users_Register_URL, data);
//     // }

//     // postAdmin(data) {
//     //     return axios.post(Admin_Register_URL, data);
//     // }

//     // getUserByName(userName){
//     //     return axios.get(Users_GET_API_URL + userName)
//     // }

//     // // Order Axios
//     // postOrder(data) {
//     //     return axios.post(Orders_POST_API_URL, data)
//     // }
//     // getAllOrers() {
//     //     return axios.get(Orders_GET_API_URL)
//     // }
//     // deleteOrderById(orderId) {
//     //     return axios.delete(Orders_Delete_API_URL + orderId)
//     // }

//     // updateOrderById(orderId, data) {
//     //     console.log(Orders_Delete_API_URL + orderId)
//     //     return axios.put(Orders_Delete_API_URL + orderId, data)
//     // }

    
// }

// export default new DataServices();