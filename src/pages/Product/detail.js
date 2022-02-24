import toastr from "toastr";
import { get } from "../../api/post";
import { addToCart } from "../../utils/cart";
import "toastr/build/toastr.min.css";
import Header from "../../components/header";

const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id);
        return /* html */`
        <div id="header">
        ${Header.render()}
    </div>
    <div class="product_details">
    <div class="container">
        <div class="row">
            <div class="col-lg-5 col-md-5">
               <div class="product-details-tab">

                    <div id="img-1" class="zoomWrapper single-zoom">
                        <a href="#">
                            <img id="zoom1" src="${product.img}" data-zoom-image="assets/img/product/product5.jpg" alt="big-1">
                        </a>
                    </div>

                    <div class="single-zoom-thumb">
                        <ul class="s-tab-zoom owl-carousel single-product-active" id="gallery_01">
                            <li>
                                <a href="#" class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product4.jpg" data-zoom-image="assets/img/product/product4.jpg">
                                    <img src="${product.img}" alt="zo-th-1"/>
                                </a>

                            </li>
                            <li >
                                <a href="#" class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product6.jpg" data-zoom-image="assets/img/product/product6.jpg">
                                    <img src="${product.img}" alt="zo-th-1"/>
                                </a>

                            </li>
                            <li >
                                <a href="#" class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product8.jpg" data-zoom-image="assets/img/product/product8.jpg">
                                    <img src="${product.img}" alt="zo-th-1"/>
                                </a>

                            </li>
                            <li >
                                <a href="#" class="elevatezoom-gallery active" data-update="" data-image="assets/img/product/product2.jpg" data-zoom-image="assets/img/product/product2.jpg">
                                    <img src="${product.img}" alt="zo-th-1"/>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-7 col-md-7">
                <div class="product_d_right">
                   <form action="#">
                       
                        <h1>${product.title}</h1>
                        <div class=" product_ratting">
                            <ul>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li><a href="#"><i class="fa fa-star"></i></a></li>
                                <li class="review"><a href="#"> 1 review </a></li>
                                <li class="review"><a href="#"> Write a review </a></li>
                            </ul>
                        </div>
                        <div class="product_price">
                            <span class="current_price">${product.price} :VND</span>
                        </div>
                        <div class="product_desc">
                           <p>${product.desc}</p>
                        </div>

                        <div class="product_variant color">
                            <h3>color</h3>
                            <select class="niceselect_option" id="color" name="produc_color">
                                <option selected value="1">choose in option</option>        
                                <option value="2">choose in option2</option>              
                                <option value="3">choose in option3</option>              
                                <option value="4">choose in option4</option>              
                            </select>   
                        </div>
                        <div class="product_variant size">
                            <h3>size</h3>
                            <select class="niceselect_option" id="color1" name="produc_color">
                                <option selected value="1">size</option>        
                                <option value="2">x</option>              
                                <option value="2">xl</option>              
                                <option value="3">md</option>              
                                <option value="4">xxl</option>              
                                <option value="4">s</option>              
                            </select> 
                        </div>
                        <div class="product_variant quantity">
                            <label>quantity</label>
                            <input type="number" id="inputValue" min="1" max = "100" class="border border-black" />
                            <button class="button" type="submit">add to cart</button>  
                        </div>
                        <button data-id="${product.id}" id="btnAddToCart">Add to cart</button>
                        <div class=" product_d_action">
                           <ul>
                               <li><a href="#" title="Add to wishlist"><i class="fa fa-heart-o" aria-hidden="true"></i> Add to Wish List</a></li>
                               <li><a href="#" title="Add to Compare"><i class="fa fa-sliders" aria-hidden="true"></i> Compare this Product</a></li>
                           </ul>
                        </div>
                        
                    </form>
                    <div class="priduct_social">
                        <h3>Share on:</h3>
                        <ul>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>           
                            <li><a href="#"><i class="fa fa-vimeo"></i></a></li>           
                            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>           
                            <li><a href="#"><i class="fa fa-pinterest"></i></a></li>        
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>        
                        </ul>      
                    </div>

                </div>
            </div>
        </div>
    </div>    
</div>
        <div class=" p-3">
          
        </div>
        `;
    },
    afterRender() {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector("#inputValue");

        btnAddToCart.addEventListener("click", async () => {
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({ ...data, quantity: inputValue.value ? inputValue.value : 1 }, () => {
                toastr.success(`Thêm sản phẩm ${data.name} vào giỏ hàng thành công!`);
            });
        });
    },

};

export default ProductDetailPage;
