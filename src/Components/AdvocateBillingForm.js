import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./AdvocateBillingForm.css";
import { useParams } from "react-router-dom";

export default function AdvocateBillingForm() {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    refNo: "",
    date: "",
    advocateId: customerId,
    items: [{ srNo: 1, particulars: "", quantity: "", amount: "" }],
    totalAmount: 0,
  });

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:3005/api/customers/${customerId}`);
        setCustomer(response.data);
      } catch (error) {
        console.error("Error fetching customer:", error);
      }
    };

    if (customerId) {
      fetchCustomer();
    }
  }, [customerId]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "advocateName" || name === "refNo" || name === "date") {
      setFormData({ ...formData, [name]: value });
    } else {
      const newItems = [...formData.items];
      newItems[index][name] = value;
      setFormData({ ...formData, items: newItems });
    }
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [
        ...formData.items,
        {
          srNo: formData.items.length + 1,
          particulars: "",
          quantity: "",
          amount: "",
        },
      ],
    });
  };

  const removeItem = (index) => {
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const calculateTotal = () => {
    const total = formData.items.reduce(
      (sum, item) => sum + (parseFloat(item.amount) || 0),
      0
    );
    setFormData({ ...formData, totalAmount: total });
  };

// Previous code remains the same until generatePDF function

const generatePDF = (billData) => {
  const doc = new jsPDF();

  // Header section
  doc.setFontSize(12);
  doc.text(`Ref: ${billData.refNo}`, 20, 20);
  doc.text(`Date: ${billData.date}`, 150, 20);

  doc.setFontSize(14);
  doc.text("To,", 20, 30);
  doc.text(`${customer.custName.toUpperCase()} (ADVOCATE)`, 20, 40);
  doc.text("Mumbai.", 20, 50);

  // Center the "BILL FOR" text
  const billForText = `BILL FOR ${new Date(billData.date).toLocaleString("default", {
    month: "long",
    year: "numeric",
  })}`;
  const textWidth = doc.getTextWidth(billForText);
  const pageWidth = doc.internal.pageSize.getWidth();
  const x = (pageWidth - textWidth) / 2; // Centering the text

  doc.setFontSize(16);
  doc.text(billForText, x, 70); // Use calculated x for centering

  doc.setFontSize(12);
  doc.text("Dear Sir,", 20, 80);

  // Table configuration with updated styling
  doc.autoTable({
    startY: 90,
    head: [["Sr. No.", "Particulars", "Qnty.", "Amount/Rs."]],
    body: billData.items.map((item) => [
      item.srNo,
      item.particulars,
      item.quantity,
      item.amount,
    ]),
    foot: [["", "", "TOTAL AMOUNT", billData.totalAmount]],
    columns: [
      { header: "Sr. No.", dataKey: "srNo" },
      { header: "Particulars", dataKey: "particulars" },
      { header: "Qnty.", dataKey: "quantity" },
      { header: "Amount/Rs.", dataKey: "amount" },
    ],
    columnStyles: {
      0: { cellWidth: 20 },
      1: { cellWidth: "auto" },
      2: { cellWidth: 30 },
      3: { cellWidth: 40 },
    },
    styles: {
      overflow: "linebreak",
      cellPadding: 2,
      fontSize: 10,
      lineWidth: 0.5, // Border width
      lineColor: [0, 0, 0], // Border color (black)
    },
    headStyles: {
      fillColor: false, // Remove background color
      textColor: 0, // Black text
      fontStyle: 'bold', // Bold text
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    footStyles: {
      fillColor: false, // Remove background color
      textColor: 0, // Black text
      fontStyle: 'bold', // Bold text
      lineWidth: 0.5,
      lineColor: [0, 0, 0],
    },
    theme: 'grid', // Add borders to all cells
  });

  const finalY = doc.lastAutoTable.finalY || 90;

  // Footer section
  doc.text("SATISH NAGESH ZORE", 20, finalY + 20);
  doc.text("My Bank Details:-", 20, finalY + 40);
  doc.text("Name : SATISH NAGESH ZORE", 20, finalY + 50);
  doc.text(
    "Bank: State Bank of India - M G Road Fort Branch",
    20,
    finalY + 60
  );
  doc.text("IFSC Code: SBIN0020634", 20, finalY + 70);
  doc.text("A/c. No. : 41766193187", 20, finalY + 80);

  doc.save(`advocate_bill_${billData.refNo}.pdf`);
};
// Rest of the component code remains the same
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Calculate total before submission if not already calculated
      if (formData.totalAmount === 0) {
        calculateTotal();
      }

      const formattedData = {
        ...formData,
        refNo: parseInt(formData.refNo, 10),
        date: formData.date,
        advocateId: customerId,
        items: formData.items.map((item) => ({
          srNo: item.srNo,
          particulars: item.particulars,
          quantity: parseInt(item.quantity, 10),
          amount: parseFloat(item.amount),
        })),
        totalAmount: parseFloat(formData.totalAmount),
      };

      // Submit to server
      const response = await axios.post(
        "http://localhost:3005/api/bills",
        formattedData
      );

      // Generate PDF after successful submission
      generatePDF(formattedData);

      alert("Bill saved successfully and PDF generated!");

      // Reset form
      setFormData({
        refNo: "",
        date: "",
        advocateId: customerId,
        items: [{ srNo: 1, particulars: "", quantity: "", amount: "" }],
        totalAmount: 0,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to submit form data";
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="advocate-billing-form">
      <h1 className="form-title">Advocate Billing Form</h1>
      {customer && <p className="customer-info">Customer: {customer.custName}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <input
            type="number"
            name="refNo"
            placeholder="Ref No."
            value={formData.refNo}
            onChange={(e) => handleInputChange(e)}
            className="form-input"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={(e) => handleInputChange(e)}
            className="form-input"
            required
          />
        </div>
        {formData.items.map((item, index) => (
          <div key={index} className="item-grid">
            <input
              type="text"
              name="particulars"
              placeholder="Particulars"
              value={item.particulars}
              onChange={(e) => handleInputChange(e, index)}
              className="form-input"
              required
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleInputChange(e, index)}
              className="form-input"
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={item.amount}
              onChange={(e) => handleInputChange(e, index)}
              className="form-input"
              required
            />
            <button
              type="button"
              onClick={() => removeItem(index)}
              className="button button-red"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="flex-between">
          <button
            type="button"
            onClick={addItem}
            className="button button-green"
          >
            Add Item
          </button>
          <button
            type="button"
            onClick={calculateTotal}
            className="button button-blue"
          >
            Calculate Total
          </button>
        </div>
        <div className="text-right">
          <span className="font-bold">
            Total Amount: ₹{formData.totalAmount}
          </span>
        </div>
        <button 
          type="submit" 
          className="download-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              Submit and Download PDF <FaDownload className="ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}