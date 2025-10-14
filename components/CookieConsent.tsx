"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Settings } from "lucide-react";
import Link from "next/link";

type CookieCategory = {
  id: string;
  name: string;
  description: string;
  required: boolean;
};

const cookieCategories: CookieCategory[] = [
  {
    id: "necessary",
    name: "Strictly Necessary",
    description:
      "These cookies are essential for the website to function properly and cannot be disabled.",
    required: true,
  },
  {
    id: "functional",
    name: "Functional",
    description:
      "These cookies enable personalized features and functionality.",
    required: false,
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "These cookies help us understand how visitors interact with our website.",
    required: false,
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "These cookies are used to track visitors across websites to display relevant advertisements.",
    required: false,
  },
];

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    // Check if user has already made cookie choices
    const consentGiven = localStorage.getItem("cookieConsentGiven");

    if (!consentGiven) {
      setShowBanner(true);

      // Initialize with only necessary cookies enabled
      const initialPreferences = cookieCategories.reduce((acc, category) => {
        acc[category.id] = category.required;
        return acc;
      }, {} as Record<string, boolean>);

      setCookiePreferences(initialPreferences);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(
          localStorage.getItem("cookiePreferences") || "{}"
        );
        setCookiePreferences(savedPreferences);
      } catch (e) {
        console.error("Error parsing cookie preferences", e);
      }
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = cookieCategories.reduce((acc, category) => {
      acc[category.id] = true;
      return acc;
    }, {} as Record<string, boolean>);

    setCookiePreferences(allAccepted);
    saveConsent(allAccepted);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = cookieCategories.reduce((acc, category) => {
      acc[category.id] = category.required;
      return acc;
    }, {} as Record<string, boolean>);

    setCookiePreferences(necessaryOnly);
    saveConsent(necessaryOnly);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    saveConsent(cookiePreferences);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const saveConsent = (preferences: Record<string, boolean>) => {
    localStorage.setItem("cookieConsentGiven", "true");
    localStorage.setItem("cookiePreferences", JSON.stringify(preferences));

    // Here you would implement the actual cookie setting/removing logic
    // based on the user's preferences
    applyConsent(preferences);
  };

  const applyConsent = (preferences: Record<string, boolean>) => {
    // Example implementation - you would replace this with actual cookie management
    if (preferences.analytics) {
      // Initialize analytics
      console.log("Analytics cookies enabled");
    } else {
      // Disable analytics
      console.log("Analytics cookies disabled");
    }

    if (preferences.marketing) {
      // Initialize marketing
      console.log("Marketing cookies enabled");
    } else {
      // Disable marketing
      console.log("Marketing cookies disabled");
    }
  };

  const handleToggleCategory = (categoryId: string) => {
    if (cookieCategories.find((c) => c.id === categoryId)?.required) {
      return; // Can't toggle required categories
    }

    setCookiePreferences((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };

  const handleOpenPreferences = () => {
    setShowPreferences(true);
  };

  if (!showBanner && !showPreferences) {
    return null;
  }
  const primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR || "#2A29FF"; // fallback color

  return (
    <>
      {/* Cookie Banner */}
      {showBanner && !showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#141413] border-t border-white/10 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">
                  We value your privacy
                </h3>
                <p className="text-white/70 text-sm">
                  We use cookies to enhance your browsing experience, serve
                  personalized ads or content, and analyze our traffic. By
                  clicking "Accept All", you consent to our use of cookies.
                  <Link
                    href="/legal/privacy"
                    className="text-primary hover:underline ml-1"
                  >
                    Read our Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  className="bg-white text-finance-950 hover:bg-white/90"
                  size="sm"
                  onClick={handleOpenPreferences}
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Preferences
                </Button>
                <Button
                  className="bg-white text-finance-950 hover:bg-white/90"
                  size="sm"
                  onClick={handleAcceptNecessary}
                >
                  Necessary Only
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white"
                  onClick={handleAcceptAll}
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#141413] border border-white/10 rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">
                Cookie Preferences
              </h3>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white"
                onClick={() => setShowPreferences(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-4 overflow-y-auto max-h-[60vh]">
              <p className="text-white/70 mb-6">
                We use cookies to ensure the website functions properly, to
                personalize your experience, analyze our traffic, and for
                marketing purposes. Read our
                <Link
                  href="/legal/privacy"
                  className="text-primary hover:underline mx-1"
                >
                  Privacy Policy
                </Link>
                and
                <Link
                  href="/legal/cookies"
                  className="text-primary hover:underline mx-1"
                >
                  Cookie Policy
                </Link>
                for more information.
              </p>

              <div className="space-y-4">
                {cookieCategories.map((category) => (
                  <div
                    key={category.id}
                    className={`p-4 rounded-lg border ${
                      cookiePreferences[category.id]
                        ? "border-primary/30 bg-primary/5"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <h4 className="font-medium text-white">
                          {category.name}
                        </h4>
                        {category.required && (
                          <span className="ml-2 text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded">
                            Required
                          </span>
                        )}
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={cookiePreferences[category.id] || false}
                          onChange={() => handleToggleCategory(category.id)}
                          disabled={category.required}
                        />
                        <div
                          className={`w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer 
                          ${
                            cookiePreferences[category.id]
                              ? "peer-checked:after:translate-x-full peer-checked:bg-primary"
                              : ""
                          }
                          after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                          after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all
                          ${
                            category.required
                              ? "opacity-60"
                              : "hover:bg-white/20"
                          }`}
                        ></div>
                      </label>
                    </div>
                    <p className="text-sm text-white/70">
                      {category.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 p-4 border-t border-white/10">
              <Button
                className="bg-white text-finance-950 hover:bg-white/90"
                onClick={handleAcceptNecessary}
              >
                Necessary Only
              </Button>
              <Button
                className="bg-white text-finance-950 hover:bg-white/90"
                onClick={handleAcceptAll}
              >
                Accept All
              </Button>
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={handleSavePreferences}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
