import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//SINGLETON PATTERN FOR THE SHOPPING BAG/CART
class CartSingleton {
    constructor() {
        if (!CartSingleton.instance) {
            this._cart = window.localStorage.getItem("cart");
            CartSingleton.instance = this;
        }
        return CartSingleton.instance;
    }
}

    //implementing decorator pattern to extend the singleton functionality
    //encapsulating the JSON object
    //implementing the prototype pattern
    CartSingleton.prototype.JSONize = function (arr) {
    return JSON.parse(arr);
}

    CartSingleton.prototype.calculateTotal = function(item) {
    return (item.productPrice * item.productQuantity);
}

    CartSingleton.prototype.fromJSONToString = function(item) {
    return JSON.stringify(item);
}

const cartInstance = new CartSingleton();
Object.freeze(cartInstance);

export default new Vuex.Store({
    state: {
        cart: cartInstance._cart ? cartInstance.JSONize(cartInstance._cart) : [],
    },
    getters: {
        totalPrice: state => {
            let total = 0;
            state.cart.filter((item) => {
                total += cartInstance.calculateTotal(item);
            });

            return total;
        }
    },

    mutations: {
        //DECORATOR WITH saveData
        saveData(state) {
            window.localStorage.setItem("cart", cartInstance.fromJSONToString(state.cart));
        },

        addToCart(state, item) {

            let found = state.cart.find(product => product.productId == item.productId);
            if (found) {
                found.productQuantity++;
            } else {
                state.cart.push(item);
            }

            //decorator
            this.commit("saveData");
        },

        removeFromCart(state, item) {
            let i = state.cart.indexOf(item);
            state.cart.splice(i, 1);

            this.commit("saveData");
        }
    }
})