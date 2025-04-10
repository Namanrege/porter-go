// client/src/components/FAQ.jsx
import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <section className="faq-section">
      <h2 className="faq-title">FAQs</h2>

      <div className="faq-container">
        <details>
          <summary>Do packers and movers dismantle and reassemble furniture?</summary>
          <p>Yes, most service providers offer furniture dismantling and reassembly. Please confirm at the time of booking.</p>
        </details>

        <details>
          <summary>How are prices calculated?</summary>
          <p>Prices depend on distance, volume of items, floor level, and additional services like labor or appliances installation.</p>
        </details>

        <details>
          <summary>Can I reschedule or cancel my booking?</summary>
          <p>Yes, you can reschedule or cancel anytime before pickup from the "My Bookings" section in the app.</p>
        </details>

        <details>
          <summary>Are there any hidden charges?</summary>
          <p>No, all charges are shown upfront. However, extra labor or waiting time charges may apply in some situations.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
