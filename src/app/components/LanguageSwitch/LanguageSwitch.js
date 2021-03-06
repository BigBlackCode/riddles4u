/* ----------------------------------------------------------------------------
 * Riddles4U - Amazing Riddles Game Platform
 *
 * @package     Riddles4U
 * @author      Alex Tselegidis <alextselegidis@gmail.com>
 * @copyright   Copyright (c) 2017, BigBlackCode
 * @license     http://opensource.org/licenses/GPL-3.0 - GPLv3
 * @link        http://riddles4u.com
 * @since       v1.0.0
 * ---------------------------------------------------------------------------- */

import page from 'page';
import {setLanguageCode, loadAllSections} from '../../services/Language';
import renderLanguageSwitch from './LanguageSwitch.html';
import './LanguageSwitch.scss';

/**
 * Language Switch Component
 *
 * This component displays the available languages and handles the language switching by updating the
 * contents of the app.
 */
class LanguageSwitch {
    /**
     * Class Constructor
     *
     * @param {String[]} availableLanguages Array with the available languages.
     */
    constructor(availableLanguages) {
        /**
         * @type {String[]}
         */
        this.availableLanguages = availableLanguages;

        /**
         * @type {String}
         */
        this.currentLanguage = 'en';
    }

    /**
     * Set the current displayed language.
     *
     * @param {String} languageCode Current language code.
     *
     * @return {LanguageSwitch} Class instance for chained method calls.
     */
    setCurrentLanguage(languageCode) {
        this.currentLanguage = languageCode;
        return this;
    }

    /**
     * Get the current language.
     *
     * @returns {String}
     */
    getCurrentLanguage() {
        return this.currentLanguage;
    }

    /**
     * Append component to target element.
     *
     * @param {HTMLElement} target The target to be append to.
     *
     * @return {LanguageSwitch} Class instance for chained method calls.
     */
    appendTo(target) {
        const languages = [];

        for (let languageCode in this.availableLanguages) {
            languages.push({
                code: languageCode,
                name: this.availableLanguages[languageCode],
                default: languageCode === this.currentLanguage
            });
        }

        const templateData = {
            languages
        };

        const tmp = document.createElement('div');
        tmp.innerHTML = renderLanguageSwitch(templateData);
        target.appendChild(tmp.firstChild);

        return this;
    }

    /**
     * Bind language click handler.
     *
     * @returns {LanguageSwitch} Class instance for chained method calls.
     */
    bindLanguageClickListener() {
        document.querySelector('.language-switch').addEventListener('click', event => {
            event.preventDefault();

            if (event.target.tagName !== 'A' || event.target.parentNode.classList.contains('active')) {
                return;
            }

            setLanguageCode(event.target.getAttribute('data-language'));

            location.reload();
        });

        return this;
    }
}

export default LanguageSwitch;