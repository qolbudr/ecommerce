'use client';

import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { useModalStore } from "../store/modal.store";

interface ModalProps {
  identifier: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  cta?: React.ReactNode[];
}

export const ModalConfirmation = (props: ModalProps) => {
  const modal = useModalStore();
  const [show, setShow] = useState(modal.isOpen(props.identifier));

  useEffect(() => {
    if (modal.isOpen(props.identifier)) {
      setShow(true);
    } else {
      const timer = setTimeout(() => setShow(false), 200);
      return () => clearTimeout(timer);
    }
  }, [modal.isOpen(props.identifier)]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 font-poppins bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[496px] shadow-lg overflow-hidden">
        <div className="relative">
          <svg width="496" height="86" viewBox="0 0 496 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="247.5" cy="-33" rx="578.5" ry="119" fill="#41A0E4" />
          </svg>
          <div className="absolute size-[75px] bg-red-primary rounded-full -bottom-[35px] left-[calc(50%-37.5px)] flex items-center justify-center">
            <Icon icon="humbleicons:switch-on" width={40} height={40} className="text-white"/>
          </div>
        </div>

        {props.children}

        <div className="px-6 py-4 border-t border-neutral-200 flex text-m font-semibold justify-end gap-3">
          {
            props.cta && (
              props.cta.map((action, index) => (
                <div key={index}>{action}</div>
              ))
            )
          }
        </div>
      </div>
    </div>
  );
};