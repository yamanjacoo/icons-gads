"use client";

import { X, ShoppingCart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { IconItem } from "./IconCard";
import Image from "next/image";

export default function PaymentLogos() {
  return (
    <div className="inline-flex justify-start items-center gap-1">
      <div className="w-6 h-4 relative overflow-hidden">
        <div className="w-6 h-4 left-[0.25px] top-[0.25px] absolute bg-white outline outline-[0.50px] outline-offset-[-0.25px] outline-black/20" />
        <div className="w-5 h-1.5 left-[1px] top-[5px] absolute bg-[#1434cb]" />
      </div>
      <div className="w-6 h-4 relative overflow-hidden">
        <div className="w-6 h-4 left-0 top-0 absolute overflow-hidden">
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4437_1319)">
                <path
                  d="M22 0.539062H2C0.89543 0.539062 0 1.43449 0 2.53906V14.5391C0 15.6436 0.89543 16.5391 2 16.5391H22C23.1046 16.5391 24 15.6436 24 14.5391V2.53906C24 1.43449 23.1046 0.539062 22 0.539062Z"
                  fill="#252525"
                />
                <path
                  d="M9 13.5391C11.7614 13.5391 14 11.3005 14 8.53906C14 5.77764 11.7614 3.53906 9 3.53906C6.23858 3.53906 4 5.77764 4 8.53906C4 11.3005 6.23858 13.5391 9 13.5391Z"
                  fill="#EB001B"
                />
                <path
                  d="M15 13.5391C17.7614 13.5391 20 11.3005 20 8.53906C20 5.77764 17.7614 3.53906 15 3.53906C12.2386 3.53906 10 5.77764 10 8.53906C10 11.3005 12.2386 13.5391 15 13.5391Z"
                  fill="#F79E1B"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4.53906C13.2144 5.45127 14 6.90361 14 8.53943C14 10.1752 13.2144 11.6276 12 12.5398C10.7856 11.6276 10 10.1752 10 8.53943C10 6.90361 10.7856 5.45127 12 4.53906Z"
                  fill="#FF5F00"
                />
              </g>
              <defs>
                <clipPath id="clip0_4437_1319">
                  <rect
                    width="24"
                    height="16"
                    fill="white"
                    transform="translate(0 0.539062)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-6 h-4 relative overflow-hidden">
        <div className="w-6 h-4 left-0 top-0 absolute overflow-hidden">
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4437_1327)">
                <path
                  d="M22 0.539062H2C0.89543 0.539062 0 1.43449 0 2.53906V14.5391C0 15.6436 0.89543 16.5391 2 16.5391H22C23.1046 16.5391 24 15.6436 24 14.5391V2.53906C24 1.43449 23.1046 0.539062 22 0.539062Z"
                  fill="#016FD0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7637 13.9319V8.23047L23.9112 8.23957V9.81447L22.7383 11.0679L23.9112 12.3327V13.9411H22.0386L21.0434 12.8429L20.0553 13.9452L13.7637 13.9319Z"
                  fill="#FFFFFE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.4414 13.3083V8.85938H18.2137V9.88426H15.6628V10.5799H18.1529V11.5878H15.6628V12.2711H18.2137V13.3083H14.4414Z"
                  fill="#016FD0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.1954 13.3082L20.2827 11.0812L18.1953 8.85938H19.811L21.0865 10.2694L22.3656 8.85938H23.9117V8.89438L21.8689 11.0812L23.9117 13.2451V13.3082H22.35L21.0519 11.884L19.7671 13.3082H18.1954Z"
                  fill="#016FD0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2369 3.17188H16.6829L17.5421 5.12273V3.17188H20.5619L21.0827 4.63344L21.6052 3.17188H23.9111V8.87327H11.7246L14.2369 3.17188Z"
                  fill="#FFFFFE"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.7006 3.78906L12.7266 8.23423H14.0805L14.4529 7.34407H16.4708L16.843 8.23423H18.2306L16.2648 3.78906H14.7006ZM14.8702 6.3465L15.4622 4.93143L16.0538 6.3465H14.8702Z"
                  fill="#016FD0"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.2129 8.23415V3.78906L20.116 3.7956L21.0953 6.52833L22.0809 3.78906H23.9125V8.23415L22.7339 8.24458V5.19123L21.6213 8.23415H20.5455L19.4099 5.1808V8.23415H18.2129Z"
                  fill="#016FD0"
                />
              </g>
              <defs>
                <clipPath id="clip0_4437_1327">
                  <rect
                    width="24"
                    height="16"
                    fill="white"
                    transform="translate(0 0.539062)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="w-6 h-4 relative overflow-hidden">
        <div className="w-6 h-4 left-0 top-0 absolute overflow-hidden">
          <div data-svg-wrapper className="left-0 top-0 absolute">
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4437_1339)">
                <path
                  d="M21.9972 16.289L21.9994 16.289C22.9545 16.2972 23.7381 15.5163 23.75 14.5432L23.75 2.54536C23.7462 2.07475 23.5589 1.62523 23.2297 1.29586C22.9014 0.967331 22.4589 0.785211 21.9972 0.789133L2.00064 0.789124C1.54109 0.785211 1.09858 0.967331 0.770279 1.29586C0.441145 1.62523 0.253838 2.07475 0.250008 2.54333L0.25 14.5328C0.253838 15.0034 0.441145 15.4529 0.770279 15.7823C1.09858 16.1108 1.54109 16.2929 2.00277 16.289H21.9972ZM21.9962 16.789L21.9951 16.789L21.9972 16.789H21.9962Z"
                  fill="white"
                  stroke="black"
                  stroke-opacity="0.2"
                  stroke-width="0.5"
                />
                <path
                  d="M10.0016 2.59022V2.57422H14.0016V2.59022C17.137 2.81966 19.5637 5.4304 19.5637 8.57422C19.5637 11.718 17.137 14.3288 14.0016 14.5582V14.5742H10.0016V14.5582C6.86613 14.3288 4.43945 11.718 4.43945 8.57422C4.43945 5.4304 6.86613 2.81966 10.0016 2.59022Z"
                  fill="#0165AC"
                />
                <path
                  d="M11.6012 11.967C13.0365 11.4567 13.9952 10.0983 13.9952 8.575C13.9952 7.0517 13.0365 5.69329 11.6012 5.183V11.967ZM9.20117 5.183C7.76589 5.69329 6.80713 7.0517 6.80713 8.575C6.80713 10.0983 7.76589 11.4567 9.20117 11.967V5.183ZM10.4012 13.775C7.52929 13.775 5.20117 11.4469 5.20117 8.575C5.20117 5.70312 7.52929 3.375 10.4012 3.375C13.2731 3.375 15.6012 5.70312 15.6012 8.575C15.6012 11.4469 13.2731 13.775 10.4012 13.775Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4437_1339">
                  <rect
                    width="24"
                    height="16"
                    fill="white"
                    transform="translate(0 0.539062)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
