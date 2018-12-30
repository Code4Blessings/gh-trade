!(function(e) {
  var t = {};
  function n(a) {
    if (t[a]) return t[a].exports;
    var r = (t[a] = { i: a, l: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          n.d(
            a,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 7));
})([
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(e, t, n) {
    "use strict";
    c(n(8)), c(n(9)), c(n(10));
    var a = c(n(11)),
      r = (c(n(12)), c(n(13)), c(n(14))),
      i = (c(n(15)),
      c(n(16)),
      c(n(17)),
      c(n(18)),
      c(n(19)),
      c(n(20)),
      c(n(21)),
      c(n(22)),
      c(n(23)),
      c(n(24)),
      c(n(25)));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    new r.default(),
      a.default.createInstance(),
      i.default.createInstance([
        __select("#blog-next-btn"),
        __select("#blog-prev-btn"),
        __selectAll(".blog-slider-image")
      ]);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
        return function(e, t) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e))
            return (function(e, t) {
              var n = [],
                a = !0,
                r = !1,
                i = void 0;
              try {
                for (
                  var c, o = e[Symbol.iterator]();
                  !(a = (c = o.next()).done) &&
                  (n.push(c.value), !t || n.length !== t);
                  a = !0
                );
              } catch (e) {
                (r = !0), (i = e);
              } finally {
                try {
                  !a && o.return && o.return();
                } finally {
                  if (r) throw i;
                }
              }
              return n;
            })(e, t);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      r = (function() {
        return {
          __select: function(e) {
            return document.querySelector(e);
          },
          __selectAll: function(e) {
            return document.querySelectorAll(e);
          },
          __selectClick: function(e, t) {
            document.querySelector(e).addEventListener("click", function(e) {
              t(e);
            });
          },
          __click: function(e, t) {
            return e.addEventListener("click", function(e) {
              t(e);
            });
          },
          __toggleClass: function(e, t) {
            return e.classList.toggle(t);
          },
          __delay: function(e) {
            return new Promise(function(t) {
              return setTimeout(t, e);
            });
          }
        };
      })();
    !(function() {
      Object.entries(arguments.length <= 0 ? void 0 : arguments[0]).forEach(
        function(e) {
          var t = a(e, 2),
            n = t[0],
            r = t[1];
          window[n] || (window[n] = r);
        }
      );
    })(r),
      (t.default = r);
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      if (!window.UPDATE_CART)
        return (window.UPDATE_CART = async function(e) {
          var t = (await axios.get(e)).data,
            n = t[1][1],
            a = t[0],
            r = t[1][0].toFixed(2);
          if (0 === n || 0 === r || a.length <= 0)
            (__select("#cartProductsAjax").innerHTML =
              '<div class="emptyCart">Your Cart is Empty</div>'),
              (__select("#cartCheckoutButtonAjax").innerHTML = "");
          else {
            var i = "";
            a.forEach(function(e) {
              var t =
                '\n           <div class="cart__frame-item-container">\n             <div class="cart__frame-item-img" style="background: url(/static/images/products/' +
                e.item.product_image1 +
                ')no-repeat center"></div>\n             <div class="cart__frame-item-details">\n               <p>' +
                e.item.name +
                '</p>\n               <div class="cart__frame-item-details-remove removeBtn" data-type="' +
                e.item._id +
                '">Remove</div>\n             </div>\n             <div class="cart__frame-btn-price-flex">\n               <div class="cart__frame-btn-wrap">\n                 <span>' +
                e.qty +
                '</span>\n                 <div class="icon-minus-icon minus-icon reduceBtnAjax" data-type="' +
                e.item._id +
                '"></div>\n                 <div class="icon-plus-icon icon-minus-icon plus-icon ajaxAddBtnAjax" data-type="' +
                e.item._id +
                '"></div>\n               </div>\n               <div class="cart__frame-totalPrice currencyChangeAfterAjax">$ ' +
                e.item.price.toFixed(2) +
                "</div>\n             </div>\n           </div>\n         ";
              i += t;
            }),
              (__select("#cartProductsAjax").innerHTML = i),
              (__select("#cartCheckoutButtonAjax").innerHTML =
                '\n                  <div class="button">\n                   <span class="button__mask"></span> \n                   <span class="button__text"><span class="checkout-btn-text">Checkout</span><span class="currencyChangeAfterAjax checkout-btn-value">$ ' +
                r +
                '</span>\n                   <span class="button__text button__text--bis"><span class="checkout-btn-text">Checkout</span><span class="currencyChangeAfterAjax checkout-btn-value">$ ' +
                r +
                "</span>\n                  </div>");
          }
          __selectAll(".totalQtyAjax").forEach(function(e) {
            e.textContent = t[1][1];
          }),
            __selectAll(".removeBtn").forEach(function(e) {
              __click(e, function() {
                window.UPDATE_CART(
                  "/remove-from-cart/" + e.getAttribute("data-type")
                );
              });
            }),
            __selectAll(".reduceBtnAjax").forEach(function(e) {
              __click(e, function() {
                window.UPDATE_CART(
                  "/reduce-item-from-cart/" + e.getAttribute("data-type")
                );
              });
            }),
            __selectAll(".ajaxAddBtnAjax").forEach(function(e) {
              __click(e, function() {
                window.UPDATE_CART(
                  "/add-to-cart/" + e.getAttribute("data-type")
                );
              });
            });
          var c = __select("#hiddenCurrencyInput").value;
          "$" !== c &&
            (async function() {
              var e,
                t = {
                  currencies: ["USD_EUR", "USD_GBP", "USD_NGN", "USD_GHS"][
                    ["€", "£", "₦", "¢"].indexOf((e = c))
                  ],
                  symbol: e
                },
                n = (await axios.get(
                  "https://free.currencyconverterapi.com/api/v5/convert?q=" +
                    t.currencies +
                    "&compact=y"
                )).data[t.currencies].val;
              __selectAll(".currencyChangeAfterAjax").forEach(function(e) {
                var a = parseInt(e.innerHTML.split(" ")[1]);
                e.textContent = t.symbol + " " + (a * n).toFixed(2);
              });
            })(),
            __selectAll(".checkout-btn-value").forEach(function(e) {
              e.textContent = e.textContent
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            });
        });
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      if (window.location.pathname.includes("/product-page/")) {
        var e = {
          settings: { first_expanded: !1, toggle: !1 },
          openAccordion: function(e, t) {
            t.children.length &&
              (e.classList.add("is-open"), (t.style.height = "auto"));
          },
          closeAccordion: function(e, t) {
            e.classList.remove("is-open"), (t.style.height = 0);
          },
          init: function(e) {
            var t = this,
              n = t.settings.first_expanded;
            e.classList.contains("is-first-expanded") && (n = !0);
            var a = t.settings.toggle;
            e.classList.contains("is-toggle") && (a = !0);
            for (
              var r = __selectAll(".accordion"),
                i = __selectAll(".accordion-head"),
                c = __selectAll(".accordion-body"),
                o = function(e) {
                  r[e];
                  var o = i[e],
                    s = c[e];
                  __click(o, function() {
                    if (a)
                      o.classList.contains("is-open")
                        ? t.closeAccordion(o, s)
                        : t.openAccordion(o, s);
                    else {
                      for (var e = 0; e < c.length; e++)
                        t.closeAccordion(i[e], c[e]);
                      t.openAccordion(o, s);
                    }
                  }),
                    window.screen.width > 1200 &&
                      0 === e &&
                      n &&
                      t.openAccordion(o, s);
                },
                s = 0;
              s < r.length;
              s++
            )
              o(s);
          }
        };
        !(function() {
          for (var t = __selectAll(".accordions"), n = 0; n < t.length; n++)
            e.init(t[n]);
        })();
      }
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    })();
    var r = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.previousSearch = ""),
          this.onSubmit();
      }
      return (
        a(
          e,
          [
            {
              key: "onSubmit",
              value: function() {
                var e = this;
                __select("#blogSearchForm").onsubmit = function(t) {
                  t.preventDefault();
                  var n = __select("#selectMenu").value.toUpperCase(),
                    a = __select("#blogSearchInput").value;
                  e.checkQueryQuality(a, n)
                    ? (e.requestBlogs(n, a), (e.previousSearch = n))
                    : "/natural-hair-blog-black-hair" !==
                      window.location.pathname
                      ? (window.location = "/natural-hair-blog-black-hair")
                      : ("AFRICA" !== e.previousSearch &&
                          "LIFESTYLE" !== e.previousSearch &&
                          "BUSINESS" !== e.previousSearch) ||
                        window.location.reload();
                };
              }
            },
            {
              key: "checkQueryQuality",
              value: function(e, t) {
                var n = "" !== e && e.length < 150;
                return (
                  ("SELECT" === t && !0 === n) ||
                  !!(
                    "EVERYTHING" !== t &&
                    "HAIR" !== t &&
                    "" !== t &&
                    "SELECT" !== t
                  )
                );
              }
            },
            {
              key: "requestBlogs",
              value: async function(e, t) {
                var n = (await axios.post("/blog/search/instant", {
                  searchQuery: e,
                  search: t
                })).data;
                if ("empty" === n)
                  return (__select("#blogEmptySearchAlert").textContent =
                    "- No Results Found -");
                __select("#blogEmptySearchAlert").textContent =
                  "- " + n.length + " Results Found -";
                var a = "";
                n.forEach(function(e) {
                  var t =
                    '\n\t\t\t\t<a class="blogs__item" href="/' +
                    e.blog_url +
                    '">\n\t\t\t\t\t<div class="blogs__item-img" style="background: url(\'' +
                    e.blog_thumbnail_img +
                    '\')no-repeat center"></div>\n\t\t\t\t\t<div class="blogs__item-info">\n\t\t\t\t\t\t<div class="blogs__item-frame">\n\t\t\t\t\t\t\t<div class="blogs__item-catagory">' +
                    e.catagory +
                    '</div>\n\t\t\t\t\t\t\t<div class="blogs__item-date">' +
                    new Date(e.blog_date).toString().slice(4, 16) +
                    '</div>\n\t\t\t\t\t\t\t<h4 class="blogs__item-title">' +
                    e.blog_h1 +
                    '</h4>\n\t\t\t\t\t\t\t<div class="blogs__item-breif">' +
                    e.seo_description +
                    "</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t";
                  a += t;
                }),
                  (__select("#injectBlogSearchResults").innerHTML = a);
              }
            }
          ],
          [
            {
              key: "createInstance",
              value: function() {
                return void 0 !== window.executable ? new e() : void 0;
              }
            }
          ]
        ),
        e
      );
    })();
    t.default = r;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a,
      r = ((a = __select("#burger")),
      void __click(a, async function() {
        __toggleClass(a, "open"),
          __toggleClass(document.body, "no-scroll"),
          __toggleClass(__select("#slideMenu"), "slideMobileMenu"),
          await __delay(600),
          a.classList.toggle("open"),
          __toggleClass(
            __select(".slideMenu__overlay-color"),
            "slide-mobile-overlay"
          );
      }));
    t.default = r;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (async function() {
      var e;
      if (
        await ((e = !0),
        ["checkout-page", "calculate-shipping", "checkout"].forEach(function(
          t
        ) {
          window.location.pathname.includes(t) && (e = !1);
        }),
        e)
      ) {
        var t = __select("#cart");
        __selectClick("#navCartIcon", function() {
          t.classList.add("slideCart");
        }),
          __selectClick("#closeCartIcon", function() {
            t.classList.remove("slideCart");
          });
      } else __select("#navCartIcon").style.opacity = 0;
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    })();
    function r(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    var i = (function() {
      function e() {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.usd = __select("#usd")),
          (this.euro = __select("#euro")),
          (this.pound = __select("#pound")),
          (this.naira = __select("#naira")),
          (this.cedi = __select("#cedi")),
          (this.flag_wrapper = __select("#flagWrap")),
          (this.prices = __selectAll(".currencyChange")),
          (this.originalPrices = Array.from(this.prices, function(e) {
            return e.innerHTML;
          })),
          (this.currencyOptions = ["$", "€", "£", "₦", "¢"]),
          (this.currencyNames = ["usd", "euro", "pound", "naira", "cedi"]),
          (this.currencyData = {
            naira: ["3", "2", "5", "4", "1", "₦", "USD_NGN"],
            cedi: ["3", "2", "1", "4", "5", "¢", "USD_GHS"],
            euro: ["3", "2", "4", "1", "5", "€", "USD_EUR"],
            pound: ["1", "2", "3", "4", "5", "£", "USD_GBP"],
            dolar: ["3", "1", "2", "4", "5", "$", void 0]
          }),
          this.clicked(),
          (this.selectedCurrency = __select("#hiddenCurrencyInput").value),
          this.setDefaultCurrency();
      }
      return (
        a(e, [
          {
            key: "setDefaultCurrency",
            value: function() {
              var e = this;
              this.currencyOptions.forEach(function(t, n) {
                if (t === e.selectedCurrency) {
                  __toggleClass(e.flag_wrapper, "showFlag");
                  var a = e.currencyNames[n];
                  e[a].click();
                }
              });
            }
          },
          {
            key: "clicked",
            value: function() {
              var e = this;
              __selectClick("#downArrow", function() {
                e.flag_wrapper.classList.toggle("showFlag");
              }),
                __click(this.naira, function() {
                  e.filterCurrencyFlagClickEvents(e.currencyData.naira);
                }),
                __click(this.cedi, function() {
                  e.filterCurrencyFlagClickEvents(e.currencyData.cedi);
                }),
                __click(this.euro, function() {
                  e.filterCurrencyFlagClickEvents(e.currencyData.euro);
                }),
                __click(this.pound, function() {
                  e.filterCurrencyFlagClickEvents(e.currencyData.pound);
                }),
                __click(this.usd, function() {
                  e.filterCurrencyFlagClickEvents(e.currencyData.dolar);
                });
            }
          },
          {
            key: "filterCurrencyFlagClickEvents",
            value: function(e) {
              __select(".nav__currency").classList.contains("showFlag") &&
                this.setNewCurrency(e),
                (this.pound.style.order = e[0]),
                (this.usd.style.order = e[1]),
                (this.cedi.style.order = e[2]),
                (this.euro.style.order = e[3]),
                (this.naira.style.order = e[4]),
                this.flag_wrapper.classList.toggle("showFlag");
            }
          },
          {
            key: "setNewCurrency",
            value: async function(e) {
              var t = this,
                n = e[5];
              "$" === n
                ? __selectAll(".currencyChangeAfterAjax").length > 0
                  ? (axios.get("/currency/" + n),
                    await __delay(100),
                    window.location.reload())
                  : ([].concat(r(this.prices)).forEach(function(e, n) {
                      e.textContent = t.originalPrices[n];
                    }),
                    axios.get("/currency/" + n))
                : (async function(e, t) {
                    var n = this,
                      a = (await axios.get(
                        "https://free.currencyconverterapi.com/api/v5/convert?q=" +
                          e +
                          "&compact=y"
                      )).data[e].val;
                    [].concat(r(this.prices)).forEach(function(e, r) {
                      var i = n.originalPrices[r].split(" ")[1],
                        c = (parseInt(i.replace(/,/g, "")) * a)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      e.textContent = t + " " + c;
                    });
                    var i = __selectAll(".currencyChangeAfterAjax"),
                      c = Array.from(i, function(e) {
                        return e.innerHTML;
                      });
                    i.forEach(function(e, n) {
                      var r = c[n].split(" ")[1],
                        i = (parseInt(r.replace(/,/g, "")) * a)
                          .toFixed(2)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                      e.textContent = t + " " + i;
                    });
                  }.bind(this)(e[6], n),
                  axios.get("/currency/" + n));
            }
          }
        ]),
        e
      );
    })();
    t.default = i;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = void (
      void 0 !== window.executable &&
      !1 !== typeof window.executable &&
      __selectClick("#fetchSixBlogs", async function() {
        var e = (await axios.get("/fetch-more-blogs")).data,
          t = "";
        e.forEach(function(e) {
          var n =
            '\n\t\t\t\t<a class="blogs__item" href="/' +
            e.blog_url +
            '">\n\t\t\t\t\t<div class="blogs__item-img" style="background: url(\'' +
            e.blog_thumbnail_img +
            '\')no-repeat center"></div>\n\t\t\t\t\t<div class="blogs__item-info">\n\t\t\t\t\t\t<div class="blogs__item-frame">\n\t\t\t\t\t\t\t<div class="blogs__item-catagory">' +
            e.catagory +
            '</div>\n\t\t\t\t\t\t\t<div class="blogs__item-date">' +
            new Date(e.blog_date).toString().slice(4, 16) +
            '</div>\n\t\t\t\t\t\t\t<h4 class="blogs__item-title">' +
            e.blog_h1 +
            '</h4>\n\t\t\t\t\t\t\t<div class="blogs__item-breif">' +
            e.seo_description +
            "</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\t\t\t";
          t += n;
        }),
          (__select("#injectBlogSearchResults").innerHTML += t);
      })
    );
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = void (
      window.location.pathname.includes("product-tag") &&
      ((__select("#productSearchForm").onsubmit = function(e) {
        e.preventDefault();
      }),
      __selectClick("#productSearchBtn", async function() {
        var e = __select("#searchInput").value,
          t = e.length > 100 ? "everything" : __select("#selectMenu").value;
        if ("everything" === t || "SELECT" === t)
          return (window.location =
            "/product-tag/natural-afro-hair-care-products");
        var n = (await axios.post("/product/search/instant", {
          searchQuery: t,
          search: e
        })).data;
        if ("empty" === n)
          __select("#emptySearchAlert").textContent = "- NO RESULTS FOUND -";
        else {
          __select("#emptySearchAlert").textContent =
            "- " + n.length + " RESULTS FOUND -";
          var a = "";
          n.forEach(function(e) {
            var t =
              '\n          <div class="products__product override-waypoints-opacity">\n            <a class="products__product-img" href="/product-page/' +
              e.url +
              '" style="background: url(/static/images/products/' +
              e.product_image1 +
              ')no-repeat center"></a>\n            <div class="products__product-overlay">\n              <div class="products__product-overlay-pipe"></div>\n              <div class="products__product-overlay-left">\n                <h2>' +
              e.name +
              '</h2>\n              </div>\n              <div class="products__product-btn addToCartButton" data-type=' +
              e._id +
              '>\n                <div class="button">\n                  <span class="button__mask"></span>\n                  <span class="button__text">Add to Cart</span>\n                  <span class="button__text button__text--bis">Add to Cart</span>\n                </div>\n              </div>\n              <div class="products__product-overlay-right"> \n                <div class="price currencyChange">$ ' +
              e.price.toFixed(2) +
              '</div>\n                <div class="per-price currencyChange">$ ' +
              e.price.toFixed(2) +
              "</div>\n               </div>\n            </div>\n          </div>\n        ";
            a += t;
          }),
            (__select("#injectSearchResults").innerHTML = a);
        }
        !(async function() {
          await __delay(1e3),
            __selectAll(".addToCartButton").forEach(function(e) {
              __click(e, async function() {
                var t = e.getAttribute("data-type");
                window.UPDATE_CART("/add-to-cart/" + t);
                var n = __select("#cart");
                await __delay(200),
                  n.classList.add("slideCart"),
                  await __delay(3500),
                  n.classList.remove("slideCart");
              });
            });
        })();
      }))
    );
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (__selectAll(".addToCartButton").forEach(function(e) {
      __click(e, async function() {
        window.UPDATE_CART("/add-to-cart/" + e.getAttribute("data-type"));
        var t = __select("#cart");
        await __delay(1e3),
          t.classList.add("slideCart"),
          await __delay(8e3),
          t.classList.remove("slideCart");
      });
    }),
    __selectAll(".removeBtn").forEach(function(e) {
      __click(e, function() {
        window.UPDATE_CART("/remove-from-cart/" + e.getAttribute("data-type"));
      });
    }),
    __selectAll(".reduceBtnAjax").forEach(function(e) {
      __click(e, function() {
        window.UPDATE_CART(
          "/reduce-item-from-cart/" + e.getAttribute("data-type")
        );
      });
    }),
    void __selectAll(".ajaxAddBtnAjax").forEach(function(e) {
      __click(e, function() {
        window.UPDATE_CART("/add-to-cart/" + e.getAttribute("data-type"));
      });
    }));
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      var e = window.location.pathname;
      function t() {
        __select("#recaptchaHider").style.display = "none";
      }
      __selectAll(".checkout-btn-value").forEach(function(e) {
        e.textContent = e.textContent
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }),
        (function() {
          if (e.includes("/product-page/"))
            for (var t = __selectAll(".starWrap"), n = 0; n < t.length; n++)
              for (
                var a = parseInt(t[n].childNodes[0].innerHTML), r = 0;
                r < a;
                r++
              )
                t[n].childNodes[1].childNodes[r].style.backgroundImage =
                  "url(/static/images/star-orange.svg)";
        })(),
        __toggleClass(__select(".nav"), "opacity-on"),
        __toggleClass(__select(".mega"), "opacity-on"),
        __toggleClass(__select(".bindMegaSocials .social"), "opacity-on"),
        "/" === e && __toggleClass(__select(".banner-img"), "opacity-on"),
        e.match(/\/about|\/mission/) &&
          __toggleClass(__select(".mission__top"), "opacity-on"),
        e.includes("/natural-hair-blog-black-hair") &&
          __toggleClass(__select(".blogs"), "opacity-on"),
        (__select("#contactTextarea").oninput = t),
        (__select("#contactInput").oninput = t);
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      function e() {
        __select("#subscribeWrapper").classList.toggle("slideSubscribe");
      }
      __selectClick("#closeSubscribeIcon", e), __selectClick("#swing", e);
      var t = __select("#subscribeButton"),
        n = __select("#subscribeInput");
      __click(t, async function() {
        n.value.length > 12 &&
          n.value.includes("@") &&
          n.value.includes(".") &&
          (await __delay(1e3),
          (__select("#subscribeAlert").innerHTML =
            "<div style='color: #333'>Use code:</div> <div><b style='font-size: 19px'>NATURALBEAUTY</b></div><div style='color: #333'>on your next order</div>"),
          (n.style.display = "none"),
          (t.style.display = "none"));
      });
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      if (window.location.pathname.includes("/product-page/")) {
        var e = __select("#reviewForm"),
          t = __select("#reviewTextarea").value.length;
        e.addEventListener("submit", function(n) {
          0 === grecaptcha.getResponse().length
            ? (n.preventDefault(), alert("Please tick the I am not robot box!"))
            : t < 800 && t > 3 && e.submit();
        });
      }
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = void (
      "/user-login" === window.location.pathname &&
      userLoginForm.addEventListener("submit", function(e) {
        if (0 === grecaptcha.getResponse().length)
          e.preventDefault(), alert("Please tick the I am not robot box!");
        else {
          var t = __select("#userEmail");
          __select("#userPassword").value.length > 5 &&
          t.value.length > 12 &&
          t.value.includes("@") &&
          t.value.includes(".")
            ? userLoginForm.submit()
            : (e.preventDefault(), alert("Please correct your credentials!"));
        }
      })
    );
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a,
      r,
      i,
      c = ((a = __select(".contactForm")),
      (r = __select("#contactTextarea")),
      (i = __select("#contactInput")),
      void (a.onsubmit = function(e) {
        e.preventDefault();
        var t = grecaptcha.getResponse();
        0 === t.length
          ? alert("Please tick the I am not robot box!")
          : t.length > 0 && r.value.length < 4e3 && r.value.length > 2
            ? (axios.post("/jostylin/customer/enquire", {
                contact: i.value,
                enquire: r.value
              }),
              (a.innerHTML =
                '<p style="color:tomato;font-weight:900">We have recieved your enquire, thank you.</p>'))
            : alert("Please fill up the form correctly!");
      }));
    t.default = c;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = void (
      "/" === window.location.pathname &&
      new Waypoint({
        element: __select(".blog-slider-main-div"),
        handler: function() {
          __selectAll(".blog-slider-image").forEach(function(e) {
            Object.assign(e.style, {
              opacity: "1",
              transform: "translateX(0)",
              filter: "grayScale(0)"
            });
          });
        },
        offset: "65%"
      })
    );
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      if ("/wholesale" === window.location.pathname) {
        var e = __select("#wholesaleForm");
        e.addEventListener("submit", function(t) {
          if (0 === grecaptcha.getResponse().length)
            t.preventDefault(), alert("Please tick the I am not robot box!");
          else {
            var n = __select("#productSelectOne"),
              a = __select("#wholesaleName"),
              r = __select("#wholesaleLocation"),
              i = __select("#wholesaleEmail");
            n.value.length &&
            a.value.length &&
            r.value.length &&
            i.value.includes("@") &&
            i.value.includes(".")
              ? (e.submit(),
                (e.innerHTML =
                  '<p class="enquire-alert"><b>Thank you ' +
                  a.value +
                  ", we have receieved your wholesale enquire and we will respond you within the next 48 hours.<b></p>"))
              : (t.preventDefault(),
                alert("Please enter correct information!"));
          }
        });
      }
    })();
    t.default = a;
  },
  function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var a = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    })();
    var r = (function() {
      function e(t, n, a) {
        !(function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.images = a),
          (this.status = 0),
          __click(t, this.next.bind(this)),
          __click(n, this.prev.bind(this));
      }
      return (
        a(
          e,
          [
            {
              key: "next",
              value: function() {
                this.status >= (this.images.length - 1) * this.width() == !1 &&
                  (this.status += this.width()),
                  this.loop();
              }
            },
            {
              key: "prev",
              value: function() {
                this.status <= this.width()
                  ? (this.status = 0)
                  : (this.status -= this.width()),
                  this.loop();
              }
            },
            {
              key: "loop",
              value: function() {
                for (var e = 0; e < this.images.length; e++)
                  this.images[e].style.transform =
                    "translateX(-" + this.status + "px)";
              }
            },
            {
              key: "width",
              value: function() {
                var e =
                  window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.body.clientWidth;
                return e < 420
                  ? 280
                  : e > 420 && e < 640
                    ? 420
                    : e > 640 && e < 780
                      ? 620
                      : e > 780 && e < 1e3
                        ? 520
                        : e > 1e3 && e < 1400
                          ? 320
                          : 342;
              }
            }
          ],
          [
            {
              key: "createInstance",
              value: function(t) {
                return "/" === window.location.pathname
                  ? new (Function.prototype.bind.apply(
                      e,
                      [null].concat(
                        (function(e) {
                          if (Array.isArray(e)) {
                            for (
                              var t = 0, n = Array(e.length);
                              t < e.length;
                              t++
                            )
                              n[t] = e[t];
                            return n;
                          }
                          return Array.from(e);
                        })(t)
                      )
                    ))()
                  : void 0;
              }
            }
          ]
        ),
        e
      );
    })();
    t.default = r;
  }
]);
