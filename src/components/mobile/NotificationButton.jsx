import notify from "@assets/images/Notification.png";
import { useEffect, useState } from "react";

const subscribeToPushNotifications = async () => {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        "BCpK0p2kW2AHwGFF_d2ZJ9EIxsDcszV6yHKjy2o86suMlx_aDmXh0FVqmhlJo-WaVip_3qUeMi44mPGARaSGcNA"
      ), // Replace with your actual VAPID public key
    });

    const data = {
      endpoint: subscription.endpoint,
      auth: arrayBufferToBase64(subscription.getKey("auth")),
      p256dh: arrayBufferToBase64(subscription.getKey("p256dh")),
      userId: "fa174705-3b07-4048-9bae-2ac771017d36",
    };

    // Send the subscription to your backend to store it
    const response = await fetch(
      "https://account.digicardsapp.com/api/notification/subscribe",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to subscribe to push notifications");
    }

    console.log("User is subscribed for push notifications:", subscription);
  } catch (error) {
    console.error("Push Notification Subscription Error:", error);
  }
};

const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const NotificationButton = ({ setIsOpen }) => {
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        let response = await fetch(
          "https://account.digicardsapp.com/api/notification/get-notification?userId=fa174705-3b07-4048-9bae-2ac771017d36"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch notification");
        }

        const data = await response.json();

        const now = new Date();
        const start = new Date(data.startDate);
        const end = new Date(data.endDate);
        if (now >= start && now <= end) setIsNotificationActive(true);
        else setIsNotificationActive(false);
      } catch (error) {
        console.error("Error fetching notification:", error);
      }
    };

    fetchNotification();
  }, []);

  return (
    <>
      <img
        src={notify}
        alt="notify"
        className="absolute right-0 top-[380px] w-[4rem] z-20"
        onClick={() => {
          Notification.requestPermission()
            .then((permission) => {
              var isSubscriber = localStorage.getItem("subscribed");
              if (permission === "granted" && !isSubscriber) {
                subscribeToPushNotifications();
              }
            })
            .then(() => {
              setIsOpen(true);
            });
        }}
      />
      {isNotificationActive && (
        <span className="absolute top-[430px] right-[10px] z-20 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      )}
    </>
  );
};

export default NotificationButton;
