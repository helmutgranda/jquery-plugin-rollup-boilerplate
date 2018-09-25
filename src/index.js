import $ from 'jquery'
// import XYZ from './additionafile.js'

const Plugin = (($) => {

  const NAME = 'plugin';
  const VERSION = '0.0.1';

  const ClassName = {
    PLUGIN : 'plugin'
  }

  const Selector =  {
    PLUGIN: '.plugin'
  }

  class Plugin {
    constructor ( element ) {
      console.log("initialized")
      this._element = element
    }

    static get VERSION() {
      return VERSION
    }

    static _jQueryInterface(config) {
      return this.each(function() {
        let data = $(this).data('hg.plugin')

        if(!data) {
          data = new Plugin(this)
          $(this).data('hg.plugin', data);
        }

        if (config === 'enable') {
          data[config]()
        }

      })
    }
  }

  $(window).on("load.hg.plugin", () => {
    const plugins = [].slice.call(document.querySelectorAll('[data-plugin="on"]'));
    for (let i = 0, len = plugins.length; i < len; i++) {
      const $plugin = $(plugins[i])
      Plugin._jQueryInterface.call($plugin, $plugin.data())
    }
  })

  $.fn[NAME] = Plugin._jQueryInterface
  $.fn[NAME].Constructor = Plugin
  $.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Plugin._jQueryInterface
  }

  return Plugin


})($)

export default Plugin