import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";
import Banner2 from "../components/banner2";

const HomePage = {
    async render() {
        return /* html */`
        <div >
            <div id="header">
                ${Header.render()}
            </div>
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                <div class="news">
                    ${await News.render()}
                </div>
                <div class="banner">
                ${Banner2.render()}
            </div>
            </main>
            ${Footer.render()}
        </div>
            
        `;
    },
    afterRender() {
        // Header.afterRender();
        // console.log("HOme");
    },
};
export default HomePage;
