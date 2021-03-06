import { get, update } from "../../../api/product";
import AdminProduct from "../../../components/AdminProduct";

const EditProduct = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div class="min-h-full">
        ${AdminProduct.render()}
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex-1 min-w-0">
                        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                           Edit ${data.name}
                        </h2>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div class="px-4 py-6 sm:px-0">
                    <form id="form-edit">
                        <input class type="text" 
                                id="name-product" 
                                class="border border-black ml-5" 
                                placeholder="Title"  
                                value="${data.name}"
                                /> </br >
                        <input type="text" 
                                id="img-product" 
                                class="border border-black"  
                                placeholder="Image" 
                                value="${data.img}"
                                /> </br >
                        <textarea name="" 
                                id="desc-product" 
                                cols="30" 
                                rows="10" 
                                class="border border-black"
                                >${data.desc}</textarea>
                        <button class="border border-black hover:text-orange-300 bg-cyan-600">Update Product</button>
                    </form>
                </div>
                <!-- /End replace -->
            </div>
        </main>
    </div>
    
    `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        formEdit.addEventListener("submit", (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector("#name-product").value,
                img: document.querySelector("#img-product").value,
                desc: document.querySelector("#desc-product").value,
            });
        });
    },
};
export default EditProduct;
