import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
class CartSingleton {
    constructor() {
        if (!CartSingleton.instance) {
            this._cart = window.localStorage.getItem("cart");
            CartSingleton.instance = this;
        }
        return CartSingleton.instance;
    }

}

const cartInstance = new CartSingleton();
Object.freeze(cartInstance);

export default new Vuex.Store({
    state: {
        cart: cartInstance._cart ? JSON.parse(cartInstance._cart) : [],
    },
    getters: {
        totalPrice: state => {
            let total = 0;
            state.cart.filter((item) => {
                total += (item.productPrice * item.productQuantity);
            });

            return total;
        }
    },

    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(product => product.productId == item.productId)
            if (found) {
                found.productQuantity++;
            } else {
                state.cart.push(item);
            }

            this.commit("saveData");
        },

        saveData(state) {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        },

        removeFromCart(state, item) {
            let i = state.cart.indexOf(item);
            state.cart.splice(i, 1);

            this.commit("saveData");
        }
    }
})