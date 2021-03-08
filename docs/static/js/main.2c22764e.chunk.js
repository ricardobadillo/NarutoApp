(this.webpackJsonpninjas = this.webpackJsonpninjas || []).push([
  [0],
  {
    23: function (e, a, n) {},
    57: function (e, a, n) {
      "use strict";
      n.r(a);
      var t = n(0),
        r = n(1),
        i = n(25),
        s = n.n(i),
        o = (n(23), n(6)),
        c = n(3),
        u = function (e) {
          var a = e.history;
          return Object(t.jsxs)("div", {
            className: "container mt-5",
            children: [
              Object(t.jsx)("h1", { children: "Login en proceso" }),
              Object(t.jsx)("hr", {}),
              Object(t.jsx)("button", {
                className: "btn btn-dark",
                onClick: function () {
                  a.push("/");
                },
                children: "Return",
              }),
            ],
          });
        },
        l = function () {
          return Object(t.jsx)("nav", {
            className: "navbar navbar-expand-lg navbar-light bg-light",
            children: Object(t.jsxs)("div", {
              className: "container-fluid",
              children: [
                Object(t.jsx)(o.b, {
                  className: "navbar-brand",
                  to: "/",
                  children: "NarutoApp",
                }),
                Object(t.jsx)("div", {
                  className: "collapse navbar-collapse",
                  id: "navbarNavAltMarkup",
                  children: Object(t.jsxs)("div", {
                    className: "navbar-nav",
                    children: [
                      Object(t.jsx)(o.c, {
                        activeClassName: "active",
                        className: "nav-item nav-link",
                        exact: !0,
                        to: "./Protagonista",
                        children: "Protagonistas",
                      }),
                      Object(t.jsx)(o.c, {
                        activeClassName: "active",
                        className: "nav-item nav-link",
                        exact: !0,
                        to: "./Secundario",
                        children: "Secundarios",
                      }),
                      Object(t.jsx)(o.c, {
                        activeClassName: "active",
                        className: "nav-item nav-link",
                        exact: !0,
                        to: "./Antagonista",
                        children: "Antagonistas",
                      }),
                      Object(t.jsx)(o.c, {
                        activeClassName: "active",
                        className: "nav-item nav-link",
                        exact: !0,
                        to: "./search",
                        children: "Search",
                      }),
                      Object(t.jsx)(o.c, {
                        activeClassName: "active",
                        className: "nav-item nav-link",
                        exact: !0,
                        to: "./login",
                        children: "Login",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        d = n(12),
        h = n(4),
        m = [
          {
            id: "antagonista_deidara",
            name: "Deidara",
            type: "Antagonista",
            village: "Iwagakure: Aldea Oculta entre las Rocas",
            techniques: "Katsu",
            phrase: "\xa1El arte es una explosi\xf3n!",
          },
          {
            id: "antagonista_hidan",
            name: "Hidan",
            type: "Antagonista",
            village: "Yugakure: Aldea de las Aguas Termales",
            techniques: "Jujutsu: Kuji S\u014dketsu",
            phrase:
              "La matanza es el precepto m\xe1s importante de la fe de Jashin.",
          },
          {
            id: "antagonista_itachi",
            name: "Itachi Uchiha",
            type: "Antagonista",
            village: "Konohagakure: Aldea Oculta entre las Hojas",
            techniques: "Tsukuyomi",
            phrase:
              "La gente vive apoy\xe1ndose en el conocimiento y la conciencia. A eso lo llaman realidad. Pero el conocimiento y la conciencia son conceptos abstractos. Por tanto, puede que esa realidad sea una ilusi\xf3n. La gente vive dentro de su propia convicci\xf3n.",
          },
          {
            id: "antagonista_kabuto",
            name: "Kabuto Yakushi",
            type: "Antagonista",
            village: "Iwagakure: Aldea Oculta entre las Rocas",
            techniques: "Chakura no Mesu",
            phrase: "Mil cambios, diez mil transformaciones.",
          },
          {
            id: "antagonista_kakuzu",
            name: "Kakuzu",
            type: "Antagonista",
            village: "Takigakure: Aldea Oculta de la Cascada",
            techniques: "Jiongu",
            phrase: "El dinero es lo primero.",
          },
          {
            id: "antagonista_kimimaro",
            name: "Kimimaro",
            type: "Antagonista",
            village: "Kirigakure: Aldea Oculta de la Niebla",
            techniques: "Hessendan",
            phrase:
              "A\xfan sigo con vida y si es as\xed, debe de ser por alguna raz\xf3n.",
          },
          {
            id: "antagonista_kisame",
            name: "Kisame",
            type: "Antagonista",
            village: "Kirigakure: Aldea Oculta de la Niebla",
            techniques: "Suiton: Dai Bukusui Sh\u014dha",
            phrase:
              "Mi nombre es Hoshigaki Kisame, un nombre que no olvidar\xe1s.",
          },
          {
            id: "antagonista_konan",
            name: "Konan",
            type: "Antagonista",
            village: "Amegakure: Aldea Oculta entre la Lluvia",
            techniques: "Kami Bunshin",
            phrase:
              "Siempre fui prisionera de mis recuerdos... Ahora que mi viaje ha llegado a su fin, me pregunto si mis amigos estar\xe1n ah\xed, esperando por m\xed.",
          },
          {
            id: "antagonista_madara",
            name: "Madara Uchiha",
            type: "Antagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Susanoo",
            phrase:
              "S\xe9 realista, este mundo est\xe1 lleno de cosas que no funcionan como deseas, cuanto m\xe1s vives... m\xe1s te das cuenta de que esta realidad, est\xe1 hecha de dolor, sufrimiento y vac\xedo...",
          },
          {
            id: "antagonista_orochimaru",
            name: "Orochimaru",
            type: "Antagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Fushi Tensei",
            phrase:
              "Tal vez no tenga sentido vivir... pero si sigues viviendo, podr\xe1s encontrar cosas muy interesantes. As\xed como t\xfa has encontrado a esa flor... As\xed como yo te encontr\xe9 a ti.",
          },
          {
            id: "antagonista_pain",
            name: "Pain",
            type: "Antagonista",
            village: "Amegakure: Aldea Oculta entre la Lluvia",
            techniques: "Shinra Tensei",
            phrase:
              "Somos de la misma raza, despu\xe9s de todo, las razones para ir a la guerra no importan. Religi\xf3n, ideolog\xedas, recursos, tierras, rencor, amor. No importa si las razones son pat\xe9ticas, son suficientes para comenzar una guerra. La guerra nunca acabar\xe1, razones sobran para sostener este hecho. La naturaleza humana busca el conflicto.",
          },
          {
            id: "Antagonista_sasori",
            name: "Sasori",
            type: "Antagonista",
            village: "Sunagakure: Aldea Oculta de la Arena",
            techniques: "Aka Higi: Hyakki no S\u014den",
            phrase:
              "El alma del creador siempre se mantiene dentro de sus creaciones.",
          },
          {
            id: "Antagonista_tobi",
            name: "Tobi",
            type: "Antagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Kamui",
            phrase:
              "En un mundo ninja, aquellos que rompen las reglas son escoria. Pero aquellos que abandonan a sus amigos, son peor que escoria.",
          },
          {
            id: "protagonista_gaara",
            name: "Gaara",
            type: "Protagonista",
            village: "Sunagakure: Aldea Oculta de la Arena",
            techniques: "Sabaku S\u014ds\u014d",
            phrase:
              "Hemos caminado a trav\xe9s de la oscuridad de este mundo, es por eso que somos capaces de ver incluso una part\xedcula de luz.",
          },
          {
            id: "protagonista_gai",
            name: "Maito Gai",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Asa Kujaku",
            phrase: "\xa1He aqu\xed el poder de la juventud!",
          },
          {
            id: "protagonista_jiraiya",
            name: "Jiraiya",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Nimpou Regeken",
            phrase:
              "Cuando eres herido aprendes a odiar, por otro lado cuando hieres, te resientes, pero tambi\xe9n empiezas a sentirte culpable.",
          },
          {
            id: "protagonista_kakashi",
            name: "Kakashi Hatake",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Chidori",
            phrase:
              "Saber que es lo correcto e ignorarlo es actuar como un cobarde.",
          },
          {
            id: "protagonista_naruto",
            name: "Naruto Uzumaki",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "F\u016bton: Rasen Shuriken",
            phrase:
              "Yo jam\xe1s me rindo, y jam\xe1s retroceder\xe9 a mi palabra. Ese es mi camino ninja.",
          },
          {
            id: "protagonista_sakura",
            name: "Sakura Haruno",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Isshi Resshin",
            phrase:
              "\xbfNo lo sab\xedas? \xa1Las mujeres tienen que ser fuertes para sobrevivir!",
          },
          {
            id: "protagonista_sasuke",
            name: "Sasuke Uchiha",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Enton: Kagutsuchi",
            phrase:
              "Cerr\xe9 los ojos hace mucho tiempo. Mis metas s\xf3lo existen en la oscuridad.",
          },
          {
            id: "protagonista_tsunade",
            name: "Tsunade Senju",
            type: "Protagonista",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Byakug\u014d no Jutsu",
            phrase:
              "Todas las cosas que tienen forma eventualmente decaen... S\xf3lo los sentimientos permanecen para siempre.",
          },
          {
            id: "secundario_ino",
            name: "Ino Yamanaka",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Shintenshin no Jutsu",
            phrase:
              "No es cuesti\xf3n de si puedo o no puedo. \xa1Lo estoy haciendo!",
          },
          {
            id: "secundario_kiba",
            name: "Kiba Inuzuka",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Juujin Bunshin",
            phrase:
              "Eh, no s\xe9 lo que est\xe1 pasando, pero yo voy siempre para adelante.",
          },
          {
            id: "secundario_kushina",
            name: "Kushina Uzumaki",
            type: "Secundario",
            village: "Uzushiogakure: Aldea Oculta del Remolino",
            techniques: "F\u016binjutsu",
            phrase: "\xa1Yo voy a ser la primera mujer Hokage!",
          },
          {
            id: "secundario_minato",
            name: "Minato Namikaze",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Rasengan",
            phrase:
              "\xa1Quiero que todos en el pueblo me reconozcan y convertirme en un gran Hokage!",
          },
          {
            id: "secundario_neji",
            name: "Neji Hy\u016bga",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "J\u016bken",
            phrase:
              "Todas las personas nacemos destinadas a algo, pero todos compartimos un mismo destino: la muerte...",
          },
          {
            id: "secundario_rocklee",
            name: "Rock Lee",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Omote Renge",
            phrase:
              "Si crees en tus sue\xf1os, te demostrar\xe9 que los puedes lograr trabajando duro.",
          },
          {
            id: "secundario_shikamaru",
            name: "Shikamaru Nara",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Ninpo: Kage Mane no Jutsu",
            phrase:
              "Quisiera ser libre, como las nubes que vagan por el cielo sin ninguna preocupaci\xf3n.",
          },
          {
            id: "secundario_shisui",
            name: "Shisui Uchiha",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Kotoamatsukami",
            phrase:
              "Est\xe1 bien tener objetivos pero aferrarse a ellos con demasiada fuerza puede desviarnos del camino.",
          },
          {
            id: "secundario_tobirama",
            name: "Tobirama Senju",
            type: "Secundario",
            village: "Konohagakure: Aldea Oculta Entre las Hojas",
            techniques: "Hiraishin no Jutsu",
            phrase:
              "Saru... Protege a aquellos que aman a la aldea y a aquellos que creen en ti... Y cuida de aquellos a quienes les puedes confiar la pr\xf3xima generaci\xf3n. \xa1A partir de ma\xf1ana, t\xfa ser\xe1s el Hokage!",
          },
        ],
        j = n(5);
      function g() {
        var e = Object(h.a)(["\n    font-weight: bold;\n"]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = Object(h.a)([
          "\n    font-size: .8rem;\n    margin: .4rem;\n\n    @media screen and (max-width: 768px){\n        font-size: .6rem;\n        margin: .1rem;\n        margin-right: .4rem;\n    }\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = Object(h.a)([
          "\n    font-size: 1.4rem;\n\n    @media screen and (max-width: 768px){\n        font-size: .8rem;\n    }\n",
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = Object(h.a)(["\n    width: 100%;\n"]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = Object(h.a)([
          "\n    flex: 0 0 50%;\n    margin-left: .3rem;\n    margin-right: .2rem;\n    margin-top: .2rem;\n",
        ]);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(h.a)(["\n    flex: 0 0 50%;\n"]);
        return (
          (x = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = Object(h.a)([
          "\n    background-color: rgba(255, 255, 255, 0.904);\n    border: 1px solid lightgray;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    display: flex;\n    flex-direction: row;\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var k = j.a.div(f()),
        A = j.a.div(x()),
        y = j.a.div(v()),
        q = j.a.img(O()),
        S = j.a.h5(b()),
        N = j.a.p(p()),
        K = j.a.small(g()),
        _ = function (e) {
          var a = e.id,
            n = e.name,
            r = e.village,
            i = e.techniques;
          return Object(t.jsxs)(k, {
            className: "animate__animated animate__fadeIn",
            children: [
              Object(t.jsx)(A, {
                children: Object(t.jsx)(q, {
                  src: "../../assets/Naruto/".concat(a, ".jpg"),
                  alt: n,
                }),
              }),
              Object(t.jsxs)(y, {
                children: [
                  Object(t.jsx)(S, { children: n }),
                  Object(t.jsx)(N, { children: r }),
                  Object(t.jsxs)(N, {
                    children: [
                      "T\xe9cnica: ",
                      Object(t.jsx)(K, { children: i }),
                    ],
                  }),
                  Object(t.jsx)(N, {
                    children: Object(t.jsx)(o.b, {
                      to: "./Ninja/".concat(a),
                      children: "M\xe1s...",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function H() {
        var e = Object(h.a)([
          "\n    display: grid;\n    grid-gap: 1.5rem;\n    grid-template-columns: repeat(3, 32%);\n\n    @media screen and (max-width: 1080px){\n        grid-template-columns: repeat(2, 47%);\n        grid-gap: 1.2rem;\n    }\n",
        ]);
        return (
          (H = function () {
            return e;
          }),
          e
        );
      }
      var E = n(26).a.div(H()),
        z = function (e) {
          var a = e.Class,
            n = Object(r.useMemo)(
              function () {
                return (function (e) {
                  if (
                    !["Protagonista", "Secundario", "Antagonista"].includes(e)
                  )
                    throw Error('class "'.concat(e, '" no es correcto'));
                  return m.filter(function (a) {
                    return a.type === e;
                  });
                })(a);
              },
              [a]
            );
          return Object(t.jsx)(E, {
            children: n.map(function (e) {
              return Object(t.jsx)(_, Object(d.a)({}, e), e.id);
            }),
          });
        },
        P = function () {
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)("h1", { children: "Protagonistas" }),
              Object(t.jsx)("hr", {}),
              Object(t.jsx)(z, { Class: "Protagonista" }),
            ],
          });
        },
        w = function () {
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)("h1", { children: "Personajes secundarios" }),
              Object(t.jsx)("hr", {}),
              Object(t.jsx)(z, { Class: "Secundario" }),
            ],
          });
        },
        C = function () {
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)("h1", { children: "Antagonistas" }),
              Object(t.jsx)("hr", {}),
              Object(t.jsx)(z, { Class: "Antagonista" }),
            ],
          });
        };
      function L() {
        var e = Object(h.a)([
          "\n    background-color: rgba(255, 255, 255, 0.904);\n    border: 3px solid lightgray;\n    border-radius: 5px;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin-left: 2rem;\n    margin-bottom: 1rem;\n\n    &:hover{\n        background-color: lightgray;\n        color: white;\n    }\n\n    @media screen and (max-width:768px){\n        margin-left: 1.5rem;\n    }\n",
        ]);
        return (
          (L = function () {
            return e;
          }),
          e
        );
      }
      function T() {
        var e = Object(h.a)([
          "\n    margin-left: 2rem;\n    margin-right: 1rem;\n\n    @media screen and (max-width: 768px){\n        font-size: .8rem;\n        margin-left: 1.5rem;\n    }\n",
        ]);
        return (
          (T = function () {
            return e;
          }),
          e
        );
      }
      function I() {
        var e = Object(h.a)(["\n    padding-left: 1rem;\n"]);
        return (
          (I = function () {
            return e;
          }),
          e
        );
      }
      function M() {
        var e = Object(h.a)(["\n    width: 100%;\n"]);
        return (
          (M = function () {
            return e;
          }),
          e
        );
      }
      function R() {
        var e = Object(h.a)([
          "\n    background-color: rgba(255, 255, 255, 0.904);\n    border: 1px solid lightgray;\n    border-radius: 10px;\n    flex: 0 0 50%;\n    padding-top: .7rem;\n",
        ]);
        return (
          (R = function () {
            return e;
          }),
          e
        );
      }
      function J() {
        var e = Object(h.a)([
          "\n    flex: 0 0 40%;\n    padding-right: 2rem;\n\n    @media screen and (max-width: 768px){\n        flex: 0 0 50%;\n        padding-right: 1rem;\n    }\n",
        ]);
        return (
          (J = function () {
            return e;
          }),
          e
        );
      }
      function F() {
        var e = Object(h.a)([
          "\n    display: flex;\n    flex-direction: row;\n",
        ]);
        return (
          (F = function () {
            return e;
          }),
          e
        );
      }
      var U = j.a.div(F()),
        B = j.a.div(J()),
        Y = j.a.div(R()),
        D = j.a.img(M()),
        G = j.a.h3(I()),
        Q = j.a.p(T()),
        V = j.a.button(L()),
        W = function (e) {
          var a = e.history,
            n = Object(c.h)().ninjaId,
            i = Object(r.useMemo)(
              function () {
                return (function (e) {
                  return m.find(function (a) {
                    return a.id === e;
                  });
                })(n);
              },
              [n]
            );
          if (!i) return Object(t.jsx)(c.a, { to: "/" });
          var s = i.id,
            o = i.name,
            u = i.village,
            l = i.techniques,
            d = i.phrase;
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)("h1", { children: "Personajes de Naruto" }),
              Object(t.jsx)("hr", {}),
              Object(t.jsxs)(U, {
                children: [
                  Object(t.jsx)(B, {
                    children: Object(t.jsx)(D, {
                      src: "../assets/Naruto/".concat(s, ".jpg"),
                      className: "animate__animated animate__fadeInLeft",
                      alt: o,
                    }),
                  }),
                  Object(t.jsxs)(Y, {
                    children: [
                      Object(t.jsx)(G, { children: o }),
                      Object(t.jsx)("hr", {}),
                      Object(t.jsxs)("div", {
                        children: [
                          Object(t.jsxs)(Q, {
                            children: [
                              Object(t.jsx)("b", { children: "Aldea:" }),
                              " ",
                              u,
                            ],
                          }),
                          Object(t.jsxs)(Q, {
                            children: [
                              Object(t.jsx)("b", { children: "T\xe9cnica:" }),
                              " ",
                              l,
                            ],
                          }),
                          Object(t.jsxs)(Q, {
                            children: [
                              Object(t.jsx)("b", { children: "Frase:" }),
                              " ",
                              d,
                            ],
                          }),
                          Object(t.jsx)(V, {
                            onClick: function () {
                              a.length <= 2 ? a.push("/") : a.goBack();
                            },
                            children: "Return",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        X = n(15),
        Z = n(30),
        $ = n(29),
        ee = n.n($),
        ae = function (e) {
          var a = e.history,
            n = Object(c.g)(),
            i = ee.a.parse(n.search).q,
            s = void 0 === i ? "" : i,
            o = Object(r.useState)({ searchText: s }),
            u = Object(Z.a)(o, 2),
            l = u[0],
            h = u[1],
            j = l.searchText,
            g = Object(r.useMemo)(
              function () {
                return (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  return "" === e
                    ? []
                    : ((e = e.toLocaleLowerCase()),
                      m.filter(function (a) {
                        return a.name.toLocaleLowerCase().includes(e);
                      }));
                })(s);
              },
              [s]
            );
          return Object(t.jsxs)("div", {
            children: [
              Object(t.jsx)("h1", { children: "Search" }),
              Object(t.jsx)("hr", {}),
              Object(t.jsxs)("div", {
                className: "row",
                children: [
                  Object(t.jsxs)("div", {
                    className: "col-5",
                    children: [
                      Object(t.jsx)("h4", { children: "Busca tu ninja" }),
                      Object(t.jsx)("hr", {}),
                      Object(t.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), a.push("?q=".concat(j));
                        },
                        children: [
                          Object(t.jsx)("input", {
                            type: "text",
                            placeholder: "Ingrese un nombre...",
                            className: "form-control",
                            name: "searchText",
                            autoComplete: "off",
                            value: j,
                            onChange: function (e) {
                              h(
                                Object(d.a)(
                                  Object(d.a)({}, l),
                                  {},
                                  Object(X.a)({}, e.target.name, e.target.value)
                                )
                              );
                            },
                          }),
                          Object(t.jsx)("button", {
                            type: "submit",
                            className: "btn m-1 btn-block btn-outline-dark",
                            children: "Search",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(t.jsxs)("div", {
                    className: "col-7",
                    children: [
                      Object(t.jsx)("h4", { children: "Resultados" }),
                      Object(t.jsx)("hr", {}),
                      "" === s &&
                        Object(t.jsx)("div", {
                          className: "alert alert-info",
                          children: "A\xfan no se ha buscado ning\xfan ninja.",
                        }),
                      "" !== s &&
                        0 === g.length &&
                        Object(t.jsxs)("div", {
                          className: "alert alert-danger",
                          children: [
                            "No hay resultados de ninjas con la palabra ",
                            s,
                            ".",
                          ],
                        }),
                      g.map(function (e) {
                        return Object(t.jsx)(_, Object(d.a)({}, e), e.id);
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ne = function () {
          return Object(t.jsxs)(t.Fragment, {
            children: [
              Object(t.jsx)(l, {}),
              Object(t.jsx)("div", {
                className: "container mt-3",
                children: Object(t.jsxs)(c.d, {
                  children: [
                    Object(t.jsx)(c.b, {
                      exact: !0,
                      path: "./Protagonista",
                      component: P,
                    }),
                    Object(t.jsx)(c.b, {
                      exact: !0,
                      path: "./Ninja/:ninjaId",
                      component: W,
                    }),
                    Object(t.jsx)(c.b, {
                      exact: !0,
                      path: "./Secundario",
                      component: w,
                    }),
                    Object(t.jsx)(c.b, {
                      exact: !0,
                      path: "./Antagonista",
                      component: C,
                    }),
                    Object(t.jsx)(c.b, {
                      exact: !0,
                      path: "./Search",
                      component: ae,
                    }),
                    Object(t.jsx)(c.a, { to: "./Protagonista", component: P }),
                  ],
                }),
              }),
            ],
          });
        },
        te = function () {
          return Object(t.jsx)(o.a, {
            children: Object(t.jsx)("div", {
              children: Object(t.jsxs)(c.d, {
                children: [
                  Object(t.jsx)(c.b, {
                    exact: !0,
                    path: "./Login",
                    component: u,
                  }),
                  Object(t.jsx)(c.b, { path: "/", component: ne }),
                ],
              }),
            }),
          });
        },
        re = function () {
          return Object(t.jsx)(te, {});
        },
        ie = document.getElementById("root");
      s.a.render(Object(t.jsx)(re, {}), ie);
    },
  },
  [[57, 1, 2]],
]);
//# sourceMappingURL=main.2c22764e.chunk.js.map
