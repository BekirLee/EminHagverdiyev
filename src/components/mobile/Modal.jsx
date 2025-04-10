import { useEffect, useState } from "react";

const Modal = ({ isOpen, setIsOpen, language }) => {
  const translations = {
    az: {
      head: "Ən son bildiriş",
      date: "Paylaşılma tarixi",
      button: "Əlaqə saxla",
    },
    en: {
      head: "Most Recent Notification",
      date: "Date Shared",
      button: "Get in Touch",
    },
    ru: {
      head: "Самое свежее уведомление",
      date: "Дата публикации",
      button: "Связаться",
    },
  };

  const content = translations[language] || translations.az;

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [link, setLink] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
        setTitle(data.title);
        setMessage(data.content);
        setLink(data.link);
        setStartDate(new Date(data.startDate));
        setEndDate(new Date(data.endDate));

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

  if (!isOpen) return null;

  const closeModal = () => {
    setIsOpen(false);
  };

  // Format the date and time
  const formattedStartDate = startDate
    ? `${startDate.toLocaleDateString()} ${startDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`
    : "No date available";

  // Format the date and time
  const formattedEndDate = startDate
    ? `${endDate.toLocaleDateString()} ${endDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    })}`
    : "No date available";

  return (
    <div className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div
        className="fixed inset-0 flex justify-center items-end  mx-2 mb-2"
        onClick={closeModal}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-lg text-center">
          {isNotificationActive ? (
            <>
              <p className="text-xl font-bold">{title}</p>
              <p>{message || "No notification"}</p>
              <p>Başlanma vaxtı: {formattedStartDate}</p>
              <p>Bitmə vaxtı: {formattedEndDate}</p>
              <a
                href={link || "https://wa.me/+994507971707"}
                className="block mt-4 bg-gradient-to-r from-orange-500  via-red-500 to-yellow-500 text-white rounded-md p-2 text-center shadow-sm"
              >
                {content.button}
              </a>
            </>
          ) : (
            <>
              <p>{"No notification"}</p>
              <a
                href="https://wa.me/+994507971707"
                className="block mt-4 bg-gradient-to-r from-orange-500  via-red-500 to-yellow-500 text-white rounded-md p-2 text-center shadow-sm"
              >
                {content.button}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
