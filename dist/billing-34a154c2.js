"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[964],{44713:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var r=n(31635),s=n(93564),i=n(30455),a=n(49655),o=n(17986),d=n(17505),l=n(95108),u=n(45293),c=n(79001),g=n(84559),m=n(74027),p=n(43586),A=n(71055),h=n(46522),f=n(68512),v=n(38989),b=n(87650),y=n(35230),C=n(62562),E=n(97098),_=n(22011),F=n(33515),S=n(10685),k=n(69070),w=n(46487),M=n(4899),B=n(60833),I=n(13461),U=n(74302);const z=(0,f.A)((0,A.withFormik)({handleSubmit:function(e,t){(0,t.props.onSubmit)(e)},mapPropsToValues:function(e){var t=e.getFields,n=e.customerMessage,s=e.billingAddress;return(0,r.__assign)((0,r.__assign)({},(0,_.A)(t(s&&s.countryCode),s)),{orderComment:n})},isInitialValid:function(e){var t=e.billingAddress,n=e.getFields,r=e.language;return!!t&&(0,F.A)({language:r,formFields:n(t.countryCode)}).isValidSync(t)},validationSchema:function(e){var t=e.language,n=e.getFields;return"amazonpay"===e.methodId?(0,h.RZ)((function(e){return(0,S.A)({translate:(0,F.X)(t),formFields:n(e&&e.countryCode)})})):(0,h.RZ)((function(e){return(0,F.A)({language:t,formFields:n(e&&e.countryCode)})}))},enableReinitialize:!0})((function(e){var t=e.googleMapsApiKey,n=e.billingAddress,s=e.countriesWithAutocomplete,d=e.customer,l=d.addresses,u=d.isGuest,c=e.getFields,g=e.countries,m=e.isUpdating,p=e.setFieldValue,A=e.shouldShowOrderComments,h=e.values,f=e.methodId,_=e.isFloatingLabelEnabled,F=e.updateAddress,S=e.onUnhandledError,z=(0,i.useState)(!1),L=z[0],N=z[1],P=(0,i.useRef)(null),R=(0,v.A)(),V=R.isPayPalFastlaneEnabled,K=R.paypalFastlaneAddresses,O="amazonpay"===f,x=c(h.countryCode),W=x.filter((function(e){return e.custom})),Z=W.length>0,G=O&&Z?W:x,J=V?K:l,D=(null==J?void 0:J.length)>0,T=n&&(0,b.A)(n,J,c(n.countryCode)),X=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:N(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,F(e)];case 2:return n.sent(),[3,5];case 3:return(t=n.sent())instanceof Error&&S(t),[3,5];case 4:return N(!1),[7];case 5:return[2]}}))}))};return i.createElement(M.A,{autoComplete:"on"},O&&n&&i.createElement("div",{className:"form-fieldset"},i.createElement(U.A,{address:n})),i.createElement(B.A,{id:"checkoutBillingAddress",ref:P},D&&!O&&i.createElement(B.A,{id:"billingAddresses"},i.createElement(I.A,{isLoading:L},i.createElement(y.A,{addresses:J,onSelectAddress:X,onUseNewAddress:function(){X({})},selectedAddress:T?n:void 0,type:C.A.Billing}))),!T&&i.createElement(o.A,{isLoading:L},i.createElement(E.A,{countries:g,countriesWithAutocomplete:s,countryCode:h.countryCode,formFields:G,googleMapsApiKey:t,isFloatingLabelEnabled:_,setFieldValue:p,shouldShowSaveAddress:!u}))),A&&i.createElement(k.A,null),i.createElement("div",{className:"form-actions"},i.createElement(w.Ay,{disabled:m||L,id:"checkout-billing-continue",isLoading:m||L,type:"submit",variant:w.Ak.Primary},i.createElement(a.A,{id:"common.continue_action"}))))})));var L=n(21106);function N(e){var t=(0,L.A)(e);return t&&["amazonpay"].indexOf(t.providerId)>-1?t.providerId:void 0}var P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return(0,r.__awaiter)(t,void 0,void 0,(function(){var t,n,s,i,a,o,u,c,g,m,p=e.orderComment,A=(0,r.__rest)(e,["orderComment"]);return(0,r.__generator)(this,(function(e){switch(e.label){case 0:t=this.props,n=t.updateAddress,s=t.updateCheckout,i=t.customerMessage,a=t.billingAddress,o=t.navigateNextStep,u=t.onUnhandledError,c=[],(g=(0,d.A)(A))&&!(0,l.A)(g,a)&&c.push(n(g)),i!==p&&c.push(s({customerMessage:p})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Promise.all(c)];case 2:return e.sent(),o(),[3,4];case 3:return(m=e.sent())instanceof Error&&u(m),[3,4];case 4:return[2]}}))}))},t}return(0,r.__extends)(t,e),t.prototype.componentDidMount=function(){return(0,r.__awaiter)(this,void 0,void 0,(function(){var e,t,n,i,a,o;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:e=this.props,t=e.initialize,n=e.onReady,i=void 0===n?s.noop:n,a=e.onUnhandledError,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t()];case 2:return r.sent(),i(),[3,4];case 3:return(o=r.sent())instanceof Error&&a(o),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props,t=e.updateAddress,n=e.isInitializing,s=(0,r.__rest)(e,["updateAddress","isInitializing"]);return i.createElement(o.A,{isLoading:n},i.createElement("div",{className:"checkout-form"},i.createElement("div",{className:"form-legend-container"},i.createElement(p.A,{testId:"billing-address-heading"},i.createElement(a.A,{id:"billing.billing_address_heading"}))),i.createElement(z,(0,r.__assign)({},s,{onSubmit:this.handleSubmit,updateAddress:t}))))},t}(i.Component);const R=(0,u.A)((function(e){var t=e.checkoutService,n=e.checkoutState,r=n.data,s=r.getCheckout,i=r.getConfig,a=r.getCart,o=r.getCustomer,d=r.getBillingAddress,l=r.getBillingAddressFields,u=r.getBillingCountries,p=n.statuses,A=p.isLoadingBillingCountries,h=p.isUpdatingBillingAddress,f=p.isUpdatingCheckout,v=i(),b=o(),y=s(),C=a();if(!(v&&b&&y&&C))return null;var E=v.checkoutSettings,_=E.enableOrderComments,F=E.googleMapsApiKey;return{billingAddress:d(),countries:u()||c.M,countriesWithAutocomplete:["US","CA","AU","NZ","GB"],customer:b,customerMessage:y.customerMessage,getFields:l,googleMapsApiKey:F,initialize:t.loadBillingAddressFields,isInitializing:A(),isUpdating:h()||f(),methodId:N(y),shouldShowOrderComments:_&&(0,m.A)(C)<1,updateAddress:t.updateBillingAddress,updateCheckout:t.updateCheckout,isFloatingLabelEnabled:(0,g.A)(v.checkoutSettings)}}))(P)}}]);
//# sourceMappingURL=billing-34a154c2.js.map