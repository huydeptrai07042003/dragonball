import { useTranslation } from "react-i18next";

/////////////////////////////////////
function AboutUs() {
    const {t} = useTranslation('about');
    const categories = t("categories", { returnObjects: true });

    return (
        <div className="pt-[90px] dark:text-white dark:bg-black ">
            <h1 className="text-center text-5xl md:text-7xl mt-5">
                <b>{t('name')}</b>
            </h1>
            {categories.map((category, index) => {
                return (
                    <div key={index} className="text w-[90%] mx-auto mt-14">
                        <h2 className="font-bold text-3xl border-b-1 mb-10 mt-30">{category.title}</h2>
                        {category.list.map((item, index) => {
                            return (
                                <div className="mb-10" key={index}>
                                    {item.title && <h3 className="font-bold text-lg my-3">{item.title}</h3>}
                                    <p>{item.content}</p>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
            <div className="h-20" />
        </div>
    );
}

export default AboutUs;
