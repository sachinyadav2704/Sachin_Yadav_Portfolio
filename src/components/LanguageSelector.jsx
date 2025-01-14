import { useState } from 'react';
import GlobalIcon from '../assets/icons/global_icon_2.png';
import { Button, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import './index.css';

const languages = [
   { code: 'hi', label: 'Hindi', lang: 'हिंदी' },
   { code: 'en', label: 'English', lang: 'English' },
   { code: 'fr', label: 'French', lang: 'Français' },
   { code: 'ar', label: 'Arabic', lang: 'عربي' },
];

const LanguageSelector = () => {
   const { i18n } = useTranslation();
   const [selectLanguageModal, setSelectLanguageModal] = useState(false);

   const handleChangeLanguage = lng => {
      i18n.changeLanguage(lng);
   };

   return (
      <div className="lang-container">
         <img
            title="Global Icon"
            width={40}
            height={40}
            // style={{ position: 'fixed', top: '1rem', right: '1rem' }}
            src={GlobalIcon}
            onClick={() => setSelectLanguageModal(true)}
         />
         <Modal
            open={selectLanguageModal}
            title="Select your global language"
            onCancel={() => setSelectLanguageModal(false)}
            onOk={() => {
               setSelectLanguageModal(false);
            }}
         >
            {/* <Select
               placeholder="Select your langauge"
               value={selectLanguage}
               onChange={lng => handleChangeLanguage(lng)}
               style={{ width: '12rem', border: '1px solid gray', borderRadius: '0.4rem' }}
            > */}
            <div className="btn-container">
               {languages.map(lng => {
                  return (
                     <Button
                        className={`lang-btn ${lng.code === i18n.language && 'selected-btn'}`}
                        key={lng.code}
                        onClick={() => handleChangeLanguage(lng.code)}
                     >
                        {lng.label} - {lng.lang}
                     </Button>
                     //  <Option key={lng.code} value={lng.code}>
                     //     {lng.label} - {lng.lang}
                     //  </Option>
                  );
               })}
            </div>
            {/* </Select> */}
         </Modal>
      </div>
   );
};

export default LanguageSelector;
