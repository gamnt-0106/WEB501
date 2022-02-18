import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

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
