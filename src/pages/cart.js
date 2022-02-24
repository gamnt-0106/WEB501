/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import toastr from "toastr";
// eslint-disable-next-line import/extensions
import { reRender } from "../utils";
// eslint-disable-next-line import/no-unresolved
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../components/header";
import Footer from "../components/footer";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */`
        ${Header.render()}


        <form action="#"> 
                <div class="row">
                    <div class="col-12">
                        <div class="table_desc">
                            <div class="cart_page table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="product_remove">Delete</th>
                                            <th class="product_name">Name</th>
                                            <th class="product_thumb">Image</th>
                                            <th class="product-price">Price</th>
                                            <th class="product_quantity">Quantity</th>
                                            <th class="product_quantity">Total</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                    ${cart.map((item) => `
                                        <tr>
                                       <td>
                                       <button data-id="${item.id}" class="bg-red-700 text-neutral-900 btn btn-remove mr-2 px-2">Xóa</button></td>
                                        <td >${item.title}</td>
                                        <td><img class="w-[20%]" src=" ${item.img}" alt=""></td>
                                        <td>${item.price}</td>
                                        <td>
                                        <input type="number" value="${item.quantity}" class="border border-gray-500"/>
                                       
                                    </td>
                                    <td></td>
                                        </tr>
                                       
                                       
                                    </tbody>
                                    `).join("")}
                                </table>   
                            </div>  
                            <div class="cart_submit">
                                <button type="submit">update cart</button>
                            </div>      
                        </div>
                    </div>
                </div>
                
                <!--coupon code area start-->
                <div class="coupon_area">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="coupon_code left">
                                <h3>Coupon</h3>
                                <div class="coupon_inner">   
                                    <p>Enter your coupon code if you have one.</p>                                
                                    <input placeholder="Coupon code" type="text">
                                    <button type="submit">Apply coupon</button>
                                </div>    
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="coupon_code right">
                                <h3>Cart Totals</h3>
                                <div class="coupon_inner">
                                   <div class="cart_subtotal">
                                       <p>Subtotal</p>
                                       <p class="cart_amount">£215.00</p>
                                   </div>
                                   <div class="cart_subtotal ">
                                       <p>Shipping</p>
                                       <p class="cart_amount"><span>Flat Rate:</span> £255.00</p>
                                   </div>
                                   <a href="#">Calculate shipping</a>

                                   <div class="cart_subtotal">
                                       <p>Total</p>
                                       <p class="cart_amount">£215.00</p>
                                   </div>
                                   <div class="checkout_btn">
                                       <a href="#">Proceed to Checkout</a>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--coupon code area end-->
                
            </form> 
            ${Footer.render()}
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => reRender(CartPage, "#app"));
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Bạn đã xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;
