import axios from "axios";
import { add } from "../../../api/product";
import AdminProduct from "../../../components/AdminProduct";

const AddProduct = {
    async render() {
        console.log("");
        return /* html */`
        <div class="min-h-full">
        ${AdminProduct.render()}
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                         Thêm mới
                        </h2>
                </div>

               <div class="mt-5 flex lg:mt-0 lg:ml-4">
                    <a href="/admin/show_product/add_product" class="sm:ml-3">
                       <a href="/">
                       <button
                       type="button"
                       class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                       Quay lại
                   </button>
                       </a>
                    </a>
                </div>
            </div>
        </div>
        </header>
        <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
            <form id="form-add">
                <input type="text" class="border border-black" id="name-product" placeholder="Title"/><br />
                <div class="w-3xl grid grid-cols-2 gap-8">
                    <div><input type="file" class="border border-black" id="img-product" /></div>
                   
                </div>
                <input type="number" name="" id="price-product" placeholder ="PRICE"/><br />
                
                <textarea name="" cols="30" rows="10" class="border border-black" id="desc-product" placeholder="Description"></textarea><br />
               <a href=""> <button class="inline-block px-4 py-3 text-black rounded bg-sky-600 " >Thêm</button></a>
            </form>
        </div>
                <!-- /End replace -->
            </div>
        </main>
    </div>
    
    `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/db8bve0lu/image/upload";
        const CLOUDINARY_PRESET = "ise7zuai";

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img-product").files[0];

            // tạo object và gắn giá trị vào các thuộc tính của formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call API cloudinary để đẩy ảnh lên
            const { data } = await axios.product(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });

            // call api thêm bài viết
            add({
                title: document.querySelector("#name-product").value,
                img: data.url,
                desc: document.querySelector("#desc-product").value,
                price: document.querySelector("#price-product").value,
                description: document.querySelector("#description-product").value,
            });
        });
    },
};
export default AddProduct;
