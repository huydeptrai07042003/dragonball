import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//HEADER
import HEADER_EN from '../locales/en/header.json';
import HEADER_VI from '../locales/vi/header.json';
import SETTING_EN from '../locales/en/setting.json';
import SETTING_VI from '../locales/vi/setting.json';
//FOOTER
import FOOTER_EN from '../locales/en/footer.json';
import FOOTER_VI from '../locales/vi/footer.json';
//HOME PAGE
import HOME_EN from '../locales/en/home.json';
import HOME_VI from '../locales/vi/home.json';
//ABOUT PAGE
import ABOUT_EN from '../locales/en/about.json';
import ABOUT_VI from '../locales/vi/about.json';
//PRODUCTS PAGE
import PRODUCTS_EN from '../locales/en/products.json';
import PRODUCTS_VI from '../locales/vi/products.json';
//CONTACT PAGE
import CONTACT_EN from '../locales/en/contact.json';
import CONTACT_VI from '../locales/vi/contact.json';
//MODAL 
import MODAL_EN from '../locales/en/modal.json';
import MODAL_VI from '../locales/vi/modal.json';





export const locales = {
    en: 'English',
    vi: 'Vietnamese',
};

const resources = {
    en: {
        header: HEADER_EN,
        setting:SETTING_EN,
        home:HOME_EN,
        footer:FOOTER_EN,
        about:ABOUT_EN,
        products:PRODUCTS_EN,
        modal:MODAL_EN,
        contact:CONTACT_EN
    },
    vi: {
        header: HEADER_VI,
        setting:SETTING_VI,
        home:HOME_VI,
        footer:FOOTER_VI,
        about:ABOUT_VI,
        products:PRODUCTS_VI,
        modal:MODAL_VI,
        contact:CONTACT_VI


    },
};

    const defaultNS ='header'
i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',
        ns:['header','setting','home','footer','about','products','contact'],
        defaultNS,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
