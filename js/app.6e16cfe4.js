(function(t) {
  function a(a) {
    for (
      var s, n, o = a[0], c = a[1], l = a[2], p = 0, u = [];
      p < o.length;
      p++
    )
      (n = o[p]),
        Object.prototype.hasOwnProperty.call(i, n) && i[n] && u.push(i[n][0]),
        (i[n] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    d && d(a);
    while (u.length) u.shift()();
    return r.push.apply(r, l || []), e();
  }
  function e() {
    for (var t, a = 0; a < r.length; a++) {
      for (var e = r[a], s = !0, o = 1; o < e.length; o++) {
        var c = e[o];
        0 !== i[c] && (s = !1);
      }
      s && (r.splice(a--, 1), (t = n((n.s = e[0]))));
    }
    return t;
  }
  var s = {},
    i = { app: 0 },
    r = [];
  function n(a) {
    if (s[a]) return s[a].exports;
    var e = (s[a] = { i: a, l: !1, exports: {} });
    return t[a].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = t),
    (n.c = s),
    (n.d = function(t, a, e) {
      n.o(t, a) || Object.defineProperty(t, a, { enumerable: !0, get: e });
    }),
    (n.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, a) {
      if ((1 & a && (t = n(t)), 8 & a)) return t;
      if (4 & a && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (n.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & a && "string" != typeof t)
      )
        for (var s in t)
          n.d(
            e,
            s,
            function(a) {
              return t[a];
            }.bind(null, s)
          );
      return e;
    }),
    (n.n = function(t) {
      var a =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return n.d(a, "a", a), a;
    }),
    (n.o = function(t, a) {
      return Object.prototype.hasOwnProperty.call(t, a);
    }),
    (n.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = a), (o = o.slice());
  for (var l = 0; l < o.length; l++) a(o[l]);
  var d = c;
  r.push([0, "chunk-vendors"]), e();
})({
  0: function(t, a, e) {
    t.exports = e("56d7");
  },
  "10cb": function(t, a, e) {},
  "199c": function(t, a) {},
  "23be": function(t, a, e) {
    "use strict";
    var s = e("199c"),
      i = e.n(s);
    a["default"] = i.a;
  },
  "3dfd": function(t, a, e) {
    "use strict";
    var s = e("9787"),
      i = e("23be"),
      r = (e("5c0b"), e("2877")),
      n = Object(r["a"])(i["default"], s["a"], s["b"], !1, null, null, null);
    a["default"] = n.exports;
  },
  "56d7": function(t, a, e) {
    "use strict";
    e.r(a);
    e("e260"), e("e6cf"), e("cca6"), e("a79d");
    var s = e("2b0e"),
      i = e("3dfd"),
      r = e("8c4f"),
      n = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", { staticClass: "home" }, [e("weatherWidget")], 1);
      },
      o = [],
      c = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e("div", { staticClass: "div mb-5" }, [
          e("div", { staticClass: "container mt-3" }, [
            e("div", { staticClass: "row" }, [
              e("div", { staticClass: "col-12" }, [
                this.$store.state.dataIsRecived
                  ? e(
                      "div",
                      { staticClass: "card text-white border-radius-25" },
                      [
                        e(
                          "div",
                          { staticClass: "card-body text-center text-white" },
                          [
                            e("img", {
                              staticClass: "wow bounceIn",
                              attrs: {
                                src:
                                  "http://openweathermap.org/img/wn/" +
                                  t.weather.weather[0].icon +
                                  ".png",
                                alt: "weather icon",
                                "data-wow-delay": "0.8s",
                              },
                            }),
                            e(
                              "h1",
                              {
                                staticClass: "font-weight-bold wow fadeInUp",
                                attrs: { "data-wow-delay": "0.2s" },
                              },
                              [
                                t._v(" " + t._s(t.weather.main.temp)),
                                e("span", [t._v("°C")]),
                              ]
                            ),
                            e(
                              "h4",
                              {
                                staticClass: "font-poppins wow fadeInUp",
                                attrs: { "data-wow-delay": "0.4s" },
                              },
                              [t._v(" " + t._s(t.weather.name) + " ")]
                            ),
                            e(
                              "h5",
                              {
                                staticClass:
                                  "text-white50 text-capitalize font-weight-light wow fadeInUp",
                                attrs: { "data-wow-delay": "0.6s" },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.weather.weather[0].description) +
                                    " "
                                ),
                              ]
                            ),
                          ]
                        ),
                        e("div", { staticClass: "form__group field" }, [
                          e("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.city,
                                expression: "city",
                              },
                            ],
                            staticClass: "form__field",
                            attrs: {
                              type: "input",
                              placeholder: "City",
                              name: "name",
                              id: "name",
                              required: "",
                            },
                            domProps: { value: t.city },
                            on: {
                              keyup: function(a) {
                                return !a.type.indexOf("key") &&
                                  t._k(a.keyCode, "enter", 13, a.key, "Enter")
                                  ? null
                                  : t.submit(a);
                              },
                              input: function(a) {
                                a.target.composing || (t.city = a.target.value);
                              },
                            },
                          }),
                          e(
                            "label",
                            {
                              staticClass: "form__label",
                              attrs: { for: "name" },
                            },
                            [t._v("Name")]
                          ),
                        ]),
                      ]
                    )
                  : e("div", { staticClass: "weather-widget" }, [
                      e("img", {
                        attrs: { src: "/src/assets/relax.svg", alt: "" },
                      }),
                    ]),
              ]),
            ]),
          ]),
          t.weather.main
            ? e("div", { staticClass: "container my-3" }, [
                e("div", { staticClass: "row" }, [
                  e("div", { staticClass: "col-12" }, [
                    e("div", { staticClass: "card border-radius-25" }, [
                      e("div", { staticClass: "card-body" }, [
                        e("div", { staticClass: "row" }, [
                          t._m(0),
                          e(
                            "div",
                            {
                              staticClass:
                                "offset-md-8 col-6 col-md-2 text-center mb-2",
                            },
                            [
                              e("div", { staticClass: "text-primary-light" }, [
                                t._v(t._s(t.weather.datetime)),
                              ]),
                            ]
                          ),
                          e(
                            "div",
                            { staticClass: "container horizontal-scroll mb-3" },
                            [
                              e("div", { staticClass: "row flex-nowrap" }, [
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "col-8 col-md-3 mb-2 wow fadeInDown",
                                    attrs: { "data-wow-delay": "0.2s" },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass: "card bg-orange-gradient",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body text-center",
                                          },
                                          [
                                            e(
                                              "i",
                                              {
                                                staticClass:
                                                  "material-icons-outlined text-dark",
                                                staticStyle: {
                                                  "font-size": "40px",
                                                },
                                              },
                                              [t._v("home")]
                                            ),
                                            e(
                                              "h6",
                                              {
                                                staticClass:
                                                  "text-dark font-weight-bold font-poppins",
                                              },
                                              [t._v(" Feels like ")]
                                            ),
                                            e(
                                              "h6",
                                              { staticClass: "text-dark" },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.weather.main.feels_like
                                                    ) +
                                                    "°C "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "col-8 col-md-3 mb-2 wow fadeInDown",
                                    attrs: { "data-wow-delay": "0.4s" },
                                  },
                                  [
                                    e(
                                      "div",
                                      {
                                        staticClass: "card bg-purple-gradient",
                                      },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body text-center",
                                          },
                                          [
                                            e(
                                              "i",
                                              {
                                                staticClass:
                                                  "material-icons-outlined text-dark",
                                                staticStyle: {
                                                  "font-size": "40px",
                                                },
                                              },
                                              [t._v("toys")]
                                            ),
                                            e(
                                              "h6",
                                              {
                                                staticClass:
                                                  "text-dark font-weight-bold font-poppins",
                                              },
                                              [t._v(" Wind ")]
                                            ),
                                            e(
                                              "h6",
                                              { staticClass: "text-dark" },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(t.weather.wind.speed) +
                                                    " m/s "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "col-8 col-md-3 mb-2 wow fadeInDown",
                                    attrs: { "data-wow-delay": "0.6s" },
                                  },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "card bg-blue-gradient" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body text-center",
                                          },
                                          [
                                            e(
                                              "i",
                                              {
                                                staticClass:
                                                  "material-icons-outlined text-dark",
                                                staticStyle: {
                                                  "font-size": "40px",
                                                },
                                              },
                                              [t._v("waves")]
                                            ),
                                            e(
                                              "h6",
                                              {
                                                staticClass:
                                                  "text-dark font-weight-bold font-poppins",
                                              },
                                              [t._v(" Humidity ")]
                                            ),
                                            e(
                                              "h6",
                                              { staticClass: "text-dark" },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.weather.main.humidity
                                                    ) +
                                                    "% "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                e(
                                  "div",
                                  {
                                    staticClass:
                                      "col-8 col-md-3 mb-2 wow fadeInDown",
                                    attrs: { "data-wow-delay": "0.8s" },
                                  },
                                  [
                                    e(
                                      "div",
                                      { staticClass: "card bg-red-gradient" },
                                      [
                                        e(
                                          "div",
                                          {
                                            staticClass:
                                              "card-body text-center",
                                          },
                                          [
                                            e(
                                              "i",
                                              {
                                                staticClass:
                                                  "material-icons-outlined text-dark",
                                                staticStyle: {
                                                  "font-size": "40px",
                                                },
                                              },
                                              [t._v("arrow_downward")]
                                            ),
                                            e(
                                              "h6",
                                              {
                                                staticClass:
                                                  "text-dark font-weight-bold font-poppins",
                                              },
                                              [t._v(" Pressure ")]
                                            ),
                                            e(
                                              "h6",
                                              { staticClass: "text-dark" },
                                              [
                                                t._v(
                                                  " " +
                                                    t._s(
                                                      t.weather.main.pressure
                                                    ) +
                                                    "mb "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          e(
                            "div",
                            { staticClass: "col-12 d-none d-sm-block" },
                            [
                              e(
                                "div",
                                {
                                  staticClass:
                                    "table-responsive wow slow fadeInUp",
                                  attrs: { "data-wow-delay": "0.2s" },
                                },
                                [
                                  e(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-borderless text-center text-white",
                                    },
                                    [
                                      t._m(1),
                                      e("tbody", [
                                        e("tr", [
                                          e("td", [
                                            t._v(
                                              t._s(t.weather.clouds.all) + "%"
                                            ),
                                          ]),
                                          e("td", [
                                            t._v(
                                              t._s(t.weather.visibility) + " km"
                                            ),
                                          ]),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                          e(
                            "div",
                            {
                              staticClass:
                                "col-12 d-block d-sm-none wow slow fadeInUp",
                            },
                            [
                              e(
                                "div",
                                {
                                  staticClass: "table-responsive",
                                  attrs: { "data-wow-delay": "0.20s" },
                                },
                                [
                                  e(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-borderless text-white",
                                    },
                                    [
                                      e("tbody", [
                                        e("tr", [
                                          e(
                                            "th",
                                            {
                                              staticClass: "font-poppins",
                                              attrs: { scope: "row" },
                                            },
                                            [t._v("UV Index")]
                                          ),
                                          t.weather.uv <= 2
                                            ? e(
                                                "td",
                                                {
                                                  staticClass:
                                                    "bg-success-light text-center",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(t.weather.uv) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : t.weather.uv <= 5
                                            ? e(
                                                "td",
                                                {
                                                  staticClass:
                                                    "bg-warning-light text-center",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(t.weather.uv) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : t.weather.uv <= 7
                                            ? e(
                                                "td",
                                                {
                                                  staticClass:
                                                    "bg-danger-light text-center",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(t.weather.uv) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : t.weather.uv <= 10
                                            ? e(
                                                "td",
                                                {
                                                  staticClass:
                                                    "bg-danger-light text-center",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(t.weather.uv) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : t.weather.uv >= 11
                                            ? e(
                                                "td",
                                                {
                                                  staticClass:
                                                    "bg-danger-light text-center",
                                                },
                                                [
                                                  t._v(
                                                    " " +
                                                      t._s(t.weather.uv) +
                                                      " "
                                                  ),
                                                ]
                                              )
                                            : t._e(),
                                        ]),
                                        e("tr", [
                                          e(
                                            "th",
                                            {
                                              staticClass: "font-poppins",
                                              attrs: { scope: "row" },
                                            },
                                            [t._v("Clouds")]
                                          ),
                                          e(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              t._v(
                                                t._s(t.weather.clouds.all) + "%"
                                              ),
                                            ]
                                          ),
                                        ]),
                                        e("tr", [
                                          e(
                                            "th",
                                            {
                                              staticClass: "font-poppins",
                                              attrs: { scope: "row" },
                                            },
                                            [t._v(" Precipitation ")]
                                          ),
                                          e(
                                            "td",
                                            { staticClass: "text-center" },
                                            [t._v(t._s(t.weather.precip) + "%")]
                                          ),
                                        ]),
                                        e("tr", [
                                          e(
                                            "th",
                                            {
                                              staticClass: "font-poppins",
                                              attrs: { scope: "row" },
                                            },
                                            [t._v("Visibility")]
                                          ),
                                          e(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(t.weather.visibility) +
                                                  " km "
                                              ),
                                            ]
                                          ),
                                        ]),
                                        e("tr", [
                                          e(
                                            "th",
                                            {
                                              staticClass: "font-poppins",
                                              attrs: { scope: "row" },
                                            },
                                            [t._v(" Air Quality Index ")]
                                          ),
                                          e(
                                            "td",
                                            { staticClass: "text-center" },
                                            [t._v(t._s(t.weather.aqi))]
                                          ),
                                        ]),
                                        e("tr", [
                                          e(
                                            "th",
                                            {
                                              staticClass: "font-poppins",
                                              attrs: { scope: "row" },
                                            },
                                            [t._v("Dew Point")]
                                          ),
                                          e(
                                            "td",
                                            { staticClass: "text-center" },
                                            [t._v(t._s(t.weather.dewpt) + "°C")]
                                          ),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
                e("br"),
                e("br"),
              ])
            : t._e(),
        ]);
      },
      l = [
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("div", { staticClass: "col-6 col-md-2 mb-2" }, [
            e("div", { staticClass: "text-primary-light font-weight-bold" }, [
              t._v("TODAY"),
            ]),
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e("thead", [
            e("tr", [
              e(
                "th",
                { staticClass: "font-poppins", attrs: { scope: "col" } },
                [t._v("Clouds")]
              ),
              e(
                "th",
                { staticClass: "font-poppins", attrs: { scope: "col" } },
                [t._v("Visibility")]
              ),
            ]),
          ]);
        },
      ],
      d = {
        data: function() {
          return { city: "" };
        },
        computed: {
          weather: function() {
            return this.$store.state.weather;
          },
        },
        created: function() {
          this.$store.dispatch("updateWeather");
        },
        methods: {
          submit: function() {
            this.$store.dispatch("updateWeather", this.city);
          },
        },
      },
      p = d,
      u = (e("c020"), e("2877")),
      v = Object(u["a"])(p, c, l, !1, null, "15ce500a", null),
      h = v.exports,
      w = { name: "home", components: { weatherWidget: h } },
      f = w,
      b = Object(u["a"])(f, n, o, !1, null, null, null),
      m = b.exports;
    s["a"].use(r["a"]);
    var C = new r["a"]({
        mode: "history",
        base: "/",
        routes: [{ path: "/", name: "home", component: m }],
      }),
      _ = e("2f62"),
      g = e("bc3a"),
      y = e.n(g),
      x = "59681a1111eada6e97804823182254ae",
      k = "https://api.openweathermap.org/data/2.5/weather?appid=".concat(
        x,
        "&units=metric"
      ),
      I = y.a.create({
        baseURL: k,
        withCredentials: !1,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      O = {
        getWeather: function() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "Zaporizhzhya";
          return I.get(k, { params: { q: t } });
        },
      };
    s["a"].use(_["a"]);
    var j = new _["a"].Store({
      state: { weather: {}, dataIsRecived: !1 },
      mutations: {
        UPDATE_WEATHER: function(t, a) {
          O.getWeather(a)
            .then(function(a) {
              (t.weather = a.data), (t.dataIsRecived = !0);
            })
            .catch(function(a) {
              console.log("There was an error:", a.response),
                (t.dataIsRecived = !1);
            });
        },
      },
      actions: {
        updateWeather: function(t, a) {
          t.commit("UPDATE_WEATHER", a);
        },
      },
    });
    (s["a"].config.productionTip = !1),
      new s["a"]({
        router: C,
        store: j,
        render: function(t) {
          return t(i["default"]);
        },
      }).$mount("#app");
  },
  "5c0b": function(t, a, e) {
    "use strict";
    var s = e("9c0c"),
      i = e.n(s);
    i.a;
  },
  9787: function(t, a, e) {
    "use strict";
    var s = function() {
        var t = this,
          a = t.$createElement,
          e = t._self._c || a;
        return e(
          "div",
          { attrs: { id: "app" } },
          [
            e(
              "nav",
              {
                staticClass:
                  "navbar navbar-expand-lg navbar-dark bg-dark sticky-top d-none d-sm-none d-sm-block",
              },
              [
                e("div", { staticClass: "container" }, [
                  t._m(0),
                  t._m(1),
                  e(
                    "div",
                    {
                      staticClass: "collapse navbar-collapse",
                      attrs: { id: "navbarNav" },
                    },
                    [
                      e("ul", { staticClass: "navbar-nav" }, [
                        e(
                          "li",
                          { staticClass: "nav-item active" },
                          [
                            e(
                              "router-link",
                              { staticClass: "nav-link", attrs: { to: "/" } },
                              [t._v("Weather")]
                            ),
                          ],
                          1
                        ),
                      ]),
                    ]
                  ),
                ]),
              ]
            ),
            e("router-view"),
            e("div", { staticClass: "bottom-nav mt-3 d-block d-sm-none" }, [
              e("div", { staticClass: "row text-center" }, [
                e(
                  "div",
                  { staticClass: "col-6" },
                  [
                    e(
                      "router-link",
                      { staticClass: "active", attrs: { to: "/" } },
                      [
                        e(
                          "i",
                          {
                            staticClass: "material-icons",
                            staticStyle: { "font-size": "32px" },
                          },
                          [t._v("home")]
                        ),
                        e("br"),
                      ]
                    ),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "col-6" },
                  [
                    e("router-link", { attrs: { to: "/about" } }, [
                      e(
                        "i",
                        {
                          staticClass: "material-icons",
                          staticStyle: { "font-size": "32px" },
                        },
                        [t._v("cloud_download")]
                      ),
                      e("br"),
                    ]),
                  ],
                  1
                ),
              ]),
            ]),
          ],
          1
        );
      },
      i = [
        function() {
          var t = this,
            a = t.$createElement,
            s = t._self._c || a;
          return s("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
            s("img", {
              staticClass: "d-inline-block align-top",
              attrs: {
                src: e("cf05"),
                width: "30",
                height: "30",
                alt: "Vue Logo",
              },
            }),
          ]);
        },
        function() {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "button",
            {
              staticClass: "navbar-toggler",
              attrs: {
                type: "button",
                "data-toggle": "collapse",
                "data-target": "#navbarNav",
                "aria-controls": "navbarNav",
                "aria-expanded": "false",
                "aria-label": "Toggle navigation",
              },
            },
            [e("span", { staticClass: "navbar-toggler-icon" })]
          );
        },
      ];
    e.d(a, "a", function() {
      return s;
    }),
      e.d(a, "b", function() {
        return i;
      });
  },
  "9c0c": function(t, a, e) {},
  c020: function(t, a, e) {
    "use strict";
    var s = e("10cb"),
      i = e.n(s);
    i.a;
  },
  cf05: function(t, a, e) {
    t.exports = e.p + "../img/logo.82b9c7a5.png";
  },
});
//# sourceMappingURL=app.6e16cfe4.js.map
