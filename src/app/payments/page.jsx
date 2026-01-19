"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllPayments } from "../utils/api";

const formatDate = (isoString) => {
  if (!isoString) return "N/A";
  const [date, time] = isoString.split("T");
  const shortTime = time ? time.replace("Z", "").slice(0, 8) : "";
  return shortTime ? `${date} ${shortTime} UTC` : date;
};

const Payments = () => {
  const { data: payments = [], isPending: isPaymentLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayments,
    staleTime: 5000,
    retry: 2,
    enabled: true,
  });

  if (isPaymentLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="glass-card p-8">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4 text-xl">Loading payments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold gradient-text mb-4">Payments</h1>
        <p className="text-xl opacity-90">
          {payments.length} transactions recorded
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="glass-card p-6 overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-left text-violet-100/80">
              <th>#</th>
              <th>Transaction</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment.transactionId} className="hover">
                <td>{index + 1}</td>
                <td className="font-mono">{payment.transactionId}</td>
                <td>${payment.amount}</td>
                <td>{formatDate(payment.transactionDate)}</td>
                <td>
                  <span className="badge badge-success">{payment.status}</span>
                </td>
                <td className="uppercase">{payment.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {payments.length === 0 && (
        <div className="text-center py-16">
          <p className="text-2xl opacity-75">No transactions found.</p>
        </div>
      )}
    </div>
  );
};

export default Payments;
