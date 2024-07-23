function validateForm(e) {
    let t = document.getElementById(e);
    let a = t.querySelector("[name='name1'], [name='name2'], [name='name3']").value;
    let n = t.querySelector("[name='phone1'], [name='phone2'], [name='phone3']").value;
    let o = t.querySelector("[name='email3']").value;
    let l = true;
    let i = t.querySelector("#nameError" + e.slice(-1));
    let r = t.querySelector("#phoneError" + e.slice(-1));
    let s = t.querySelector("#emailError" + e.slice(-1));
    i.textContent = "";
    r.textContent = "";
    s.textContent = "";
    if (!/^[A-Za-z\s]+$/.test(a)) {
      i.textContent = "Name can only contain letters and spaces.";
      l = false;
    }
    if (!/^\d{10}$/.test(n)) {
      r.textContent = "Phone number must be 10 digits.";
      l = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(o)) {
      s.textContent = "Please enter a valid email address.";
      l = false;
    }
    return l;
  }
  function sendMailEnquiry(e, t) {
    e.preventDefault();
    if (!validateForm(t)) {
      return;
    }
    let a = document.getElementById(t);
    let n = `
      <b>Name:</b> ${a.querySelector("[name='name1'], [name='name2'], [name='name3']").value}
      <br/>
      <b>Phone:</b> ${a.querySelector("[name='phone1'], [name='phone2'], [name='phone3']").value}
      <br/>
      <b>Email:</b> ${a.querySelector("[name='email3']").value}
  `;
    Email.send({SecureToken: "ee6d742c-d2c0-42c1-8388-84821f583308", To: "jtcenquiry@gmail.com", From: "jtcenquiry@gmail.com", Subject: "New Student Enquiry Landing Page", Body: n}).then(function (e) {
      let n = document.getElementById("message" + t.slice(-1));
      n.innerHTML = "Thank you for Showing Your Interest!";
      a.style.display = "none";
      const currentUrl = window.location.href;
                    const newUrl = currentUrl + (currentUrl.endsWith('/') ? 'ThankYou' : '/ThankYou');
                    history.pushState(null, null, newUrl);

                    setTimeout(() => {
                        history.pushState(null, null, currentUrl);
                    }, 5000);
      setTimeout(function () {
        a.reset();
        n.innerHTML = "";
        a.style.display = "block";
      }, 5e3);
    }, function (e) {
      document.getElementById("message" + t.slice(-1)).innerHTML = "There was an error sending your enquiry. Please try again.";
    });
  }
  function validateContactForm() {
    let e = document.getElementById("contact_name").value;
    let t = document.getElementById("contact_email4").value;
    let a = document.getElementById("contact_phone").value;
    let n = document.getElementById("contact_comment").value;
    let o = document.getElementById("contact_terms").checked;
    let l = true;
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("commentError").textContent = "";
    if (!/^[A-Za-z\s]+$/.test(e)) {
      document.getElementById("nameError").textContent = "Name can only contain letters and spaces.";
      l = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t)) {
      document.getElementById("emailError").textContent = "Invalid email address.";
      l = false;
    }
    if (!/^[0-9]{10}$/.test(a)) {
      document.getElementById("phoneError").textContent = "Phone number must be 10 digits.";
      l = false;
    }
    if (!/^[A-Za-z\s]+$/.test(n)) {
      document.getElementById("commentError").textContent = "Comments can only contain letters and spaces.";
      l = false;
    }
    if (!o) {
      alert("You must agree to the terms and conditions.");
      l = false;
    }
    if (!l) {
      return false;
    }
    let i = `
      <b>Name:</b> ${e}<br/>
      <b>Email:</b> ${t}<br/>
      <b>Phone:</b> ${a}<br/>
      <b>Comments:</b> ${n}
  `;
    Email.send({SecureToken: "ee6d742c-d2c0-42c1-8388-84821f583308", To: "jtcenquiry@gmail.com", From: "jtcenquiry@gmail.com", Subject: "Contact Form Submission Landing Page", Body: i}).then(function (e) {
      let t = document.getElementById("message5");
      t.innerHTML = "Thank you for your interest!";
      setTimeout(function () {
        document.getElementById("contact_form").reset();
        t.innerHTML = "";
      }, 5e3);
    }).catch(function (e) {
      document.getElementById("message5").innerHTML = "There was an error sending your message. Please try again later.";
    });
    return false;
  }
  function DownloadSyllabusjava() {
    let e = document.getElementById("downloadSyllabus_java");
    let t = e.querySelector("[name='name7']").value;
    let a = e.querySelector("[name='phone7']").value;
    let n = e.querySelector("[name='contact_email']").value;
    let o = true;
    let l = document.getElementById("nameError7");
    let i = document.getElementById("phoneError7");
    let r = document.getElementById("emailError7");
    l.textContent = "";
    i.textContent = "";
    r.textContent = "";
    if (!/^[A-Za-z\s]+$/.test(t)) {
      l.textContent = "Name can only contain letters and spaces.";
      o = false;
    }
    if (!/^\d{10}$/.test(a)) {
      i.textContent = "Phone number must be 10 digits.";
      o = false;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(n)) {
      r.textContent = "Please enter a valid email address.";
      o = false;
    }
    if (o) {
      Email.send({SecureToken: "ee6d742c-d2c0-42c1-8388-84821f583308", To: "jtcenquiry@gmail.com", From: "jtcenquiry@gmail.com", Subject: "Download Syllabus of java Landing Page", Body: `
          <b>Name:</b> ${t}
          <br/>
          <b>Phone:</b> ${a}
          <br/>
          <b>Email:</b> ${n}
      `}).then(function (t) {
        let a = document.getElementById("message7");
        a.innerHTML = "Thank you for Downloading Brochure";
        setTimeout(function () {
          e.reset();
          a.innerHTML = "";
        }, 5e3);
        let n = document.createElement("a");
        n.href = "syllabus/Java_full_stack_developer.pdf";
        n.download = "Java_Full_Stack_Syllabus.pdf";
        document.body.appendChild(n);
        n.click();
        document.body.removeChild(n);
      }, function (e) {
        document.getElementById("message7").innerHTML = "There was an error sending your enquiry. Please try again.";
      });
    }
  }
  function animateWords(e, t, a) {
    var n = document.getElementById(e);
    var o = 0;
    (function e() {
      n.textContent = t[o];
      o = (o + 1) % t.length;
      setTimeout(e, a);
    }());
  }
  (function () {
    var e = jQuery;
    e(document).on("ready", function () {
      new WOW({boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true}).init();
      e('[data-toggle="tooltip"]').tooltip();
      e("body").scrollspy({target: ".navbar-collapse", offset: 200});
      e("a.smooth-menu").on("click", function (t) {
        var a = e(this);
        e("html, body").stop().animate({scrollTop: e(a.attr("href")).offset().top - "75" + "px"}, 1500, "easeInOutExpo");
        t.preventDefault();
      });
      e(window).on("resize", function () {
        e(".equal-height").equalHeights();
      });
      e(".equal-height").equalHeights().find("img, iframe, object").on("load", function () {
        e(".equal-height").equalHeights();
      });
      e(".timer").countTo();
      e(".fun-fact").appear(function () {
        e(".timer").countTo();
      }, {accY: -100});
      e(".popup-link").magnificPopup({type: "image"});
      e(".popup-gallery").magnificPopup({type: "image", gallery: {enabled: true}});
      e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false});
      e(".magnific-mix-gallery").each(function () {
        var t = e(this).find(".item");
        var a = [];
        t.each(function () {
          var t = e(this);
          var n = "image";
          if (t.hasClass("magnific-iframe")) {
            n = "iframe";
          }
          var o = {src: t.attr("href"), type: n};
          o.title = t.data("title");
          a.push(o);
        });
        t.magnificPopup({mainClass: "mfp-fade", items: a, gallery: {enabled: true, tPrev: e(this).data("prev-text"), tNext: e(this).data("next-text")}, type: "image", callbacks: {beforeOpen: function () {
          var e = t.index(this.st.el);
          if (e !== -1) {
            this.goTo(e);
          }
        }}});
      });
      e(".stories-carusel").owlCarousel({loop: false, nav: false, dots: true, autoplay: true, items: 1, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]});
      e(".banner-carousel").owlCarousel({loop: false, nav: false, dots: true, autoplay: true, items: 1, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]});
      e(".our-offer-carousel").owlCarousel({loop: false, margin: 30, nav: false, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], dots: true, autoplay: true, responsive: {0: {items: 1}, 600: {items: 2}, 1e3: {items: 3}}});
      e(".blog-carousel").owlCarousel({loop: false, margin: 30, nav: false, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], dots: true, autoplay: true, responsive: {0: {items: 1}, 600: {items: 2}, 1e3: {items: 3}}});
      e(".team-carousel").owlCarousel({loop: false, margin: 30, nav: false, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], dots: true, autoplay: true, responsive: {0: {items: 1}, 600: {items: 2}, 1e3: {items: 3}}});
      e(".testimonial-items").owlCarousel({loop: false, nav: false, dots: true, autoplay: true, items: 1, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]});
      e(".clients-items").owlCarousel({loop: false, margin: 20, nav: false, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], dots: false, autoplay: true, responsive: {0: {items: 1}, 600: {items: 2}, 1e3: {items: 3}}});
      e(window).on("load", function () {
        e(".se-pre-con").fadeOut("slow");
      });
    });
  }());
  document.addEventListener("DOMContentLoaded", function () {
    animateWords("changingText", ["Ready to Work", "Job assured course", "High placements chances"], 2e3);
  });
  var amountScrolled = 200;
  var whatsappShown = false;
  function showModal() {
    if (!$(".modal.show").length) {
      $("#exampleModal").modal("show");
    }
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $("button.back-to-top").addClass("show");
      if (!whatsappShown) {
        $(".whatsapp-chat").addClass("show");
        whatsappShown = true;
      }
    } else {
      $("button.back-to-top").removeClass("show");
    }
  });
  $("button.back-to-top").click(function () {
    $("html, body").animate({scrollTop: 0}, 800);
    return false;
  });
  setTimeout(showModal, 1e4);
  setInterval(showModal, 3e5);
  