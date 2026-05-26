import userInfo from "../data/contacts.json";

export const getUserInfo = async() => {
    return userInfo;
}

export const postUserInfo = async(newUser) => {

    newUser.id = userInfo.length + 1;
    userInfo.push(newUser);
    return {ok: true, message: "user added successfully"};
}