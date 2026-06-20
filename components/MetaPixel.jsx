"use client";

import { useEffect } from "react";

const PIXEL_ID = "1697477548238291";
const CONSENT_STORAGE_KEY = "chanakCookieConsent";

function loadPixel() {
  if (typeof window === "undefined") return;
  if (window.fbq) return;

  /* eslint-disable */
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  /* eslint-enable */

  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
  window.fbq("track", "ViewContent", {
    content_name: "Chanak Homeschool / Off-Campus",
    content_category: "homeschool_offcampus",
  });
}

export function trackMetaEvent(eventName, payload = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.fbq !== "function") return;
  window.fbq("track", eventName, payload);
}

export default function MetaPixel() {
  useEffect(() => {
    const maybeLoad = () => {
      if (window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted") {
        loadPixel();
      }
    };

    maybeLoad();
    window.addEventListener("chanak:cookies-accepted", maybeLoad);

    return () => {
      window.removeEventListener("chanak:cookies-accepted", maybeLoad);
    };
  }, []);

  return null;
}
