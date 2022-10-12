import i18next from "i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
    resources: {
        uz: {
                    translation: {
                        header:{
                            logo: 'Xohlagan narsangizni soting, toping, sotib ',
                            Объявления: 'Elonlar',
                            Магазины: 'Dokonlar',
                            Длябизнеса: 'Biznes uchun',
                            Помощь: 'Yordam',
                            Вход:"Kirish | Royhatdan otish",
                            Рус: "RUS",
                            Oz: "UZB",
                        }
                    }
                },
                rus: {
                    translation: {
            
                    header:{
                        logo: 'Продай, найди, купи все что пожелаешь…',
                        Объявления: 'Объявления',
                        Магазины: 'Магазины',   
                        Длябизнеса: 'Длябизнеса',
                        Помощь: 'Помощь',
                        Вход:"Вход | Регистрация",
                        Рус: "РУС",
                        Oz: "УЗБ",
                    }
                }
            
                }
    },
    lng: localStorage.getItem("lng") || "uz",
})


export default i18next;