import Footer from "../components/footer";
import Header from "../components/header";
import Show from "../components/show_product";

const ProductPage = {
    async render() {
        return /* html */ `
        ${Header.render()}
        <div class="col-lg-4 col-md-4 col-12 ">
             ${await Show.render()}
           
        </div>
        <!--Offcanvas menu area start-->
        ${Footer.render()}
    
   


        `;
    },
};
export default ProductPage;
