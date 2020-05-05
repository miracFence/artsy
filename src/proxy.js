class FacebookProfile {
    constructor(data) {
        this.status = data.status;
        this.accessToken = data.authResponse.accessToken;
        this.expiresIn = data.authResponse.expiresIn;
        this.reauthorize_required_in = data.authResponse.reauthorize_required_in;
        this.signedRequest = data.authResponse.signedRequest;
        this.userID = data.authResponse.userID;
    }

    //getters y setters
}

class IProxyFacebook {
    constructor(fbProfile) {
        this.fbProfile = fbProfile;
    }

    getFacebookProfile(userID) {
        return this.fbProfile;
    }
}

class ProxyFacebook extends IProxyFacebook {
    //$.ajax function 
}



const proxyFB = new ProxyFacebook();
export default proxyFB;