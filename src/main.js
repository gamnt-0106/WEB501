/* eslint-disable import/no-unresolved */
import Navigo from "navigo";
import AboutPage from "./pages/about";
// import DetailPage from "./pages/detail";
import HomePage from "./pages/home";

import AdminNewPage from "./pages/admin/news";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/admin/dashboard";
import AdminEditPost from "./pages/admin/news/edit";
import BlogPage from "./pages/blog";
import Contact from "./pages/contact";
import AdminAddPost from "./pages/admin/news/add";
// import AddProduct from "./pages/admin/Product/add_product";

import CartPage from "./pages/cart";
// eslint-disable-next-line no-unused-vars
import ProductsPagee from "./pages/Product";
import ProductDetailPage from "./pages/Product/detail";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before: (done) => {
        const userId = JSON.parse(localStorage.getItem("user")).id;
        // nếu userId === 1 thì tôi mới render
        if (userId === 1) {
            done();
        } else {
            // ngược thì lại redirect về trang chủ
            document.location.href = "/";
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/products": () => print(ProductsPagee),
    "/products/:id": ({ data }) => print(ProductDetailPage, data.id),
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/blog": () => print(BlogPage),
    "/contact": () => print(Contact),
    // "/news/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewPage),
    "/admin/news/add": () => print(AdminAddPost),
    "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
    // "/admin/show_product": () => print(ProductPage),
    "/products/detail": () => print(ProductDetailPage),
    // "/admin/show_product/add_product": () => print(AddProduct),
    "/cart": () => print(CartPage),

});

router.resolve();
