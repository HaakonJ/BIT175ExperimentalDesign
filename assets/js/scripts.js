// JavaScript Document

var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

						// build scenes
						new ScrollMagic.Scene({triggerElement: "#parallax1"})
										.setTween("#parallax1 > div", {y: "50%", ease: Linear.easeNone})
										
										.addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#parallax2"})
										.setTween("#parallax2 > div", {y: "50%", ease: Linear.easeNone})
										
										.addTo(controller);

						new ScrollMagic.Scene({triggerElement: "#parallax3"})
										.setTween("#parallax3 > div", {y: "50%", ease: Linear.easeNone})
										
										.addTo(controller);
						new ScrollMagic.Scene({triggerElement: "#parallax4"})
										.setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone})
										
										.addTo(controller);