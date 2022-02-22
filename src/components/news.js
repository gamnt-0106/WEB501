import { getAll } from "../api/post";

const News = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
                    <h2 class="font-semibold text-orange-500 my-4 uppercase text-1xl ml-5">NEW ARRIVALS</h2>
                    <div class="grid grid-cols-3 gap-8 ">
                        ${data.map((post) => `
                        <div class=" p-3">
                            <a href="/#/news/${post.id}"><img  src="${post.img}" alt="" /></a>
                            <h3 class="my-3"><a href="/news/${post.id}" class="font-semibold text-orange-500 text-2xl pl-[38%]">${post.title}</a></h3>
                            <p class="  text-xl text-inherit ">${post.desc}</p>
                            <p class="italic  text-xl  ">${post.price}</p>
                            <div class="col-span-2">
                            <ul>
                                <li class="inline-block mr-2 text-red-500"><i class="far fa-heart"></i></li>
                                <li class="inline-block  text-red-500"><i class="fas fa-cart-arrow-down"></i></li>
                              
                                <li class="inline-block pl-[50%] text-amber-400"><i class="fa fa-star"></i></li>
                                <li class="inline-block text-amber-400"><i class="fa fa-star"></i></li>
                                <li class="inline-block text-amber-400"><i class="fa fa-star"></i></li>
                                <li class="inline-block text-amber-400"><i class="fa fa-star"></i></li>
                                <li class="inline-block text-amber-400"><i class="fa fa-star"></i></li>
                            </ul>
                           
                                <div>
                                   
                                    
                                   
                                <div class=" ">
                             
                                </div>
                            </div>
                        </div>
                           
                        </div>
                        `).join("")}
                    </div>
                   
                    
                    `;
    },
};
export default News;
