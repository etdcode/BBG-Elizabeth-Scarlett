
$('#owl-demo4').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('.testerz').on('initialized.owl.carousel changed.owl.carousel', function(e) {
	if (!e.namespace) {
		return;
	}
	var carousel = e.relatedTarget;
	$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' of ' + 2);
})
$('.testerz2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
	if (!e.namespace) {
		return;
	}
	var carousel = e.relatedTarget;
	$('.slider-counter').text(carousel.relative(carousel.current()) + 1 + ' of ' + 2);
})
$('.testerz2').on('initialized.owl.carousel changed.owl.carousel', function(e) {
	if (!e.namespace) {
		return;
	}
	var carousel = e.relatedTarget;
	$('.slider-counter-mob').text(carousel.relative(carousel.current()) + 1 + ' of ' + 3);
})
$("#prod-slider").owlCarousel({
	nav: true,
	navElement: 'span',
	dots: true,
	autoplay: false,
	thumbs: true,
	// thumbImage: true,
	thumbsPrerendered: true,
	loop: false,
	rewind: true,
	mouseDrag: false,
	touchDrag: false,
	items: 1
});
$('#prod-1').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-2').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-3').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-4').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-5').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-6').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-7').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-8').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-9').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-10').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-11').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-12').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$("#prod-sliderm").owlCarousel({
	nav: true,
	navElement: 'span',
	dots: false,
	autoplay: false,
	thumbs: true,
	// thumbImage: true,
	thumbsPrerendered: true,
	loop: false,
	rewind: true,
	mouseDrag: false,
	touchDrag: false,
	items: 1
});
$('#prod-1m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-2m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-3m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-4m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-5m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-6m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-7m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-8m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-9m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-10m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-11m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})
$('#prod-12m').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true,
			dots: false
		},
		600: {
			items: 1,
			nav: false
		},
		1000: {
			items: 1,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})

$('#owl-demo').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: true
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 2,
			nav: true,
			loop: true,
			dots: false,
			center: false
		}
	}
})


$('#owl-demo3').owlCarousel({
	loop: true,
	margin: 10,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
          dots: true
		},
		600: {
			items: 1,
			nav: true
		},
		1000: {
			items: 3,
			nav: false,
			loop: true,
			dots: true,
			center: false
		}
	}
})