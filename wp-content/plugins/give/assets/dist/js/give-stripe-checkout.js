!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=466)}({466:function(e,t,r){e.exports=r(467)},467:function(e,t){document.addEventListener("DOMContentLoaded",(function(e){var t=[],r=document.querySelectorAll(".give-form-wrap");function n(e,t){var r=Math.abs(parseFloat(accounting.unformat(e,Give.form.fn.getInfo("decimal_separator",jQuery(t))))),n=t.getAttribute("data-currency_code");return give_stripe_vars.zero_based_currencies_list.indexOf(n)<0&&(r*=100),r}function i(e){var t=e.querySelector(".give-submit-button-wrap"),r=t.querySelector("#give-purchase-button");t.querySelector(".give-loading-animation").style.display="none",r.value=r.getAttribute("data-before-validation-label"),r.removeAttribute("disabled")}Array.prototype.forEach.call(r,(function(e){var r=!1,a=e.querySelector(".give-form");if(null!==a){var o=a.querySelector('input[name="give-form-title"]').value,s=a.querySelector('input[name="give-form-id-prefix"]').value,u=give_stripe_vars.checkout_image.length>0?give_stripe_vars.checkout_image:"",c=give_stripe_vars.checkout_address.length>0,l=give_stripe_vars.zipcode_option.length>0,d=give_stripe_vars.remember_option.length>0;t[s]=[],t[s]=StripeCheckout.configure({key:give_stripe_vars.publishable_key,image:u,locale:give_stripe_vars.preferred_locale,billingAddress:c,token:function(e,t){var n=document.createElement("div");if(n.setAttribute("class","stripe-checkout-process"),n.style.background="#FFFFFF",n.style.opacity="0.9",n.style.position="fixed",n.style.top="0",n.style.left="0",n.style.bottom="0",n.style.right="0",n.style.zIndex="2147483646",n.style.display="none",n.innerHTML='<div class="give-stripe-checkout-processing-container" style="position: absolute;top: 50%;left: 50%;width: 300px; margin-left: -150px; text-align:center;"><div style="display:inline-block;"><span class="give-loading-animation" style="color: #333;height:26px;width:26px;font-size:26px; margin:0; "></span><span style="color:#000; font-size: 26px; margin:0 0 0 10px;">'+give_stripe_vars.checkout_processing_text+"</span></div></div>",r=!0,""!==give_stripe_vars.stripe_account_id&&(e.stripeAccount=give_stripe_vars.stripe_account_id),a.insertAdjacentElement("afterend",n),a.querySelector("#give-stripe-payment-method-"+s).value=e.id,c){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name","billing_country"),o.setAttribute("value",t.billing_address_country_code),a.insertAdjacentElement("afterbegin",o);var u=document.createElement("input");u.setAttribute("type","hidden"),u.setAttribute("name","card_address"),u.setAttribute("value",t.billing_address_line1),a.insertAdjacentElement("afterbegin",u);var l=document.createElement("input");l.setAttribute("type","hidden"),l.setAttribute("name","card_city"),l.setAttribute("value",t.billing_address_city),a.insertAdjacentElement("afterbegin",l);var d=document.createElement("input");d.setAttribute("type","hidden"),d.setAttribute("name","card_state"),d.setAttribute("value",t.billing_address_state),a.insertAdjacentElement("afterbegin",d);var p=document.createElement("input");p.setAttribute("type","hidden"),p.setAttribute("name","card_zip"),p.setAttribute("value",t.billing_address_zip),a.insertAdjacentElement("afterbegin",p)}var v=new XMLHttpRequest,m=new FormData(a),y=a.querySelector("#give-stripe-payment-errors-"+s),_=!1;m.append("action","give_process_donation"),m.append("give_ajax",!0),v.onreadystatechange=function(e){4===this.readyState&&200===this.status&&"success"!==this.responseText?(e.preventDefault(),_=!1,a.querySelector('input[name="billing_country"]').remove(),a.querySelector('input[name="card_address"]').remove(),a.querySelector('input[name="card_state"]').remove(),a.querySelector('input[name="card_city"]').remove(),a.querySelector('input[name="card_zip"]').remove(),document.querySelector(".stripe-checkout-process").style.display="none",y.innerHTML=this.response,i(a)):(y.innerHTML="",document.querySelector(".stripe-checkout-process").style.display="block",_=!0)},v.open("POST",give_global_vars.ajaxurl,!1),v.send(m),!0===_&&a.submit()},closed:function(){r||(i(a),t[s].close())}}),a.onsubmit=function(e){if("stripe_checkout"===a.querySelector(".give-gateway:checked").value){e.preventDefault();var r=a.querySelector(".give-final-total-amount").getAttribute("data-total"),i=a.querySelector('input[name="give_email"]').value;t[s].open({name:give_stripe_vars.sitename,description:o,amount:n(r,a),zipCode:l,allowRememberMe:d,email:i,currency:a.getAttribute("data-currency_code")})}}}}))}))}});