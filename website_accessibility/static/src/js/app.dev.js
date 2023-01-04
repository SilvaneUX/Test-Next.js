/*!
 * @author: AH Team
 */
/* global jQuery, AHAccessibilityOptions */

( function( $, window, document, undefined ) {
	'use strict';

	var AH_Accessibility_App = {
		cache: {
			$document: $( document ),
			$window: $( window )
		},

		cacheElements: function() {
			this.cache.$toolbar = $( '#ah-accessibility-toolbar' );
			this.cache.$toolbarLinks = this.cache.$toolbar.find( 'a.ah-accessibility-toolbar-link' );
			this.cache.$toolbarToolsLinks = this.cache.$toolbar.find( '.ah-accessibility-tools a.ah-accessibility-toolbar-link' );
			this.cache.$btnToolbarToggle = this.cache.$toolbar.find( 'div.ah-accessibility-toolbar-toggle > a' );
			this.cache.$skipToContent = $( '#ah-accessibility-skip-content' );
			this.cache.$body = $( 'body' );
		},
		AHAccessibilityOptions:{
			focusable:'1',
			remove_link_target:'0',
			add_role_links:'0',
			enable_save:'1',
		},
		settings: {
			minFontSize: 120,
			maxFontSize: 200,
			buttonsClassPrefix: 'ah-accessibility-btn-',
			bodyClassPrefix: 'ah-accessibility-',
			bodyFontClassPrefix: 'ah-accessibility-resize-font-',
			storageKey: 'ah-accessibility',
			expires: 43200000 // 12 hours
		},

		variables: {
			currentFontSize: 120,
			currentSchema: null
		},

		activeActions: {},

		buildElements: function() {
			// Move the `toolbar/skip to content` to top
			this.cache.$body.prepend( this.cache.$toolbar );
			this.cache.$body.prepend( this.cache.$skipToContent );
		},

		bindEvents: function() {
			var $self = this;

			$self.cache.$btnToolbarToggle.on( 'click', function( event ) {
				event.preventDefault();

				$self.cache.$toolbar.toggleClass( 'ah-accessibility-toolbar-open' );

				if ( $self.cache.$toolbar.hasClass( 'ah-accessibility-toolbar-open' ) ) {
					$self.cache.$toolbarLinks.attr( 'tabindex', '0' );
				} else {
					$self.cache.$toolbarLinks.attr( 'tabindex', '-1' );
				}
			} );

			$( document ).on( 'keyup', function( event ) {
				var TAB_KEY = 9;
				
				if ( TAB_KEY !== event.which || ! $self.cache.$btnToolbarToggle.is( ':focus' ) ) {
					return;
				}
				$self.cache.$toolbar.addClass( 'ah-accessibility-toolbar-open' );
				$self.cache.$toolbarLinks.attr( 'tabindex', '0' );
			} );

			$self.bindToolbarButtons();
		},

		bindToolbarButtons: function() {
			var self = this;

			self.cache.$toolbarToolsLinks.on( 'click', function( event ) {
				event.preventDefault();

				var $this = $( this ),
					action = $this.data( 'action' ),
					actionGroup = $this.data( 'action-group' ),
					deactivate = false;

				if ( 'reset' === action ) {
					self.reset();
					return;
				}

				if ( -1 !== [ 'toggle', 'schema' ].indexOf( actionGroup ) ) {
					deactivate = $this.hasClass( 'active' );
				}

				self.activateButton( action, deactivate );
			} );
		},

		activateButton: function( action, deactivate ) {
			var $button = this.getButtonByAction( action ),
				actionGroup = $button.data( 'action-group' );

			this.activeActions[ action ] = ! deactivate;

			this.actions[ actionGroup ].call( this, action, deactivate );

			this.saveToLocalStorage();
		},

		getActiveButtons: function() {
			return this.cache.$toolbarToolsLinks.filter( '.active' );
		},

		getButtonByAction: function( action ) {
			return this.cache.$toolbarToolsLinks.filter( '.' + this.settings.buttonsClassPrefix + action );
		},

		actions: {
			toggle: function( action, deactivate ) {
				var $button = this.getButtonByAction( action ),
					fn = deactivate ? 'removeClass' : 'addClass';

				if ( deactivate ) {
					$button.removeClass( 'active' );
				} else {
					$button.addClass( 'active' );
				}

				this.cache.$body[ fn ]( this.settings.bodyClassPrefix + action );
			},
			resize: function( action, deactivate ) {
				var oldFontSize = this.variables.currentFontSize;

				if ( 'resize-plus' === action && this.settings.maxFontSize > oldFontSize ) {
					this.variables.currentFontSize += 10;
				}

				if ( 'resize-minus' === action && this.settings.minFontSize < oldFontSize ) {
					this.variables.currentFontSize -= 10;
				}

				if ( deactivate ) {
					this.variables.currentFontSize = this.settings.minFontSize;
				}

				this.cache.$body.removeClass( this.settings.bodyFontClassPrefix + oldFontSize );

				var isPlusActive = 120 < this.variables.currentFontSize,
					plusButtonAction = isPlusActive ? 'addClass' : 'removeClass';

				this.getButtonByAction( 'resize-plus' )[ plusButtonAction ]( 'active' );

				if ( isPlusActive ) {
					this.cache.$body.addClass( this.settings.bodyFontClassPrefix + this.variables.currentFontSize );
				}

				this.activeActions[ 'resize-minus' ] = false;
				this.activeActions[ 'resize-plus' ] = isPlusActive;
				this.cache.$window.trigger( 'resize' );
			},
			schema: function( action, deactivate ) {
				var currentSchema = this.variables.currentSchema;

				if ( currentSchema ) {
					this.cache.$body.removeClass( this.settings.bodyClassPrefix + currentSchema );
					this.getButtonByAction( currentSchema ).removeClass( 'active' );
					this.activeActions[ currentSchema ] = false;

					this.saveToLocalStorage();
				}

				if ( deactivate ) {
					this.variables.currentSchema = null;
					return;
				}

				currentSchema = this.variables.currentSchema = action;
				this.cache.$body.addClass( this.settings.bodyClassPrefix + currentSchema );
				this.getButtonByAction( currentSchema ).addClass( 'active' );
			}
		},

		reset: function() {
			for ( var action in this.activeActions ) {
				if ( this.activeActions.hasOwnProperty( action ) && this.activeActions[ action ] ) {
					this.activateButton( action, true );
				}
			}

			localStorage.removeItem( this.settings.storageKey );
		},

		saveToLocalStorage: function() {
			if ( '1' !== this.AHAccessibilityOptions.enable_save ) {
				return;
			}

			if ( ! this.variables.expires ) {
				this.variables.expires = ( new Date() ).getTime() + this.settings.expires;
			}

			var data = {
				actions: this.activeActions,
				variables: {
					currentFontSize: this.variables.currentFontSize,
					expires: this.variables.expires
				}
			};

			localStorage.setItem( this.settings.storageKey, JSON.stringify( data ) );
		},

		setFromLocalStorage: function() {
			if ( '1' !== this.AHAccessibilityOptions.enable_save ) {
				return;
			}

			var localData = JSON.parse( localStorage.getItem( this.settings.storageKey ) );
			if ( ! localData ) {
				return;
			}

			var currentDate = new Date(),
				expires = localData.variables.expires;

			if ( currentDate > expires ) {
				localStorage.removeItem( this.settings.storageKey );
				return;
			}

			var actions = localData.actions;

			if ( localData.variables.currentFontSize > 120 ) {
				localData.variables.currentFontSize -= 10;
			}

			$.extend( this.variables, localData.variables );

			for ( var action in actions ) {
				if ( actions.hasOwnProperty( action ) && actions[ action ] ) {
					this.activateButton( action, false );
				}
			}
		},

		handleGlobalOptions: function() {
			if ( '1' === this.AHAccessibilityOptions.focusable ) {
				this.cache.$body.addClass( 'ah-accessibility-focusable' );
			}

			if ( '1' === this.AHAccessibilityOptions.remove_link_target ) {
				$( 'a[target="_blank"]' ).attr( 'target', '' );
			}

			if ( '1' === this.AHAccessibilityOptions.add_role_links ) {
				$( 'a' ).attr( 'role', 'link' );
			}
		},

		init: function() {
			this.cacheElements();
			this.buildElements();
			this.bindEvents();
			this.handleGlobalOptions();
		}
	};

	$( document ).ready( function( $ ) {
		AH_Accessibility_App.init();
		AH_Accessibility_App.setFromLocalStorage();
	} );

	$('a').mouseenter(function() { 
		responsiveVoice.setDefaultVoice("Indonesian Female"); 
		responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
		responsiveVoice.speak($(this).text()); // Speak the text contents of all nodes within the current 'a' tag
	});

}( jQuery, window, document ) );
