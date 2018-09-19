(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{174:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"function-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#function-modules","aria-hidden":"true"}},[t._v("#")]),t._v(" Function Modules")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#general"}},[t._v("General")]),s("ul",[s("li",[s("a",{attrs:{href:"#move-negative-sign-to-the-front"}},[t._v("Move negative sign to the front")])])])]),s("li",[s("a",{attrs:{href:"#data-dictionary"}},[t._v("Data Dictionary")]),s("ul",[s("li",[s("a",{attrs:{href:"#fetching-fixed-values-from-domain"}},[t._v("Fetching Fixed Values from Domain")])])])]),s("li",[s("a",{attrs:{href:"#module-pool"}},[t._v("Module Pool")]),s("ul",[s("li",[s("a",{attrs:{href:"#set-values-to-a-dropdown-listbox"}},[t._v("Set values to a Dropdown/Listbox")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"general"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general","aria-hidden":"true"}},[t._v("#")]),t._v(" General")]),t._v(" "),s("h3",{attrs:{id:"move-negative-sign-to-the-front"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#move-negative-sign-to-the-front","aria-hidden":"true"}},[t._v("#")]),t._v(" Move negative sign to the front")]),t._v(" "),s("p",[t._v("SAP by default shows negative number with minus at the end like "),s("code",[t._v("30-")]),t._v(". To change\nit to "),s("code",[t._v("-30")]),t._v(" we need to use "),s("code",[t._v("CLOI_PUT_SIGN_IN_FRONT")]),t._v(". "),s("code",[t._v("VALUE")]),t._v(" should be of\ncharacter type")]),t._v(" "),s("div",{staticClass:"language-abap extra-class"},[s("pre",{pre:!0,attrs:{class:"language-abap"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("CALL")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'CLOI_PUT_SIGN_IN_FRONT'")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("CHANGING")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("VALUE")]),t._v("         "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lv_number"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"data-dictionary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-dictionary","aria-hidden":"true"}},[t._v("#")]),t._v(" Data Dictionary")]),t._v(" "),s("h3",{attrs:{id:"fetching-fixed-values-from-domain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fetching-fixed-values-from-domain","aria-hidden":"true"}},[t._v("#")]),t._v(" Fetching Fixed Values from Domain")]),t._v(" "),s("p",[t._v("Fetch the Fixed Values or Ranges maintained in a domain with "),s("code",[t._v("DD_DOMA_GET")]),t._v("\ninto tables of type "),s("code",[t._v("DD07V")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-abap extra-class"},[s("pre",{pre:!0,attrs:{class:"language-abap"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token keyword"}},[t._v("DATA")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        lt_dd01v_tab_a "),s("span",{attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("STANDARD")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" dd07v"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        lt_dd01v_tab_n "),s("span",{attrs:{class:"token keyword"}},[t._v("TYPE")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("STANDARD")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("OF")]),t._v(" dd07v"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("CALL")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'DD_DOMA_GET'")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v("\n            domain_name         "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'GESCH'")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("*           GET_STATE           = 'M  '")]),t._v("\n            langu               "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" sy"),s("span",{attrs:{class:"token token-operator punctuation"}},[t._v("-")]),t._v("langu\n"),s("span",{attrs:{class:"token comment"}},[t._v("*           PRID                = 0")]),t._v("\n            withtext            "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'X'")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("*       IMPORTING")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("*           DD01V_WA_A          =")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("*           DD01V_WA_N          =")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("*           GOT_STATE           =")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("TABLES")]),t._v("\n            dd07v_tab_a         "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lt_dd01v_tab_a\n            dd07v_tab_n         "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lt_dd01v_tab_n\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("EXCEPTIONS")]),t._v("\n            illegal_value       "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n            op_failure          "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("OTHERS")]),t._v("              "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("h2",{attrs:{id:"module-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module-pool","aria-hidden":"true"}},[t._v("#")]),t._v(" Module Pool")]),t._v(" "),s("h3",{attrs:{id:"set-values-to-a-dropdown-listbox"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-values-to-a-dropdown-listbox","aria-hidden":"true"}},[t._v("#")]),t._v(" Set values to a Dropdown/Listbox")]),t._v(" "),s("p",[t._v("To set values to a Dropdown/Listbox for a Module Pool field or Selection\nScreen field use "),s("code",[t._v("VRM_SET_VALUES")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-abap extra-class"},[s("pre",{pre:!0,attrs:{class:"language-abap"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("DATA")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lt_type"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("VALUE")]),t._v(" vrm_values"),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'TYPE1'")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("text")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Type 1'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'TYPE2'")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("text")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'Type 2'")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("CALL")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("FUNCTION")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'VRM_SET_VALUES'")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("EXPORTING")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("id")]),t._v("     "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'S_ACT-TYPE'")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" lt_type\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("EXCEPTIONS")]),t._v("\n      ID_ILLEGAL_NAME       "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("OTHERS")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="function-modules.md";a.default=e.exports}}]);