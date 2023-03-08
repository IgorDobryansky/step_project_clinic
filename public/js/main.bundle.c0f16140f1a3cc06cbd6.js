/*! For license information please see main.bundle.c0f16140f1a3cc06cbd6.js.LICENSE.txt */
!(function () {
  "use strict";
  var t = {
      91: function (t) {
        t.exports = function (t, e) {
          return (
            e || (e = {}),
            t
              ? ((t = String(t.__esModule ? t.default : t)),
                e.hash && (t += e.hash),
                e.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(t)
                  ? '"'.concat(t, '"')
                  : t)
              : t
          );
        };
      },
      941: function (t, e, i) {
        t.exports = i.p + "img/clinic_logod246adac946c88922100.png";
      },
      560: function (t, e, i) {
        t.exports = i.p + "img/daily-health-app (1)1ae85221a6de4854d20e.png";
      },
    },
    e = {};
  function i(s) {
    var n = e[s];
    if (void 0 !== n) return n.exports;
    var r = (e[s] = { exports: {} });
    return t[s](r, r.exports, i), r.exports;
  }
  (i.m = t),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return i.d(e, { a: e }), e;
    }),
    (i.d = function (t, e) {
      for (var s in e)
        i.o(e, s) &&
          !i.o(t, s) &&
          Object.defineProperty(t, s, { enumerable: !0, get: e[s] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (function () {
      var t;
      i.g.importScripts && (t = i.g.location + "");
      var e = i.g.document;
      if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
        var s = e.getElementsByTagName("script");
        s.length && (t = s[s.length - 1].src);
      }
      if (!t)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (t = t
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = t + "../");
    })(),
    (i.b = document.baseURI || self.location.href),
    (function () {
      var t,
        e,
        s,
        n = i(91),
        r = i.n(n),
        o = new URL(i(941), i.b),
        a = new URL(i(560), i.b);
      r()(o), r()(a);
      class h {
        constructor(t) {
          this._visit = t;
        }
        static async postVisit(t) {
          let e = await fetch("https://ajax.test-danit.com/api/v2/cards", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
              body: JSON.stringify({ ...t, status: "open" }),
            }),
            i = await e.json();
          return this.visits.push(i), console.log(h.visits), i;
        }
        static async putVisit(t) {
          let e = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${t.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
              body: JSON.stringify({ ...t }),
            }
          );
          return await e.json();
        }
        static async deleteVisit(t) {
          let e = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${t.id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
            }
          );
          return await e.json();
        }
        static async getVisit(t) {
          let e = await fetch(
            `https://ajax.test-danit.com/api/v2/cards/${t.id}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
            }
          );
          return await e.json();
        }
        static async deleteAllVisit() {
          let t = await fetch("https://ajax.test-danit.com/api/v2/cards", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
            },
          });
          (await t.json()).map((t) => {
            this.deleteVisit(t.id);
          });
        }
        static async getAllVisits() {
          let t = await fetch("https://ajax.test-danit.com/api/v2/cards", {
              method: "GET",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("clinic-token")}`,
              },
            }),
            e = await t.json();
          return (
            e.map((t) => {
              this.visits.push(t);
            }),
            console.log(h.visits),
            e
          );
        }
      }
      (t = h),
        (s = []),
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(t, "string");
              if ("object" != typeof s) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == typeof e ? e : String(e);
        })((e = "visits"))) in t
          ? Object.defineProperty(t, e, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = s);
      class l {
        constructor() {
          this._modalWrapper = document.createElement("div");
          let t = this;
          this._modalWrapper.addEventListener("click", (e) => {
            let i = e.target,
              s = i === this._modal || this._modal.contains(i),
              n = i === this._closeButton;
            (s && !n) || t.close();
          }),
            (this._modalWrapper.className = "modal-window-wrapper"),
            (this._modal = document.createElement("form")),
            (this._modal.className = "modal-window"),
            (this._closeButton = document.createElement("span")),
            (this._closeButton.className = "modal-close-button"),
            this._modal.append(this._closeButton),
            this._modalWrapper.append(this._modal);
        }
        render() {
          document.body.contains(
            document.querySelector(".modal-window-wrapper")
          ) || document.body.prepend(this._modalWrapper);
        }
        close() {
          this._modalWrapper.remove();
        }
      }
      class d extends l {
        constructor() {
          super(),
            (this._loginEmailFieldset = document.createElement("fieldset")),
            (this._loginEmailFieldset.className =
              "login-fieldset email-fieldset"),
            (this._loginEmailLabel = document.createElement("label")),
            (this._loginEmailLabel.className = "label email-label"),
            (this._loginEmailLabel.innerText = "Емейл"),
            (this._emailInput = document.createElement("input")),
            (this._emailInput.type = "email"),
            (this._emailInput.className = "input email-input"),
            (this._emailInput.id = "email"),
            (this._emailInput.name = "email"),
            (this._emailInput.placeholder = "example@email.ua"),
            this._emailInput.addEventListener("input", () => {
              this._errorMessage.innerHTML = "";
            }),
            this._loginEmailFieldset.append(
              this._emailInput,
              this._loginEmailLabel
            ),
            (this._loginPasswordFieldset = document.createElement("fieldset")),
            (this._loginPasswordFieldset.className =
              "login-fieldset password-fieldset"),
            (this._loginPasswordLabel = document.createElement("label")),
            (this._loginPasswordLabel.className = "label password-label"),
            (this._loginPasswordLabel.for = "password"),
            (this._loginPasswordLabel.innerText = "Пароль"),
            (this._passwordInput = document.createElement("input")),
            (this._passwordInput.type = "password"),
            (this._passwordInput.className = "input password-input"),
            (this._passwordInput.id = "password"),
            (this._passwordInput.name = "password"),
            (this._passwordInput.placeholder = "example password"),
            this._passwordInput.addEventListener("input", () => {
              this._errorMessage.innerHTML = "";
            }),
            this._loginPasswordFieldset.append(
              this._passwordInput,
              this._loginPasswordLabel
            ),
            (this._errorMessage = document.createElement("span")),
            (this._errorMessage.className = "modal-error"),
            (this._enterButton = document.createElement("button")),
            (this._enterButton.className = "button-check-data"),
            (this._enterButton.innerText = "Увійдіть"),
            (this._enterButton.tabIndex = "0"),
            this._enterButton.addEventListener("click", (t) => {
              this.loginRequest();
            }),
            (this._orText = document.createElement("span")),
            (this._orText.className = "or-text"),
            (this._orText.innerText = "або"),
            (this._registerLink = document.createElement("a")),
            (this._registerLink.className = "register-link"),
            (this._registerLink.target = "_blank"),
            (this._registerLink.tabIndex = "0"),
            (this._registerLink.href =
              "https://ajax.test-danit.com/front-pages/cards-register.html"),
            (this._registerLink.innerText = "Зареєструйтесь"),
            this._modal.append(
              this._loginEmailFieldset,
              this._loginPasswordFieldset,
              this._errorMessage,
              this._enterButton,
              this._orText,
              this._registerLink
            );
        }
        async loginRequest() {
          const t = this._emailInput.value,
            e = this._passwordInput.value;
          (this._enterButton.disabled = !0),
            this._errorMessage.classList.remove("show");
          try {
            let i = await fetch(
              "https://ajax.test-danit.com/api/v2/cards/login",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: t, password: e }),
              }
            );
            if (!(await i).ok)
              throw "Перевірте введені данні або зареєструйтесь.";
            {
              let t = await i.text();
              this._modalWrapper.remove(),
                localStorage.setItem("clinic-token", `${t}`),
                (rs.loginStatus = !0),
                new rs().render();
            }
          } catch (t) {
            (this._enterButton.disabled = !1),
              (this._errorMessage.innerHTML = t),
              this._errorMessage.classList.add("show");
          }
        }
      }
      class _ extends l {
        constructor(t, e) {
          super(),
            e
              ? ((this._title = "Редагувати візит"),
                (this._buttonText = "Зберегти"))
              : ((this._title = "Створити візит"),
                (this._buttonText = "Створити")),
            this.createVisitHtml(),
            (this.visit = t),
            (this.purpose = t.title),
            (this.description = t.description),
            (this.urgency = t.urgency),
            (this.fullName = t.fullName);
        }
        createVisitHtml() {
          (this._createVisitHeader = document.createElement("h2")),
            (this._createVisitHeader.innerText = this._title),
            (this._visitFormFields = document.createElement("div")),
            (this._visitFormFields.className = "visit-form-fields"),
            (this._visitForm = document.createElement("form")),
            (this._visitForm.className = "form visit-form"),
            (this._visitForm.name = "visitFields"),
            (this._createVisitButton = document.createElement("button")),
            (this._createVisitButton.className = "button create-visit"),
            (this._createVisitButton.innerText = this._buttonText);
          let t = this;
          this._createVisitButton.addEventListener("click", (e) => {
            e.preventDefault(),
              (this._createVisitButton.disabled = !0),
              t.updateVisitFields(),
              t.updateAdditionalVisitFields(),
              t.visit.save().then((e) => {
                t._createVisitButton.disabled = !1;
              }),
              t.close();
          }),
            this._visitForm.append(
              this._visitFormFields,
              this._createVisitButton
            ),
            this._modal.append(this._createVisitHeader, this._visitForm);
        }
        get purpose() {
          return this._visitPurpose.value;
        }
        set purpose(t) {
          return (
            this._visitPurpose || this.createPurposeHtml(),
            (this._visitPurpose.value = t),
            t
          );
        }
        createPurposeHtml() {
          (this._visitPurposeFieldset = document.createElement("fieldset")),
            (this._visitPurposeFieldset.className =
              "fieldset purpose-fieldset"),
            (this._visitPurposeLegend = document.createElement("legend")),
            (this._visitPurposeLegend.innerText = "Мета візиту"),
            (this._visitPurpose = document.createElement("input")),
            (this._visitPurpose.name = "title"),
            (this._visitPurpose.required = !0),
            this._visitPurposeFieldset.append(
              this._visitPurposeLegend,
              this._visitPurpose
            ),
            this._visitFormFields.append(this._visitPurposeFieldset);
        }
        get description() {
          return this._description.value;
        }
        set description(t) {
          return (
            this._description || this.createDescriptionHtml(),
            (this._description.value = t),
            t
          );
        }
        createDescriptionHtml() {
          (this._visitDescriptionFieldset = document.createElement("fieldset")),
            (this._visitDescriptionFieldset.className =
              "fieldset description-fieldset"),
            (this._visitDescriptionLegend = document.createElement("legend")),
            (this._visitDescriptionLegend.innerText = "Опис візиту"),
            (this._description = document.createElement("input")),
            (this._description.name = "description"),
            (this._description.required = !0),
            this._visitDescriptionFieldset.append(
              this._visitDescriptionLegend,
              this._description
            ),
            this._visitFormFields.append(this._visitDescriptionFieldset);
        }
        get urgency() {
          return this._urgencySelect.value;
        }
        set urgency(t) {
          return (
            this._urgencySelect || this.createUrgencyHtml(),
            (this._urgencySelect.value = t),
            t
          );
        }
        createUrgencyHtml() {
          (this._urgencySelectFieldset = document.createElement("fieldset")),
            (this._urgencySelectFieldset.className =
              "fieldset urgency-fieldset"),
            (this._urgencySelectLegend = document.createElement("legend")),
            (this._urgencySelectLegend.innerText = "Терміновість"),
            (this._urgencySelect = document.createElement("select")),
            (this._urgencySelect.name = "urgency"),
            (this._urgencySelectEmpty = document.createElement("option")),
            (this._urgencySelectEmpty.innerText = "..."),
            (this._urgencySelectEmpty.selected = !0),
            (this._urgencySelectEmpty.disabled = !0),
            (this._optionUrgencyHigh = document.createElement("option")),
            (this._optionUrgencyHigh.innerText = "Висока"),
            (this._optionUrgencyHigh.value = "Висока"),
            (this._optionUrgencyNormal = document.createElement("option")),
            (this._optionUrgencyNormal.innerText = "Нормальна"),
            (this._optionUrgencyNormal.value = "Нормальна"),
            (this._optionUrgencyLow = document.createElement("option")),
            (this._optionUrgencyLow.innerText = "Низька"),
            (this._optionUrgencyLow.value = "Низька"),
            this._urgencySelect.append(
              this._urgencySelectEmpty,
              this._optionUrgencyHigh,
              this._optionUrgencyNormal,
              this._optionUrgencyLow
            ),
            this._urgencySelectFieldset.append(
              this._urgencySelectLegend,
              this._urgencySelect
            ),
            this._visitFormFields.append(this._urgencySelectFieldset);
        }
        get fullName() {
          return this._fullNameInput.value;
        }
        set fullName(t) {
          return (
            this._fullNameInput || this.createFullNameHtml(),
            (this._fullNameInput.value = t),
            t
          );
        }
        createFullNameHtml() {
          (this._fullNameInputFieldset = document.createElement("fieldset")),
            (this._fullNameInputFieldset.className = "fieldset name-fieldset"),
            (this._fullNameInputLegend = document.createElement("legend")),
            (this._fullNameInputLegend.innerText = "Прізвище Ім'я По-батькові"),
            (this._fullNameInput = document.createElement("input")),
            (this._fullNameInput.name = "fullName"),
            this._fullNameInputFieldset.append(
              this._fullNameInputLegend,
              this._fullNameInput
            ),
            this._visitFormFields.append(this._fullNameInputFieldset);
        }
        updateVisitFields() {
          (this.visit.description = this.description),
            (this.visit.fullName = this.fullName),
            (this.visit.title = this.purpose),
            (this.visit.urgency = this.urgency);
        }
        updateAdditionalVisitFields() {}
      }
      var c = {},
        u = "function" == typeof Map ? new Map() : null,
        p = "swap",
        m = "move",
        f = "layoutStart",
        g = "layoutEnd",
        v = "layoutAbort",
        y = "remove",
        b = "hideStart",
        w = "filter",
        S = "sort",
        D = "move",
        E = "send",
        x = "beforeSend",
        L = "receive",
        T = "beforeReceive",
        A = "dragReleaseEnd",
        I = "ontouchstart" in window,
        k = !!window.PointerEvent,
        P = !!window.navigator.msPointerEnabled;
      function C() {
        (this._events = {}),
          (this._queue = []),
          (this._counter = 0),
          (this._clearOnEmit = !1);
      }
      (C.prototype.on = function (t, e) {
        if (!this._events || !t || !e) return this;
        var i = this._events[t];
        return i || (i = this._events[t] = []), i.push(e), this;
      }),
        (C.prototype.off = function (t, e) {
          if (!this._events || !t || !e) return this;
          var i,
            s = this._events[t];
          if (!s || !s.length) return this;
          for (; -1 !== (i = s.indexOf(e)); ) s.splice(i, 1);
          return this;
        }),
        (C.prototype.clear = function (t) {
          if (!this._events || !t) return this;
          var e = this._events[t];
          return e && ((e.length = 0), delete this._events[t]), this;
        }),
        (C.prototype.emit = function (t) {
          if (!this._events || !t) return (this._clearOnEmit = !1), this;
          var e = this._events[t];
          if (!e || !e.length) return (this._clearOnEmit = !1), this;
          var i,
            s = this._queue,
            n = s.length,
            r = arguments.length - 1;
          r > 3 && ((i = []).push.apply(i, arguments), i.shift()),
            s.push.apply(s, e),
            this._clearOnEmit && ((e.length = 0), (this._clearOnEmit = !1)),
            ++this._counter;
          for (var o = n, a = s.length; o < a; o++)
            if (
              (0 === r
                ? s[o]()
                : 1 === r
                ? s[o](arguments[1])
                : 2 === r
                ? s[o](arguments[1], arguments[2])
                : 3 === r
                ? s[o](arguments[1], arguments[2], arguments[3])
                : s[o].apply(null, i),
              !this._events)
            )
              return this;
          return --this._counter, this._counter || (s.length = 0), this;
        }),
        (C.prototype.burst = function () {
          return this._events
            ? ((this._clearOnEmit = !0), this.emit.apply(this, arguments), this)
            : this;
        }),
        (C.prototype.countListeners = function (t) {
          if (!this._events) return 0;
          var e = this._events[t];
          return e ? e.length : 0;
        }),
        (C.prototype.destroy = function () {
          return this._events
            ? ((this._queue.length = this._counter = 0),
              (this._events = null),
              this)
            : this;
        });
      var R = k ? "pointerout" : P ? "MSPointerOut" : "";
      function F(t) {
        R &&
          ((this._dragger = t),
          (this._timeout = null),
          (this._outEvent = null),
          (this._isActive = !1),
          (this._addBehaviour = this._addBehaviour.bind(this)),
          (this._removeBehaviour = this._removeBehaviour.bind(this)),
          (this._onTimeout = this._onTimeout.bind(this)),
          (this._resetData = this._resetData.bind(this)),
          (this._onStart = this._onStart.bind(this)),
          (this._onOut = this._onOut.bind(this)),
          this._dragger.on("start", this._onStart));
      }
      (F.prototype._addBehaviour = function () {
        this._isActive ||
          ((this._isActive = !0),
          this._dragger.on("move", this._resetData),
          this._dragger.on("cancel", this._removeBehaviour),
          this._dragger.on("end", this._removeBehaviour),
          window.addEventListener(R, this._onOut));
      }),
        (F.prototype._removeBehaviour = function () {
          this._isActive &&
            (this._dragger.off("move", this._resetData),
            this._dragger.off("cancel", this._removeBehaviour),
            this._dragger.off("end", this._removeBehaviour),
            window.removeEventListener(R, this._onOut),
            this._resetData(),
            (this._isActive = !1));
        }),
        (F.prototype._resetData = function () {
          window.clearTimeout(this._timeout),
            (this._timeout = null),
            (this._outEvent = null);
        }),
        (F.prototype._onStart = function (t) {
          "mouse" !== t.pointerType && this._addBehaviour();
        }),
        (F.prototype._onOut = function (t) {
          this._dragger._getTrackedTouch(t) &&
            (this._resetData(),
            (this._outEvent = t),
            (this._timeout = window.setTimeout(this._onTimeout, 100)));
        }),
        (F.prototype._onTimeout = function () {
          var t = this._outEvent;
          this._resetData(),
            this._dragger.isActive() && this._dragger._onCancel(t);
        }),
        (F.prototype.destroy = function () {
          R &&
            (this._dragger.off("start", this._onStart),
            this._removeBehaviour());
        });
      var M = ["", "webkit", "moz", "ms", "o", "Webkit", "Moz", "MS", "O"],
        N = {};
      function X(t, e) {
        var i = N[e] || "";
        if (i) return i;
        for (var s = e[0].toUpperCase() + e.slice(1), n = 0; n < M.length; ) {
          if ((i = M[n] ? M[n] + s : e) in t) return (N[e] = i), i;
          ++n;
        }
        return "";
      }
      function Y() {
        var t = !1;
        try {
          var e = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener("testPassive", null, e),
            window.removeEventListener("testPassive", null, e);
        } catch (t) {}
        return t;
      }
      var B = window.navigator.userAgent.toLowerCase(),
        H = B.indexOf("edge") > -1,
        V = B.indexOf("trident") > -1,
        q = B.indexOf("firefox") > -1,
        O = B.indexOf("android") > -1,
        G = !!Y() && { passive: !0 },
        W = "touchAction",
        U = X(document.documentElement.style, W),
        j = "auto";
      function z(t, e) {
        (this._element = t),
          (this._emitter = new C()),
          (this._isDestroyed = !1),
          (this._cssProps = {}),
          (this._touchAction = ""),
          (this._isActive = !1),
          (this._pointerId = null),
          (this._startTime = 0),
          (this._startX = 0),
          (this._startY = 0),
          (this._currentX = 0),
          (this._currentY = 0),
          (this._onStart = this._onStart.bind(this)),
          (this._onMove = this._onMove.bind(this)),
          (this._onCancel = this._onCancel.bind(this)),
          (this._onEnd = this._onEnd.bind(this)),
          (this._edgeHack = null),
          (H || V) && (k || P) && (this._edgeHack = new F(this)),
          this.setCssProps(e),
          this._touchAction || this.setTouchAction(j),
          t.addEventListener("dragstart", z._preventDefault, !1),
          t.addEventListener(z._inputEvents.start, this._onStart, G);
      }
      (z._pointerEvents = {
        start: "pointerdown",
        move: "pointermove",
        cancel: "pointercancel",
        end: "pointerup",
      }),
        (z._msPointerEvents = {
          start: "MSPointerDown",
          move: "MSPointerMove",
          cancel: "MSPointerCancel",
          end: "MSPointerUp",
        }),
        (z._touchEvents = {
          start: "touchstart",
          move: "touchmove",
          cancel: "touchcancel",
          end: "touchend",
        }),
        (z._mouseEvents = {
          start: "mousedown",
          move: "mousemove",
          cancel: "",
          end: "mouseup",
        }),
        (z._inputEvents = I
          ? z._touchEvents
          : k
          ? z._pointerEvents
          : P
          ? z._msPointerEvents
          : z._mouseEvents),
        (z._emitter = new C()),
        (z._emitterEvents = {
          start: "start",
          move: "move",
          end: "end",
          cancel: "cancel",
        }),
        (z._activeInstances = []),
        (z._preventDefault = function (t) {
          t.preventDefault && !1 !== t.cancelable && t.preventDefault();
        }),
        (z._activateInstance = function (t) {
          z._activeInstances.indexOf(t) > -1 ||
            (z._activeInstances.push(t),
            z._emitter.on(z._emitterEvents.move, t._onMove),
            z._emitter.on(z._emitterEvents.cancel, t._onCancel),
            z._emitter.on(z._emitterEvents.end, t._onEnd),
            1 === z._activeInstances.length && z._bindListeners());
        }),
        (z._deactivateInstance = function (t) {
          var e = z._activeInstances.indexOf(t);
          -1 !== e &&
            (z._activeInstances.splice(e, 1),
            z._emitter.off(z._emitterEvents.move, t._onMove),
            z._emitter.off(z._emitterEvents.cancel, t._onCancel),
            z._emitter.off(z._emitterEvents.end, t._onEnd),
            z._activeInstances.length || z._unbindListeners());
        }),
        (z._bindListeners = function () {
          window.addEventListener(z._inputEvents.move, z._onMove, G),
            window.addEventListener(z._inputEvents.end, z._onEnd, G),
            z._inputEvents.cancel &&
              window.addEventListener(z._inputEvents.cancel, z._onCancel, G);
        }),
        (z._unbindListeners = function () {
          window.removeEventListener(z._inputEvents.move, z._onMove, G),
            window.removeEventListener(z._inputEvents.end, z._onEnd, G),
            z._inputEvents.cancel &&
              window.removeEventListener(z._inputEvents.cancel, z._onCancel, G);
        }),
        (z._getEventPointerId = function (t) {
          return "number" == typeof t.pointerId
            ? t.pointerId
            : t.changedTouches
            ? t.changedTouches[0]
              ? t.changedTouches[0].identifier
              : null
            : 1;
        }),
        (z._getTouchById = function (t, e) {
          if ("number" == typeof t.pointerId)
            return t.pointerId === e ? t : null;
          if (t.changedTouches) {
            for (var i = 0; i < t.changedTouches.length; i++)
              if (t.changedTouches[i].identifier === e)
                return t.changedTouches[i];
            return null;
          }
          return t;
        }),
        (z._onMove = function (t) {
          z._emitter.emit(z._emitterEvents.move, t);
        }),
        (z._onCancel = function (t) {
          z._emitter.emit(z._emitterEvents.cancel, t);
        }),
        (z._onEnd = function (t) {
          z._emitter.emit(z._emitterEvents.end, t);
        }),
        (z.prototype._reset = function () {
          (this._pointerId = null),
            (this._startTime = 0),
            (this._startX = 0),
            (this._startY = 0),
            (this._currentX = 0),
            (this._currentY = 0),
            (this._isActive = !1),
            z._deactivateInstance(this);
        }),
        (z.prototype._createEvent = function (t, e) {
          var i = this._getTrackedTouch(e);
          return {
            type: t,
            srcEvent: e,
            distance: this.getDistance(),
            deltaX: this.getDeltaX(),
            deltaY: this.getDeltaY(),
            deltaTime: t === z._emitterEvents.start ? 0 : this.getDeltaTime(),
            isFirst: t === z._emitterEvents.start,
            isFinal:
              t === z._emitterEvents.end || t === z._emitterEvents.cancel,
            pointerType: e.pointerType || (e.touches ? "touch" : "mouse"),
            identifier: this._pointerId,
            screenX: i.screenX,
            screenY: i.screenY,
            clientX: i.clientX,
            clientY: i.clientY,
            pageX: i.pageX,
            pageY: i.pageY,
            target: i.target,
          };
        }),
        (z.prototype._emit = function (t, e) {
          this._emitter.emit(t, this._createEvent(t, e));
        }),
        (z.prototype._getTrackedTouch = function (t) {
          return null === this._pointerId
            ? null
            : z._getTouchById(t, this._pointerId);
        }),
        (z.prototype._onStart = function (t) {
          if (
            !this._isDestroyed &&
            null === this._pointerId &&
            ((this._pointerId = z._getEventPointerId(t)),
            null !== this._pointerId)
          ) {
            var e = this._getTrackedTouch(t);
            (this._startX = this._currentX = e.clientX),
              (this._startY = this._currentY = e.clientY),
              (this._startTime = Date.now()),
              (this._isActive = !0),
              this._emit(z._emitterEvents.start, t),
              this._isActive && z._activateInstance(this);
          }
        }),
        (z.prototype._onMove = function (t) {
          var e = this._getTrackedTouch(t);
          e &&
            ((this._currentX = e.clientX),
            (this._currentY = e.clientY),
            this._emit(z._emitterEvents.move, t));
        }),
        (z.prototype._onCancel = function (t) {
          this._getTrackedTouch(t) &&
            (this._emit(z._emitterEvents.cancel, t), this._reset());
        }),
        (z.prototype._onEnd = function (t) {
          this._getTrackedTouch(t) &&
            (this._emit(z._emitterEvents.end, t), this._reset());
        }),
        (z.prototype.isActive = function () {
          return this._isActive;
        }),
        (z.prototype.setTouchAction = function (t) {
          (this._touchAction = t),
            U && ((this._cssProps[U] = ""), (this._element.style[U] = t)),
            I &&
              (this._element.removeEventListener(
                z._touchEvents.start,
                z._preventDefault,
                !0
              ),
              (this._element.style[U] !== t || (q && O)) &&
                this._element.addEventListener(
                  z._touchEvents.start,
                  z._preventDefault,
                  !0
                ));
        }),
        (z.prototype.setCssProps = function (t) {
          if (t) {
            var e,
              i,
              s = this._cssProps,
              n = this._element;
            for (e in s) (n.style[e] = s[e]), delete s[e];
            for (e in t)
              t[e] &&
                (e !== W
                  ? (i = X(n.style, e)) && ((s[i] = ""), (n.style[i] = t[e]))
                  : this.setTouchAction(t[e]));
          }
        }),
        (z.prototype.getDeltaX = function () {
          return this._currentX - this._startX;
        }),
        (z.prototype.getDeltaY = function () {
          return this._currentY - this._startY;
        }),
        (z.prototype.getDistance = function () {
          var t = this.getDeltaX(),
            e = this.getDeltaY();
          return Math.sqrt(t * t + e * e);
        }),
        (z.prototype.getDeltaTime = function () {
          return this._startTime ? Date.now() - this._startTime : 0;
        }),
        (z.prototype.on = function (t, e) {
          this._emitter.on(t, e);
        }),
        (z.prototype.off = function (t, e) {
          this._emitter.off(t, e);
        }),
        (z.prototype.destroy = function () {
          if (!this._isDestroyed) {
            var t = this._element;
            for (var e in (this._edgeHack && this._edgeHack.destroy(),
            this._reset(),
            this._emitter.destroy(),
            t.removeEventListener(z._inputEvents.start, this._onStart, G),
            t.removeEventListener("dragstart", z._preventDefault, !1),
            t.removeEventListener(z._touchEvents.start, z._preventDefault, !0),
            this._cssProps))
              (t.style[e] = this._cssProps[e]), delete this._cssProps[e];
            (this._element = null), (this._isDestroyed = !0);
          }
        });
      var $ = (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (t) {
          return this.setTimeout(function () {
            t(Date.now());
          }, 16.666666666666668);
        }
      ).bind(window);
      function Q(t) {
        (this._nextStep = null),
          (this._lanes = []),
          (this._stepQueue = []),
          (this._stepCallbacks = {}),
          (this._step = this._step.bind(this));
        for (var e = 0; e < t; e++) this._lanes.push(new J());
      }
      function J() {
        (this.queue = []), (this.indices = {}), (this.callbacks = {});
      }
      (Q.prototype._step = function (t) {
        var e,
          i,
          s,
          n,
          r,
          o,
          a = this._lanes,
          h = this._stepQueue,
          l = this._stepCallbacks;
        for (this._nextStep = null, e = 0; e < a.length; e++) {
          for (
            n = a[e].queue, r = a[e].callbacks, o = a[e].indices, i = 0;
            i < n.length;
            i++
          )
            (s = n[i]) && (h.push(s), (l[s] = r[s]), delete r[s], delete o[s]);
          n.length = 0;
        }
        for (e = 0; e < h.length; e++) l[(s = h[e])] && l[s](t), delete l[s];
        h.length = 0;
      }),
        (Q.prototype.add = function (t, e, i) {
          this._lanes[t].add(e, i),
            this._nextStep || (this._nextStep = $(this._step));
        }),
        (Q.prototype.remove = function (t, e) {
          this._lanes[t].remove(e);
        }),
        (J.prototype.add = function (t, e) {
          var i = this.indices[t];
          void 0 !== i && (this.queue[i] = void 0),
            this.queue.push(t),
            (this.callbacks[t] = e),
            (this.indices[t] = this.queue.length - 1);
        }),
        (J.prototype.remove = function (t) {
          var e = this.indices[t];
          void 0 !== e &&
            ((this.queue[e] = void 0),
            delete this.callbacks[t],
            delete this.indices[t]);
        });
      var Z = "layoutRead",
        K = "layoutWrite",
        tt = "visibilityRead",
        et = "visibilityWrite",
        it = "dragStartRead",
        st = "dragStartWrite",
        nt = "dragMoveRead",
        rt = "dragMoveWrite",
        ot = "dragScrollRead",
        at = "dragScrollWrite",
        ht = "dragSortRead",
        lt = "placeholderLayoutRead",
        dt = "placeholderLayoutWrite",
        _t = "placeholderResizeWrite",
        ct = "autoScrollRead",
        ut = "autoScrollWrite",
        pt = "debounceRead",
        mt = 0,
        ft = 1,
        gt = 2,
        vt = new Q(3);
      function yt(t) {
        vt.remove(mt, Z + t), vt.remove(gt, K + t);
      }
      function bt(t) {
        vt.remove(mt, tt + t), vt.remove(gt, et + t);
      }
      function wt(t) {
        vt.remove(mt, it + t), vt.remove(gt, st + t);
      }
      function St(t) {
        vt.remove(mt, nt + t), vt.remove(gt, rt + t);
      }
      function Dt(t) {
        vt.remove(mt, ot + t), vt.remove(gt, at + t);
      }
      function Et(t, e) {
        vt.add(ft, ht + t, e);
      }
      function xt(t) {
        vt.remove(mt, lt + t), vt.remove(gt, dt + t);
      }
      function Lt(t, e) {
        vt.add(mt, ct, t), vt.add(gt, ut, e);
      }
      var Tt = 1,
        At = 2,
        It = 8 | Tt,
        kt = 4 | Tt,
        Pt = 8 | At,
        Ct = 4 | At,
        Rt = "function";
      function Ft(t) {
        return typeof t === Rt;
      }
      var Mt = "function" == typeof WeakMap ? new WeakMap() : null;
      function Nt(t, e) {
        var i = Mt && Mt.get(t);
        return (
          i || ((i = window.getComputedStyle(t, null)), Mt && Mt.set(t, i)),
          i.getPropertyValue(e)
        );
      }
      function Xt(t, e) {
        return parseFloat(Nt(t, e)) || 0;
      }
      var Yt,
        Bt = document.documentElement,
        Ht = document.body,
        Vt = { value: 0, offset: 0 };
      function qt(t) {
        return t === window || t === Bt || t === Ht ? window : t;
      }
      function Ot(t) {
        return t === window ? t.pageXOffset : t.scrollLeft;
      }
      function Gt(t) {
        return t === window ? t.pageYOffset : t.scrollTop;
      }
      function Wt(t) {
        return t === window
          ? Bt.scrollWidth - Bt.clientWidth
          : t.scrollWidth - t.clientWidth;
      }
      function Ut(t) {
        return t === window
          ? Bt.scrollHeight - Bt.clientHeight
          : t.scrollHeight - t.clientHeight;
      }
      function jt(t, e) {
        if (((e = e || {}), t === window))
          (e.width = Bt.clientWidth),
            (e.height = Bt.clientHeight),
            (e.left = 0),
            (e.right = e.width),
            (e.top = 0),
            (e.bottom = e.height);
        else {
          var i = t.getBoundingClientRect(),
            s = t.clientLeft || Xt(t, "border-left-width"),
            n = t.clientTop || Xt(t, "border-top-width");
          (e.width = t.clientWidth),
            (e.height = t.clientHeight),
            (e.left = i.left + s),
            (e.right = e.left + e.width),
            (e.top = i.top + n),
            (e.bottom = e.top + e.height);
        }
        return e;
      }
      function zt(t) {
        return t._drag._getGrid()._settings.dragAutoScroll;
      }
      function $t(t) {
        if (t._drag && t._isActive) {
          var e = t._drag;
          (e._scrollDiffX = e._scrollDiffY = 0),
            t._setTranslate(e._left, e._top);
        }
      }
      function Qt(t, e, i, s) {
        return (
          (Vt.value = Math.min(s / 2, t)),
          (Vt.offset = Math.max(0, i + 2 * Vt.value + s * e - s) / 2),
          Vt
        );
      }
      function Jt() {
        this.reset();
      }
      function Zt() {
        (this.element = null),
          (this.requestX = null),
          (this.requestY = null),
          (this.scrollLeft = 0),
          (this.scrollTop = 0);
      }
      function Kt(t, e) {
        (this.pool = []), (this.createItem = t), (this.releaseItem = e);
      }
      function te(t, e) {
        var i = (function (t, e) {
          return (function (t, e) {
            return !(
              t.left + t.width <= e.left ||
              e.left + e.width <= t.left ||
              t.top + t.height <= e.top ||
              e.top + e.height <= t.top
            );
          })(t, e)
            ? (Math.min(t.left + t.width, e.left + e.width) -
                Math.max(t.left, e.left)) *
                (Math.min(t.top + t.height, e.top + e.height) -
                  Math.max(t.top, e.top))
            : 0;
        })(t, e);
        return i
          ? (i / (Math.min(t.width, e.width) * Math.min(t.height, e.height))) *
              100
          : 0;
      }
      (Jt.prototype.reset = function () {
        this.isActive && this.onStop(),
          (this.item = null),
          (this.element = null),
          (this.isActive = !1),
          (this.isEnding = !1),
          (this.direction = null),
          (this.value = null),
          (this.maxValue = 0),
          (this.threshold = 0),
          (this.distance = 0),
          (this.speed = 0),
          (this.duration = 0),
          (this.action = null);
      }),
        (Jt.prototype.hasReachedEnd = function () {
          return 4 & this.direction
            ? this.value >= this.maxValue
            : this.value <= 0;
        }),
        (Jt.prototype.computeCurrentScrollValue = function () {
          return null === this.value
            ? Tt & this.direction
              ? Ot(this.element)
              : Gt(this.element)
            : Math.max(0, Math.min(this.value, this.maxValue));
        }),
        (Jt.prototype.computeNextScrollValue = function (t) {
          var e = this.speed * (t / 1e3),
            i = 4 & this.direction ? this.value + e : this.value - e;
          return Math.max(0, Math.min(i, this.maxValue));
        }),
        (Jt.prototype.computeSpeed =
          ((Yt = {
            direction: null,
            threshold: 0,
            distance: 0,
            value: 0,
            maxValue: 0,
            deltaTime: 0,
            duration: 0,
            isEnding: !1,
          }),
          function (t) {
            var e = this.item,
              i = zt(e).speed;
            return Ft(i)
              ? ((Yt.direction = this.direction),
                (Yt.threshold = this.threshold),
                (Yt.distance = this.distance),
                (Yt.value = this.value),
                (Yt.maxValue = this.maxValue),
                (Yt.duration = this.duration),
                (Yt.speed = this.speed),
                (Yt.deltaTime = t),
                (Yt.isEnding = this.isEnding),
                i(e, this.element, Yt))
              : i;
          })),
        (Jt.prototype.tick = function (t) {
          return (
            this.isActive || ((this.isActive = !0), this.onStart()),
            (this.value = this.computeCurrentScrollValue()),
            (this.speed = this.computeSpeed(t)),
            (this.value = this.computeNextScrollValue(t)),
            (this.duration += t),
            this.value
          );
        }),
        (Jt.prototype.onStart = function () {
          var t = this.item,
            e = zt(t).onStart;
          Ft(e) && e(t, this.element, this.direction);
        }),
        (Jt.prototype.onStop = function () {
          var t = this.item,
            e = zt(t).onStop;
          Ft(e) && e(t, this.element, this.direction),
            t._drag && t._drag.sort();
        }),
        (Zt.prototype.reset = function () {
          this.requestX && (this.requestX.action = null),
            this.requestY && (this.requestY.action = null),
            (this.element = null),
            (this.requestX = null),
            (this.requestY = null),
            (this.scrollLeft = 0),
            (this.scrollTop = 0);
        }),
        (Zt.prototype.addRequest = function (t) {
          Tt & t.direction
            ? (this.removeRequest(this.requestX), (this.requestX = t))
            : (this.removeRequest(this.requestY), (this.requestY = t)),
            (t.action = this);
        }),
        (Zt.prototype.removeRequest = function (t) {
          t &&
            (this.requestX === t
              ? ((this.requestX = null), (t.action = null))
              : this.requestY === t &&
                ((this.requestY = null), (t.action = null)));
        }),
        (Zt.prototype.computeScrollValues = function () {
          (this.scrollLeft = this.requestX
            ? this.requestX.value
            : Ot(this.element)),
            (this.scrollTop = this.requestY
              ? this.requestY.value
              : Gt(this.element));
        }),
        (Zt.prototype.scroll = function () {
          var t = this.element;
          t &&
            (t.scrollTo
              ? t.scrollTo(this.scrollLeft, this.scrollTop)
              : ((t.scrollLeft = this.scrollLeft),
                (t.scrollTop = this.scrollTop)));
        }),
        (Kt.prototype.pick = function () {
          return this.pool.pop() || this.createItem();
        }),
        (Kt.prototype.release = function (t) {
          this.releaseItem(t), -1 === this.pool.indexOf(t) && this.pool.push(t);
        }),
        (Kt.prototype.reset = function () {
          this.pool.length = 0;
        });
      var ee = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0 },
        ie = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0 };
      function se() {
        (this._isDestroyed = !1),
          (this._isTicking = !1),
          (this._tickTime = 0),
          (this._tickDeltaTime = 0),
          (this._items = []),
          (this._actions = []),
          (this._requests = {}),
          (this._requests[Tt] = {}),
          (this._requests[At] = {}),
          (this._requestOverlapCheck = {}),
          (this._dragPositions = {}),
          (this._dragDirections = {}),
          (this._overlapCheckInterval = 150),
          (this._requestPool = new Kt(
            function () {
              return new Jt();
            },
            function (t) {
              t.reset();
            }
          )),
          (this._actionPool = new Kt(
            function () {
              return new Zt();
            },
            function (t) {
              t.reset();
            }
          )),
          (this._readTick = this._readTick.bind(this)),
          (this._writeTick = this._writeTick.bind(this));
      }
      (se.AXIS_X = Tt),
        (se.AXIS_Y = At),
        (se.FORWARD = 4),
        (se.BACKWARD = 8),
        (se.LEFT = It),
        (se.RIGHT = kt),
        (se.UP = Pt),
        (se.DOWN = Ct),
        (se.smoothSpeed = function (t, e, i) {
          return function (s, n, r) {
            var o = 0;
            if (!r.isEnding)
              if (r.threshold > 0) {
                var a = r.threshold - Math.max(0, r.distance);
                o = (t / r.threshold) * a;
              } else o = t;
            var h = r.speed,
              l = o;
            return h === o
              ? l
              : h < o
              ? ((l = h + e * (r.deltaTime / 1e3)), Math.min(o, l))
              : ((l = h - i * (r.deltaTime / 1e3)), Math.max(o, l));
          };
        }),
        (se.pointerHandle = function (t) {
          var e = { left: 0, top: 0, width: 0, height: 0 },
            i = t || 1;
          return function (t, s, n, r, o, a, h) {
            return (
              (e.left = a - 0.5 * i),
              (e.top = h - 0.5 * i),
              (e.width = i),
              (e.height = i),
              e
            );
          };
        }),
        (se.prototype._readTick = function (t) {
          this._isDestroyed ||
            (t && this._tickTime
              ? ((this._tickDeltaTime = t - this._tickTime),
                (this._tickTime = t),
                this._updateRequests(),
                this._updateActions())
              : ((this._tickTime = t), (this._tickDeltaTime = 0)));
        }),
        (se.prototype._writeTick = function () {
          this._isDestroyed ||
            (this._applyActions(), Lt(this._readTick, this._writeTick));
        }),
        (se.prototype._startTicking = function () {
          (this._isTicking = !0), Lt(this._readTick, this._writeTick);
        }),
        (se.prototype._stopTicking = function () {
          (this._isTicking = !1),
            (this._tickTime = 0),
            (this._tickDeltaTime = 0),
            vt.remove(mt, ct),
            vt.remove(gt, ut);
        }),
        (se.prototype._getItemHandleRect = function (t, e, i) {
          var s = t._drag;
          if (e) {
            var n = s._dragMoveEvent || s._dragStartEvent,
              r = e(
                t,
                s._clientX,
                s._clientY,
                t._width,
                t._height,
                n.clientX,
                n.clientY
              );
            (i.left = r.left),
              (i.top = r.top),
              (i.width = r.width),
              (i.height = r.height);
          } else
            (i.left = s._clientX),
              (i.top = s._clientY),
              (i.width = t._width),
              (i.height = t._height);
          return (i.right = i.left + i.width), (i.bottom = i.top + i.height), i;
        }),
        (se.prototype._requestItemScroll = function (t, e, i, s, n, r, o) {
          var a = this._requests[e],
            h = a[t._id];
          h
            ? (h.element === i && h.direction === s) || h.reset()
            : (h = this._requestPool.pick()),
            (h.item = t),
            (h.element = i),
            (h.direction = s),
            (h.threshold = n),
            (h.distance = r),
            (h.maxValue = o),
            (a[t._id] = h);
        }),
        (se.prototype._cancelItemScroll = function (t, e) {
          var i = this._requests[e],
            s = i[t._id];
          s &&
            (s.action && s.action.removeRequest(s),
            this._requestPool.release(s),
            delete i[t._id]);
        }),
        (se.prototype._checkItemOverlap = function (t, e, i) {
          var s = zt(t),
            n = Ft(s.targets) ? s.targets(t) : s.targets,
            r = s.threshold,
            o = s.safeZone;
          if (!n || !n.length)
            return (
              e && this._cancelItemScroll(t, Tt),
              void (i && this._cancelItemScroll(t, At))
            );
          var a = this._dragDirections[t._id],
            h = a[0],
            l = a[1];
          if (!h && !l)
            return (
              e && this._cancelItemScroll(t, Tt),
              void (i && this._cancelItemScroll(t, At))
            );
          for (
            var d = this._getItemHandleRect(t, s.handle, ee),
              _ = ie,
              c = null,
              u = null,
              p = !0,
              m = !0,
              f = 0,
              g = 0,
              v = null,
              y = null,
              b = 0,
              w = 0,
              S = 0,
              D = null,
              E = -1 / 0,
              x = 0,
              L = 0,
              T = null,
              A = 0,
              I = 0,
              k = null,
              P = -1 / 0,
              C = 0,
              R = 0,
              F = null,
              M = 0,
              N = 0,
              X = 0;
            X < n.length;
            X++
          )
            (c = n[X]),
              (p = e && h && c.axis !== At),
              (m = i && l && c.axis !== Tt),
              (g = c.priority || 0),
              ((!p || g < E) && (!m || g < P)) ||
                ((u = qt(c.element || c)),
                (w = p ? Wt(u) : -1),
                (S = m ? Ut(u) : -1),
                (w || S) &&
                  ((f = te(d, (_ = jt(u, _)))) <= 0 ||
                    (p &&
                      g >= E &&
                      w > 0 &&
                      (g > E || f > L) &&
                      ((y = null),
                      (v = Qt(
                        "number" == typeof c.threshold ? c.threshold : r,
                        o,
                        d.width,
                        _.width
                      )),
                      h === kt
                        ? (b = _.right + v.offset - d.right) <= v.value &&
                          Ot(u) < w &&
                          (y = kt)
                        : h === It &&
                          (b = d.left - (_.left - v.offset)) <= v.value &&
                          Ot(u) > 0 &&
                          (y = It),
                      null !== y &&
                        ((D = u),
                        (E = g),
                        (x = v.value),
                        (L = f),
                        (T = y),
                        (A = b),
                        (I = w))),
                    m &&
                      g >= P &&
                      S > 0 &&
                      (g > P || f > R) &&
                      ((y = null),
                      (v = Qt(
                        "number" == typeof c.threshold ? c.threshold : r,
                        o,
                        d.height,
                        _.height
                      )),
                      l === Ct
                        ? (b = _.bottom + v.offset - d.bottom) <= v.value &&
                          Gt(u) < S &&
                          (y = Ct)
                        : l === Pt &&
                          (b = d.top - (_.top - v.offset)) <= v.value &&
                          Gt(u) > 0 &&
                          (y = Pt),
                      null !== y &&
                        ((k = u),
                        (P = g),
                        (C = v.value),
                        (R = f),
                        (F = y),
                        (M = b),
                        (N = S))))));
          e &&
            (D
              ? this._requestItemScroll(t, Tt, D, T, x, A, I)
              : this._cancelItemScroll(t, Tt)),
            i &&
              (k
                ? this._requestItemScroll(t, At, k, F, C, M, N)
                : this._cancelItemScroll(t, At));
        }),
        (se.prototype._updateScrollRequest = function (t) {
          for (
            var e = t.item,
              i = zt(e),
              s = Ft(i.targets) ? i.targets(e) : i.targets,
              n = (s && s.length) || 0,
              r = i.threshold,
              o = i.safeZone,
              a = this._getItemHandleRect(e, i.handle, ee),
              h = ie,
              l = null,
              d = null,
              _ = !1,
              c = null,
              u = null,
              p = null,
              m = null,
              f = null,
              g = 0;
            g < n;
            g++
          )
            if ((d = qt((l = s[g]).element || l)) === t.element) {
              if ((_ = !!(Tt & t.direction))) {
                if (l.axis === At) continue;
              } else if (l.axis === Tt) continue;
              if ((m = _ ? Wt(d) : Ut(d)) <= 0) break;
              if (te(a, (h = jt(d, h))) <= 0) break;
              if (
                ((c = Qt(
                  "number" == typeof l.threshold ? l.threshold : r,
                  o,
                  _ ? a.width : a.height,
                  _ ? h.width : h.height
                )),
                (u =
                  t.direction === It
                    ? a.left - (h.left - c.offset)
                    : t.direction === kt
                    ? h.right + c.offset - a.right
                    : t.direction === Pt
                    ? a.top - (h.top - c.offset)
                    : h.bottom + c.offset - a.bottom) > c.value)
              )
                break;
              if (
                ((p = _ ? Ot(d) : Gt(d)),
                (f = 4 & t.direction ? p >= m : p <= 0))
              )
                break;
              return (
                (t.maxValue = m),
                (t.threshold = c.value),
                (t.distance = u),
                (t.isEnding = !1),
                !0
              );
            }
          return (
            !0 === i.smoothStop && t.speed > 0
              ? (null === f && (f = t.hasReachedEnd()), (t.isEnding = !f))
              : (t.isEnding = !1),
            t.isEnding
          );
        }),
        (se.prototype._updateRequests = function () {
          for (
            var t,
              e,
              i,
              s,
              n,
              r,
              o,
              a = this._items,
              h = this._requests[Tt],
              l = this._requests[At],
              d = 0;
            d < a.length;
            d++
          )
            (t = a[d]),
              (n =
                (s = this._requestOverlapCheck[t._id]) > 0 &&
                this._tickTime - s > this._overlapCheckInterval),
              (r = !0),
              (e = h[t._id]) &&
                e.isActive &&
                (r = !this._updateScrollRequest(e)) &&
                ((n = !0), this._cancelItemScroll(t, Tt)),
              (o = !0),
              (i = l[t._id]) &&
                i.isActive &&
                (o = !this._updateScrollRequest(i)) &&
                ((n = !0), this._cancelItemScroll(t, At)),
              n &&
                ((this._requestOverlapCheck[t._id] = 0),
                this._checkItemOverlap(t, r, o));
        }),
        (se.prototype._requestAction = function (t, e) {
          for (
            var i = this._actions, s = e === Tt, n = null, r = 0;
            r < i.length;
            r++
          ) {
            if (((n = i[r]), t.element === n.element)) {
              if (s ? n.requestX : n.requestY)
                return void this._cancelItemScroll(t.item, e);
              break;
            }
            n = null;
          }
          n || (n = this._actionPool.pick()),
            (n.element = t.element),
            n.addRequest(t),
            t.tick(this._tickDeltaTime),
            i.push(n);
        }),
        (se.prototype._updateActions = function () {
          var t,
            e,
            i,
            s,
            n = this._items,
            r = this._requests,
            o = this._actions;
          for (s = 0; s < n.length; s++)
            (t = n[s]._id),
              (e = r[Tt][t]),
              (i = r[At][t]),
              e && this._requestAction(e, Tt),
              i && this._requestAction(i, At);
          for (s = 0; s < o.length; s++) o[s].computeScrollValues();
        }),
        (se.prototype._applyActions = function () {
          var t,
            e = this._actions,
            i = this._items;
          if (e.length) {
            for (t = 0; t < e.length; t++)
              e[t].scroll(), this._actionPool.release(e[t]);
            for (e.length = 0, t = 0; t < i.length; t++)
              (s = i[t])._drag && s._drag._prepareScroll();
            var s;
            for (t = 0; t < i.length; t++) $t(i[t]);
          }
        }),
        (se.prototype._updateDragDirection = function (t) {
          var e = this._dragPositions[t._id],
            i = this._dragDirections[t._id],
            s = t._drag._left,
            n = t._drag._top;
          if (e.length) {
            var r = e[0],
              o = e[1];
            (i[0] = s > r ? kt : s < r ? It : i[0] || 0),
              (i[1] = n > o ? Ct : n < o ? Pt : i[1] || 0);
          }
          (e[0] = s), (e[1] = n);
        }),
        (se.prototype.addItem = function (t) {
          this._isDestroyed ||
            (-1 === this._items.indexOf(t) &&
              (this._items.push(t),
              (this._requestOverlapCheck[t._id] = this._tickTime),
              (this._dragDirections[t._id] = [0, 0]),
              (this._dragPositions[t._id] = []),
              this._isTicking || this._startTicking()));
        }),
        (se.prototype.updateItem = function (t) {
          this._isDestroyed ||
            (this._dragDirections[t._id] &&
              (this._updateDragDirection(t),
              this._requestOverlapCheck[t._id] ||
                (this._requestOverlapCheck[t._id] = this._tickTime)));
        }),
        (se.prototype.removeItem = function (t) {
          if (!this._isDestroyed) {
            var e = this._items.indexOf(t);
            if (-1 !== e) {
              var i = t._id;
              this._requests[Tt][i] &&
                (this._cancelItemScroll(t, Tt), delete this._requests[Tt][i]),
                this._requests[At][i] &&
                  (this._cancelItemScroll(t, At), delete this._requests[At][i]),
                delete this._requestOverlapCheck[i],
                delete this._dragPositions[i],
                delete this._dragDirections[i],
                this._items.splice(e, 1),
                this._isTicking && !this._items.length && this._stopTicking();
            }
          }
        }),
        (se.prototype.isItemScrollingX = function (t) {
          var e = this._requests[Tt][t._id];
          return !(!e || !e.isActive);
        }),
        (se.prototype.isItemScrollingY = function (t) {
          var e = this._requests[At][t._id];
          return !(!e || !e.isActive);
        }),
        (se.prototype.isItemScrolling = function (t) {
          return this.isItemScrollingX(t) || this.isItemScrollingY(t);
        }),
        (se.prototype.destroy = function () {
          if (!this._isDestroyed) {
            for (var t = this._items.slice(0), e = 0; e < t.length; e++)
              this.removeItem(t[e]);
            (this._actions.length = 0),
              this._requestPool.reset(),
              this._actionPool.reset(),
              (this._isDestroyed = !0);
          }
        });
      var ne = window.Element.prototype,
        re =
          ne.matches ||
          ne.matchesSelector ||
          ne.webkitMatchesSelector ||
          ne.mozMatchesSelector ||
          ne.msMatchesSelector ||
          ne.oMatchesSelector ||
          function () {
            return !1;
          };
      function oe(t, e) {
        return re.call(t, e);
      }
      function ae(t, e) {
        e &&
          (t.classList
            ? t.classList.add(e)
            : oe(t, "." + e) || (t.className += " " + e));
      }
      var he = [],
        le = "number";
      function de(t, e, i) {
        var s = typeof i === le ? i : -1;
        s < 0 && (s = t.length - s + 1),
          t.splice.apply(t, he.concat(s, 0, e)),
          (he.length = 0);
      }
      function _e(t, e, i) {
        var s = Math.max(0, t.length - 1 + (i || 0));
        return e > s ? s : e < 0 ? Math.max(s + e + 1, 0) : e;
      }
      function ce(t, e, i) {
        if (!(t.length < 2)) {
          var s = _e(t, e),
            n = _e(t, i);
          s !== n && t.splice(n, 0, t.splice(s, 1)[0]);
        }
      }
      function ue(t, e, i) {
        if (!(t.length < 2)) {
          var s,
            n = _e(t, e),
            r = _e(t, i);
          n !== r && ((s = t[n]), (t[n] = t[r]), (t[r] = s));
        }
      }
      var pe = X(document.documentElement.style, "transform") || "transform",
        me = /([A-Z])/g,
        fe = /^(webkit-|moz-|ms-|o-)/,
        ge = /^(-m-s-)/;
      function ve(t) {
        var e = t.replace(me, "-$1").toLowerCase();
        return (e = e.replace(fe, "-$1")).replace(ge, "-ms-");
      }
      var ye = ve(pe),
        be = "none",
        we = "inline",
        Se = "none",
        De = "display";
      function Ee(t) {
        var e = Nt(t, ye);
        if (!e || e === be) return !1;
        var i = Nt(t, De);
        return i !== we && i !== Se;
      }
      function xe(t) {
        for (
          var e = document, i = t || e;
          i && i !== e && "static" === Nt(i, "position") && !Ee(i);

        )
          i = i.parentElement || e;
        return i;
      }
      var Le = {},
        Te = {},
        Ae = {};
      function Ie(t, e) {
        var i,
          s = e || {};
        return (
          (s.left = 0),
          (s.top = 0),
          t === document ||
            ((s.left = window.pageXOffset || 0),
            (s.top = window.pageYOffset || 0),
            t.self === window.self ||
              ((i = t.getBoundingClientRect()),
              (s.left += i.left),
              (s.top += i.top),
              (s.left += Xt(t, "border-left-width")),
              (s.top += Xt(t, "border-top-width")))),
          s
        );
      }
      function ke(t, e, i) {
        return (
          (Ae.left = 0),
          (Ae.top = 0),
          t === e ||
            (i && (t = xe(t)) === (e = xe(e))) ||
            (Ie(t, Le),
            Ie(e, Te),
            (Ae.left = Te.left - Le.left),
            (Ae.top = Te.top - Le.top)),
          Ae
        );
      }
      function Pe(t) {
        return "auto" === t || "scroll" === t || "overlay" === t;
      }
      function Ce(t) {
        return (
          Pe(Nt(t, "overflow")) ||
          Pe(Nt(t, "overflow-x")) ||
          Pe(Nt(t, "overflow-y"))
        );
      }
      function Re(t, e) {
        for (e = e || []; t && t !== document; )
          t.getRootNode && t instanceof DocumentFragment
            ? (t = t.getRootNode().host)
            : (Ce(t) && e.push(t), (t = t.parentNode));
        return e.push(window), e;
      }
      var Fe = {},
        Me = "none",
        Ne = /^matrix3d/,
        Xe = /([^,]*,){4}/,
        Ye = /([^,]*,){12}/,
        Be = /[^,]*,/;
      function He(t) {
        (Fe.x = 0), (Fe.y = 0);
        var e = Nt(t, ye);
        if (!e || e === Me) return Fe;
        var i = Ne.test(e),
          s = e.replace(i ? Ye : Xe, ""),
          n = s.replace(Be, "");
        return (Fe.x = parseFloat(s) || 0), (Fe.y = parseFloat(n) || 0), Fe;
      }
      function Ve(t, e) {
        e &&
          (t.classList
            ? t.classList.remove(e)
            : oe(t, "." + e) &&
              (t.className = (" " + t.className + " ")
                .replace(" " + e + " ", " ")
                .trim()));
      }
      var qe,
        Oe,
        Ge,
        We,
        Ue =
          /^(iPad|iPhone|iPod)/.test(window.navigator.platform) ||
          (/^Mac/.test(window.navigator.platform) &&
            window.navigator.maxTouchPoints > 1),
        je = 0,
        ze = !!Y() && { passive: !0 };
      function $e(t) {
        var e = t._element,
          i = t.getGrid(),
          s = i._settings;
        (this._item = t),
          (this._gridId = i._id),
          (this._isDestroyed = !1),
          (this._isMigrating = !1),
          (this._startPredicate = Ft(s.dragStartPredicate)
            ? s.dragStartPredicate
            : $e.defaultStartPredicate),
          (this._startPredicateState = je),
          (this._startPredicateResult = void 0),
          (this._isSortNeeded = !1),
          (this._sortTimer = void 0),
          (this._blockedSortIndex = null),
          (this._sortX1 = 0),
          (this._sortX2 = 0),
          (this._sortY1 = 0),
          (this._sortY2 = 0),
          this._reset(),
          (this._preStartCheck = this._preStartCheck.bind(this)),
          (this._preEndCheck = this._preEndCheck.bind(this)),
          (this._onScroll = this._onScroll.bind(this)),
          (this._prepareStart = this._prepareStart.bind(this)),
          (this._applyStart = this._applyStart.bind(this)),
          (this._prepareMove = this._prepareMove.bind(this)),
          (this._applyMove = this._applyMove.bind(this)),
          (this._prepareScroll = this._prepareScroll.bind(this)),
          (this._applyScroll = this._applyScroll.bind(this)),
          (this._handleSort = this._handleSort.bind(this)),
          (this._handleSortDelayed = this._handleSortDelayed.bind(this)),
          (this._handle = (s.dragHandle && e.querySelector(s.dragHandle)) || e),
          (this._dragger = new z(this._handle, s.dragCssProps)),
          this._dragger.on("start", this._preStartCheck),
          this._dragger.on("move", this._preStartCheck),
          this._dragger.on("cancel", this._preEndCheck),
          this._dragger.on("end", this._preEndCheck);
      }
      function Qe(t, e) {
        var i,
          s,
          n = {};
        if (Array.isArray(e))
          for (s = 0; s < e.length; s++) n[(i = e[s])] = Nt(t, ve(i));
        else for (i in e) n[i] = Nt(t, ve(i));
        return n;
      }
      ($e.autoScroller = new se()),
        ($e.defaultStartPredicate = function (t, e, i) {
          var s = t._drag;
          if (e.isFirst && e.srcEvent.button) return !1;
          if (
            !Ue &&
            e.isFirst &&
            !0 === e.srcEvent.isTrusted &&
            !1 === e.srcEvent.defaultPrevented &&
            !1 === e.srcEvent.cancelable
          )
            return !1;
          if (!e.isFinal) {
            var n = s._startPredicateData;
            if (!n) {
              var r = i || s._getGrid()._settings.dragStartPredicate || {};
              s._startPredicateData = n = {
                distance: Math.max(r.distance, 0) || 0,
                delay: Math.max(r.delay, 0) || 0,
              };
            }
            return (
              n.delay &&
                ((n.event = e),
                n.delayTimer ||
                  (n.delayTimer = window.setTimeout(function () {
                    (n.delay = 0),
                      s._resolveStartPredicate(n.event) &&
                        (s._forceResolveStartPredicate(n.event),
                        s._resetStartPredicate());
                  }, n.delay))),
              s._resolveStartPredicate(e)
            );
          }
          s._finishStartPredicate(e);
        }),
        ($e.defaultSortPredicate =
          ((qe = {}),
          (Oe = {}),
          (Ge = {}),
          (We = []),
          function (t, e) {
            var i = t._drag,
              s = i._getGrid(),
              n = e && "number" == typeof e.threshold ? e.threshold : 50,
              r = e && e.action === p ? p : m,
              o = e && e.migrateAction === p ? p : m;
            (n = Math.min(Math.max(n, 1), 100)),
              (qe.width = t._width),
              (qe.height = t._height),
              (qe.left = i._clientX),
              (qe.top = i._clientY);
            var a = (function (t, e, i) {
              var s,
                n,
                r,
                o,
                a,
                h,
                l,
                d,
                _,
                c,
                u = null,
                p = e._settings.dragSort,
                m = -1;
              if (
                (!0 === p
                  ? ((We[0] = e), (n = We))
                  : Ft(p) && (n = p.call(e, t)),
                !n || !Array.isArray(n) || !n.length)
              )
                return u;
              for (c = 0; c < n.length; c++)
                if (!(r = n[c])._isDestroyed) {
                  for (
                    r._updateBoundingRect(),
                      h = Math.max(0, r._left),
                      l = Math.max(0, r._top),
                      d = Math.min(window.innerWidth, r._right),
                      _ = Math.min(window.innerHeight, r._bottom),
                      o = r._element.parentNode;
                    o &&
                    o !== document &&
                    o !== document.documentElement &&
                    o !== document.body;

                  )
                    if (o.getRootNode && o instanceof DocumentFragment)
                      o = o.getRootNode().host;
                    else {
                      if (
                        ("visible" !== Nt(o, "overflow") &&
                          ((a = o.getBoundingClientRect()),
                          (h = Math.max(h, a.left)),
                          (l = Math.max(l, a.top)),
                          (d = Math.min(d, a.right)),
                          (_ = Math.min(_, a.bottom))),
                        "fixed" === Nt(o, "position"))
                      )
                        break;
                      o = o.parentNode;
                    }
                  h >= d ||
                    l >= _ ||
                    ((Oe.left = h),
                    (Oe.top = l),
                    (Oe.width = d - h),
                    (Oe.height = _ - l),
                    (s = te(qe, Oe)) > i && s > m && ((m = s), (u = r)));
                }
              return (We.length = 0), u;
            })(t, s, n);
            if (!a) return null;
            var h,
              l,
              d,
              _ = t.getGrid() !== a,
              c = 0,
              u = 0,
              f = 0,
              g = -1,
              v = !1;
            for (
              a === s
                ? ((qe.left = i._gridX + t._marginLeft),
                  (qe.top = i._gridY + t._marginTop))
                : (a._updateBorders(1, 0, 1, 0),
                  (c = a._left + a._borderLeft),
                  (u = a._top + a._borderTop)),
                d = 0;
              d < a._items.length;
              d++
            )
              (h = a._items[d])._isActive &&
                h !== t &&
                ((v = !0),
                (Oe.width = h._width),
                (Oe.height = h._height),
                (Oe.left = h._left + h._marginLeft + c),
                (Oe.top = h._top + h._marginTop + u),
                (l = te(qe, Oe)) > f && ((g = d), (f = l)));
            return (
              _ && f < n && ((g = v ? g : 0), (f = n)),
              f >= n
                ? ((Ge.grid = a), (Ge.index = g), (Ge.action = _ ? o : r), Ge)
                : null
            );
          })),
        ($e.prototype.stop = function () {
          if (this._isActive)
            if (this._isMigrating) this._finishMigration();
            else {
              var t = this._item,
                e = t._id;
              if (
                ($e.autoScroller.removeItem(t),
                wt(e),
                St(e),
                Dt(e),
                this._cancelSort(),
                this._isStarted)
              ) {
                this._unbindScrollListeners();
                var i = t._element,
                  s = this._getGrid(),
                  n = s._settings.itemDraggingClass;
                i.parentNode !== s._element &&
                  (s._element.appendChild(i),
                  t._setTranslate(this._gridX, this._gridY),
                  n && i.clientWidth),
                  Ve(i, n);
              }
              this._reset();
            }
        }),
        ($e.prototype.sort = function (t) {
          var e = this._item;
          this._isActive &&
            e._isActive &&
            this._dragMoveEvent &&
            (!0 === t ? this._handleSort() : Et(e._id, this._handleSort));
        }),
        ($e.prototype.destroy = function () {
          this._isDestroyed ||
            (this.stop(),
            this._dragger.destroy(),
            $e.autoScroller.removeItem(this._item),
            (this._isDestroyed = !0));
        }),
        ($e.prototype._getGrid = function () {
          return c[this._gridId] || null;
        }),
        ($e.prototype._reset = function () {
          (this._isActive = !1),
            (this._isStarted = !1),
            (this._container = null),
            (this._containingBlock = null),
            (this._dragStartEvent = null),
            (this._dragMoveEvent = null),
            (this._dragPrevMoveEvent = null),
            (this._scrollEvent = null),
            (this._scrollers = []),
            (this._left = 0),
            (this._top = 0),
            (this._gridX = 0),
            (this._gridY = 0),
            (this._clientX = 0),
            (this._clientY = 0),
            (this._scrollDiffX = 0),
            (this._scrollDiffY = 0),
            (this._moveDiffX = 0),
            (this._moveDiffY = 0),
            (this._containerDiffX = 0),
            (this._containerDiffY = 0);
        }),
        ($e.prototype._bindScrollListeners = function () {
          var t,
            e,
            i = this._getGrid()._element,
            s = this._container,
            n = this._scrollers;
          if (((n.length = 0), Re(this._item._element.parentNode, n), s !== i))
            for (Re(i, (t = [])), e = 0; e < t.length; e++)
              n.indexOf(t[e]) < 0 && n.push(t[e]);
          for (e = 0; e < n.length; e++)
            n[e].addEventListener("scroll", this._onScroll, ze);
        }),
        ($e.prototype._unbindScrollListeners = function () {
          var t,
            e = this._scrollers;
          for (t = 0; t < e.length; t++)
            e[t].removeEventListener("scroll", this._onScroll, ze);
          e.length = 0;
        }),
        ($e.prototype._resolveStartPredicate = function (t) {
          var e = this._startPredicateData;
          if (!(t.distance < e.distance || e.delay))
            return this._resetStartPredicate(), !0;
        }),
        ($e.prototype._forceResolveStartPredicate = function (t) {
          this._isDestroyed ||
            1 !== this._startPredicateState ||
            ((this._startPredicateState = 2), this._onStart(t));
        }),
        ($e.prototype._finishStartPredicate = function (t) {
          var e = this._item._element,
            i =
              Math.abs(t.deltaX) < 2 &&
              Math.abs(t.deltaY) < 2 &&
              t.deltaTime < 200;
          this._resetStartPredicate(),
            i &&
              (function (t) {
                if ("a" === t.tagName.toLowerCase()) {
                  var e = t.getAttribute("href");
                  if (e) {
                    var i = t.getAttribute("target");
                    i && "_self" !== i
                      ? window.open(e, i)
                      : (window.location.href = e);
                  }
                }
              })(e);
        }),
        ($e.prototype._resetHeuristics = function (t, e) {
          (this._blockedSortIndex = null),
            (this._sortX1 = this._sortX2 = t),
            (this._sortY1 = this._sortY2 = e);
        }),
        ($e.prototype._checkHeuristics = function (t, e) {
          var i = this._getGrid()._settings.dragSortHeuristics,
            s = i.minDragDistance;
          if (s <= 0) return (this._blockedSortIndex = null), !0;
          var n = t - this._sortX2,
            r = e - this._sortY2,
            o = s > 3 && i.minBounceBackAngle > 0;
          if (
            (o || (this._blockedSortIndex = null),
            Math.abs(n) > s || Math.abs(r) > s)
          ) {
            if (o) {
              var a = Math.atan2(n, r),
                h = Math.atan2(
                  this._sortX2 - this._sortX1,
                  this._sortY2 - this._sortY1
                ),
                l = Math.atan2(Math.sin(a - h), Math.cos(a - h));
              Math.abs(l) > i.minBounceBackAngle &&
                (this._blockedSortIndex = null);
            }
            return (
              (this._sortX1 = this._sortX2),
              (this._sortY1 = this._sortY2),
              (this._sortX2 = t),
              (this._sortY2 = e),
              !0
            );
          }
          return !1;
        }),
        ($e.prototype._resetStartPredicate = function () {
          var t = this._startPredicateData;
          t &&
            (t.delayTimer && (t.delayTimer = window.clearTimeout(t.delayTimer)),
            (this._startPredicateData = null));
        }),
        ($e.prototype._handleSort = function () {
          if (this._isActive) {
            var t = this._getGrid()._settings;
            if (
              !t.dragSort ||
              (!t.dragAutoScroll.sortDuringScroll &&
                $e.autoScroller.isItemScrolling(this._item))
            )
              return (
                (this._sortX1 = this._sortX2 = this._gridX),
                (this._sortY1 = this._sortY2 = this._gridY),
                (this._isSortNeeded = !0),
                void (
                  void 0 !== this._sortTimer &&
                  (this._sortTimer = window.clearTimeout(this._sortTimer))
                )
              );
            var e = this._checkHeuristics(this._gridX, this._gridY);
            if (this._isSortNeeded || e) {
              var i = t.dragSortHeuristics.sortInterval;
              i <= 0 || this._isSortNeeded
                ? ((this._isSortNeeded = !1),
                  void 0 !== this._sortTimer &&
                    (this._sortTimer = window.clearTimeout(this._sortTimer)),
                  this._checkOverlap())
                : void 0 === this._sortTimer &&
                  (this._sortTimer = window.setTimeout(
                    this._handleSortDelayed,
                    i
                  ));
            }
          }
        }),
        ($e.prototype._handleSortDelayed = function () {
          (this._isSortNeeded = !0),
            (this._sortTimer = void 0),
            Et(this._item._id, this._handleSort);
        }),
        ($e.prototype._cancelSort = function () {
          var t;
          (this._isSortNeeded = !1),
            void 0 !== this._sortTimer &&
              (this._sortTimer = window.clearTimeout(this._sortTimer)),
            (t = this._item._id),
            vt.remove(ft, ht + t);
        }),
        ($e.prototype._finishSort = function () {
          var t =
            this._getGrid()._settings.dragSort &&
            (this._isSortNeeded || void 0 !== this._sortTimer);
          this._cancelSort(), t && this._checkOverlap();
        }),
        ($e.prototype._checkOverlap = function () {
          if (this._isActive) {
            var t,
              e,
              i,
              s,
              n,
              r,
              o,
              a,
              h = this._item,
              l = this._getGrid()._settings;
            (t = Ft(l.dragSortPredicate)
              ? l.dragSortPredicate(h, this._dragMoveEvent)
              : $e.defaultSortPredicate(h, l.dragSortPredicate)) &&
              "number" == typeof t.index &&
              ((o = t.action === p ? p : m),
              (a = (e = h.getGrid()) !== (s = t.grid || e)),
              (i = e._items.indexOf(h)),
              (n = _e(s._items, t.index, a && o === m ? 1 : 0)),
              (a || n !== this._blockedSortIndex) &&
                (a
                  ? ((this._blockedSortIndex = null),
                    (r = s._items[n]),
                    e._hasListeners(x) &&
                      e._emit(x, {
                        item: h,
                        fromGrid: e,
                        fromIndex: i,
                        toGrid: s,
                        toIndex: n,
                      }),
                    s._hasListeners(T) &&
                      s._emit(T, {
                        item: h,
                        fromGrid: e,
                        fromIndex: i,
                        toGrid: s,
                        toIndex: n,
                      }),
                    (h._gridId = s._id),
                    (this._isMigrating = h._gridId !== this._gridId),
                    e._items.splice(i, 1),
                    de(s._items, h, n),
                    (h._sortData = null),
                    e._hasListeners(E) &&
                      e._emit(E, {
                        item: h,
                        fromGrid: e,
                        fromIndex: i,
                        toGrid: s,
                        toIndex: n,
                      }),
                    s._hasListeners(L) &&
                      s._emit(L, {
                        item: h,
                        fromGrid: e,
                        fromIndex: i,
                        toGrid: s,
                        toIndex: n,
                      }),
                    o === p &&
                      r &&
                      r.isActive() &&
                      s._items.indexOf(r) > -1 &&
                      s.send(r, e, i, {
                        appendTo: this._container || document.body,
                        layoutSender: !1,
                        layoutReceiver: !1,
                      }),
                    e.layout(),
                    s.layout())
                  : i !== n &&
                    ((this._blockedSortIndex = i),
                    (o === p ? ue : ce)(e._items, i, n),
                    e._hasListeners(D) &&
                      e._emit(D, {
                        item: h,
                        fromIndex: i,
                        toIndex: n,
                        action: o,
                      }),
                    e.layout())));
          }
        }),
        ($e.prototype._finishMigration = function () {
          var t,
            e,
            i = this._item,
            s = i._dragRelease,
            n = i._element,
            r = i._isActive,
            o = i.getGrid(),
            a = o._element,
            h = o._settings,
            l = h.dragContainer || a,
            d = this._getGrid()._settings,
            _ = n.parentNode,
            c = r ? d.itemVisibleClass : d.itemHiddenClass,
            u = r ? h.itemVisibleClass : h.itemHiddenClass;
          (this._isMigrating = !1),
            this.destroy(),
            d.itemClass !== h.itemClass &&
              (Ve(n, d.itemClass), ae(n, h.itemClass)),
            c !== u && (Ve(n, c), ae(n, u)),
            l !== _ &&
              (l.appendChild(n),
              (e = ke(_, l, !0)),
              ((t = He(n)).x -= e.left),
              (t.y -= e.top)),
            i._refreshDimensions(),
            (e = ke(l, a, !0)),
            (s._containerDiffX = e.left),
            (s._containerDiffY = e.top),
            (i._drag = h.dragEnabled ? new $e(i) : null),
            l !== _ && i._setTranslate(t.x, t.y),
            i._visibility.setStyles(r ? h.visibleStyles : h.hiddenStyles),
            s.start();
        }),
        ($e.prototype._preStartCheck = function (t) {
          this._startPredicateState === je && (this._startPredicateState = 1),
            1 === this._startPredicateState
              ? ((this._startPredicateResult = this._startPredicate(
                  this._item,
                  t
                )),
                !0 === this._startPredicateResult
                  ? ((this._startPredicateState = 2), this._onStart(t))
                  : !1 === this._startPredicateResult &&
                    (this._resetStartPredicate(t),
                    this._dragger._reset(),
                    (this._startPredicateState = je)))
              : 2 === this._startPredicateState &&
                this._isActive &&
                this._onMove(t);
        }),
        ($e.prototype._preEndCheck = function (t) {
          var e = 2 === this._startPredicateState;
          this._startPredicate(this._item, t),
            (this._startPredicateState = je),
            e &&
              this._isActive &&
              (this._isStarted ? this._onEnd(t) : this.stop());
        }),
        ($e.prototype._onStart = function (t) {
          var e,
            i,
            s,
            n = this._item;
          n._isActive &&
            ((this._isActive = !0),
            (this._dragStartEvent = t),
            $e.autoScroller.addItem(n),
            (e = n._id),
            (i = this._prepareStart),
            (s = this._applyStart),
            vt.add(mt, it + e, i),
            vt.add(gt, st + e, s));
        }),
        ($e.prototype._prepareStart = function () {
          if (this._isActive) {
            var t = this._item;
            if (t._isActive) {
              var e = t._element,
                i = this._getGrid(),
                s = i._settings,
                n = i._element,
                r = s.dragContainer || n,
                o = xe(r),
                a = He(e),
                h = e.getBoundingClientRect(),
                l = r !== n;
              if (
                ((this._container = r),
                (this._containingBlock = o),
                (this._clientX = h.left),
                (this._clientY = h.top),
                (this._left = this._gridX = a.x),
                (this._top = this._gridY = a.y),
                (this._scrollDiffX = this._scrollDiffY = 0),
                (this._moveDiffX = this._moveDiffY = 0),
                this._resetHeuristics(this._gridX, this._gridY),
                l)
              ) {
                var d = ke(o, n);
                (this._containerDiffX = d.left), (this._containerDiffY = d.top);
              }
            }
          }
        }),
        ($e.prototype._applyStart = function () {
          if (this._isActive) {
            var t = this._item;
            if (t._isActive) {
              var e = this._getGrid(),
                i = t._element,
                s = t._dragRelease,
                n = t._migrate,
                r = this._container !== e._element;
              t.isPositioning() && t._layout.stop(!0, this._left, this._top),
                n._isActive &&
                  ((this._left -= n._containerDiffX),
                  (this._top -= n._containerDiffY),
                  (this._gridX -= n._containerDiffX),
                  (this._gridY -= n._containerDiffY),
                  n.stop(!0, this._left, this._top)),
                t.isReleasing() && s._reset(),
                e._settings.dragPlaceholder.enabled &&
                  t._dragPlaceholder.create(),
                (this._isStarted = !0),
                e._emit("dragInit", t, this._dragStartEvent),
                r &&
                  (i.parentNode === this._container
                    ? ((this._gridX -= this._containerDiffX),
                      (this._gridY -= this._containerDiffY))
                    : ((this._left += this._containerDiffX),
                      (this._top += this._containerDiffY),
                      this._container.appendChild(i),
                      t._setTranslate(this._left, this._top))),
                ae(i, e._settings.itemDraggingClass),
                this._bindScrollListeners(),
                e._emit("dragStart", t, this._dragStartEvent);
            }
          }
        }),
        ($e.prototype._onMove = function (t) {
          var e,
            i,
            s,
            n = this._item;
          n._isActive
            ? ((this._dragMoveEvent = t),
              (e = n._id),
              (i = this._prepareMove),
              (s = this._applyMove),
              vt.add(mt, nt + e, i),
              vt.add(gt, rt + e, s),
              Et(n._id, this._handleSort))
            : this.stop();
        }),
        ($e.prototype._prepareMove = function () {
          if (this._isActive && this._item._isActive) {
            var t = this._getGrid()._settings.dragAxis,
              e = this._dragMoveEvent,
              i = this._dragPrevMoveEvent || this._dragStartEvent || e;
            if ("y" !== t) {
              var s = e.clientX - i.clientX;
              (this._left = this._left - this._moveDiffX + s),
                (this._gridX = this._gridX - this._moveDiffX + s),
                (this._clientX = this._clientX - this._moveDiffX + s),
                (this._moveDiffX = s);
            }
            if ("x" !== t) {
              var n = e.clientY - i.clientY;
              (this._top = this._top - this._moveDiffY + n),
                (this._gridY = this._gridY - this._moveDiffY + n),
                (this._clientY = this._clientY - this._moveDiffY + n),
                (this._moveDiffY = n);
            }
            this._dragPrevMoveEvent = e;
          }
        }),
        ($e.prototype._applyMove = function () {
          if (this._isActive) {
            var t = this._item;
            t._isActive &&
              ((this._moveDiffX = this._moveDiffY = 0),
              t._setTranslate(this._left, this._top),
              this._getGrid()._emit("dragMove", t, this._dragMoveEvent),
              $e.autoScroller.updateItem(t));
          }
        }),
        ($e.prototype._onScroll = function (t) {
          var e,
            i,
            s,
            n = this._item;
          n._isActive
            ? ((this._scrollEvent = t),
              (e = n._id),
              (i = this._prepareScroll),
              (s = this._applyScroll),
              vt.add(mt, ot + e, i),
              vt.add(gt, at + e, s),
              Et(n._id, this._handleSort))
            : this.stop();
        }),
        ($e.prototype._prepareScroll = function () {
          if (this._isActive) {
            var t = this._item;
            if (t._isActive) {
              var e = t._element,
                i = this._getGrid()._element,
                s = e.getBoundingClientRect();
              if (this._container !== i) {
                var n = ke(this._containingBlock, i);
                (this._containerDiffX = n.left), (this._containerDiffY = n.top);
              }
              var r = this._clientX - this._moveDiffX - s.left;
              (this._left = this._left - this._scrollDiffX + r),
                (this._scrollDiffX = r);
              var o = this._clientY - this._moveDiffY - s.top;
              (this._top = this._top - this._scrollDiffY + o),
                (this._scrollDiffY = o),
                (this._gridX = this._left - this._containerDiffX),
                (this._gridY = this._top - this._containerDiffY);
            }
          }
        }),
        ($e.prototype._applyScroll = function () {
          if (this._isActive) {
            var t = this._item;
            t._isActive &&
              ((this._scrollDiffX = this._scrollDiffY = 0),
              t._setTranslate(this._left, this._top),
              this._getGrid()._emit("dragScroll", t, this._scrollEvent));
          }
        }),
        ($e.prototype._onEnd = function (t) {
          var e = this._item,
            i = e._element,
            s = this._getGrid(),
            n = s._settings,
            r = e._dragRelease;
          e._isActive
            ? (wt(e._id),
              St(e._id),
              Dt(e._id),
              this._finishSort(),
              this._unbindScrollListeners(),
              (r._containerDiffX = this._containerDiffX),
              (r._containerDiffY = this._containerDiffY),
              this._reset(),
              Ve(i, n.itemDraggingClass),
              $e.autoScroller.removeItem(e),
              s._emit("dragEnd", e, t),
              this._isMigrating ? this._finishMigration() : r.start())
            : this.stop();
        });
      var Je = /^(webkit|moz|ms|o|Webkit|Moz|MS|O)(?=[A-Z])/,
        Ze = {};
      function Ke(t) {
        var e = Ze[t];
        return (
          e ||
          ((e = t.replace(Je, "")) !== t &&
            (e = e[0].toLowerCase() + e.slice(1)),
          (Ze[t] = e),
          e)
        );
      }
      function ti(t, e) {
        for (var i in e) t.style[i] = e[i];
      }
      var ei,
        ii,
        si = !(!Element || !Ft(Element.prototype.animate)),
        ni = !!(
          Element &&
          ((ei = Element.prototype.animate),
          (ii = window.Symbol),
          ei &&
            Ft(ii) &&
            Ft(ii.toString) &&
            ii(ei).toString().indexOf("[native code]") > -1)
        );
      function ri(t) {
        (this._element = t),
          (this._animation = null),
          (this._duration = 0),
          (this._easing = ""),
          (this._callback = null),
          (this._props = []),
          (this._values = []),
          (this._isDestroyed = !1),
          (this._onFinish = this._onFinish.bind(this));
      }
      function oi(t, e) {
        var i = {};
        for (var s in t) i[e ? s : Ke(s)] = t[s];
        return i;
      }
      function ai(t, e) {
        return "translateX(" + t + "px) translateY(" + e + "px)";
      }
      function hi(t) {
        (this._item = t),
          (this._animation = new ri()),
          (this._element = null),
          (this._className = ""),
          (this._didMigrate = !1),
          (this._resetAfterLayout = !1),
          (this._left = 0),
          (this._top = 0),
          (this._transX = 0),
          (this._transY = 0),
          (this._nextTransX = 0),
          (this._nextTransY = 0),
          (this._setupAnimation = this._setupAnimation.bind(this)),
          (this._startAnimation = this._startAnimation.bind(this)),
          (this._updateDimensions = this._updateDimensions.bind(this)),
          (this._onLayoutStart = this._onLayoutStart.bind(this)),
          (this._onLayoutEnd = this._onLayoutEnd.bind(this)),
          (this._onReleaseEnd = this._onReleaseEnd.bind(this)),
          (this._onMigrate = this._onMigrate.bind(this)),
          (this._onHide = this._onHide.bind(this));
      }
      function li(t) {
        (this._item = t),
          (this._isActive = !1),
          (this._isDestroyed = !1),
          (this._isPositioningStarted = !1),
          (this._containerDiffX = 0),
          (this._containerDiffY = 0);
      }
      function di(t) {
        var e = t._element,
          i = e.style;
        (this._item = t),
          (this._isActive = !1),
          (this._isDestroyed = !1),
          (this._isInterrupted = !1),
          (this._currentStyles = {}),
          (this._targetStyles = {}),
          (this._nextLeft = 0),
          (this._nextTop = 0),
          (this._offsetLeft = 0),
          (this._offsetTop = 0),
          (this._skipNextAnimation = !1),
          (this._animOptions = {
            onFinish: this._finish.bind(this),
            duration: 0,
            easing: 0,
          }),
          (i.left = "0px"),
          (i.top = "0px"),
          t._setTranslate(0, 0),
          (this._animation = new ri(e)),
          (this._queue = "layout-" + t._id),
          (this._setupAnimation = this._setupAnimation.bind(this)),
          (this._startAnimation = this._startAnimation.bind(this));
      }
      function _i(t) {
        (this._item = t),
          (this._isActive = !1),
          (this._isDestroyed = !1),
          (this._container = !1),
          (this._containerDiffX = 0),
          (this._containerDiffY = 0);
      }
      function ci(t) {
        var e = t._isActive,
          i = t._element,
          s = i.children[0],
          n = t.getGrid()._settings;
        if (!s)
          throw new Error("No valid child element found within item element.");
        (this._item = t),
          (this._isDestroyed = !1),
          (this._isHidden = !e),
          (this._isHiding = !1),
          (this._isShowing = !1),
          (this._childElement = s),
          (this._currentStyleProps = []),
          (this._animation = new ri(s)),
          (this._queue = "visibility-" + t._id),
          (this._finishShow = this._finishShow.bind(this)),
          (this._finishHide = this._finishHide.bind(this)),
          (i.style.display = e ? "" : "none"),
          ae(i, e ? n.itemVisibleClass : n.itemHiddenClass),
          this.setStyles(e ? n.visibleStyles : n.hiddenStyles);
      }
      (ri.prototype.start = function (t, e, i) {
        if (!this._isDestroyed) {
          var s = this._element,
            n = i || {};
          if (!si)
            return (
              ti(s, e),
              (this._callback = Ft(n.onFinish) ? n.onFinish : null),
              void this._onFinish()
            );
          var r,
            o,
            a,
            h = this._animation,
            l = this._props,
            d = this._values,
            _ = n.duration || 300,
            c = n.easing || "ease",
            u = !1;
          if (
            h &&
            ((o = 0),
            (_ === this._duration && c === this._easing) || (u = !0),
            !u)
          ) {
            for (r in e)
              if ((++o, -1 === (a = l.indexOf(r)) || e[r] !== d[a])) {
                u = !0;
                break;
              }
            o !== l.length && (u = !0);
          }
          if (
            (u && h.cancel(),
            (this._callback = Ft(n.onFinish) ? n.onFinish : null),
            !h || u)
          ) {
            for (r in ((l.length = d.length = 0), e)) l.push(r), d.push(e[r]);
            (this._duration = _),
              (this._easing = c),
              (this._animation = s.animate([oi(t, ni), oi(e, ni)], {
                duration: _,
                easing: c,
              })),
              (this._animation.onfinish = this._onFinish),
              ti(s, e);
          }
        }
      }),
        (ri.prototype.stop = function () {
          !this._isDestroyed &&
            this._animation &&
            (this._animation.cancel(),
            (this._animation = this._callback = null),
            (this._props.length = this._values.length = 0));
        }),
        (ri.prototype.getCurrentStyles = function () {
          return Qe(element, currentProps);
        }),
        (ri.prototype.isAnimating = function () {
          return !!this._animation;
        }),
        (ri.prototype.destroy = function () {
          this._isDestroyed ||
            (this.stop(), (this._element = null), (this._isDestroyed = !0));
        }),
        (ri.prototype._onFinish = function () {
          var t = this._callback;
          (this._animation = this._callback = null),
            (this._props.length = this._values.length = 0),
            t && t();
        }),
        (hi.prototype._updateDimensions = function () {
          this.isActive() &&
            ti(this._element, {
              width: this._item._width + "px",
              height: this._item._height + "px",
            });
        }),
        (hi.prototype._onLayoutStart = function (t, e) {
          var i = this._item;
          if (-1 !== t.indexOf(i)) {
            var s = i._left,
              n = i._top,
              r = this._left,
              o = this._top;
            if (
              ((this._left = s),
              (this._top = n),
              e || this._didMigrate || r !== s || o !== n)
            ) {
              var a,
                h,
                l,
                d = s + i._marginLeft,
                _ = n + i._marginTop,
                c = i.getGrid();
              if (e || !(c._settings.layoutDuration > 0) || this._didMigrate)
                return (
                  xt(i._id),
                  (this._element.style[pe] = ai(d, _)),
                  this._animation.stop(),
                  void (
                    this._didMigrate &&
                    (c.getElement().appendChild(this._element),
                    (this._didMigrate = !1))
                  )
                );
              (this._nextTransX = d),
                (this._nextTransY = _),
                (a = i._id),
                (h = this._setupAnimation),
                (l = this._startAnimation),
                vt.add(mt, lt + a, h),
                vt.add(gt, dt + a, l);
            }
          } else this.reset();
        }),
        (hi.prototype._setupAnimation = function () {
          if (this.isActive()) {
            var t = He(this._element);
            (this._transX = t.x), (this._transY = t.y);
          }
        }),
        (hi.prototype._startAnimation = function () {
          if (this.isActive()) {
            var t = this._animation,
              e = this._transX,
              i = this._transY,
              s = this._nextTransX,
              n = this._nextTransY;
            if (e !== s || i !== n) {
              var r = this._item.getGrid()._settings,
                o = {},
                a = {};
              (o[pe] = ai(e, i)),
                (a[pe] = ai(s, n)),
                t.start(o, a, {
                  duration: r.layoutDuration,
                  easing: r.layoutEasing,
                  onFinish: this._onLayoutEnd,
                });
            } else
              t.isAnimating() &&
                ((this._element.style[pe] = ai(s, n)), t.stop());
          }
        }),
        (hi.prototype._onLayoutEnd = function () {
          this._resetAfterLayout && this.reset();
        }),
        (hi.prototype._onReleaseEnd = function (t) {
          if (t._id === this._item._id) {
            if (!this._animation.isAnimating()) return void this.reset();
            this._resetAfterLayout = !0;
          }
        }),
        (hi.prototype._onMigrate = function (t) {
          if (t.item === this._item) {
            var e = this._item.getGrid(),
              i = t.toGrid;
            e.off(A, this._onReleaseEnd),
              e.off(f, this._onLayoutStart),
              e.off(x, this._onMigrate),
              e.off(b, this._onHide),
              i.on(A, this._onReleaseEnd),
              i.on(f, this._onLayoutStart),
              i.on(x, this._onMigrate),
              i.on(b, this._onHide),
              (this._didMigrate = !0);
          }
        }),
        (hi.prototype._onHide = function (t) {
          t.indexOf(this._item) > -1 && this.reset();
        }),
        (hi.prototype.create = function () {
          if (this.isActive()) this._resetAfterLayout = !1;
          else {
            var t,
              e = this._item,
              i = e.getGrid(),
              s = i._settings,
              n = this._animation;
            (this._left = e._left),
              (this._top = e._top),
              (t = Ft(s.dragPlaceholder.createElement)
                ? s.dragPlaceholder.createElement(e)
                : document.createElement("div")),
              (this._element = t),
              (n._element = t),
              (this._className = s.itemPlaceholderClass || ""),
              this._className && ae(t, this._className),
              ti(t, {
                position: "absolute",
                left: "0px",
                top: "0px",
                width: e._width + "px",
                height: e._height + "px",
              }),
              (t.style[pe] = ai(
                e._left + e._marginLeft,
                e._top + e._marginTop
              )),
              i.on(f, this._onLayoutStart),
              i.on(A, this._onReleaseEnd),
              i.on(x, this._onMigrate),
              i.on(b, this._onHide),
              Ft(s.dragPlaceholder.onCreate) &&
                s.dragPlaceholder.onCreate(e, t),
              i.getElement().appendChild(t);
          }
        }),
        (hi.prototype.reset = function () {
          if (this.isActive()) {
            var t,
              e = this._element,
              i = this._item,
              s = i.getGrid(),
              n = s._settings,
              r = this._animation;
            (this._resetAfterLayout = !1),
              xt(i._id),
              (t = i._id),
              vt.remove(gt, _t + t),
              r.stop(),
              (r._element = null),
              s.off(A, this._onReleaseEnd),
              s.off(f, this._onLayoutStart),
              s.off(x, this._onMigrate),
              s.off(b, this._onHide),
              this._className &&
                (Ve(e, this._className), (this._className = "")),
              e.parentNode.removeChild(e),
              (this._element = null),
              Ft(n.dragPlaceholder.onRemove) &&
                n.dragPlaceholder.onRemove(i, e);
          }
        }),
        (hi.prototype.isActive = function () {
          return !!this._element;
        }),
        (hi.prototype.getElement = function () {
          return this._element;
        }),
        (hi.prototype.updateDimensions = function () {
          var t, e;
          this.isActive() &&
            ((t = this._item._id),
            (e = this._updateDimensions),
            vt.add(gt, _t + t, e));
        }),
        (hi.prototype.destroy = function () {
          this.reset(),
            this._animation.destroy(),
            (this._item = this._animation = null);
        }),
        (li.prototype.start = function () {
          if (!this._isDestroyed && !this._isActive) {
            var t = this._item,
              e = t.getGrid(),
              i = e._settings;
            (this._isActive = !0),
              ae(t._element, i.itemReleasingClass),
              i.dragRelease.useDragContainer || this._placeToGrid(),
              e._emit("dragReleaseStart", t),
              e._nextLayoutData || t._layout.start(!1);
          }
        }),
        (li.prototype.stop = function (t, e, i) {
          if (!this._isDestroyed && this._isActive) {
            var s = this._item,
              n = s.getGrid();
            t ||
              (void 0 !== e && void 0 !== i) ||
              ((e = s._left), (i = s._top));
            var r = this._placeToGrid(e, i);
            this._reset(r), t || n._emit(A, s);
          }
        }),
        (li.prototype.isJustReleased = function () {
          return this._isActive && !1 === this._isPositioningStarted;
        }),
        (li.prototype.destroy = function () {
          this._isDestroyed ||
            (this.stop(!0), (this._item = null), (this._isDestroyed = !0));
        }),
        (li.prototype._placeToGrid = function (t, e) {
          if (!this._isDestroyed) {
            var i = this._item,
              s = i._element,
              n = i.getGrid()._element,
              r = !1;
            if (s.parentNode !== n) {
              if (void 0 === t || void 0 === e) {
                var o = He(s);
                (t = o.x - this._containerDiffX),
                  (e = o.y - this._containerDiffY);
              }
              n.appendChild(s), i._setTranslate(t, e), (r = !0);
            }
            return (this._containerDiffX = 0), (this._containerDiffY = 0), r;
          }
        }),
        (li.prototype._reset = function (t) {
          if (!this._isDestroyed) {
            var e = this._item,
              i = e.getGrid()._settings.itemReleasingClass;
            (this._isActive = !1),
              (this._isPositioningStarted = !1),
              (this._containerDiffX = 0),
              (this._containerDiffY = 0),
              i && (t && e._element.clientWidth, Ve(e._element, i));
          }
        }),
        (di.prototype.start = function (t, e) {
          if (!this._isDestroyed) {
            var i,
              s,
              n,
              r = this._item,
              o = r._dragRelease,
              a = r.getGrid()._settings,
              h = this._isActive,
              l = o.isJustReleased(),
              d = l ? a.dragRelease.duration : a.layoutDuration,
              _ = l ? a.dragRelease.easing : a.layoutEasing,
              c = !t && !this._skipNextAnimation && d > 0;
            if (
              (h && (yt(r._id), r._emitter.burst(this._queue, !0, r)),
              l && (o._isPositioningStarted = !0),
              Ft(e) && r._emitter.on(this._queue, e),
              (this._skipNextAnimation = !1),
              !c)
            )
              return (
                this._updateOffsets(),
                r._setTranslate(this._nextLeft, this._nextTop),
                this._animation.stop(),
                void this._finish()
              );
            this._animation.isAnimating() &&
              (this._animation._animation.onfinish = null),
              (this._isActive = !0),
              (this._animOptions.easing = _),
              (this._animOptions.duration = d),
              (this._isInterrupted = h),
              (i = r._id),
              (s = this._setupAnimation),
              (n = this._startAnimation),
              vt.add(mt, Z + i, s),
              vt.add(gt, K + i, n);
          }
        }),
        (di.prototype.stop = function (t, e, i) {
          if (!this._isDestroyed && this._isActive) {
            var s = this._item;
            if ((yt(s._id), this._animation.isAnimating())) {
              if (void 0 === e || void 0 === i) {
                var n = He(s._element);
                (e = n.x), (i = n.y);
              }
              s._setTranslate(e, i), this._animation.stop();
            }
            Ve(s._element, s.getGrid()._settings.itemPositioningClass),
              (this._isActive = !1),
              t && s._emitter.burst(this._queue, !0, s);
          }
        }),
        (di.prototype.destroy = function () {
          if (!this._isDestroyed) {
            var t = this._item._element.style;
            this.stop(!0, 0, 0),
              this._item._emitter.clear(this._queue),
              this._animation.destroy(),
              (t[pe] = ""),
              (t.left = ""),
              (t.top = ""),
              (this._item = null),
              (this._currentStyles = null),
              (this._targetStyles = null),
              (this._animOptions = null),
              (this._isDestroyed = !0);
          }
        }),
        (di.prototype._updateOffsets = function () {
          if (!this._isDestroyed) {
            var t = this._item,
              e = t._migrate,
              i = t._dragRelease;
            (this._offsetLeft = i._isActive
              ? i._containerDiffX
              : e._isActive
              ? e._containerDiffX
              : 0),
              (this._offsetTop = i._isActive
                ? i._containerDiffY
                : e._isActive
                ? e._containerDiffY
                : 0),
              (this._nextLeft = this._item._left + this._offsetLeft),
              (this._nextTop = this._item._top + this._offsetTop);
          }
        }),
        (di.prototype._finish = function () {
          if (!this._isDestroyed) {
            var t = this._item,
              e = t._migrate,
              i = t._dragRelease;
            (t._tX = this._nextLeft),
              (t._tY = this._nextTop),
              this._isActive &&
                ((this._isActive = !1),
                Ve(t._element, t.getGrid()._settings.itemPositioningClass)),
              i._isActive && i.stop(),
              e._isActive && e.stop(),
              t._emitter.burst(this._queue, !1, t);
          }
        }),
        (di.prototype._setupAnimation = function () {
          var t = this._item;
          if (void 0 === t._tX || void 0 === t._tY) {
            var e = He(t._element);
            (t._tX = e.x), (t._tY = e.y);
          }
        }),
        (di.prototype._startAnimation = function () {
          var t = this._item,
            e = t.getGrid()._settings,
            i = this._animOptions.duration <= 0;
          this._updateOffsets();
          var s = Math.abs(t._left - (t._tX - this._offsetLeft)),
            n = Math.abs(t._top - (t._tY - this._offsetTop));
          if (i || (s < 2 && n < 2))
            return (
              (s || n || this._isInterrupted) &&
                t._setTranslate(this._nextLeft, this._nextTop),
              this._animation.stop(),
              void this._finish()
            );
          this._isInterrupted || ae(t._element, e.itemPositioningClass),
            (this._currentStyles[pe] = ai(t._tX, t._tY)),
            (this._targetStyles[pe] = ai(this._nextLeft, this._nextTop)),
            (t._tX = t._tY = void 0),
            this._animation.start(
              this._currentStyles,
              this._targetStyles,
              this._animOptions
            );
        }),
        (_i.prototype.start = function (t, e, i) {
          if (!this._isDestroyed) {
            var s,
              n,
              r,
              o,
              a,
              h,
              l,
              d,
              _,
              c,
              u = this._item,
              p = u._element,
              m = u.isActive(),
              f = u.isVisible(),
              g = u.getGrid(),
              v = g._settings,
              y = t._settings,
              b = t._element,
              w = t._items,
              S = g._items.indexOf(u),
              D = i || document.body;
            if ("number" == typeof e) s = _e(w, e, 1);
            else {
              if (!(n = t.getItem(e))) return;
              s = w.indexOf(n);
            }
            (u.isPositioning() || this._isActive || u.isReleasing()) &&
              ((l = (h = He(p)).x), (d = h.y)),
              u.isPositioning() && u._layout.stop(!0, l, d),
              this._isActive &&
                ((l -= this._containerDiffX),
                (d -= this._containerDiffY),
                this.stop(!0, l, d)),
              u.isReleasing() &&
                ((l -= u._dragRelease._containerDiffX),
                (d -= u._dragRelease._containerDiffY),
                u._dragRelease.stop(!0, l, d)),
              u._visibility.stop(!0),
              u._drag && u._drag.destroy(),
              g._hasListeners(x) &&
                g._emit(x, {
                  item: u,
                  fromGrid: g,
                  fromIndex: S,
                  toGrid: t,
                  toIndex: s,
                }),
              t._hasListeners(T) &&
                t._emit(T, {
                  item: u,
                  fromGrid: g,
                  fromIndex: S,
                  toGrid: t,
                  toIndex: s,
                }),
              v.itemClass !== y.itemClass &&
                (Ve(p, v.itemClass), ae(p, y.itemClass)),
              (_ = f ? v.itemVisibleClass : v.itemHiddenClass) !==
                (c = f ? y.itemVisibleClass : y.itemHiddenClass) &&
                (Ve(p, _), ae(p, c)),
              g._items.splice(S, 1),
              de(w, u, s),
              (u._gridId = t._id),
              m
                ? D !== (r = p.parentNode) &&
                  (D.appendChild(p),
                  (o = ke(D, r, !0)),
                  h || ((l = (h = He(p)).x), (d = h.y)),
                  u._setTranslate(l + o.left, d + o.top))
                : b.appendChild(p),
              u._visibility.setStyles(f ? y.visibleStyles : y.hiddenStyles),
              m && (a = ke(D, b, !0)),
              u._refreshDimensions(),
              (u._sortData = null),
              (u._drag = y.dragEnabled ? new $e(u) : null),
              m
                ? ((this._isActive = !0),
                  (this._container = D),
                  (this._containerDiffX = a.left),
                  (this._containerDiffY = a.top))
                : ((this._isActive = !1),
                  (this._container = null),
                  (this._containerDiffX = 0),
                  (this._containerDiffY = 0)),
              g._hasListeners(E) &&
                g._emit(E, {
                  item: u,
                  fromGrid: g,
                  fromIndex: S,
                  toGrid: t,
                  toIndex: s,
                }),
              t._hasListeners(L) &&
                t._emit(L, {
                  item: u,
                  fromGrid: g,
                  fromIndex: S,
                  toGrid: t,
                  toIndex: s,
                });
          }
        }),
        (_i.prototype.stop = function (t, e, i) {
          if (!this._isDestroyed && this._isActive) {
            var s,
              n = this._item,
              r = n._element,
              o = n.getGrid()._element;
            this._container !== o &&
              ((void 0 !== e && void 0 !== i) ||
                (t
                  ? ((e = (s = He(r)).x - this._containerDiffX),
                    (i = s.y - this._containerDiffY))
                  : ((e = n._left), (i = n._top))),
              o.appendChild(r),
              n._setTranslate(e, i)),
              (this._isActive = !1),
              (this._container = null),
              (this._containerDiffX = 0),
              (this._containerDiffY = 0);
          }
        }),
        (_i.prototype.destroy = function () {
          this._isDestroyed ||
            (this.stop(!0), (this._item = null), (this._isDestroyed = !0));
        }),
        (ci.prototype.show = function (t, e) {
          if (!this._isDestroyed) {
            var i = this._item,
              s = i._element,
              n = Ft(e) ? e : null,
              r = i.getGrid()._settings;
            this._isShowing || this._isHidden
              ? !this._isShowing || t
                ? (this._isShowing ||
                    (i._emitter.burst(this._queue, !0, i),
                    Ve(s, r.itemHiddenClass),
                    ae(s, r.itemVisibleClass),
                    this._isHiding || (s.style.display = "")),
                  n && i._emitter.on(this._queue, n),
                  (this._isShowing = !0),
                  (this._isHiding = this._isHidden = !1),
                  this._startAnimation(!0, t, this._finishShow))
                : n && i._emitter.on(this._queue, n)
              : n && n(!1, i);
          }
        }),
        (ci.prototype.hide = function (t, e) {
          if (!this._isDestroyed) {
            var i = this._item,
              s = i._element,
              n = Ft(e) ? e : null,
              r = i.getGrid()._settings;
            this._isHiding || !this._isHidden
              ? !this._isHiding || t
                ? (this._isHiding ||
                    (i._emitter.burst(this._queue, !0, i),
                    ae(s, r.itemHiddenClass),
                    Ve(s, r.itemVisibleClass)),
                  n && i._emitter.on(this._queue, n),
                  (this._isHidden = this._isHiding = !0),
                  (this._isShowing = !1),
                  this._startAnimation(!1, t, this._finishHide))
                : n && i._emitter.on(this._queue, n)
              : n && n(!1, i);
          }
        }),
        (ci.prototype.stop = function (t) {
          if (!this._isDestroyed && (this._isHiding || this._isShowing)) {
            var e = this._item;
            bt(e._id),
              this._animation.stop(),
              t && e._emitter.burst(this._queue, !0, e);
          }
        }),
        (ci.prototype.setStyles = function (t) {
          var e = this._childElement,
            i = this._currentStyleProps;
          for (var s in (this._removeCurrentStyles(), t))
            i.push(s), (e.style[s] = t[s]);
        }),
        (ci.prototype.destroy = function () {
          if (!this._isDestroyed) {
            var t = this._item,
              e = t._element,
              i = t.getGrid()._settings;
            this.stop(!0),
              t._emitter.clear(this._queue),
              this._animation.destroy(),
              this._removeCurrentStyles(),
              Ve(e, i.itemVisibleClass),
              Ve(e, i.itemHiddenClass),
              (e.style.display = ""),
              (this._isHiding = this._isShowing = !1),
              (this._isDestroyed = this._isHidden = !0);
          }
        }),
        (ci.prototype._startAnimation = function (t, e, i) {
          if (!this._isDestroyed) {
            var s,
              n = this._item,
              r = this._animation,
              o = this._childElement,
              a = n.getGrid()._settings,
              h = t ? a.visibleStyles : a.hiddenStyles,
              l = t ? a.showDuration : a.hideDuration,
              d = t ? a.showEasing : a.hideEasing,
              _ = e || l <= 0;
            if (h) {
              if ((bt(n._id), _)) return ti(o, h), r.stop(), void (i && i());
              var c, u, p;
              r.isAnimating() && (r._animation.onfinish = null),
                (c = n._id),
                (u = function () {
                  s = Qe(o, h);
                }),
                (p = function () {
                  r.start(s, h, { duration: l, easing: d, onFinish: i });
                }),
                vt.add(mt, tt + c, u),
                vt.add(gt, et + c, p);
            } else i && i();
          }
        }),
        (ci.prototype._finishShow = function () {
          this._isHidden ||
            ((this._isShowing = !1),
            this._item._emitter.burst(this._queue, !1, this._item));
        }),
        (ci.prototype._finishHide = function () {
          if (this._isHidden) {
            var t = this._item;
            (this._isHiding = !1),
              t._layout.stop(!0, 0, 0),
              (t._element.style.display = "none"),
              t._emitter.burst(this._queue, !1, t);
          }
        }),
        (ci.prototype._removeCurrentStyles = function () {
          for (
            var t = this._childElement, e = this._currentStyleProps, i = 0;
            i < e.length;
            i++
          )
            t.style[e[i]] = "";
          e.length = 0;
        });
      var ui = 0;
      function pi() {
        return ++ui;
      }
      function mi(t, e, i) {
        var s = t._settings;
        if (u) {
          if (u.has(e))
            throw new Error("You can only create one Muuri Item per element!");
          u.set(e, this);
        }
        (this._id = pi()),
          (this._gridId = t._id),
          (this._element = e),
          (this._isDestroyed = !1),
          (this._left = 0),
          (this._top = 0),
          (this._width = 0),
          (this._height = 0),
          (this._marginLeft = 0),
          (this._marginRight = 0),
          (this._marginTop = 0),
          (this._marginBottom = 0),
          (this._tX = void 0),
          (this._tY = void 0),
          (this._sortData = null),
          (this._emitter = new C()),
          e.parentNode !== t._element && t._element.appendChild(e),
          ae(e, s.itemClass),
          "boolean" != typeof i && (i = "none" !== Nt(e, "display")),
          (this._isActive = i),
          (this._visibility = new ci(this)),
          (this._layout = new di(this)),
          (this._migrate = new _i(this)),
          (this._drag = s.dragEnabled ? new $e(this) : null),
          (this._dragRelease = new li(this)),
          (this._dragPlaceholder = new hi(this));
      }
      function fi(t) {
        var e,
          i,
          s,
          n,
          r,
          o = 0.001,
          a = 0.5;
        function h(t) {
          return ((((1e3 * t + 0.5) << 0) / 10) << 0) / 100;
        }
        function l() {
          (this.currentRects = []),
            (this.nextRects = []),
            (this.rectTarget = {}),
            (this.rectStore = []),
            (this.slotSizes = []),
            (this.rectId = 0),
            (this.slotIndex = -1),
            (this.slotData = { left: 0, top: 0, width: 0, height: 0 }),
            (this.sortRectsLeftTop = this.sortRectsLeftTop.bind(this)),
            (this.sortRectsTopLeft = this.sortRectsTopLeft.bind(this));
        }
        if (
          ((l.prototype.computeLayout = function (t, e) {
            var i,
              s,
              n,
              r,
              o,
              a,
              l = t.items,
              d = t.slots,
              _ = !!(1 & e),
              c = !!(2 & e),
              u = !!(4 & e),
              p = !!(8 & e),
              m = !!(16 & e),
              f = "number" == typeof l[0];
            if (!l.length) return t;
            for (s = f ? 2 : 1, i = 0; i < l.length; i += s)
              f
                ? ((r = l[i]), (o = l[i + 1]))
                : ((r = (n = l[i])._width + n._marginLeft + n._marginRight),
                  (o = n._height + n._marginTop + n._marginBottom)),
                m && ((r = h(r)), (o = h(o))),
                (a = this.computeNextSlot(t, r, o, _, c)),
                c
                  ? a.left + a.width > t.width && (t.width = a.left + a.width)
                  : a.top + a.height > t.height &&
                    (t.height = a.top + a.height),
                (d[++this.slotIndex] = a.left),
                (d[++this.slotIndex] = a.top),
                (u || p) && this.slotSizes.push(a.width, a.height);
            if (u)
              for (i = 0; i < d.length; i += 2)
                d[i] = t.width - (d[i] + this.slotSizes[i]);
            if (p)
              for (i = 1; i < d.length; i += 2)
                d[i] = t.height - (d[i] + this.slotSizes[i]);
            return (
              (this.slotSizes.length = 0),
              (this.currentRects.length = 0),
              (this.nextRects.length = 0),
              (this.rectStore.length = 0),
              (this.rectId = 0),
              (this.slotIndex = -1),
              t
            );
          }),
          (l.prototype.computeNextSlot = function (t, e, i, s, n) {
            var r,
              h,
              l,
              d,
              _,
              c = this.slotData,
              u = this.currentRects,
              p = this.nextRects,
              m = !1;
            for (
              p.length = 0,
                c.left = null,
                c.top = null,
                c.width = e,
                c.height = i,
                d = 0;
              d < u.length;
              d++
            )
              if (
                (h = u[d]) &&
                ((r = this.getRect(h)),
                c.width <= r.width + o && c.height <= r.height + o)
              ) {
                (c.left = r.left), (c.top = r.top);
                break;
              }
            if (
              (null === c.left &&
                (n
                  ? ((c.left = t.width), (c.top = 0))
                  : ((c.left = 0), (c.top = t.height)),
                s || (m = !0)),
              !n &&
                c.top + c.height > t.height + o &&
                (c.left > a && p.push(this.addRect(0, t.height, c.left, 1 / 0)),
                c.left + c.width < t.width - a &&
                  p.push(
                    this.addRect(
                      c.left + c.width,
                      t.height,
                      t.width - c.left - c.width,
                      1 / 0
                    )
                  ),
                (t.height = c.top + c.height)),
              n &&
                c.left + c.width > t.width + o &&
                (c.top > a && p.push(this.addRect(t.width, 0, 1 / 0, c.top)),
                c.top + c.height < t.height - a &&
                  p.push(
                    this.addRect(
                      t.width,
                      c.top + c.height,
                      1 / 0,
                      t.height - c.top - c.height
                    )
                  ),
                (t.width = c.left + c.width)),
              !m)
            )
              for (s && (d = 0); d < u.length; d++)
                if ((h = u[d]))
                  for (
                    r = this.getRect(h), l = this.splitRect(r, c), _ = 0;
                    _ < l.length;
                    _++
                  )
                    (h = l[_]),
                      (r = this.getRect(h)),
                      (n
                        ? r.left + o < t.width - o
                        : r.top + o < t.height - o) && p.push(h);
            return (
              p.length > 1 &&
                this.purgeRects(p).sort(
                  n ? this.sortRectsLeftTop : this.sortRectsTopLeft
                ),
              (this.currentRects = p),
              (this.nextRects = u),
              c
            );
          }),
          (l.prototype.addRect = function (t, e, i, s) {
            var n = ++this.rectId;
            return (
              (this.rectStore[n] = t || 0),
              (this.rectStore[++this.rectId] = e || 0),
              (this.rectStore[++this.rectId] = i || 0),
              (this.rectStore[++this.rectId] = s || 0),
              n
            );
          }),
          (l.prototype.getRect = function (t, e) {
            return (
              e || (e = this.rectTarget),
              (e.left = this.rectStore[t] || 0),
              (e.top = this.rectStore[++t] || 0),
              (e.width = this.rectStore[++t] || 0),
              (e.height = this.rectStore[++t] || 0),
              e
            );
          }),
          (l.prototype.splitRect =
            ((e = []),
            (i = 0),
            (s = 0),
            function (t, n) {
              return (
                (e.length = 0),
                t.left + t.width <= n.left + o ||
                n.left + n.width <= t.left + o ||
                t.top + t.height <= n.top + o ||
                n.top + n.height <= t.top + o
                  ? (e.push(this.addRect(t.left, t.top, t.width, t.height)), e)
                  : ((i = n.left - t.left) >= a &&
                      e.push(this.addRect(t.left, t.top, i, t.height)),
                    (i = t.left + t.width - (n.left + n.width)) >= a &&
                      e.push(
                        this.addRect(n.left + n.width, t.top, i, t.height)
                      ),
                    (s = n.top - t.top) >= a &&
                      e.push(this.addRect(t.left, t.top, t.width, s)),
                    (s = t.top + t.height - (n.top + n.height)) >= a &&
                      e.push(
                        this.addRect(t.left, n.top + n.height, t.width, s)
                      ),
                    e)
              );
            })),
          (l.prototype.isRectAWithinRectB = function (t, e) {
            return (
              t.left + o >= e.left &&
              t.top + o >= e.top &&
              t.left + t.width - o <= e.left + e.width &&
              t.top + t.height - o <= e.top + e.height
            );
          }),
          (l.prototype.purgeRects =
            ((n = {}),
            (r = {}),
            function (t) {
              for (var e, i = t.length; i--; )
                if (((e = t.length), t[i]))
                  for (this.getRect(t[i], n); e--; )
                    if (
                      t[e] &&
                      i !== e &&
                      (this.getRect(t[e], r), this.isRectAWithinRectB(n, r))
                    ) {
                      t[i] = 0;
                      break;
                    }
              return t;
            })),
          (l.prototype.sortRectsTopLeft = (function () {
            var t = {},
              e = {};
            return function (i, s) {
              return (
                this.getRect(i, t),
                this.getRect(s, e),
                t.top < e.top && t.top + o < e.top
                  ? -1
                  : t.top > e.top && t.top - o > e.top
                  ? 1
                  : t.left < e.left && t.left + o < e.left
                  ? -1
                  : t.left > e.left && t.left - o > e.left
                  ? 1
                  : 0
              );
            };
          })()),
          (l.prototype.sortRectsLeftTop = (function () {
            var t = {},
              e = {};
            return function (i, s) {
              return (
                this.getRect(i, t),
                this.getRect(s, e),
                t.left < e.left && t.left + o < e.left
                  ? -1
                  : t.left > e.left && t.left - o < e.left
                  ? 1
                  : t.top < e.top && t.top + o < e.top
                  ? -1
                  : t.top > e.top && t.top - o > e.top
                  ? 1
                  : 0
              );
            };
          })()),
          t)
        ) {
          var d = new l();
          self.onmessage = function (t) {
            var e = new Float32Array(t.data),
              i = e.subarray(4, e.length),
              s = new Float32Array(i.length),
              n = e[3],
              r = { items: i, slots: s, width: e[1], height: e[2] };
            d.computeLayout(r, n),
              (e[1] = r.width),
              (e[2] = r.height),
              e.set(r.slots, 4),
              postMessage(e.buffer, [e.buffer]);
          };
        }
        return l;
      }
      (mi.prototype.getGrid = function () {
        return c[this._gridId];
      }),
        (mi.prototype.getElement = function () {
          return this._element;
        }),
        (mi.prototype.getWidth = function () {
          return this._width;
        }),
        (mi.prototype.getHeight = function () {
          return this._height;
        }),
        (mi.prototype.getMargin = function () {
          return {
            left: this._marginLeft,
            right: this._marginRight,
            top: this._marginTop,
            bottom: this._marginBottom,
          };
        }),
        (mi.prototype.getPosition = function () {
          return { left: this._left, top: this._top };
        }),
        (mi.prototype.isActive = function () {
          return this._isActive;
        }),
        (mi.prototype.isVisible = function () {
          return !!this._visibility && !this._visibility._isHidden;
        }),
        (mi.prototype.isShowing = function () {
          return !(!this._visibility || !this._visibility._isShowing);
        }),
        (mi.prototype.isHiding = function () {
          return !(!this._visibility || !this._visibility._isHiding);
        }),
        (mi.prototype.isPositioning = function () {
          return !(!this._layout || !this._layout._isActive);
        }),
        (mi.prototype.isDragging = function () {
          return !(!this._drag || !this._drag._isActive);
        }),
        (mi.prototype.isReleasing = function () {
          return !(!this._dragRelease || !this._dragRelease._isActive);
        }),
        (mi.prototype.isDestroyed = function () {
          return this._isDestroyed;
        }),
        (mi.prototype._refreshDimensions = function (t) {
          if (
            !(this._isDestroyed || (!0 !== t && this._visibility._isHidden))
          ) {
            var e = this._element,
              i = this._dragPlaceholder,
              s = e.getBoundingClientRect();
            (this._width = s.width),
              (this._height = s.height),
              (this._marginLeft = Math.max(0, Xt(e, "margin-left"))),
              (this._marginRight = Math.max(0, Xt(e, "margin-right"))),
              (this._marginTop = Math.max(0, Xt(e, "margin-top"))),
              (this._marginBottom = Math.max(0, Xt(e, "margin-bottom"))),
              i && i.updateDimensions();
          }
        }),
        (mi.prototype._refreshSortData = function () {
          if (!this._isDestroyed) {
            var t,
              e = (this._sortData = {}),
              i = this.getGrid()._settings.sortData;
            for (t in i) e[t] = i[t](this, this._element);
          }
        }),
        (mi.prototype._addToLayout = function (t, e) {
          !0 !== this._isActive &&
            ((this._isActive = !0),
            (this._left = t || 0),
            (this._top = e || 0));
        }),
        (mi.prototype._removeFromLayout = function () {
          !1 !== this._isActive &&
            ((this._isActive = !1), (this._left = 0), (this._top = 0));
        }),
        (mi.prototype._canSkipLayout = function (t, e) {
          return (
            this._left === t &&
            this._top === e &&
            !this._migrate._isActive &&
            !this._layout._skipNextAnimation &&
            !this._dragRelease.isJustReleased()
          );
        }),
        (mi.prototype._setTranslate = function (t, e) {
          return (
            (this._tX !== t || this._tY !== e) &&
            ((this._tX = t),
            (this._tY = e),
            (this._element.style[pe] = ai(t, e)),
            !0)
          );
        }),
        (mi.prototype._destroy = function (t) {
          if (!this._isDestroyed) {
            var e = this._element,
              i = this.getGrid()._settings;
            this._dragPlaceholder.destroy(),
              this._dragRelease.destroy(),
              this._migrate.destroy(),
              this._layout.destroy(),
              this._visibility.destroy(),
              this._drag && this._drag.destroy(),
              this._emitter.destroy(),
              Ve(e, i.itemClass),
              t && e.parentNode.removeChild(e),
              u && u.delete(e),
              (this._isActive = !1),
              (this._isDestroyed = !0);
          }
        });
      var gi = fi(),
        vi = null,
        yi = [];
      function bi(t, e) {
        if (
          ((this._options = 0),
          (this._processor = null),
          (this._layoutQueue = []),
          (this._layouts = {}),
          (this._layoutCallbacks = {}),
          (this._layoutWorkers = {}),
          (this._layoutWorkerData = {}),
          (this._workers = []),
          (this._onWorkerMessage = this._onWorkerMessage.bind(this)),
          this.setOptions(e),
          (t = "number" == typeof t ? Math.max(0, t) : 0) &&
            window.Worker &&
            window.URL &&
            window.Blob)
        )
          try {
            this._workers = (function (t, e) {
              var i = [];
              if (t > 0) {
                vi ||
                  (vi = URL.createObjectURL(
                    new Blob(["(" + fi.toString() + ")(true)"], {
                      type: "application/javascript",
                    })
                  ));
                for (var s, n = 0; n < t; n++)
                  (s = new Worker(vi)),
                    e && (s.onmessage = e),
                    i.push(s),
                    yi.push(s);
              }
              return i;
            })(t, this._onWorkerMessage);
          } catch (t) {
            this._processor = new gi();
          }
        else this._processor = new gi();
      }
      (bi.prototype._sendToWorker = function () {
        if (this._layoutQueue.length && this._workers.length) {
          var t = this._layoutQueue.shift(),
            e = this._workers.pop(),
            i = this._layoutWorkerData[t];
          delete this._layoutWorkerData[t],
            (this._layoutWorkers[t] = e),
            e.postMessage(i.buffer, [i.buffer]);
        }
      }),
        (bi.prototype._onWorkerMessage = function (t) {
          var e = new Float32Array(t.data),
            i = e[0],
            s = this._layouts[i],
            n = this._layoutCallbacks[i],
            r = this._layoutWorkers[i];
          s && delete this._layouts[i],
            n && delete this._layoutCallbacks[i],
            r && delete this._layoutWorkers[i],
            s &&
              n &&
              ((s.width = e[1]),
              (s.height = e[2]),
              (s.slots = e.subarray(4, e.length)),
              this._finalizeLayout(s),
              n(s)),
            r && (this._workers.push(r), this._sendToWorker());
        }),
        (bi.prototype._finalizeLayout = function (t) {
          var e = t._grid,
            i = 2 & t._settings,
            s = "border-box" === e._boxSizing;
          return (
            delete t._grid,
            delete t._settings,
            (t.styles = {}),
            i
              ? (t.styles.width =
                  (s ? t.width + e._borderLeft + e._borderRight : t.width) +
                  "px")
              : (t.styles.height =
                  (s ? t.height + e._borderTop + e._borderBottom : t.height) +
                  "px"),
            t
          );
        }),
        (bi.prototype.setOptions = function (t) {
          var e, i, s, n, r;
          t &&
            ((e =
              "boolean" == typeof t.fillGaps
                ? t.fillGaps
                  ? 1
                  : 0
                : 1 & this._options),
            (i =
              "boolean" == typeof t.horizontal
                ? t.horizontal
                  ? 2
                  : 0
                : 2 & this._options),
            (s =
              "boolean" == typeof t.alignRight
                ? t.alignRight
                  ? 4
                  : 0
                : 4 & this._options),
            (n =
              "boolean" == typeof t.alignBottom
                ? t.alignBottom
                  ? 8
                  : 0
                : 8 & this._options),
            (r =
              "boolean" == typeof t.rounding
                ? t.rounding
                  ? 16
                  : 0
                : 16 & this._options),
            (this._options = e | i | s | n | r));
        }),
        (bi.prototype.createLayout = function (t, e, i, s, n, r) {
          if (this._layouts[e])
            throw new Error(
              "A layout with the provided id is currently being processed."
            );
          var o = 2 & this._options,
            a = {
              id: e,
              items: i,
              slots: null,
              width: o ? 0 : s,
              height: o ? n : 0,
              _grid: t,
              _settings: this._options,
            };
          if (!i.length)
            return (a.slots = []), this._finalizeLayout(a), void r(a);
          if (this._processor)
            return (
              (a.slots = window.Float32Array
                ? new Float32Array(2 * i.length)
                : new Array(2 * i.length)),
              this._processor.computeLayout(a, a._settings),
              this._finalizeLayout(a),
              void r(a)
            );
          var h,
            l,
            d,
            _ = new Float32Array(4 + 2 * i.length);
          for (
            _[0] = e,
              _[1] = a.width,
              _[2] = a.height,
              _[3] = a._settings,
              h = 0,
              l = 3;
            h < i.length;
            h++
          )
            (d = i[h]),
              (_[++l] = d._width + d._marginLeft + d._marginRight),
              (_[++l] = d._height + d._marginTop + d._marginBottom);
          return (
            this._layoutQueue.push(e),
            (this._layouts[e] = a),
            (this._layoutCallbacks[e] = r),
            (this._layoutWorkerData[e] = _),
            this._sendToWorker(),
            this.cancelLayout.bind(this, e)
          );
        }),
        (bi.prototype.cancelLayout = function (t) {
          if (
            this._layouts[t] &&
            (delete this._layouts[t],
            delete this._layoutCallbacks[t],
            this._layoutWorkerData[t])
          ) {
            delete this._layoutWorkerData[t];
            var e = this._layoutQueue.indexOf(t);
            e > -1 && this._layoutQueue.splice(e, 1);
          }
        }),
        (bi.prototype.destroy = function () {
          for (var t in this._layoutWorkers)
            this._workers.push(this._layoutWorkers[t]);
          !(function (t) {
            for (var e, i, s = 0; s < t.length; s++)
              ((e = t[s]).onmessage = null),
                (e.onerror = null),
                (e.onmessageerror = null),
                e.terminate(),
                (i = yi.indexOf(e)) > -1 && yi.splice(i, 1);
            vi && !yi.length && (URL.revokeObjectURL(vi), (vi = null));
          })(this._workers),
            (this._workers.length = 0),
            (this._layoutQueue.length = 0),
            (this._layouts = {}),
            (this._layoutCallbacks = {}),
            (this._layoutWorkers = {}),
            (this._layoutWorkerData = {});
        });
      var wi = 0;
      var Si = "[object HTMLCollection]",
        Di = "[object NodeList]";
      function Ei(t) {
        var e = Object.prototype.toString.call(t);
        return e === Si || e === Di;
      }
      var xi = "object",
        Li = "[object Object]",
        Ti = Object.prototype.toString;
      function Ai(t) {
        return typeof t === xi && Ti.call(t) === Li;
      }
      function Ii() {}
      var ki,
        Pi = "number",
        Ci = "string",
        Ri = "instant",
        Fi = 0;
      function Mi(t, e) {
        if (
          (typeof t === Ci && (t = document.querySelector(t)),
          !(t.getRootNode
            ? t.getRootNode({ composed: !0 }) === document
            : document.body.contains(t)) || t === document.documentElement)
        )
          throw new Error("Container element must be an existing DOM element.");
        var i = (function (t, e) {
          var i = Ni({}, t);
          return (
            e && (i = Ni(i, e)),
            e && e.visibleStyles
              ? (i.visibleStyles = e.visibleStyles)
              : t && t.visibleStyles && (i.visibleStyles = t.visibleStyles),
            e && e.hiddenStyles
              ? (i.hiddenStyles = e.hiddenStyles)
              : t && t.hiddenStyles && (i.hiddenStyles = t.hiddenStyles),
            i
          );
        })(Mi.defaultOptions, e);
        (i.visibleStyles = Xi(i.visibleStyles)),
          (i.hiddenStyles = Xi(i.hiddenStyles)),
          Ft(i.dragSort) || (i.dragSort = !!i.dragSort),
          (this._id = pi()),
          (this._element = t),
          (this._settings = i),
          (this._isDestroyed = !1),
          (this._items = []),
          (this._layout = { id: 0, items: [], slots: [] }),
          (this._isLayoutFinished = !0),
          (this._nextLayoutData = null),
          (this._emitter = new C()),
          (this._onLayoutDataReceived = this._onLayoutDataReceived.bind(this)),
          (c[this._id] = this),
          ae(t, i.containerClass),
          (function (t, e) {
            typeof e !== Pi && (e = !0 === e ? 0 : -1),
              e >= 0 &&
                ((t._resizeHandler = (function (t, e) {
                  var i = ++wi,
                    s = 0,
                    n = 0,
                    r = !1,
                    o = function (e) {
                      r ||
                        (n && (s -= e - n),
                        (n = e),
                        s > 0
                          ? (function (t, e) {
                              vt.add(mt, pt + t, e);
                            })(i, o)
                          : ((s = n = 0), t()));
                    };
                  return function (a) {
                    if (!r) {
                      if (!(e <= 0))
                        return !0 === a
                          ? ((r = !0),
                            (s = n = 0),
                            (o = void 0),
                            void (function (t) {
                              vt.remove(mt, pt + t);
                            })(i))
                          : void (s <= 0 ? ((s = e), o(0)) : (s = e));
                      !0 !== a && t();
                    }
                  };
                })(function () {
                  t.refreshItems().layout();
                }, e)),
                window.addEventListener("resize", t._resizeHandler));
          })(this, i.layoutOnResize),
          this.add(
            (function (t, e) {
              if ("*" === e) return t.children;
              if (typeof e === Ci) {
                for (var i = [], s = t.children, n = 0; n < s.length; n++)
                  oe(s[n], e) && i.push(s[n]);
                return i;
              }
              return Array.isArray(e) || Ei(e) ? e : [];
            })(t, i.items),
            { layout: !1 }
          ),
          i.layoutOnInit && this.layout(!0);
      }
      function Ni(t, e) {
        var i,
          s,
          n,
          r = Object.keys(e),
          o = r.length;
        for (n = 0; n < o; n++)
          (i = Ai(e[(s = r[n])])),
            Ai(t[s]) && i
              ? (t[s] = Ni(Ni({}, t[s]), e[s]))
              : i
              ? (t[s] = Ni({}, e[s]))
              : Array.isArray(e[s])
              ? (t[s] = e[s].slice(0))
              : (t[s] = e[s]);
        return t;
      }
      function Xi(t) {
        var e,
          i,
          s = {},
          n = document.documentElement.style;
        for (e in t) t[e] && (i = X(n, e)) && (s[i] = t[e]);
        return s;
      }
      function Yi(t) {
        for (var e = {}, i = 0; i < t.length; i++) e[t[i]._id] = i;
        return e;
      }
      function Bi(t, e, i) {
        return t[e._id] - t[i._id];
      }
      (Mi.Item = mi),
        (Mi.ItemLayout = di),
        (Mi.ItemVisibility = ci),
        (Mi.ItemMigrate = _i),
        (Mi.ItemDrag = $e),
        (Mi.ItemDragRelease = li),
        (Mi.ItemDragPlaceholder = hi),
        (Mi.Emitter = C),
        (Mi.Animator = ri),
        (Mi.Dragger = z),
        (Mi.Packer = bi),
        (Mi.AutoScroller = se),
        (Mi.defaultPacker = new bi(2)),
        (Mi.defaultOptions = {
          items: "*",
          showDuration: 300,
          showEasing: "ease",
          hideDuration: 300,
          hideEasing: "ease",
          visibleStyles: { opacity: "1", transform: "scale(1)" },
          hiddenStyles: { opacity: "0", transform: "scale(0.5)" },
          layout: {
            fillGaps: !1,
            horizontal: !1,
            alignRight: !1,
            alignBottom: !1,
            rounding: !1,
          },
          layoutOnResize: 150,
          layoutOnInit: !0,
          layoutDuration: 300,
          layoutEasing: "ease",
          sortData: null,
          dragEnabled: !1,
          dragContainer: null,
          dragHandle: null,
          dragStartPredicate: { distance: 0, delay: 0 },
          dragAxis: "xy",
          dragSort: !0,
          dragSortHeuristics: {
            sortInterval: 100,
            minDragDistance: 10,
            minBounceBackAngle: 1,
          },
          dragSortPredicate: { threshold: 50, action: m, migrateAction: m },
          dragRelease: { duration: 300, easing: "ease", useDragContainer: !0 },
          dragCssProps: {
            touchAction: "none",
            userSelect: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0, 0, 0, 0)",
            touchCallout: "none",
            contentZooming: "none",
          },
          dragPlaceholder: {
            enabled: !1,
            createElement: null,
            onCreate: null,
            onRemove: null,
          },
          dragAutoScroll: {
            targets: [],
            handle: null,
            threshold: 50,
            safeZone: 0.2,
            speed: se.smoothSpeed(1e3, 2e3, 2500),
            sortDuringScroll: !0,
            smoothStop: !1,
            onStart: null,
            onStop: null,
          },
          containerClass: "muuri",
          itemClass: "muuri-item",
          itemVisibleClass: "muuri-item-shown",
          itemHiddenClass: "muuri-item-hidden",
          itemPositioningClass: "muuri-item-positioning",
          itemDraggingClass: "muuri-item-dragging",
          itemReleasingClass: "muuri-item-releasing",
          itemPlaceholderClass: "muuri-item-placeholder",
        }),
        (Mi.prototype.on = function (t, e) {
          return this._emitter.on(t, e), this;
        }),
        (Mi.prototype.off = function (t, e) {
          return this._emitter.off(t, e), this;
        }),
        (Mi.prototype.getElement = function () {
          return this._element;
        }),
        (Mi.prototype.getItem = function (t) {
          if (this._isDestroyed || (!t && 0 !== t)) return null;
          if (typeof t === Pi)
            return this._items[t > -1 ? t : this._items.length + t] || null;
          if (t instanceof mi) return t._gridId === this._id ? t : null;
          if (u) {
            var e = u.get(t);
            return e && e._gridId === this._id ? e : null;
          }
          for (var i = 0; i < this._items.length; i++)
            if (this._items[i]._element === t) return this._items[i];
          return null;
        }),
        (Mi.prototype.getItems = function (t) {
          if (this._isDestroyed || void 0 === t) return this._items.slice(0);
          var e,
            i,
            s = [];
          if (Array.isArray(t) || Ei(t))
            for (e = 0; e < t.length; e++)
              (i = this.getItem(t[e])) && s.push(i);
          else (i = this.getItem(t)) && s.push(i);
          return s;
        }),
        (Mi.prototype.refreshItems = function (t, e) {
          if (this._isDestroyed) return this;
          var i,
            s,
            n,
            r,
            o = t || this._items;
          if (!0 === e)
            for (r = [], i = 0; i < o.length; i++)
              (s = o[i]).isVisible() ||
                s.isHiding() ||
                (((n = s.getElement().style).visibility = "hidden"),
                (n.display = ""),
                r.push(n));
          for (i = 0; i < o.length; i++) o[i]._refreshDimensions(e);
          if (!0 === e) {
            for (i = 0; i < r.length; i++)
              ((n = r[i]).visibility = ""), (n.display = "none");
            r.length = 0;
          }
          return this;
        }),
        (Mi.prototype.refreshSortData = function (t) {
          if (this._isDestroyed) return this;
          for (var e = t || this._items, i = 0; i < e.length; i++)
            e[i]._refreshSortData();
          return this;
        }),
        (Mi.prototype.synchronize = function () {
          if (this._isDestroyed) return this;
          var t,
            e,
            i = this._items;
          if (!i.length) return this;
          for (var s = 0; s < i.length; s++)
            (e = i[s]._element).parentNode === this._element &&
              (t = t || document.createDocumentFragment()).appendChild(e);
          return t
            ? (this._element.appendChild(t), this._emit("synchronize"), this)
            : this;
        }),
        (Mi.prototype.layout = function (t, e) {
          if (this._isDestroyed) return this;
          var i = this._nextLayoutData;
          i && Ft(i.cancel) && i.cancel();
          var s = (Fi = (Fi % 16777216) + 1);
          this._nextLayoutData = {
            id: s,
            instant: t,
            onFinish: e,
            cancel: null,
          };
          for (var n = this._items, r = [], o = 0; o < n.length; o++)
            n[o]._isActive && r.push(n[o]);
          this._refreshDimensions();
          var a,
            h = this._width - this._borderLeft - this._borderRight,
            l = this._height - this._borderTop - this._borderBottom,
            d = this._settings.layout;
          return (
            Ft(d)
              ? (a = d(this, s, r, h, l, this._onLayoutDataReceived))
              : (Mi.defaultPacker.setOptions(d),
                (a = Mi.defaultPacker.createLayout(
                  this,
                  s,
                  r,
                  h,
                  l,
                  this._onLayoutDataReceived
                ))),
            Ft(a) &&
              this._nextLayoutData &&
              this._nextLayoutData.id === s &&
              (this._nextLayoutData.cancel = a),
            this
          );
        }),
        (Mi.prototype.add = function (t, e) {
          if (this._isDestroyed || !t) return [];
          var i,
            s = Ei((i = t))
              ? Array.prototype.slice.call(i)
              : Array.prototype.concat(i);
          if (!s.length) return s;
          var n,
            r,
            o,
            a,
            h = e || {},
            l = h.layout ? h.layout : void 0 === h.layout,
            d = this._items,
            _ = !1;
          for (a = 0; a < s.length; a++)
            (r = s[a]).parentNode !== this._element &&
              (n = n || document.createDocumentFragment()).appendChild(r);
          for (n && this._element.appendChild(n), a = 0; a < s.length; a++)
            (r = s[a]),
              (o = s[a] = new mi(this, r, h.active))._isActive &&
                ((_ = !0), (o._layout._skipNextAnimation = !0));
          for (a = 0; a < s.length; a++)
            (o = s[a])._refreshDimensions(), o._refreshSortData();
          return (
            de(d, s, h.index),
            this._hasListeners("add") && this._emit("add", s.slice(0)),
            _ && l && this.layout(l === Ri, Ft(l) ? l : void 0),
            s
          );
        }),
        (Mi.prototype.remove = function (t, e) {
          if (this._isDestroyed || !t.length) return [];
          var i,
            s,
            n,
            r = e || {},
            o = r.layout ? r.layout : void 0 === r.layout,
            a = !1,
            h = this.getItems(),
            l = [],
            d = [];
          for (n = 0; n < t.length; n++)
            (s = t[n])._isDestroyed ||
              (-1 !== (i = this._items.indexOf(s)) &&
                (s._isActive && (a = !0),
                l.push(s),
                d.push(h.indexOf(s)),
                s._destroy(r.removeElements),
                this._items.splice(i, 1)));
          return (
            this._hasListeners(y) && this._emit(y, l.slice(0), d),
            a && o && this.layout(o === Ri, Ft(o) ? o : void 0),
            l
          );
        }),
        (Mi.prototype.show = function (t, e) {
          return (
            !this._isDestroyed &&
              t.length &&
              this._setItemsVisibility(t, !0, e),
            this
          );
        }),
        (Mi.prototype.hide = function (t, e) {
          return (
            !this._isDestroyed &&
              t.length &&
              this._setItemsVisibility(t, !1, e),
            this
          );
        }),
        (Mi.prototype.filter = function (t, e) {
          if (this._isDestroyed || !this._items.length) return this;
          var i,
            s,
            n = [],
            r = [],
            o = typeof t === Ci,
            a = Ft(t),
            h = e || {},
            l = !0 === h.instant,
            d = h.syncWithLayout,
            _ = h.layout ? h.layout : void 0 === h.layout,
            c = Ft(h.onFinish) ? h.onFinish : null,
            u = -1,
            p = Ii;
          if (
            (c &&
              (p = function () {
                ++u && c(n.slice(0), r.slice(0));
              }),
            a || o)
          )
            for (s = 0; s < this._items.length; s++)
              (i = this._items[s]),
                (a ? t(i) : oe(i._element, t)) ? n.push(i) : r.push(i);
          return (
            n.length
              ? this.show(n, {
                  instant: l,
                  syncWithLayout: d,
                  onFinish: p,
                  layout: !1,
                })
              : p(),
            r.length
              ? this.hide(r, {
                  instant: l,
                  syncWithLayout: d,
                  onFinish: p,
                  layout: !1,
                })
              : p(),
            (n.length || r.length) &&
              (this._hasListeners(w) && this._emit(w, n.slice(0), r.slice(0)),
              _ && this.layout(_ === Ri, Ft(_) ? _ : void 0)),
            this
          );
        }),
        (Mi.prototype.sort = (function () {
          var t, e, i, s;
          function n(n, r) {
            for (var o, a, h, l, d = 0, _ = 0; _ < t.length; _++)
              if (
                ((o = t[_][0]),
                (a = t[_][1]),
                (h = (n._sortData ? n : n._refreshSortData())._sortData[o]),
                (l = (r._sortData ? r : r._refreshSortData())._sortData[o]),
                (d =
                  "desc" === a || (!a && e)
                    ? l < h
                      ? -1
                      : l > h
                      ? 1
                      : 0
                    : h < l
                    ? -1
                    : h > l
                    ? 1
                    : 0))
              )
                return d;
            return (
              d || (s || (s = Yi(i)), (d = e ? Bi(s, r, n) : Bi(s, n, r))), d
            );
          }
          function r(n, r) {
            var o = e ? -t(n, r) : t(n, r);
            return (
              o || (s || (s = Yi(i)), (o = e ? Bi(s, r, n) : Bi(s, n, r))), o
            );
          }
          return function (o, a) {
            if (this._isDestroyed || this._items.length < 2) return this;
            var h = this._items,
              l = a || {},
              d = l.layout ? l.layout : void 0 === l.layout;
            if (((e = !!l.descending), (i = h.slice(0)), (s = null), Ft(o)))
              (t = o), h.sort(r);
            else if (typeof o === Ci)
              (t = o
                .trim()
                .split(" ")
                .filter(function (t) {
                  return t;
                })
                .map(function (t) {
                  return t.split(":");
                })),
                h.sort(n);
            else {
              if (!Array.isArray(o))
                throw (
                  ((t = e = i = s = null),
                  new Error("Invalid comparer argument provided."))
                );
              (h.length = 0), h.push.apply(h, o);
            }
            return (
              this._hasListeners(S) && this._emit(S, h.slice(0), i),
              d && this.layout(d === Ri, Ft(d) ? d : void 0),
              (t = e = i = s = null),
              this
            );
          };
        })()),
        (Mi.prototype.move = function (t, e, i) {
          if (this._isDestroyed || this._items.length < 2) return this;
          var s,
            n,
            r = this._items,
            o = i || {},
            a = o.layout ? o.layout : void 0 === o.layout,
            h = o.action === p,
            l = h ? p : m,
            d = this.getItem(t),
            _ = this.getItem(e);
          return (
            d &&
              _ &&
              d !== _ &&
              ((s = r.indexOf(d)),
              (n = r.indexOf(_)),
              h ? ue(r, s, n) : ce(r, s, n),
              this._hasListeners(D) &&
                this._emit(D, { item: d, fromIndex: s, toIndex: n, action: l }),
              a && this.layout(a === Ri, Ft(a) ? a : void 0)),
            this
          );
        }),
        (Mi.prototype.send = function (t, e, i, s) {
          if (this._isDestroyed || e._isDestroyed || this === e) return this;
          if (!(t = this.getItem(t))) return this;
          var n = s || {},
            r = n.appendTo || document.body,
            o = n.layoutSender ? n.layoutSender : void 0 === n.layoutSender,
            a = n.layoutReceiver
              ? n.layoutReceiver
              : void 0 === n.layoutReceiver;
          return (
            t._migrate.start(e, i, r),
            t._migrate._isActive &&
              t._isActive &&
              (o && this.layout(o === Ri, Ft(o) ? o : void 0),
              a && e.layout(a === Ri, Ft(a) ? a : void 0)),
            this
          );
        }),
        (Mi.prototype.destroy = function (t) {
          if (this._isDestroyed) return this;
          var e,
            i,
            s = this._element,
            n = this._items.slice(0),
            r = (this._layout && this._layout.styles) || {};
          for (
            (function (t) {
              t._resizeHandler &&
                (t._resizeHandler(!0),
                window.removeEventListener("resize", t._resizeHandler),
                (t._resizeHandler = null));
            })(this),
              e = 0;
            e < n.length;
            e++
          )
            n[e]._destroy(t);
          for (i in ((this._items.length = 0),
          Ve(s, this._settings.containerClass),
          r))
            s.style[i] = "";
          return (
            this._emit("destroy"),
            this._emitter.destroy(),
            delete c[this._id],
            (this._isDestroyed = !0),
            this
          );
        }),
        (Mi.prototype._emit = function () {
          this._isDestroyed ||
            this._emitter.emit.apply(this._emitter, arguments);
        }),
        (Mi.prototype._hasListeners = function (t) {
          return !this._isDestroyed && this._emitter.countListeners(t) > 0;
        }),
        (Mi.prototype._updateBoundingRect = function () {
          var t = this._element.getBoundingClientRect();
          (this._width = t.width),
            (this._height = t.height),
            (this._left = t.left),
            (this._top = t.top),
            (this._right = t.right),
            (this._bottom = t.bottom);
        }),
        (Mi.prototype._updateBorders = function (t, e, i, s) {
          var n = this._element;
          t && (this._borderLeft = Xt(n, "border-left-width")),
            e && (this._borderRight = Xt(n, "border-right-width")),
            i && (this._borderTop = Xt(n, "border-top-width")),
            s && (this._borderBottom = Xt(n, "border-bottom-width"));
        }),
        (Mi.prototype._refreshDimensions = function () {
          this._updateBoundingRect(),
            this._updateBorders(1, 1, 1, 1),
            (this._boxSizing = Nt(this._element, "box-sizing"));
        }),
        (Mi.prototype._onLayoutDataReceived =
          ((ki = []),
          function (t) {
            if (
              !this._isDestroyed &&
              this._nextLayoutData &&
              this._nextLayoutData.id === t.id
            ) {
              var e,
                i,
                s,
                n,
                r = this,
                o = this._nextLayoutData.instant,
                a = this._nextLayoutData.onFinish,
                h = t.items.length,
                l = h;
              for (
                this._nextLayoutData = null,
                  !this._isLayoutFinished &&
                    this._hasListeners(v) &&
                    this._emit(v, this._layout.items.slice(0)),
                  this._layout = t,
                  ki.length = 0,
                  n = 0;
                n < h;
                n++
              )
                (e = t.items[n])
                  ? ((i = t.slots[2 * n]),
                    (s = t.slots[2 * n + 1]),
                    e._canSkipLayout(i, s)
                      ? --l
                      : ((e._left = i),
                        (e._top = s),
                        e.isActive() && !e.isDragging() ? ki.push(e) : --l))
                  : --l;
              if (
                (t.styles && ti(this._element, t.styles),
                !this._hasListeners(f) ||
                  (this._emit(f, t.items.slice(0), !0 === o),
                  this._layout.id === t.id))
              ) {
                var d = function () {
                  if (!(--l > 0)) {
                    var e = r._layout.id !== t.id,
                      i = Ft(o) ? o : a;
                    e || (r._isLayoutFinished = !0),
                      Ft(i) && i(t.items.slice(0), e),
                      !e && r._hasListeners(g) && r._emit(g, t.items.slice(0));
                  }
                };
                if (!ki.length) return d(), this;
                for (
                  this._isLayoutFinished = !1, n = 0;
                  n < ki.length && this._layout.id === t.id;
                  n++
                )
                  ki[n]._layout.start(!0 === o, d);
                return this._layout.id === t.id && (ki.length = 0), this;
              }
            }
          })),
        (Mi.prototype._setItemsVisibility = function (t, e, i) {
          var s,
            n,
            r = this,
            o = t.slice(0),
            a = i || {},
            h = !0 === a.instant,
            l = a.onFinish,
            d = a.layout ? a.layout : void 0 === a.layout,
            _ = o.length,
            c = e ? "showStart" : b,
            u = e ? "showEnd" : "hideEnd",
            p = e ? "show" : "hide",
            m = !1,
            g = [],
            v = [];
          if (_) {
            for (n = 0; n < o.length; n++)
              (s = o[n]),
                ((e && !s._isActive) || (!e && s._isActive)) && (m = !0),
                (s._layout._skipNextAnimation = !(!e || s._isActive)),
                e && s._visibility._isHidden && v.push(s),
                e ? s._addToLayout() : s._removeFromLayout();
            v.length && (this.refreshItems(v, !0), (v.length = 0)),
              m && !1 !== a.syncWithLayout ? this.on(f, y) : y(),
              m && d && this.layout(d === Ri, Ft(d) ? d : void 0);
          } else Ft(l) && l(o);
          function y() {
            for (
              m && !1 !== a.syncWithLayout && r.off(f, y),
                r._hasListeners(c) && r._emit(c, o.slice(0)),
                n = 0;
              n < o.length;
              n++
            )
              o[n]._gridId === r._id
                ? o[n]._visibility[p](h, function (t, e) {
                    t || g.push(e),
                      --_ < 1 &&
                        (Ft(l) && l(g.slice(0)),
                        r._hasListeners(u) && r._emit(u, g.slice(0)));
                  })
                : --_ < 1 &&
                  (Ft(l) && l(g.slice(0)),
                  r._hasListeners(u) && r._emit(u, g.slice(0)));
          }
        });
      var Hi = Mi;
      let Vi = document.querySelector("#visits"),
        qi = document.querySelector("#search_input"),
        Oi = document.querySelector("#status-bar_select"),
        Gi = document.querySelector("#urgency-bar_select");
      qi.value = "";
      let Wi = qi.value.toLowerCase(),
        Ui = Oi.value,
        ji = Gi.value;
      qi.addEventListener("keyup", function () {
        let t = qi.value.toLowerCase();
        Wi !== t && ((Wi = t), $i());
      }),
        Oi.addEventListener("change", $i),
        Gi.addEventListener("change", $i);
      let zi = new Hi(Vi, {
        items: ".visit-item",
        showDuration: 400,
        showEasing: "ease",
        layoutOnInit: !0,
        layoutOnResize: !0,
        layoutDuration: 400,
        layoutEasing: "ease",
        dragEnabled: !0,
        dragSortInterval: 50,
        dragContainer: Vi,
        dragStartPredicate: function (t, e) {
          return (
            !(function (t, e) {
              var i = Element.prototype;
              return (
                i.matches ||
                i.matchesSelector ||
                i.webkitMatchesSelector ||
                i.mozMatchesSelector ||
                i.msMatchesSelector ||
                i.oMatchesSelector
              ).call(t, ".delete-icon");
            })(e.target) && Hi.ItemDrag.defaultStartPredicate(t, e)
          );
        },
        dragReleaseDuration: 400,
        dragReleseEasing: "ease",
        itemClass: "visit-item",
        itemVisibleClass: "muuri-item-shown",
        itemDraggingClass: "muuri-item-dragging",
        itemReleasingClass: "muuri-item-releasing",
      });
      function $i() {
        zi.filter(function (t) {
          let e = t.getElement(),
            i =
              !Wi ||
              (e.querySelector(".visit-title").innerText || "")
                .toLowerCase()
                .indexOf(Wi) > -1;
          Ui = Oi.value;
          let s = !Ui || (e.getAttribute("data-status") || "") === Ui;
          ji = Gi.value;
          let n = !ji || (e.getAttribute("data-urgency") || "") === ji;
          return i && n && s;
        });
      }
      var Qi = i.p + "img/close-windowe4027ca7210668b6b04c.png";
      class Ji {
        constructor(t) {
          (this._visitWrapper = document.createElement("div")),
            (this._visitWrapper.className = "visit-item"),
            (this._visit = document.createElement("div")),
            (this._visit.className = "visit-content"),
            (this._close = document.createElement("img")),
            (this._close.src = Qi),
            (this._close.className = "delete-icon"),
            (this._showMoreButton = document.createElement("button")),
            (this._showMoreButton.innerText = "Показати більше"),
            (this._responseObject = t),
            (this.data = {}),
            t
              ? ((this.fullName = t.fullName),
                (this.doctor = t.doctor),
                (this.title = t.title),
                (this.description = t.description),
                (this.urgency = t.urgency),
                (this.status = t.status),
                (this.data.id = t.id))
              : ((this.fullName = ""),
                (this.doctor = ""),
                (this.title = ""),
                (this.description = ""),
                (this.urgency = ""),
                (this.status = "open"),
                (this._newRecord = !0)),
            (this._visitTitle = document.createElement("div")),
            (this._buttonShow = document.createElement("button")),
            (this._buttonEdit = document.createElement("button")),
            (this._visitAdd = document.createElement("div")),
            (this._visitAddTitle = document.createElement("div")),
            (this._visitAddCheckbox = document.createElement("div")),
            (this._visitAddButtons = document.createElement("div")),
            (this._visitTitle.className = "visit_title"),
            (this._visitAdd.className = "visit_addinfo"),
            (this._buttonShow.className = "button button_show"),
            (this._buttonEdit.className = "button button_edit"),
            (this._visitAddTitle.className = "visit_addtitle"),
            (this._visitAddCheckbox.className = "visit_checkbox"),
            this._buttonEdit.setAttribute("id", "buttonEditId"),
            (this._visitAddTitle.innerText = "Додаткова інформація:"),
            (this._buttonShow.innerHTML = "Показати більше"),
            (this._buttonEdit.innerHTML = "Редагувати"),
            this._visitTitle.append(this._elFullName, this._elDoctor),
            this._visitAdd.append(
              this._visitAddTitle,
              this._elTitle,
              this._elDescription,
              this._elUrgency
            ),
            this._visit.append(
              this._close,
              this._visitTitle,
              this._buttonShow,
              this._visitAdd
            ),
            this._visitWrapper.append(this._visit);
        }
        render() {
          this.renderVisitBase();
        }
        renderVisitBase() {
          let t = this;
          this.visitId,
            (this._visitCard = document.getElementById("visits")),
            zi.add(this._visitWrapper),
            this._visitCard.append(this._visitWrapper),
            this._close.addEventListener("click", function (e) {
              t.delete(e);
            }),
            this._buttonShow.addEventListener("click", function () {
              t.showInfo();
            }),
            this._visitCheckbox.addEventListener("click", function () {
              t.checkStatus(), t.save();
            }),
            this._buttonEdit.addEventListener("click", function () {
              t.edit();
            });
        }
        edit() {
          new _(this).render();
        }
        delete(t) {
          var e;
          (e = zi.getItem(t.target.closest(".visit-item"))) &&
            zi.hide([e], {
              onFinish: () => {
                zi.remove(e, { removeElements: !0 });
              },
            }),
            this._visitWrapper.remove();
        }
        async save() {
          this._newRecord
            ? (await (async function (t) {
                let e = await fetch(
                  "https://ajax.test-danit.com/api/v2/cards",
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem(
                        "clinic-token"
                      )}`,
                    },
                    body: JSON.stringify({ ...t, status: "open" }),
                  }
                );
                return await e.json();
              })(this.data),
              (this._newRecord = !1),
              this.render())
            : await (async function (t) {
                let e = await fetch(
                  `https://ajax.test-danit.com/api/v2/cards/${t.id}`,
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${localStorage.getItem(
                        "clinic-token"
                      )}`,
                    },
                    body: JSON.stringify({
                      title: "Визит к кардиологу",
                      description: "Плановый визит",
                      doctor: "Cardiologist",
                      bp: "24",
                      age: 23,
                      weight: 70,
                    }),
                  }
                );
                return await e.json();
              })(this.data);
        }
        showInfo() {
          this._visitAdd.classList.toggle("show-info"),
            this._visitWrapper.classList.toggle("above-others"),
            this._visitAdd.classList.contains("show-info")
              ? (this._buttonShow.innerText = "Приховати")
              : (this._buttonShow.innerText = "Показати більше");
        }
        hideInfo() {
          "block" === this._visitAdd.style.display &&
            ((this._visitAdd.style.display = "none"),
            (this._buttonShow.style.display = "block"));
        }
        checkStatus() {
          this._visitCheckbox.checked
            ? (this.status = "close")
            : (this.status = "open");
        }
        get fullName() {
          return this.data.fullName;
        }
        set fullName(t) {
          this._elFullName || (this._elFullName = document.createElement("p")),
            (this._elFullName.innerText = `Пацієнт: ${t}`),
            (this.data.fullName = t);
        }
        get doctor() {
          return this.data.doctor;
        }
        set doctor(t) {
          this._elDoctor || (this._elDoctor = document.createElement("p")),
            (this._elDoctor.innerText = `Лікар: ${t}`),
            (this.data.doctor = t);
        }
        get title() {
          return this.data.title;
        }
        set title(t) {
          this._elTitle ||
            ((this._elTitle = document.createElement("p")),
            (this._elTitle.className = "visit-title")),
            (this._elTitle.innerText = `Мета: ${t};`),
            (this.data.title = t);
        }
        get description() {
          return this.data.description;
        }
        set description(t) {
          this._elDescription ||
            (this._elDescription = document.createElement("p")),
            (this._elDescription.innerText = `Опис: ${t};`),
            (this.data.description = t);
        }
        get urgency() {
          return this.data.urgency;
        }
        set urgency(t) {
          this._elUrgency || (this._elUrgency = document.createElement("p")),
            (this._elUrgency.innerText = `Терміновість: ${t};`),
            this._visitWrapper.setAttribute("data-urgency", t),
            (this.data.urgency = t);
        }
        get status() {
          return (
            this._visitCheckbox || this.createVisitCheckbox(), this.data.status
          );
        }
        set status(t) {
          this._visitCheckbox || this.createVisitCheckbox(),
            (this.data.status = t),
            "close" == t
              ? ((this._visit.style.backgroundColor =
                  "rgb(192, 208, 219, 0.85)"),
                (this._visitCheckbox.checked = !0))
              : ((this._visit.style.backgroundColor =
                  "rgb(240, 248, 255, 0.85)"),
                (this._visitCheckbox.checked = !1));
        }
        createVisitCheckbox() {
          (this._visitCheckbox = document.createElement("input")),
            this._visitCheckbox.setAttribute("type", "checkbox"),
            (this._visitCheckboxDescription = document.createElement("p")),
            (this._visitCheckboxDescription.innerText =
              "Візит виконан - поставте галочку:");
        }
      }
      class Zi extends _ {
        constructor(t, e) {
          super(t, e),
            (this.lastVisitDate = t.lastVisitDate),
            this._visitFormFields.append(this._lastVisitDateFieldset);
        }
        get lastVisitDate() {
          return this._lastVisitDate.value;
        }
        set lastVisitDate(t) {
          return (
            this._lastVisitDate || this.createLastVisitHtml(),
            (this._lastVisitDate.value = t),
            t
          );
        }
        createLastVisitHtml() {
          (this._lastVisitDateFieldset = document.createElement("fieldset")),
            (this._lastVisitDateFieldset.className =
              "fieldset last-visit-fieldset"),
            (this._lastVisitDateLegend = document.createElement("legend")),
            (this._lastVisitDateLegend.innerText = "Дата останнього візиту"),
            (this._lastVisitDate = document.createElement("input")),
            (this._lastVisitDate.name = "lastVisitDate"),
            (this._lastVisitDate.type = "date"),
            this._lastVisitDateFieldset.append(
              this._lastVisitDateLegend,
              this._lastVisitDate
            );
        }
        updateAdditionalVisitFields() {
          this.visit.lastVisitDate = this.lastVisitDate;
        }
      }
      class Ki extends Ji {
        constructor(t) {
          super(t),
            (this.lastVisitDate = t ? t.lastVisitDate : ""),
            (this.data.doctor = "Стоматолог");
        }
        get lastVisitDate() {
          return this.data.lastVisitDate;
        }
        set lastVisitDate(t) {
          this._elLastVisitDate ||
            (this._elLastVisitDate = document.createElement("p")),
            (this._elLastVisitDate.innerText = `Дата останнього відвідування: ${t};`),
            (this.data.lastVisitDate = t);
        }
        edit() {
          new Zi(this, !0).render();
        }
        render() {
          this.renderVisitBase(),
            this._visitAdd.append(this._elLastVisitDate),
            this._visitAdd.append(this._visitAddCheckbox),
            this._visitAddCheckbox.append(this._visitCheckboxDescription),
            this._visitAddCheckbox.append(this._visitCheckbox),
            this._visitAdd.append(this._visitAddButtons),
            this._visitAddButtons.append(this._buttonEdit);
        }
      }
      class ts extends _ {
        constructor(t, e) {
          super(t, e),
            (this.age = t.age),
            this._visitFormFields.append(this._ageFieldset);
        }
        get age() {
          return console.log(this._age.value), this._age.value;
        }
        set age(t) {
          return (
            this._ageFieldset || this.createAgeHtml(),
            (this._age.value = t),
            console.log(t),
            t
          );
        }
        updateAdditionalVisitFields() {
          this.visit.age = this.age;
        }
        createAgeHtml() {
          (this._ageFieldset = document.createElement("fieldset")),
            (this._ageFieldset.className = "fieldset age-fieldset"),
            (this._ageLegend = document.createElement("legend")),
            (this._ageLegend.innerText = "Вік"),
            (this._age = document.createElement("input")),
            (this._age.name = "age"),
            this._ageFieldset.append(this._ageLegend, this._age);
        }
        checkStatus() {
          let t = document.getElementById("checkboxId");
          console.log(t),
            t.checked &&
              (this.status, alert("CLOSE"), console.log(this.status));
        }
      }
      class es extends Ji {
        constructor(t) {
          super(t),
            (this.age = t ? t.age : ""),
            (this.data.doctor = "Терапевт");
        }
        get age() {
          return this.data.age;
        }
        set age(t) {
          this._elAge || (this._elAge = document.createElement("p")),
            (this._elAge.innerText = `Вік: ${t};`),
            (this.data.age = t);
        }
        edit() {
          new ts(this, !0).render();
        }
        render() {
          this.renderVisitBase(),
            this._visitAdd.append(this._elAge),
            this._visitAdd.append(this._visitAddCheckbox),
            this._visitAddCheckbox.append(this._visitCheckboxDescription),
            this._visitAddCheckbox.append(this._visitCheckbox),
            this._visitAdd.append(this._visitAddButtons),
            this._visitAddButtons.append(this._buttonEdit);
        }
      }
      class is extends _ {
        constructor(t, e) {
          super(t, e),
            (this.age = t.age),
            (this.bpUpper = t.bpUpper),
            (this.bpLower = t.bpLower),
            (this.bodyIndex = t.bodyIndex),
            (this.diseases = t.diseases);
        }
        get age() {
          return this._age.value;
        }
        set age(t) {
          return (
            this._ageFieldset || this.createAgeHtml(), (this._age.value = t), t
          );
        }
        createAgeHtml() {
          (this._ageFieldset = document.createElement("fieldset")),
            (this._ageFieldset.className = "fieldset age-fieldset"),
            (this._ageLegend = document.createElement("legend")),
            (this._ageLegend.innerText = "Вік"),
            (this._age = document.createElement("input")),
            (this._age.name = "age"),
            this._ageFieldset.append(this._ageLegend, this._age),
            this._visitFormFields.append(this._ageFieldset);
        }
        get bpUpper() {
          return this._bodyPressureUpper.value;
        }
        set bpUpper(t) {
          return (
            this._bodyPressureFieldset || this.createbpHtml(),
            (this._bodyPressureUpper.value = t),
            t
          );
        }
        get bpLower() {
          return this._bodyPressureLower.value;
        }
        set bpLower(t) {
          return (
            this._bodyPressureFieldset || this.createbpHtml(),
            (this._bodyPressureLower.value = t),
            t
          );
        }
        createbpHtml() {
          (this._bodyPressureFieldset = document.createElement("fieldset")),
            (this._bodyPressureFieldset.className =
              "fieldset presure-fieldset"),
            (this._bodyPressureLegend = document.createElement("legend")),
            (this._bodyPressureLegend.innerText = "Артеріальний тиск"),
            (this._bodyPressureUpper = document.createElement("input")),
            (this._bodyPressureUpper.name = "bpUpper"),
            (this._delimiter = document.createElement("span")),
            (this._delimiter.innerText = "/"),
            (this._bodyPressureLower = document.createElement("input")),
            (this._bodyPressureLower.name = "bpLower"),
            this._bodyPressureFieldset.append(this._bodyPressureLower),
            this._bodyPressureFieldset.append(
              this._bodyPressureLegend,
              this._bodyPressureUpper,
              this._delimiter,
              this._bodyPressureLower
            ),
            this._visitFormFields.append(this._bodyPressureFieldset);
        }
        get bodyIndex() {
          return this._bodyIndex.value;
        }
        set bodyIndex(t) {
          return (
            this._bodyIndex || this.createBodyIndexHtml(),
            (this._bodyIndex.value = t),
            t
          );
        }
        createBodyIndexHtml() {
          (this._bodyIndexFieldset = document.createElement("fieldset")),
            (this._bodyIndexFieldset.className =
              "fieldset bodu-index-fieldset"),
            (this._bodyIndexLegend = document.createElement("legend")),
            (this._bodyIndexLegend.innerText = "Індекс маси тіла"),
            (this._bodyIndex = document.createElement("input")),
            (this._bodyIndex.name = "bodyIndex"),
            this._bodyIndexFieldset.append(
              this._bodyIndexLegend,
              this._bodyIndex
            ),
            this._visitFormFields.append(this._bodyIndexFieldset);
        }
        get diseases() {
          return this._diseases.value;
        }
        set diseases(t) {
          return (
            this._diseases || this.createDiseasesIndexHtml(),
            (this._diseases.value = t),
            t
          );
        }
        createDiseasesIndexHtml() {
          (this._diseasesFieldset = document.createElement("fieldset")),
            (this._diseasesFieldset.className = "fieldset bodu-index-fieldset"),
            (this._diseasesLegend = document.createElement("legend")),
            (this._diseasesLegend.innerText = "Перенесені захворювання"),
            (this._diseases = document.createElement("input")),
            (this._diseases.name = "diseases"),
            this._diseasesFieldset.append(this._diseasesLegend, this._diseases),
            this._visitFormFields.append(this._diseasesFieldset);
        }
        updateAdditionalVisitFields() {
          (this.visit.age = this.age),
            (this.visit.bpUpper = this.bpUpper),
            (this.visit.bpLower = this.bpLower),
            (this.visit.bodyIndex = this.bodyIndex),
            (this.visit.diseases = this.diseases);
        }
      }
      class ss extends Ji {
        constructor(t) {
          super(t),
            t
              ? ((this.bp = this.bp),
                (this.bpLower = t.bpLower),
                (this.bpUpper = t.bpUpper),
                (this.bodyIndex = t.bodyIndex),
                (this.diseases = t.diseases),
                (this.age = t.age))
              : ((this.bp = ""),
                (this.bpLower = ""),
                (this.bpUpper = ""),
                (this.bodyIndex = ""),
                (this.diseases = ""),
                (this.age = "")),
            (this.data.doctor = "Кардіолог");
        }
        get bpLower() {
          return this.data.bpLower;
        }
        set bpLower(t) {
          this._elBpLower || (this._elBpLower = document.createElement("p")),
            (this._elBpLower.innerText = `${t};`),
            (this.data.bpLower = t);
        }
        get bpUpper() {
          return this.data.bpUpper;
        }
        set bpUpper(t) {
          this._elBpUpper || (this._elBpUpper = document.createElement("p")),
            (this._elBpUpper.innerText = `${t};`),
            (this.data.bpUpper = t);
        }
        get bodyIndex() {
          return this.data.bodyIndex;
        }
        set bodyIndex(t) {
          this._elBodyIndex ||
            (this._elBodyIndex = document.createElement("p")),
            (this._elBodyIndex.innerText = `Індекс маси тіла: ${t};`),
            (this.data.bodyIndex = t);
        }
        get diseases() {
          return this.data.diseases;
        }
        set diseases(t) {
          this._elDiseases || (this._elDiseases = document.createElement("p")),
            (this._elDiseases.innerText = `Перенесені захворювання серцево-судинної системи: ${t};`),
            (this.data.diseases = t);
        }
        get age() {
          return this.data.age;
        }
        set age(t) {
          this._elAge || (this._elAge = document.createElement("p")),
            (this._elAge.innerText = `Вік: ${t};`),
            (this.data.age = t);
        }
        edit() {
          new is(this, !0).render();
        }
        render() {
          this.renderVisitBase(),
            (this._elBp = document.createElement("div")),
            (this._elBp.innerHTML = `Артеріальний тиск: ${this.bpUpper} / ${this.bpLower}`),
            this._visitAdd.append(
              this._elBp,
              this._elBodyIndex,
              this._elDiseases,
              this._elAge
            ),
            this._visitAdd.append(this._visitAddCheckbox),
            this._visitAddCheckbox.append(this._visitCheckboxDescription),
            this._visitAddCheckbox.append(this._visitCheckbox),
            this._visitAdd.append(this._visitAddButtons),
            this._visitAddButtons.append(this._buttonEdit);
        }
      }
      class ns extends l {
        constructor() {
          super(),
            (this._createVisitHeader = document.createElement("h2")),
            (this._createVisitHeader.innerText = "Створення візиту"),
            (this._doctorSelectFieldset = document.createElement("fieldset")),
            (this._doctorSelectFieldset.className = "fieldset doctor-fieldset"),
            (this._doctorSelectLegend = document.createElement("legend")),
            (this._doctorSelectLegend.innerText = "Оберіть лікаря"),
            (this._doctorSelect = document.createElement("select")),
            (this._doctorSelect.name = "doctor"),
            this._doctorSelectFieldset.append(
              this._doctorSelectLegend,
              this._doctorSelect
            ),
            this._doctorSelect.addEventListener("input", (t) => {
              this.close();
              const e = this._doctorSelect.value;
              if ("Терапевт" === e) {
                let t = new es();
                new ts(t, !1).render();
              } else if ("Стоматолог" === e) {
                let t = new Ki();
                new Zi(t, !1).render();
              } else {
                let t = new ss();
                new is(t, !1).render();
              }
            }),
            (this._visitForm = document.createElement("form")),
            (this._visitForm.className = "form visit-form"),
            (this._visitForm.name = "visitFields"),
            (this._optionDoctorEmpty = document.createElement("option")),
            (this._optionDoctorEmpty.innerText = "Оберіть лікаря"),
            (this._optionDoctorEmpty.disabled = !0),
            (this._optionDoctorEmpty.selected = !0),
            (this._optionDoctorTherapist = document.createElement("option")),
            (this._optionDoctorTherapist.innerText = "Терапевт"),
            (this._optionDoctorDentist = document.createElement("option")),
            (this._optionDoctorDentist.innerText = "Стоматолог"),
            (this._optionDoctorCardiologist = document.createElement("option")),
            (this._optionDoctorCardiologist.innerText = "Кардіолог"),
            this._doctorSelect.append(
              this._optionDoctorEmpty,
              this._optionDoctorCardiologist,
              this._optionDoctorDentist,
              this._optionDoctorTherapist
            ),
            this._visitForm.append(this._doctorSelectFieldset),
            this._modal.append(this._createVisitHeader, this._visitForm);
        }
      }
      class rs {
        constructor() {
          (this._loginButton = document.createElement("button")),
            (this._loginButton.className = "button enter-button"),
            (this._loginButton.innerText = "Увійти"),
            this._loginButton.addEventListener("click", (t) => {
              this.getLogin();
            }),
            (this._logoutButton = document.createElement("button")),
            (this._logoutButton.innerText = "Вийти"),
            (this._logoutButton.className = "button logout-button"),
            this._logoutButton.addEventListener("click", (t) => {
              localStorage.removeItem("clinic-token"),
                (rs.loginStatus = !1),
                new rs().render(),
                (document.getElementById("visits").innerHTML = "");
            }),
            (this._createVisit = document.createElement("button")),
            (this._createVisit.className = "button create-button"),
            (this._createVisit.innerText = "Створити візит"),
            this._createVisit.addEventListener("click", (t) => {
              t.preventDefault(), new ns().render();
            });
        }
        static isLogged() {
          new rs().render();
        }
        render() {
          const t = document.getElementById("login-status");
          return (
            (t.innerHTML = ""),
            localStorage.getItem("clinic-token")
              ? (t.append(this._createVisit, this._logoutButton),
                (async function () {
                  let t = await (async function () {
                    let t = await fetch(
                      "https://ajax.test-danit.com/api/v2/cards",
                      {
                        method: "GET",
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "clinic-token"
                          )}`,
                        },
                      }
                    );
                    return await t.json();
                  })();
                  (document.getElementById("visits").innerHTML = ""),
                    await t.map((t) => {
                      (document.getElementById(
                        "no-visits-placeholder"
                      ).style.display = "none"),
                        "Терапевт" === t.doctor
                          ? new es(t).render()
                          : "Стоматолог" === t.doctor
                          ? new Ki(t).render()
                          : "Кардіолог" === t.doctor && new ss(t).render();
                    });
                })(),
                !0)
              : (t.append(this._loginButton), !1)
          );
        }
        getLogin() {
          new d().render();
        }
      }
      !(function (t, e, i) {
        (e = (function (t) {
          var e = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var i = t[Symbol.toPrimitive];
            if (void 0 !== i) {
              var s = i.call(t, "string");
              if ("object" != typeof s) return s;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == typeof e ? e : String(e);
        })(e)) in t
          ? Object.defineProperty(t, e, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = i);
      })(rs, "loginStatus", void 0),
        !rs.loginStatus && rs.isLogged(),
        h.getAllVisits();
    })();
})();
