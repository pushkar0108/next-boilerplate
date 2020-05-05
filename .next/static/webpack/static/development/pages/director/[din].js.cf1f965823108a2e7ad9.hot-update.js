webpackHotUpdate("static/development/pages/director/[din].js",{

/***/ "./pages/director/[din].tsx":
/*!**********************************!*\
  !*** ./pages/director/[din].tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_Services_API_Http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/Services/API/Http */ "./src/Services/API/Http/index.ts");
/* harmony import */ var _server_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../server/i18n */ "./server/i18n.ts");
/* harmony import */ var _src_Actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/Actions */ "./src/Actions/index.ts");
/* harmony import */ var _src_Components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/Components */ "./src/Components/index.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];
// #region Global Imports



 // #endregion Global Imports
// #region Local Imports



 // #endregion Local Imports
// #region Interface Imports

// #endregion Interface Imports
var Home = function Home(_ref) {
  var t = _ref.t,
      i18n = _ref.i18n,
      dinData = _ref.dinData;
  var home = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.home;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])(); // remove later

  var details = JSON.parse(dinData.data);
  var refData = [{
    title: "DIN",
    value: details["DIN"]
  }, {
    title: "Name",
    value: details["nameOfApplicant"]
  }, {
    title: "Date of birth",
    value: details["dateOfBirth"]
  }, {
    title: "Father Name",
    value: details["fatherName"]
  }, {
    title: "Mobile",
    value: details["addMobile"]
  }, {
    title: "Phone",
    value: details["addPhone"]
  }, {
    title: "Email",
    value: details["addEmail"]
  }, {
    title: "Address",
    value: details["permenantAddress"]
  }, {
    title: "City",
    value: details["addCity"]
  }, {
    title: "Gender",
    value: details["flag5"]
  }]; // remove later

  details.companies = [["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"], ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"], ["U74140DL2005PLC134597", "ACCORD FINANCIAL CONSULTANCY LIMITED", "29/11/2007", "-", "ACTIVE compliant"]];
  details.llps = [["AAG-4536", "ACCORD FINANCIAL SERVICES LLP", "25/05/2016", "-"]];

  var renderLocaleButtons = function renderLocaleButtons(activeLanguage) {
    return ["en", "es", "tr"].map(function (lang) {
      return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_7__["LocaleButton"], {
        key: lang,
        lang: lang,
        isActive: activeLanguage === lang,
        onClick: function onClick() {
          return i18n.changeLanguage(lang);
        }
      });
    });
  };

  return __jsx(_src_Components__WEBPACK_IMPORTED_MODULE_7__["Layout"], null, __jsx("h1", {
    className: "my-4"
  }, __jsx("small", null, details["DIN"]), __jsx("div", null, details["nameOfApplicant"])), __jsx("div", {
    className: "card mb-4"
  }, __jsx("div", {
    className: "card-body"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("tbody", null, refData.map(function (data) {
    return __jsx("tr", {
      key: data.title
    }, __jsx("th", {
      scope: "row"
    }, data.title), __jsx("td", null, data.value));
  }))))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("h2", {
    className: "card-header"
  }, "List Of Companies"), __jsx("div", {
    className: "card-body"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("thead", null, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col"
  }, "#"), __jsx("th", {
    scope: "col"
  }, "CIN/FCRN"), __jsx("th", {
    scope: "col"
  }, "Company Name"), __jsx("th", {
    scope: "col"
  }, "Begin date"), __jsx("th", {
    scope: "col"
  }, "End date"), __jsx("th", {
    scope: "col"
  }, "Active compliance"))), __jsx("tbody", null, details.companies.map(function (company, index) {
    return __jsx("tr", {
      key: "director_".concat(company[0]),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/company/[cin]",
      as: "/company/".concat(company[0])
    }, __jsx("a", null, company[0]))), __jsx("td", null, company[1]), __jsx("td", null, company[2]), __jsx("td", null, company[3]), __jsx("td", null, company[4]));
  }))))), __jsx("div", {
    className: "card mb-4"
  }, __jsx("h2", {
    className: "card-header"
  }, "List Of LLP"), __jsx("div", {
    className: "card-body"
  }, __jsx("table", {
    className: "table table-hover"
  }, __jsx("thead", {
    className: "bg-light"
  }, __jsx("tr", {
    className: "text-semibold text-fiord-blue"
  }, __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "#"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "LLPIN/FLLPIN"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "LLP Name"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "Begin date"), __jsx("th", {
    scope: "col",
    className: "border-0"
  }, "End date"))), __jsx("tbody", null, details.llps.map(function (llp, index) {
    return __jsx("tr", {
      key: "charge_".concat(llp[1]),
      className: "text-semibold text-reagent-gray"
    }, __jsx("td", null, index + 1), __jsx("td", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/company/[cin]",
      as: "/company/".concat(llp[0])
    }, __jsx("a", null, llp[0]))), __jsx("td", null, llp[1]), __jsx("td", null, llp[2]), __jsx("td", null, llp[3]), __jsx("td", null, llp[4]));
  }))))));
};

Home.getInitialProps = function _callee(ctx) {
  var din, dinData;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          din = ctx.query.din;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_src_Services_API_Http__WEBPACK_IMPORTED_MODULE_4__["Http"].Request('GET', "http://3.7.5.125:4000/v1/director/".concat(din)));

        case 3:
          dinData = _context.sent;
          _context.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(ctx.store.dispatch(_src_Actions__WEBPACK_IMPORTED_MODULE_6__["HomeActions"].GetApod({
            params: {
              hd: true
            }
          })));

        case 6:
          return _context.abrupt("return", {
            namespacesRequired: ["common"],
            dinData: dinData
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var Extended = Object(_server_i18n__WEBPACK_IMPORTED_MODULE_5__["withTranslation"])("common")(Home);
/* harmony default export */ __webpack_exports__["default"] = (Extended);

/***/ })

})
//# sourceMappingURL=[din].js.cf1f965823108a2e7ad9.hot-update.js.map