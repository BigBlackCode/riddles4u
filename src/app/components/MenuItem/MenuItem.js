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

import renderMenuItem from './MenuItem.html';
import './MenuItem.scss';

/**
 * Menu Item Component
 *
 * This component displays a single item inside a menu box.
 */
class MenuItem {
    /**
     * Class Constructor
     *
     * @param {String} title The displayed title of the menu item.
     * @param {String} url The linked URL of the menu item.
     */
    constructor(title, url) {
        this.title = title;
        this.url = url;
        this.template = renderMenuItem;
    }

    /**
     * Get the component's HTML.
     *
     * @returns {String} Returns the component's HTML.
     */
    getHtml() {
        const templateData = {
            title: this.title,
            url: this.url
        };

        return this.template(templateData);
    }
}

export default MenuItem;