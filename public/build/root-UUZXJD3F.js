import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useNavigation,
  useSubmit
} from "/build/_shared/chunk-O7QVTFAN.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-XLV4WZBE.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/root.tsx
var import_node = __toESM(require_node());
var import_react2 = __toESM(require_react());

// app/app.css
var app_default = "/build/_assets/app-JWU3GP36.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: app_default
}];
function App() {
  _s();
  const {
    contacts,
    q
  } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");
  (0, import_react2.useEffect)(() => {
    const searchField = document.getElementById("q");
    if (searchField instanceof HTMLInputElement) {
      searchField.value = q || "";
    }
  }, [q]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "sidebar", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Remix Contacts" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { id: "search-form", role: "search", onChange: (event) => {
            const isFirstSearch = q === null;
            submit(event.currentTarget, {
              replace: !isFirstSearch
            });
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "q", defaultValue: q || "", "aria-label": "Search contacts", placeholder: "Search", className: searching ? "loading" : "", type: "search", name: "q" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-hidden": true, hidden: !searching, id: "search-spinner" }, void 0, false, {
              fileName: "app/root.tsx",
              lineNumber: 80,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", children: "New" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 82,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { children: contacts.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: contacts.map((contact) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { className: ({
          isActive,
          isPending
        }) => isActive ? "active" : isPending ? "pending" : "", to: `contacts/${contact.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `contacts/${contact.id}`, children: [
          contact.first || contact.last ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            contact.first,
            " ",
            contact.last
          ] }, void 0, true, {
            fileName: "app/root.tsx",
            lineNumber: 95,
            columnNumber: 58
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No Name" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 97,
            columnNumber: 33
          }, this),
          " ",
          contact.favorite ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "\u2605" }, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 99,
            columnNumber: 45
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/root.tsx",
          lineNumber: 94,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 89,
          columnNumber: 21
        }, this) }, contact.id, false, {
          fileName: "app/root.tsx",
          lineNumber: 88,
          columnNumber: 42
        }, this)) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 87,
          columnNumber: 32
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", { children: "No contacts" }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 104,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 103,
          columnNumber: 23
        }, this) }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "detail", className: navigation.state === "loading" && !searching ? "loading" : "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 113,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 60,
    columnNumber: 10
  }, this);
}
_s(App, "bsYwNJAcI2cV6W75urp8P8f5nbA=", false, function() {
  return [useLoaderData, useNavigation, useSubmit];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-UUZXJD3F.js.map
