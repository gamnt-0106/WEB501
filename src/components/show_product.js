import { getAll } from "../api/product";

const Show = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
                  
                    <div class="grid grid-cols-3 gap-8">
                        ${data.map((product) => `
                        <div class="border p-3">
                            <a href=""><img src="${product.img}" alt="" /></a>
                            <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${product.name}</a></h3>
                            <p>${product.desc}</p>
                        </div>
                        `).join("")}
                    </div>
                    
                    `;
    },
};
export default Show;
