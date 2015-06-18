// Main JS

App = {
	init: function() {
		expandableText();		// Expandable block of text. Used on "game-profile" page ( Opis gry )
		carouselInit();			// Carousels init. Used on all pages
		mainNav();				// Adding "has-child" class dynamicly to parent elements in main navigation
		streamSlider();			// Generation of video thumbnail navigation list. Used on "game-profile page" ( Streamy live )
		colorboxInit();			// General Lightbox init
		hideSection();			// Function to hide element. Currently used on "game-profile" page ( Opis gry )
		genericCollapse();		// General collapse function
		rankingList();			// Ranking list
		winnersList();			// Winners list
		customSelect();			// Custom selectbox. Currently used on "user-profile page"
		starRating();			// Star rating function. Used on all pages
		hiddenSubmit();			// Hidden submit form button
		favorites();			// Add to favorites
		friends();				// Add user to friends
		likeGame();				// Like game. (Heart shaped)
		likePost();				// Like post. Currently used on "user-profile" page
		friendsWidget();		// Add to friends button in widget
		complexAddToFriends();	// Advanced "add to friend" function (with following confirmation and remove button)
		chat();					// Chat window. Used on all pages
		statisticsWidget();		// Expand / collapse statistics widget
		exchangePointsBanner();	// Exchange Points Banner function.
		simpleScroll();			// Custom scrollbar. Currently used on "game-stream" page
		dropDown();				// Custom dropdown function. Toggles it on click
		countChar();			// Count Characters in textarea
		ratingTip();			// Add tooltip info to rating stars
		tooltip();				// Tooltips
		subscribe();			// Temp function for "subscribe button" on "game-stream" page
		spam();					// Toggle state of "spam" button
		radialProgressBar();	// Radial progress bar. Currently used on "user-profile" page
		singleStreamComments();	// Streamed video comments area on "user-profile" page. Changes block behaviour depending of class used (online, offline, loading)
		gridSwitch();			// Grid List view switching
		getPointsOverlay();		// Get Points overlay trigger
		cpad_Nav();				// Single page navigation (used on home page)
		popularStreams();		// Set to aside block the same height as streams
		validateLogin();		// Validate login form
		livesearch();			// Live Search emulation
	}
};

// Carousels
var carouselInit = function(){
	
	// Call function on homepage only
	if($('.homepage-slides').length){
		$('.homepage-slides').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.homepage-slider-thumbs'
		});		
		$('.homepage-slider-thumbs').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.homepage-slides',
			dots: false,
			focusOnSelect: true,
			centerMode: true
		});
	}	

	$('.carousel-loop').owlCarousel({
		center: true,
		items: 3,
		loop: true,
		nav: true,
		dots: false,
		margin: 20,
		video: true,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		smartSpeed: 700
	});

	$('.recomended-games-carousel').owlCarousel({
		items: 4,
		loop: true,
		nav: false,
		dots: true,
		margin: 20,
		dotsEach: 1,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		responsive:{
			320:{items:1},
			480:{items:2},
			768:{items:2},
			900:{items:4}
		}
	});

	$('.recomended-games-carousel-alt').owlCarousel({
		items: 3,
		loop: true,
		nav: false,
		dots: true,
		margin: 20,
		dotsEach: 1,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		responsive:{
			320:{items:1},
			480:{items:2},
			768:{items:2},
			900:{items:3}
		}
	});

	$('.image-gallery').owlCarousel({
		items: 3,
		loop: true,
		nav: true,
		dots: false,
		margin: 0,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		smartSpeed: 700,
		responsive:{
			320:{items:1},
			480:{items:2},
			768:{items:2},
			900:{items:3}
		}
	});

	$('.stream-slider').owlCarousel({
		items: 1,
		video: true,
		loop: false,
		dots: false,
		videoHeight: 370,
		URLhashListener: true,
		lazyLoad: true,
		autoplay: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false
	});

	$('.homepage-stream-slider').owlCarousel({
		items: 1,
		video: true,
		loop: true,
		dots: true,
		videoHeight: 370,
		autoplay: false,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		smartSpeed: 1000
	});

	$('.testimonials-slider').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		smartSpeed: 1000
	});

	$('.streamed-video').owlCarousel({
		items: 1,
		video: true,
		dots: false,
		loop: false,
		videoHeight: 375,
		lazyLoad: true,
		autoplay: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false
	});
},


// Main nav
mainNav = function(){
	var mainMenu = $('.main-nav'),
		submenu = mainMenu.find('li ul'),
		mobileTrigger = '<span class="mobile-menu-trigger">Menu<i></i></span>';

	submenu.each(function(){
		$(this).parent().addClass('has-child');
	});

	// Append Mobile nav trigger
	mainMenu.find('.row > .small-12').prepend(mobileTrigger);

	// Toggle class "opened" on click/touch event
	$('.mobile-menu-trigger').on('touchstart click', function(event){
		event.preventDefault();
		$(this).toggleClass('active');

		if($(this).hasClass('active')){
			$(this).next('ul').addClass('expanded')
		} else {
			$(this).next('ul').removeClass('expanded')
		}
	});

	// CLose menu when clicked/touched outside
	// $(document).on('touchstart click', function(e){
	// 	if(!$('.mobile-menu-trigger').is(e.target)) {
	// 		$('.mobile-menu-trigger').removeClass('active').next('ul').removeClass('expanded');
	// 	}
	// });
	
	$('li.has-child').on('touchstart click', function(event){
		event.preventDefault();
		$(this).toggleClass('active');

		if($(this).hasClass('active')){
			$(this).find('ul').addClass('expanded')
		} else {
			$(this).find('ul').removeClass('expanded')
		}
	});
},


// Stream slider
streamSlider = function(){
	var slidesNum = $('.stream-slider .owl-item'),
		slidesThumbs = $('.stream-slider-nav'),
		i = 1;

	if(slidesNum.length){
		slidesNum.each(function(){
			var previewURL = $(this).find('div.owl-video-tn').attr('data-src');
			slidesThumbs.append('<li><a class="url" href="#stream-'+ i +'"><img src="'+ previewURL +'" alt="Video thumbnail"></a></li>');
			i++;
		});

		var slidesNavList = slidesThumbs.find('li');

		slidesNavList.first().addClass('current');

		$('.owl-video-play-icon').on('click', function(){
			$(this).closest('.owl-item').find('.video-meta').fadeOut();
		});

		slidesNavList.on('click', function(){
			$(this).addClass('current').siblings().removeClass('current');
			$('.video-meta').show();
		});
	}
},


// Add to favorites
favorites = function(){
	var favorites = $('.add-favorite');

	if(favorites.length){
		favorites.on('click', function(e){
			e.preventDefault();
			if($(this).hasClass('added')){
				$(this).removeClass('added');
			} else {
				$(this).addClass('added');
			}
		});
	}
},


// Like game button
likeGame = function(){
	var likeIt = $('.card-head').find('.like-it');

	if(likeIt.length){
		likeIt.each(function(){
			$(this).on('click', function(){
				var gameTitle = $(this).closest('.game-card').find('.game-title').text();
				if($(this).hasClass('liked')){
					$(this).removeClass('liked');
				} else {
					$(this).addClass('liked');
				}
			});
		});
	}
},


// Like post button
likePost = function(){
	var postLikeBtn = $('.like-btn');

	if(postLikeBtn.length){
		postLikeBtn.each(function(){
			$(this).on('click', function(e){
				e.preventDefault();
				if($(this).hasClass('liked')){
					$(this).removeClass('liked');
				} else {
					$(this).addClass('liked');
				}
			});
		});
	}
},


// Statistics widget (expand/collapse)
statisticsWidget = function(){
	var widget = $('.your-points-widget'),
		collapseBtn = widget.find('.collapse-btn'),
		collapsableContainer = widget.find('.your-stat');

	collapseBtn.on('click', function(e){
		e.preventDefault();
		collapsableContainer.slideToggle().toggleClass('closed');

		if(collapsableContainer.hasClass('closed')){
			collapseBtn.text('(Wyświetli)');
		} else {
			collapseBtn.text('(Nie wyświetlaj)');
		}
	})
},


// Add to friends button (in users list)
friendsWidget = function(){
	var addFriendsBtn = $('.add-friend-btn');

	if(addFriendsBtn.length){
		addFriendsBtn.each(function(){
			$(this).on('click', function(e){
				e.preventDefault();
				if($(this).hasClass('added')){
					$(this).removeClass('added');
				} else {
					$(this).addClass('added');
				}
			});
		});
	}
},


// Add to friends button (complex version)
complexAddToFriends = function(){
	var befriend = $('.befriend a.add');

	if(befriend.length){
		befriend.each(function(){
			$(this).on('click', function(e){
				e.preventDefault();
				$(this).parent().toggleClass('added');
				$(this).closest('.single-list-item').toggleClass('active');

				if($(this).siblings().size() === 0){
					$(this).parent().prepend('<a href="#" title="" class="button radius small-btn confirm">Potwierdź</a>');
				} else {
					$(this).siblings().remove();
				}

				$(this).text(function(i, text){
					return text === "Dodaj do znajomych" ? "Usuń zaproszenie" : "Dodaj do znajomych";
				});
			});
		});
	}
},


//Custom select
customSelect = function(){
	if($('.fancy-select').length){
		$('.fancy-select').fancySelect();

		$('.fancy-select').on('click', function(){
			$('.fancy-select').removeClass('z-index');
			$(this).addClass('z-index');
		});

		$(document).on('click', function(event) {
			if(!$(event.target).closest($('.fancy-select')).length) {
				$('.fancy-select').removeClass('z-index');
			}
		});

		var resultsList = $('.fancy-select .options');

		if(resultsList.outerHeight() >= 319){
			resultsList.addClass('simplebar');
		};
	}
},


// Game rating
starRating = function(){
	var gameRating = $('.game-rating'),
		singleStar = gameRating.find('span'),
		ratingCommentForm = $('.rating-comment-form').clone();

	if(gameRating.length){
		gameRating.each(function(){
			var currentRating = $(this).attr('data-current-rating');

			if( !isNaN(currentRating)){
				$(this).closest(gameRating).addClass('rate-' + currentRating);
			}

		});

		// Dynamic rating updating on hover
		singleStar.on('mouseenter', function(){
			var currentRating = $(this).closest(gameRating).attr('data-current-rating'),
				hoveredStar = $(this).index()+1;

			$(this).closest(gameRating).removeClass();
			$(this).closest(gameRating).addClass('game-rating rate-' + hoveredStar);
		});

		singleStar.on('mouseleave', function(){
			var currentRating = $(this).closest(gameRating).attr('data-current-rating');

			$(this).closest(gameRating).removeClass();
			$(this).closest(gameRating).addClass('game-rating rate-' + currentRating);
		});


		// Update rating on click
		singleStar.on('click', function(){
			var clickedStar = $(this).attr('data-rating');

			$(this).closest(gameRating).removeClass();

			if( !isNaN(clickedStar) ){
				$(this).closest(gameRating).addClass('game-rating rate-' + clickedStar);
				$(this).closest(gameRating).attr('data-current-rating', clickedStar);
			}

			ratingCommentForm.find('textarea').val('');
			$(this).parent().append(ratingCommentForm).find('textarea').focus();
			hiddenSubmit();
		});


		// Append comment form to currently clicked rating stars
		ratingCommentForm.removeClass('hide').addClass('active');
		hiddenSubmit();


		// CLose Rating comment box when clicked outside
		$(document).on('click', function(event) {
			if(!$(event.target).closest(gameRating).length) {
				if(ratingCommentForm.is(":visible")) {
					ratingCommentForm.remove();
				}
			}
		});


		// Remove all other comment forms
		function removeCommentForm(){
			ratingCommentForm.remove('hide');
			setTimeout(function() {
				ratingCommentForm.remove();
			}, 300);
		}
	}
},

// Hidden submit button
hiddenSubmit = function(){
	$('form').each(function(){
		var submitWrapper = $(this).find('div.hidden');
		if(submitWrapper.length){
			var textarea = $(this).find('textarea'),
				submitBtn = $(this).find('input.button');

			submitWrapper.hide();

			textarea.on('keypress keydown keyup focus change', function(){
				if($(this).val() != '') {
					submitWrapper.slideDown();
				} else {
					submitWrapper.slideUp();
				}
			});
		}
	});
},


// Hide section
hideSection = function(){
	$('.hide-section').on('click', function(){
		$(this).closest('.section-to-hide').slideUp();
	});
},


// Collapse section
genericCollapse = function(){
	$('.collapse-trigger').on('click', function(e){
		e.preventDefault();
		$(this).text(function(i, text){
			return text === "Pokaż" ? "Ukryj" : "Pokaż";
		});
		$('.section-to-collapse').slideToggle().toggleClass('hidden');
	});
},


// Expandable content
expandableText = function(){
	var expandable = $('.expandable-content'),
		moretext = $('<span class="read-more">(czytaj więcej)</span>'),
		lesstext = $('<span class="read-more">(mniej)</span>');

	expandable.each(function() {
		$(this).after(moretext);
		$(this).append(lesstext);
		lesstext.hide();
		$(this).hide();
	});

	moretext.on('click', function(){
		expandable.slideDown();
		lesstext.show();
		$(this).hide();
	});

	lesstext.on('click', function(){
		expandable.slideUp();
		moretext.show();
		$(this).hide();
	});
},


// Rating list
rankingList = function(){
	var list = $('.rank-list .rank-table'),
		listItem = list.find('.single-list-item');

	listItem.eq(0).addClass('gold');
	listItem.eq(1).addClass('silver');
	listItem.eq(2).addClass('bronze');

	if(listItem.size() > 10) {
		var itemsToHide = $('.rank-list .single-list-item:gt(9)'),
			wrapper = (itemsToHide.not(listItem.last())),
			newWrap = wrapper.clone();

		wrapper.remove();
		listItem.last().addClass('last-item').before('<section class="hidden">');

		var clonedItemsWrap = list.find('section.hidden');
		clonedItemsWrap.append(newWrap);

		listAppend(list,clonedItemsWrap);

	}
},


// Winners list
winnersList = function(){
	var trigger = $('.winners-list').find('.switch span'),
		list = $('.winners-list .rank-table'),
		listItem = list.find('.single-list-item'),
		table = list.find('.rank-table-body');

	listItem.eq(0).addClass('gold');
	listItem.eq(1).addClass('silver');
	listItem.eq(2).addClass('bronze');

	// Function to wrap list items in grid view
	function wrap(){
		setTimeout(function() {
			if(list.parent().hasClass('grid-view')){
				if(!listItem.parent().hasClass('columns')){
					table.addClass('row');
					listItem.wrap('<div class="small-4 columns">');
				}
			} else {
				table.removeClass('row');
				if(listItem.parent().hasClass('columns')){
					listItem.unwrap();
				}
			}
		}, 0);
	}
	wrap();

	// Call wrap() on click of "grid/list" switch
	trigger.on('click', function(){
		setTimeout(function() {
			wrap();
		}, 0);
	});

	// if(listItem.size() > 3) {
	// 	var itemsToHide = $('.winners-list .single-list-item:gt(2)'),
	// 		clonedItems = itemsToHide.clone();

	// 	itemsToHide.remove();
	// 	list.find('.rank-table-body').append('<section class="hidden row">');

	// 	var clonedItemsWrap = list.find('section.hidden');

	// 	clonedItemsWrap.append(clonedItems);

	// 	listAppend(list,clonedItemsWrap,listItem);
	// }
},
listAppend = function(list,clonedItemsWrap,listItem){
	list.append(
		$('<span class="show-full-list">Pokaż pełną listę wyników</span>').on('click', function(){
			clonedItemsWrap.slideToggle('fast');

			if(clonedItemsWrap.closest('.winners-list').length){
				clonedItemsWrap.find(listItem).wrap('<div class="small-4 columns">');
			}

			$(this).text(function(i, text){
				return text === "Pokaż pełną listę wyników" ? "Skrócona lista wyników" : "Pokaż pełną listę wyników";
			});
		})
	);
},


// Colorbox Init
colorboxInit = function(){
	$('a[rel=colorbox]').colorbox();

	// Youtube videos
	$('.youtube.video').colorbox({
		iframe: true,
		width: 800,
		height: 450,
		href:function(){
			var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
			if (videoId && videoId[1]) {
				return 'http://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent&autoplay=1';
			}
		}
	});

	//Inline content (Gallery page)
	if ($('a.inline').length){
		$('a.inline').each(function(){
			var url = $(this).attr("href");
			$(this).colorbox({
				inline: true,
				href: url,
				width: "86%",
				className: 'alt-controls',
				onLoad:function(){
					$('ul.simplebar').simplebar();
				},
				onComplete:function(){
					$('ul.simplebar').simplebar('recalculate');
					updateHeight();
				}
			}).attr("href","javascript:void(0)");
		})
	}

	// Update height of content
	function updateHeight(){
		var block = $('.cbox.inline-content:visible'),
			imageBlock = block.find('.image-container img'),
			imageBlockHeight = imageBlock.outerHeight(),
			commentBlock = block.find('.comments-block'),
			header = block.find('.header-block').outerHeight(),
			messagesList = block.find('.simplebar-scroll-content');

			commentBlock.css('height', imageBlockHeight + 'px');
			messagesList.css('height', imageBlockHeight - header - 40 + 'px');
			console.log(imageBlock.height() + 'px');
	}

	// Expand - collapse image block
	function expandImageBlock(){
		var block = $('.cbox.inline-content');

		block.each(function(){
			var imageBlock = $(this).find('.image-container'),
				commentBlock = $(this).find('.comments-block'),
				trigger = imageBlock.find('.expand'),
				nextBtn = $('#colorbox').find('#cboxNext'),
				prevBtn = $('#colorbox').find('#cboxPrevious'),
				closeBtn = $('#colorbox').find('#cboxClose');

			trigger.on('click', function(){
				$(this).toggleClass('expanded');
				nextBtn.toggleClass('no-comments');
				commentBlock.toggleClass('hide');
				imageBlock.toggleClass('no-comments');

				updateHeight();
				resizeColorBox();
				$('ul.simplebar').simplebar('recalculate');
			});

			// Return to default state on clicking to PREV, NEXT or CLOSE btns
			prevBtn.add(nextBtn).on('click', function(){
				commentBlock.removeClass('hide');
				imageBlock.removeClass('no-comments');
				trigger.removeClass('expanded');
				nextBtn.removeClass('no-comments');

				updateHeight();
				resizeColorBox();
				$('ul.simplebar').simplebar('recalculate');
			});

			closeBtn.on('click', function(){
				commentBlock.removeClass('hide');
				imageBlock.removeClass('no-comments');
				trigger.removeClass('expanded');
				nextBtn.removeClass('no-comments');
			});
		});
	}
	expandImageBlock();


	/* Colorbox resize function */
	var resizeTimer;
	function resizeColorBox(){
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function() {
			if (jQuery('#cboxOverlay').is(':visible')) {
				jQuery.colorbox.resize({width:'86%'});
				updateHeight();
			}
		}, 100)
	}

	// Resize Colorbox on load, when resizing window or changing device orientation
	$(document).bind('cbox_load', function(){
		$.colorbox.resize({width:'86%'});
	});
	$(window).resize(resizeColorBox);
	window.addEventListener("orientationchange", resizeColorBox, false);
},


// Chat window
chat = function(){
	var chatWindow = $('.widget.chat'),
		widgetHeight = chatWindow.outerHeight(),
		inputArea = chatWindow.find('textarea'),
		submitContainer = chatWindow.find('.hidden'),
		submitMessage = submitContainer.find('input'),
		collapse = chatWindow.find('.collapse'),
		close = chatWindow.find('.close-window');

	// conditional submit button
	inputArea.on('keypress keydown keyup focus change', function() {
		if($(this).val() != '') {
			submitContainer.slideDown();
		} else {
			submitContainer.slideUp();
		}
	});

	// collapse form
	collapse.on('click', function(){
		chatWindow.toggleClass('closed').find('.window-body, .window-input').slideToggle();
	});

	// hide form
	close.on('click', function(){
		chatWindow.slideUp();
	});

	
	if(chatWindow.length){
		// Increase chat window heigth
		var maxHeight = $(window).height() - 140,
			messagesList = $('.messages-list');

		function increaseHeight(){
			if (messagesList.outerHeight() <= maxHeight) {
				messagesList.css('height', (messagesList.outerHeight() + messagesList.find('.message-item:last').outerHeight() ));
				messagesList.animate({ scrollTop: $(document).height()}, "slow");
				messagesList.simplebar('recalculate');
			}
		}

		/* symulacja dodawania nowych odpowiedzi */
		function appendNewResponse(){
			//append new response after ajax call
			var html = '<li class="message-item"><img src="img/avatars/avatar-3.png" alt="Profile mugshot"><div class="message-header"><span class="name">Adam (13lvl):</span><span	class="time-ago right">2 minuty temu</span></div><p>Lorem ipsum dolor sit amet, deliv tetra culpa error, rerum porro atque.</p> </li>';
			messagesList.find('.simplebar-content').append(html);
			messagesList.simplebar('recalculate');
		}

		for(var i = 1; i < 12; i++){
			setTimeout(function(){
				appendNewResponse();
				increaseHeight();
			}, i*2000);
		}
		/* symulacja dodawania nowych odpowiedzi - end */
	}

	// Another simulation (remove it on production)
	if($('.message-response').length){
		function showNewItem(){
			$('.list-wrap').simplebar('recalculate');
		}

		$('.message-response').each(function(index){
			var self = this
			setTimeout(function(){
				$(self).fadeIn('slow');
				var itemHeight = $(self).outerHeight();
				// $('.single-message .page-content .list-wrap').height('+=' + itemHeight + 'px');
				$('.list-wrap .simplebar-content').animate({ 
					scrollTop: $('.message-response').height()
				}, 'slow');
			}, index*2000);
		});
	}

},


// Points Exchange banner
exchangePointsBanner = function(){
	var banner = $('.widget.banner'),
		close = banner.find('.close-window'),
		button = banner.find('a.button'),
		exchangePointsBlock = $('.points-exchange'),
		overlay = $('.overlay');

	// hide banner
	close.on('click', function(){
		banner.slideUp();
	});

	// Scroll to "Points Exchange Block" if any on page and activate overlay
	button.on('click', function(e){
		e.preventDefault();

		if(exchangePointsBlock.length){
			exchangePointsBlock.addClass('active');
			overlay.addClass('active');
			$('html,body').animate({
				scrollTop: exchangePointsBlock.offset().top
			}, 500);
			banner.slideUp('slow');

		}
	});

	// Remove overlay on click
	overlay.on('click', function() {
		$(this).removeClass('active');
		exchangePointsBlock.removeClass('active');
		banner.slideDown('slow');
	});
},


// Custom scrollbar
simpleScroll = function(){
	var simpleScroll = $('ul.simplebar');

	if(simpleScroll.length){
		simpleScroll.simplebar();

		$(window).on('resize', function(){
			simpleScroll.simplebar('recalculate');
		});
	}
},


// Custom dropdown
dropDown = function(){
	var dropContainer = $('.drop-menu.toggle'),
		dropTrigger = dropContainer.find('.trigger');

	// Trigger dropdown
	dropTrigger.on('click', function(e){
		e.preventDefault();

		var currentDrop = $(this).closest(dropContainer);

		dropContainer.not(currentDrop).removeClass('active');

		if(currentDrop.hasClass('active')){
			currentDrop.removeClass('active');
		} else {
			currentDrop.addClass('active');
		}
	});


	// Remove 'active' class form dropdown if hovered on the other one
	dropTrigger.on('mouseenter', function(){
		var currentDrop = $(this).closest(dropContainer);

		if(!currentDrop.hasClass('active')){
			dropContainer.not(currentDrop).removeClass('active');

			// Optional 
			if($('form#search-form').length){
				$('form#search-form').removeClass('livesearch');
			}
		}
	});


	// CLose it when clicked outside
	$(document).click(function(event) {
		if(!$(event.target).closest(dropContainer).length) {
			if(dropContainer.is(":visible")) {
				dropContainer.removeClass('active');
			}
		}
	});

},


// Count Characters in textarea
countChar = function(){
	$('form textarea').each(function(){
		var length = $(this).val().length,
			charNum = $(this).parent().find('.char-counter');

		charNum.text(length);

		$(this).on('keyup', function(){
			length = $(this).val().length;
			charNum.text(length);
			shortString();
		});

		function shortString(){
			if (length === 0) {
				charNum.addClass('hide');
			} else if ((length <= 99) && (length >= 1)) {
				charNum.addClass('short').removeClass('hide');
			} else {
				charNum.removeClass('short');
			}
		}
		shortString();
	});
},


// Get position of rating block & show rating tip
ratingTip = function(){
	var parent = $("[data-tip]");

	if(parent.length){

		function tipPosition(){
			var i = 1;
			parent.each(function(){
				var parentPos = $(this).offset(),
				tip = $('#tip-'+ i ),
				tipHeight = tip.outerHeight();
				css = {'top': parentPos.top - tipHeight - 15, 'left': parentPos.left};
				tip.css(css);

				// Add class on hover
				$(this).on('mouseenter', function(){
					if(!$('.game-rating .rating-comment-form').length){
						tip.addClass('visible');
					}
				}).on('mouseleave', function(){
					tip.removeClass('visible');
				});
				i++;
			});
		}
		tipPosition();

		$(window).on('resize', function(){
			tipPosition();
		});
	}
},


// Tooltip
tooltip = function(){
	var tooltip = $('[data-tooltip]');
	tooltip.each(function(){
		tooltipContent = $(this).attr('data-tooltip');
		$(this).addClass('tooltip-trigger').append('<div class="tooltip transition">' + tooltipContent + '</div>');
	});

	tooltip.on('click',function(e){
		e.preventDefault();
	});

},


// Toggle "Subscribe" button state
subscribe = function(){
	var subscribe = $('a.subscribe');
	subscribe.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('subscribed');
		$(this).text(function(i, text){
			return text === "Subskrybuj" ? "Subskrybujesz" : "Subskrybuj";
		});
	});
},


// Toggle "Add to Friends" button state
friends = function(){
	var button = $('a.add-to-friends');
	button.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).text(function(i, text){
			return text === "Dodaj do znajomych" ? "Usuń ze znajomych" : "Dodaj do znajomych";
		});
	});
},


// Toggle "SPAM" button state
spam = function(){
	var button = $('.spam-alert');
	button.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
	});
},


// Radial progress bar init
radialProgressBar = function(){
	$('.dial').each(function(){

		var elm = $(this),
			color = elm.attr("data-fgColor"),
			perc = elm.attr("value");

		elm.knob({
			'value': 0,
			'min': 0,
			'max': 100,
			"readOnly": true,
			"thickness": .1,
			'dynamicDraw': true,
			"displayInput": true
		});

		$({value: 0 }).animate({ value: perc },{
			duration: 3000,
			progress: function(){
				elm.val(Math.ceil(this.value)).trigger('change');
			}
		});

	});
},


// Single stream comment area
singleStreamComments = function(){
	var commentBlock = $('.video-comments-container .game-discussion'),
		commentHeader = commentBlock.find('.widget-title span'),
		commentList = commentBlock.find('.widget-content ul'),
		commentInput = commentBlock.find('.window-input'),
		commentLoadingScreen = commentBlock.find('.comment-list-loading');
		offlineScreen = commentBlock.find('.offline-comments');

	if (commentBlock.hasClass('online')) {
		commentHeader.text('Connected');
		commentList.addClass('loaded');
	} else if (commentBlock.hasClass('offline')) {
		(function(){
			commentHeader.text('Disconnected');
			offlineScreen.removeClass('hide');
			commentList.addClass('hide');
			commentInput.addClass('hide');
		}());
	} else if (commentBlock.hasClass('loading')) {
		(function(){
			commentHeader.text('Connected');
			commentLoadingScreen.removeClass('hide');
			commentList.find('li');
			setTimeout(function() {
				commentLoadingScreen.fadeOut();
				commentList.addClass('loaded');
			}, 3000);
		}());
	};
},


// Grid List Switching
gridSwitch = function(){
	var switchView = $('.switch'),
		gridBtn = switchView.find('span.grid'),
		listBtn = switchView.find('span.list');

	gridBtn.on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.widget').find('.widget-content').removeClass('list-view').addClass('grid-view');
	});

	listBtn.on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		$(this).closest('.widget').find('.widget-content').removeClass('grid-view').addClass('list-view');
	});
},


// Get Points Overlay Trigger
getPointsOverlay = function(){
	var overlay = $('.get-points-overlay'),
		trigger = $('.current-progress-wrap a.button');

	trigger.on('click', function(e){
		e.preventDefault();
		overlay.addClass('active');
	});


	// CLose it when clicked outside
	$(document).click(function(event) {
		if((!$(event.target).closest(overlay).length) && (!$(event.target).is(trigger))) {
			if(overlay.is(":visible")) {
				overlay.removeClass('active');
			}
		}
	});
},


// Single Page Navigation
cpad_Nav = function(){

	var sections = $('.cpad-section'),
		navlinks = $('nav.cpad-nav a'),
		currentLink = 0,
		body = $('html, body'),
		animspeed = 650;

	if (sections.length) {

		function changeNav( $section ) {
			navlinks.eq( currentLink ).removeClass( 'current' );
			currentLink = $section.index( 'div.cpad-section' );
			navlinks.eq( currentLink ).addClass( 'current' );
		}

		function scrollAnim( top ) {
			body.stop().animate( {scrollTop: top}, animspeed );
		}

		(function init() {
			navlinks.on( 'click', function() {
				scrollAnim( sections.eq($(this).index()).offset().top );
				return false;
			});

			sections.waypoint( function( direction ) {
				if( direction === 'down') { 
					changeNav( $(this)); 
				}
			}, { offset: '30%' }).waypoint( function( direction) {
				if( direction === 'up' ) { 
					changeNav( $(this)); 
				}
			}, { offset: '-30%' });		
		}())
	}
},


// Popular Streams
popularStreams = function(){
	var base = $('.popular-streams'),
		dot = base.find('.homepage-stream-slider .owl-dot'),
		streams = base.find('.homepage-stream-slider').outerHeight(),
		aside = base.find('.popular-streams-aside');

	base.find('.owl-video-play-icon').on('click', function(){
		$(this).closest('.owl-item').find('.video-meta').fadeOut();
	});

	dot.on('click', function(){
		$('.video-meta').fadeIn();
	});

	if (base.length) {
		aside.css('height', streams + 'px');
	}
},


// Validate login form
validateLogin = function(e){
	var base = $('form#login'),
		base2 = $('form#register'),
		emailField = base.find('input#email'),
		emailField2 = base2.find('input#email-2'),
		emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
		passwordField = base.find('input#password'),
		passwordField2 = base2.find('input#password-2'),
		submit = base.find('a.submit'),
		submit2 = base2.find('a.submit');


	submit.on('click', function(){

		$('.error-msg').addClass('hidden');
		emailField.removeClass('error');
		passwordField.removeClass('error');

		if(emailField.val() == "") {
			emailField.addClass('error').next().removeClass('hidden');
		}
		
		if(passwordField.val() == "") {
			passwordField.addClass('error').next().removeClass('hidden');
		}

		if(!$('span.error-msg').is(':visible')){
			$('.response').fadeIn('fast');

			setTimeout(function(){
				$('.login-screen-bg').removeClass('active');
				$('.login-section').addClass('hide');
				$('.response').fadeOut();
			}, 3000);
		}

		return false;
	});

	submit2.on('click', function(){

		$('.error-msg').addClass('hidden');
		emailField2.removeClass('error');
		passwordField2.removeClass('error');

		if(emailField2.val() == "") {
			emailField2.addClass('error').next().removeClass('hidden');
		}
		
		if(passwordField2.val() == "") {
			passwordField2.addClass('error').next().removeClass('hidden');
		}

		if(!$('span.error-msg').is(':visible')){
			$('.response.success').fadeIn('fast');

			setTimeout(function(){
				$('.login-screen-bg').removeClass('active');
				$('.login-section').addClass('hide');
				$('.response').fadeOut();
			}, 3000);

		}		
		return false;
	});

	function tempFunction(){
		$('.example-row #login').on('click', function(){
			$('.login-screen-bg.bg-1').addClass('active');
			$('.login-window').removeClass('hide');

			return false;
		});

		$('.example-row #register').on('click', function(){
			$('.login-screen-bg.bg-2').addClass('active');
			$('.register-window').removeClass('hide');

			return false;
		});

		$('.login-screen-bg').on('click', function(){
			$(this).removeClass('active');
			$('.login-section').addClass('hide');
		});
	}
	tempFunction();
},

// Search emulation
livesearch = function(){
	var base = $('header #search-form'),
		inputField = base.find('input[type="text"]'),
		submitBtn = base.find('button[type="submit"]');

	inputField.on('input', function(){
		var val = inputField.val();
		if(val.length >= 3){
			base.addClass('livesearch');
		} else {
			base.removeClass('livesearch');
		}

		if(!val == ''){
			submitBtn.on('click', function(e){
				e.preventDefault();
				base.addClass('livesearch');
			});
		}
		return false;
	});

	// CLose it when clicked outside
	$(document).on('click', function(event) {
		if((!$(event.target).closest(base).length) && (!$(event.target).is(base))) {
			base.removeClass('livesearch');
		}
	});
}


$(document).foundation();
$(function(){
	App.init();
});
