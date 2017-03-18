// ==UserScript==
// @name        Clear Field 6
// @version     1.0.7
// @author      Sonny Razzano aka srazzano
// @description Adds clear field button to inputs/textareas
// @namespace   srazzano
// @include     *
// @require     https://raw.githubusercontent.com/srazzano/GM_devtools_Dialog/master/GM_devtools_Dialog.js
// @icon        https://raw.githubusercontent.com/srazzano/Images/master/clear.png
// @support     srazzano@gmail.com
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

/* jshint multistr:true */

(function () {

  'use strict';

  const image1 = 'data:image/png;base64,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';

  const image2 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC2klEQVR42sWXz2vUQ\
BTHv9lsdq1oWwRB/QMq9OSxN2896MWLf4EKFroi1IMUf6BCEUGKbkFB+w/oRQ9eepR6VS8qFC9edFlhZddtd912je8lM9nZ2U1mkhR88M\
gkefO+n3mZzCTOInB+D3iBHPYUcLL2dS4D/pP5+Tz6WNjYyAyxLwAVAtgTlbgLHLwF7KQDmJ0FtreBAg3CLQLlMjAxAfQp7V9/cL1IXih\
Q2wXav4cz/ahhoVZLXYkQYGoKmJ4OhTrdbGU4fgyVDx+jSqQHmJwEWq1cj4Kt3mzitoCgo3cH2LUDKJeAP73cAGwVgpCVuE6Z71NmMwCZ\
Tx2lXSF/bCHGcVXqz30dkUevxDL5CqU3AvQEwBIn9X1UHCeAiKuhGldVxPVKHKHZZQRg8RIduRMnjZJQ8ocJ4mrcCERnB/XeblQJYwV08\
TgIXXwEwiuGF0r0OjcaqHS7QSXoxXZX6cUeAbhKjbWYpDrEkkVcteiGJ0UvXDe6HdRpPRlXiQgAlhDG+5S+J0I8FmA5z4NPj4LeCLQ0iC\
EAaScTRJLE74m2GH8IoJw3xFGtRAAwR405JZmpEknibHI1kQCeAsYV4Fi5TgQAp0QndUuyhWDxa9o1uZjT0oYCxk//AyHIyyEA3bZgnhP\
SFscAlIW4I0BkRdh+kT+PA9gSR9sKSJsxRgOHyN/HPQLbkSdB2IB8hjYJJUCakZsg4kzfrkcA8q4DacQjgNPUeGchPmMJaSseAZxB+BG3\
ifg1nu0S+ReLONX4dWvDsBldpAZvR1/J32B0lztLxxNKp+8JcU0lblOM/Jl74XC/v942ArB9I3+FwT4vR67bT0PcJ/K3MH8fRnuBq914R\
H6O/GhCZwmhA64jnNQ2H6cBwA1qdMbctP64V4wfz2tL8QhgVYwmq/Hqxg/4gThfS/tZXsVgq8xivMb3yW+mGPkQwEoOcTb6FUv9Q7KvAM\
sZxQOA//17/g9bIEhccjsy+AAAAABJRU5ErkJggg==';

  devtools.config.init({
    title: 'Clear Field 6 Options',
    settings: {
      'iconImage': {
        type: 'radio',
        label: 'Icon to display',
        options: {
          Image1: '1',
          Image2: '2',
        },
        defaultValue: '1'
      },
      'iconSizeI': {
        type: 'text',
        label: 'Input icon max size',
        defaultValue: '32'
      },
      'iconSizeT': {
        type: 'text',
        label: 'Textarea icon size',
        defaultValue: '21'
      },
      'iconOffsetX': {
        type: 'text',
        label: 'Move icon left',
        defaultValue: '0'
      },
			'iconOffsetY': {
        type: 'text',
        label: 'Move icon up',
        defaultValue: '0'
      },
      'iconPadding': {
        type: 'text',
        label: 'Icon padding',
        defaultValue: '0'
      },
			'textPadding': {
        type: 'text',
        label: 'Text padding',
        defaultValue: '2'
      },
      'hideTooltip': {
        type: 'checkbox',
        label: 'Hide Tooltip',
        defaultValue: false
      }
    },
    css: '\
      #devtools-wrapper #devtools-dialog-devtools-config {\
        width: 200px !important;\
      }\
      #devtools-wrapper .dialog {\
        -moz-user-select: none !important;\
        -webkit-user-select: none !important;\
      }\
      #devtools-wrapper .dialog .dialog-title {\
        cursor: default !important;\
        margin: 0 0 8px 0 !important;\
      }\
      #devtools-wrapper .dialog .dialog-content > div label {\
        display: inline !important;\
      }\
      #devtools-wrapper .dialog-content fieldset > label > input {\
        top: 2px !important;\
      }\
      #devtools-wrapper .dialog .dialog-content > div:nth-child(1) > fieldset:nth-child(1) > label:nth-child(2) > span:nth-child(2):after {\
        content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACTUlEQVR42mNkIANMqgoJAVLv8trW7GMkVXNPkVsJC8Pf7u8\
/fsyvnHY0iWgDVsyqZfr69ZvBzQuHj3CysXJy8AqkVvZtnUPQgLVzy3h//f7l9fk3T6yMspX3p7fPGG5cPsnAxfzVsqx92Qm8BiycnBkqIcQz4/8/RqHbD94w/GPhZfjHLMTAwSvG8O\
XV1eLS+il9OA2Y053opiQtsE1WQpj5xdtvDAJ8rAzPn79lePbqE8OnL98Yfvz8vL+sc6cTVgNWTc9nZ2Thvi0kyC/76ukdBmVZfoZvXz4xCAjwMbz7+J3h87dfDI8ePb6Z27pDA6sBs\
5oji5TNY3qZWLkY+Pl4GF48vsHw9uk1Bo7fjxh4eHkZPn39xXDj2q119TOOBGMYMLspypaZjW0nt6gap7CUJgMnnyjDp0+fGVhZWRmq930Bq/H7u5rhz9d3ifVTti9AMWB2Q1SOooJo\
r4AgN9uHd+8YXr77xvD2028GZm45BnU9S4bqQwwMjN7+DP+3bmRQvdohtGTjifeMHVlOzCzMzBEyMmLlMrKiuowsrAxfgDaKSogxZB4zwvAeyAAQABlysi2AkbEuzsKAjYWxRUCEz5O\
Rk5vpx7efDDr6WgyPbt1kmPMnCa4BGwAZAvdCTpCR+uf3n/MV1JXjvn5+x62orsaw6EcI8QbAQGGEueDnd59Cubk5Yk9o1tsQ9AKehKgoL8KtJszD7q6pIGzGxMQsesuiQw0WiJLHKt\
g3HLjxi5jMpAjEHCBsXrXhHEjgwYxoaX01ibe7Ttz9CQBFrN7RSK6YvQAAAABJRU5ErkJggg==") !important;\
        left: 4px !important;\
        margin-right: 6px !important;\
        position: relative !important;\
        top: 3px !important;\
      }\
      #devtools-wrapper .dialog .dialog-content > div:nth-child(1) > fieldset:nth-child(1) > label:nth-child(3) > span:nth-child(2):after {\
        content: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoElEQVR42o2T4RWAIAiEYRony6FqhF4DNErTmPTC9ASTf9H\
dpwfFC1Gin9qI2HvHAliZh4CYkguZAowgBSACqRqGPQvCOoP1FccsViD2LEgHKAZ8hpsppIlQmzwzQpohIsQzSx1ZdxLtDyDkxgUxakhwNnMpYGYGoTd/EXALeCMEqLkMUQ1SKLR63R\
q9jEZm+0OaAVjmaYBnLoC/00e/8w1k23Evr50RhwAAAABJRU5ErkJggg==") !important;\
        left: 4px !important;\
        position: relative !important;\
        top: 3px !important;\
      }\
      #devtools-wrapper .dialog label {\
        font-weight: normal !important;\
        margin: 2px 0 !important;\
      }\
      #devtools-wrapper .dialog input[type="text"] {\
        cursor: text !important;\
        margin: 0 4px !important;\
        text-align: center !important;\
        width: 32px !important;\
      }\
      #devtools-wrapper .dialog .dialog-footer {\
        margin: 4px 0 0 0 !important;\
      }\
      #devtools-wrapper .dialog .dialog-footer button {\
        padding: 2px 4px !important;\
      }\
      #devtools-wrapper .dialog .dialog-footer button img {\
        margin: 0 4px 0 0 !important;\
        vertical-align: top !important;\
      }\
      #devtools-wrapper .dialog .dialog-footer button:first-child,\
      .dialog-close {\
        display: none !important;\
      }\
      #devtools-wrapper .dialog .dialog-content > div:nth-child(8) {\
        margin-top: 4px !important;\
      }\
      #devtools-wrapper .dialog .dialog-content > div:nth-child(8) > label:nth-child(1) > input:nth-child(1) {\
        margin-top: 2px !important;\
      }\
    '
  });

  const iconImage = parseInt(devtools.config.get('iconImage')),
        iconSizeI = parseInt(devtools.config.get('iconSizeI')),
        iconSizeT = parseInt(devtools.config.get('iconSizeT')),
        iconOffsetX = parseInt(devtools.config.get('iconOffsetX')),
        iconOffsetY = parseInt(devtools.config.get('iconOffsetY')),
        iconPadding = parseInt(devtools.config.get('iconPadding')),
        textPadding = parseInt(devtools.config.get('textPadding')),
        hideTooltip = devtools.config.get('hideTooltip');

  var textFields = [],
      wmap = new WeakMap(),
      resizeTimer = false,
      DOMObserverTimer = false,
      tTip;

  var getOffset = function (elem) {
    var rect = elem.getBoundingClientRect(),
        positionX = rect.left,
        positionY = rect.top,
        scrollX = document.body.scrollLeft,
        scrollY = document.body.scrollTop;
    return {
      x: positionX + scrollX,
      y: positionY + scrollY
    };
  };

  var createButton = function (textField) {
    if (hideTooltip) tTip = '';
    else tTip = 'Clear Field' + '\n \u2022 Shift or Ctrl + left-click for Options';
    var button = $c('img', {className: 'clear-field', title: tTip, src: iconImage === 1 ? image1 : image2}, [{type: 'mousedown', fn:function (e) {
      e.preventDefault();
      if (!e.ctrlKey && !e.shiftKey && e.button === 0) textField.value = '';
      if ((e.ctrlKey || e.shiftKey) && e.button === 0 || e.button === 1) devtools.config.open();
    }}]);
    return button;
  };

  var updateButton = function (textField) {
    var button = wmap.get(textField),
        bs = button.style,
        ts = textField.style,
        th = textField.clientHeight,
        tw = textField.clientWidth,
        uri = textField.baseURI,
        amaz = uri.match(/amazon\.com/),
        cust = uri.match(/custombuttons\.sourceforge\.net/),
        duck = uri.match(/duckduckgo\.com/),
        face = uri.match(/facebook\.com/),
        fuso = uri.match(/forum\.userstyles\.org/),
        goog = uri.match(/www\.google\.com/),
        home = uri.match(/homedepot\.com/),
        icon = uri.match(/iconarchive\.com/),
        mail = uri.match(/mail\.google\.com/),
        mozo = uri.match(/mozillazine\.org/),
        tmpo = uri.match(/tabmixplus\.org/),
        usps = uri.match(/uspstrackingus\.com/),
        yout = uri.match(/youtube\.com/);
    bs.backgroundColor = 'transparent';
    bs.border = 'none';
    bs.bottom = '0';
    bs.cursor = 'pointer';
    bs.left = '0';
    bs.margin = '0';
    bs.MozUserInput = 'disabled';
    bs.padding = '0';
    bs.position = 'absolute';
    bs.right = '0';
    bs.top = '0';
    bs.zIndex = 2147483647;
    ts.display = 'inline-block';
    ts.textIndent = '0';
    var bOffset = getOffset(button),
        tOffset = getOffset(textField),
        offsetX = tOffset.x - bOffset.x,
        offsetY = tOffset.y - bOffset.y;
    if (th >= 34) {
      bs.left = offsetX + (th - button.height) / 2 + 'px';
      bs.maxHeight = iconSizeI + 'px';
      bs.maxWidth = iconSizeI + 'px';
      bs.top = offsetY + (th - button.height) / 2 + 'px';
    } else {
      bs.left = (offsetX - iconOffsetX) + (iconPadding + 1) + 'px';
      bs.maxHeight = th - (iconPadding * 2) + 'px';
      bs.maxWidth = th - (iconPadding * 2) + 'px';
      bs.top = (offsetY - iconOffsetY) + (iconPadding + 1) + 'px';
    }
    if (textField.nodeName === 'INPUT') {
      if (textField.getAttribute('type') === 'text' || textField.getAttribute('type') === 'search') {
        textField.parentNode.insertBefore(button, textField.nextSibling);
        if (textField.id !== 'metanav-search-field') ts.paddingLeft = '0';
        ts.textIndent = (button.width + textPadding) + iconPadding + 'px';
        if (amaz) {
          bs.left = '0';
          bs.top = offsetY + iconPadding + 1 + 'px';
        }
        if (cust || mozo || tmpo) {
          if (textField.getAttribute('class').match(/\bsearch\b/)) {
            textField.setAttribute('class', textField.getAttribute('class').replace('search', 'text'));
            bs.backgroundColor = getComputedStyle(textField).backgroundColor;
            ts.width = tw + 'px';
        } }
        if (duck) {
          bs.left = offsetX - 6 + 'px';
          ts.textIndent = (offsetX + 14) + textPadding + 'px';
        }
        if (face) {
          bs.left = iconPadding + 'px';
          bs.top = (offsetY + iconPadding) + 1 + 'px';
          if (textField.getAttribute('name') === 'q') ts.textIndent = (button.width + textPadding) + (iconPadding - 2) + 'px';
        }
        if (fuso || yout) {
          bs.left = offsetX + iconPadding + 'px';
          bs.top = offsetY + iconPadding + 'px';
        }
        if (goog) {
          bs.left = '-10px';
          ts.textIndent = button.width + (textPadding - 10) + 'px';
        }
        if (home) {
          ts.textIndent = button.width + textPadding + 2 + 'px';
        }
        if (icon) {
          ts.textIndent = button.width + (textPadding - 5) + 'px';
        }
        if (mail) {
          bs.left = '-4px';
          bs.top = offsetY + iconPadding + 'px';
        }
        if (usps) {
          bs.left = offsetX + iconPadding + 1 + 'px';
          bs.top = offsetY + iconPadding + 2 + 'px';
    } } }
    if (textField.nodeName === 'TEXTAREA') {
      if (!textField.title.match("What's on your mind?")) {
        textField.parentNode.insertBefore(button, textField.nextSibling);
        bs.left = offsetX + 1 + 'px';
        bs.maxHeight = iconSizeT + 'px';
        bs.maxWidth = iconSizeT + 'px';
        bs.top = offsetY + 1 + 'px';
        ts.textIndent = iconSizeT + textPadding + 'px';
    } }
    return button;
  };

  var registerInputButtons = function () {
    var inputs = $('input');
    if (!inputs.length) return;
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i],
          iType = input.getAttribute('type') === null ? 'text' : input.getAttribute('type').toLowerCase();
      if (iType !== 'text' && iType !== 'search') continue;
      if (wmap.has(input)) continue;
      if (getComputedStyle(input).display === 'none') continue;
      textFields.push(input);
      var button = createButton(input);
      wmap.set(input, button);
      updateButton(input);
    }
  };

  var registerTextareaButtons = function () {
    var inputs = $('textarea');
    if (!inputs.length) return;
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i],
          iType = input.getAttribute('type') === null ? 'text' : input.getAttribute('type').toLowerCase();
      if (iType !== 'text' && iType !== 'search') continue;
      if (wmap.has(input)) continue;
      if (getComputedStyle(input).display === 'none') continue;
      textFields.push(input);
      var button = createButton(input);
      wmap.set(input, button);
      updateButton(input);
    }
  };

  var updateAllButtons = function () {
    for (var i = 0; i < textFields.length; i++) updateButton(textFields[i]);
  };

  var DOMObserverConfig = {
    attributes: true,
    childList: true,
    subtree: true
  };

  var DOMObserver = new MutationObserver(function () {
    if (DOMObserverTimer !== 'false') clearTimeout(DOMObserverTimer);
    DOMObserverTimer = setTimeout(function () {
      DOMObserver.disconnect();
      registerInputButtons();
      registerTextareaButtons();
      updateAllButtons();
      DOMObserver.observe(document.body, DOMObserverConfig);
    }, 100);
  });

  registerInputButtons();
  registerTextareaButtons();

  DOMObserver.observe(document.body, DOMObserverConfig);

  GM_addStyle('\
    #devtools-wrapper img.clear-field,\
    #headerSearchGhost + img.clear-field,\
    .SearchBox__cover:after,\
    ._5iwm ._58ak::before {\
      display: none !important;\
    }\
    .SearchBox__inputWrapper > label + input {\
      display: -moz-box !important;\
      display: -webkit-box !important;\
    }\
    #nav-belt #nav-search * {\
      border: none !important;\
    }\
    #devtools-wrapper input {\
      text-indent: 0 !important;\
    }\
    img.clear-field {\
      -webkit-filter: grayscale(66%) !important;\
      filter: grayscale(66%) !important;\
    }\
    img.clear-field:hover {\
      -webkit-filter: grayscale(0) !important;\
      filter: grayscale(0) !important;\
    }\
    #facebook ._585- {\
      padding-left: 0 !important;\
    }\
  ');

  window.addEventListener('load', updateAllButtons);

  window.addEventListener('resize', function () {
    if (resizeTimer !== false) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {updateAllButtons();}, 100);
  });

})();
