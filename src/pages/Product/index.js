/* eslint-disable import/newline-after-import */
import { getAll } from "../../api/post";

import Header from "../../components/header";
const ProductsPagee = {
    async render() {
        const { data } = await getAll();
        return /* html */`
        <div id="header">
        ${Header.render()};
    </div>
   <!--shop  area start-->
   <div class="shop_area shop_reverse">
   <div class="container">
       <div class="shop_inner_area">
           <div class="row">
               <div class="col-lg-3 col-md-12">
                  <!--sidebar widget start-->
                   <div class="sidebar_widget">
                       <div class="widget_list widget_filter">
                           <h2>Filter by price</h2>
                           <form action="#"> 
                               <div id="slider-range"></div>   
                               <button type="submit">Filter</button>
                               <input type="text" name="text" id="amount" />   

                           </form> 
                       </div>
                       <div class="widget_list widget_categories">
                           <h2>Product categories</h2>
                           <ul>
                               <li><a href="#">Categories1 <span>6</span></a> </li>
                               <li><a href="#"> Categories2 <span>10</span></a> </li>
                               <li><a href="#">Categories3 <span>4</span></a> </li>
                               <li><a href="#"> Categories4 <span>4</span></a> </li>
                               <li><a href="#">Categories5 <span>3</span></a> </li>

                           </ul>
                       </div>

                       <div class="widget_list widget_categories">
                           <h2>Manufacturer</h2>
                           <ul>
                               <li><a href="#">Calvin Klein <span>6</span></a> </li>
                               <li><a href="#"> Chanel <span>10</span></a> </li>
                               <li><a href="#">Christian Dior <span>4</span></a> </li>
                               <li><a href="#"> ferragamo <span>4</span></a> </li>
                               <li><a href="#">hermes <span>10</span></a> </li>
                               <li><a href="#">louis vuitton <span>8</span></a> </li>
                               <li><a href="#">Tommy Hilfiger <span>7</span></a> </li>
                               <li><a href="#">Versace <span>6</span></a> </li>

                           </ul>
                       </div>
                       <div class="widget_list widget_categories">
                           <h2>Select By Color</h2>
                           <ul>
                               <li><a href="#">Black <span>6</span></a> </li>
                               <li><a href="#"> Blue <span>10</span></a> </li>
                               <li><a href="#">Brown <span>4</span></a> </li>
                               <li><a href="#"> Green <span>4</span></a> </li>
                               <li><a href="#">Pink <span>7</span></a> </li>
                               <li><a href="#">White<span>8</span></a> </li>
                               <li><a href="#">Yellow <span>5</span></a> </li>

                           </ul>
                       </div>
                       <div class="widget_list tag-cloud">
                           <h2>Popular Tags</h2>
                           <div class="tag_widget">
                               <ul>
                                   <li><a href="#">Creams</a></li>
                                   <li><a href="#">Eyebrow Pencil</a></li>
                                   <li><a href="#">Eyeliner</a></li>
                                   <li><a href="#">Eye Shadow</a></li>
                                   <li><a href="#">Lotions</a></li>
                                   <li><a href="#">Mascara</a></li>
                                   <li><a href="#">Oils</a></li>
                                   <li><a href="#">Powders</a></li>
                                   <li><a href="#">Shampoos</a></li>
                               </ul>
                           </div>
                       </div>

                   </div>
                   <!--sidebar widget end-->
               </div>
               <div class="col-lg-9 col-md-12">
                   <!--shop wrapper start-->
                   <!--shop toolbar start-->
                   <div class="shop_title">
                       <h1>shop</h1>
                   </div>
                   <div class="shop_toolbar_wrapper">
                       <div class="shop_toolbar_btn">

                           <button data-role="grid_3" type="button" class="active btn-grid-3" data-toggle="tooltip" title="3"></button>

                           <button data-role="grid_4" type="button"  class=" btn-grid-4" data-toggle="tooltip" title="4"></button>

                           <button data-role="grid_5" type="button"  class="btn-grid-5" data-toggle="tooltip" title="5"></button>

                           <button data-role="grid_list" type="button"  class="btn-list" data-toggle="tooltip" title="List"></button>
                       </div>
                       <div class=" niceselect_option">

                           <form class="select_option" action="#">
                               <select name="orderby" id="short">

                                   <option selected value="1">Sort by average rating</option>
                                   <option  value="2">Sort by popularity</option>
                                   <option value="3">Sort by newness</option>
                                   <option value="4">Sort by price: low to high</option>
                                   <option value="5">Sort by price: high to low</option>
                                   <option value="6">Product Name: Z</option>
                               </select>
                           </form>


                       </div>
                       <div class="page_amount">
                           <p>Showing 1–9 of 21 results</p>
                       </div>
                   </div>
                    <!--shop toolbar end-->
                   <!--product-->
                    <div class="row shop_wrapper">
                        <div class="grid grid-cols-3 gap-8">
                            ${data.map((product) => `
                    
                            <div class=" p-4">
                                <a href="/#/products/${product.id}">
                                    <img src="${product.img}" alt="" />
                                </a>
                                <h3 class="my-3"><a  href="/#/products/${product.id}" class="font-semibold text-lg text-orange-500 ">${product.title}</a></h3>                    
                                <p>${product.desc}</p>
                                <p>${product.price}</p>
                              
                            </div>
                          
                        `).join("")}
                     
                     
                       
                        </div>
                   
                `;
    },

};

export default ProductsPagee;
