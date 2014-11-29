/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

  config.extraPlugins = 'symbol';

  config.toolbar = [
      { name: 'clipboard', groups: [ 'clipboard', 'undo' ], items: [ '-' ] },
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ], items: [ 'Bold', 'Italic',  'Underline', 'Strike', 'Subscript', 'Superscript', 'Symbol' ] },
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent' ] },
  ];

  config.height = '100px';
  config.removePlugins = 'elementspath'; 
  config.resize_enabled = false;

  config.entities_processNumerical = true;
  config.entities_processNumerical = 'force';

  
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
