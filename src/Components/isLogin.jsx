

export const isLogin = () => {
    
    if (localStorage.getItem("localToken")) {
        return   true
    }
    return false;
}